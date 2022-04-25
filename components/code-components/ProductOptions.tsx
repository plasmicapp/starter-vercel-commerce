import { ProductTypes } from "@plasmicpkgs/commerce";
import { repeatedElement } from "@plasmicapp/host";
import React, { Dispatch, SetStateAction } from "react";
import { useFormContext, useForm, UseFormSetValue, FieldValues } from "react-hook-form";
import { useProduct } from "./contexts";
import registerComponent from "@plasmicapp/host/registerComponent";

export type SelectedOptions = Record<string, string | null>

export function getProductVariant(product: ProductTypes.Product, opts: SelectedOptions) {
  const variant = product.variants.find((variant) => {
    return Object.entries(opts).every(([key, value]) =>
      variant.options.find((option) => {
        if (
          option.__typename === 'MultipleChoiceOption' &&
          option.displayName.toLowerCase() === key.toLowerCase()
        ) {
          return option.values.find((v) => v.label.toLowerCase() === value)
        }
      })
    )
  })
  return variant
}

export function selectDefaultOptionFromProduct(
  product: ProductTypes.Product,
  updater: Dispatch<SetStateAction<SelectedOptions>>,
  formSetValue: UseFormSetValue<FieldValues>
) {
  // Selects the default option
  product.variants[0]?.options?.forEach((v) => {
    updater((choices) => ({
      ...choices,
      [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
    }));
  })
}


interface ProductOptionWithSelectedOptions {
  option: ProductTypes.ProductOption,
  selectedOptions: SelectedOptions,
  setSelectedOptions: any,
}
const ProductOptionContext = React.createContext<ProductOptionWithSelectedOptions | undefined>(undefined);
const ProductOptionValueContext = React.createContext<string | undefined>(undefined);

interface ProductOptionsProps {
  className: string;
  children?: React.ReactNode;
}

export function ProductOptions(props: ProductOptionsProps) {
  const { 
    className, 
    children,
  } = props;

  const [selectedOptions, setSelectedOptions] = React.useState<SelectedOptions>({})

  const product = useProduct();
  const formContext = useFormContext();
  const _form = useForm();
  const form = formContext ?? _form;

  React.useEffect(() => {
    if (product) {
      selectDefaultOptionFromProduct(product, setSelectedOptions, form.setValue)
    }
  }, [product])

  React.useEffect(() => {
    const productVariant = getProductVariant(product, selectedOptions);
    form.setValue("variantId", productVariant?.id)
  }, [selectedOptions])
  if (!product) {
    return <p>No product was selected!</p>
  }

  return (
    <div className={className}>
      {product.options.map((option, i) => 
        <ProductOptionContext.Provider value={{option, selectedOptions, setSelectedOptions}} key={option.id}>
          {repeatedElement(i === 0, children)}
        </ProductOptionContext.Provider>
      )}
    </div>
  )
}

interface ProductOptionsDisplayNameProps {
  className: string;
}

export function ProductOptionsDisplayName(props: ProductOptionsDisplayNameProps) {
  const { className } = props;

  const optionCtx = React.useContext(ProductOptionContext);

  if (!optionCtx) {
    return <p>A ProductOptions component is expected as parent!</p>
  }
  const value = optionCtx.option.displayName;
  return <span className={className}>{value.slice(0, 1).toUpperCase() + value.slice(1)}</span>
}

interface ProductOptionsValueLabelProps {
  className: string;
}

export function ProductOptionsValueLabel(props: ProductOptionsValueLabelProps) {
  const { className } = props;

  const value = React.useContext(ProductOptionValueContext);
  if (!value) {
    return <p>A ProductOptionsValues component is expected as parent!</p>
  }

  return <span className={className}>{value}</span>
}


interface ProductOptionsValues {
  className: string;
  columns?: number;
  columnGap?: number;
  rowGap?: number;
  textOption: React.ReactElement;
  activeTextOption: React.ReactElement;
  colorOption: React.ReactElement;
  activeColorOption: React.ReactElement;
  editSlots?: boolean;
}

export function ProductOptionsValues(props: ProductOptionsValues) {
  const { 
    className,
    columns,
    columnGap,
    rowGap,
    textOption,
    activeTextOption,
    colorOption,
    activeColorOption,
    editSlots
  } = props;

  const optionCtx = React.useContext(ProductOptionContext);
  const formContext = useFormContext();
  const _form = useForm();
  const form = formContext ?? _form;
  
  if (!optionCtx) {
    return <p>A ProductOptions components is expected as parent!</p>
  }

  const option = optionCtx.option;
  const active = optionCtx.selectedOptions[option.displayName.toLowerCase()];
  if (editSlots) {
    return (
      <>
        <ProductOptionValueContext.Provider value={"XXX"}>
          <p>Color Option {colorOption}</p>
          <p>Active Color Option {activeColorOption}</p>
          <p>Text Option {textOption}</p>
          <p>Active Text Option {activeTextOption}</p>
        </ProductOptionValueContext.Provider>
      </>
    )
  }
  const setSelectedOptions = optionCtx.setSelectedOptions;
  const selectedOptions = optionCtx.selectedOptions;

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        columnGap: `${columnGap}px`,
        rowGap: `${rowGap}px`,
      }}
    >
      {option.values.map((v, i) => {
        if (v.hexColors) {
          return repeatedElement(i === 0, 
            React.cloneElement(
              v.label.toLowerCase() === active ? activeColorOption : colorOption,
              {
                key: i,
                style: {backgroundColor: v.hexColors},
                onClick: () => {
                  setSelectedOptions((selectedOptions: any) => ({
                    ...selectedOptions,
                    [option.displayName.toLowerCase()]: v.label.toLowerCase(),
                  }))
                },
              }
            )
          )
        } else {
          return <ProductOptionValueContext.Provider value={v.label}>
            {repeatedElement(i === 0,
              React.cloneElement(
                v.label.toLowerCase() === active ? activeTextOption : textOption,
                {
                  key: i,
                  onClick: () => {
                    setSelectedOptions((selectedOptions: any) => ({
                        ...selectedOptions,
                        [option.displayName.toLowerCase()]: v.label.toLowerCase(),
                    }))
                  },
                }
              )
            )}
          </ProductOptionValueContext.Provider>
        }
      })}      
    </div>
  )
}

export const registerAllProductOptions = () => {
  registerComponent(ProductOptions, {
    name: "ProductOptions",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "ProductOptionsDisplayName"
          },
          {
            type: "box",
            children: [
              {
                type: "component",
                name: "ProductOptionsValues"
              }
              
            ]
          }
        ]
      },
      useProductPlaceholder: "boolean",
  
    },
    importPath: "./components/code-components/ProductOptions",
    importName: "ProductOptions"
  });
  
  registerComponent(ProductOptionsDisplayName, {
    name: "ProductOptionsDisplayName", 
    props: {},
    importPath: "./components/code-components/ProductOptions",
    importName: "ProductOptionsDisplayName"
  });
  
  registerComponent(ProductOptionsValueLabel, {
    name: "ProductOptionsValueLabel", 
    props: {},
    importPath: "./components/code-components/ProductOptions",
    importName: "ProductOptionsValueLabel"
  })
  
  registerComponent(ProductOptionsValues, {
    name: "ProductOptionsValues",
    props: {
      columns: {
        type: "number",
        defaultValue: 6,
      },
      columnGap: {
        type: "number",
        defaultValue: 16,
      },
      rowGap: {
        type: "number",
        defaultValue: 16,
      },
      textOption: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              width: "50px",
              height: "50px",
              borderWidth: "1px",
              borderColor: "#ccc",
            },
            children: [
              {
                type: "component",
                name: "ProductOptionsValueLabel",
                styles: {
                  color: "white"
                }
              }
            ]
          }
        ]
      },
      activeTextOption: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              width: "50px",
              height: "50px",
              borderWidth: "1px",
              borderColor: "#ccc",
            },
            children: [
              {
                type: "component",
                name: "ProductOptionsValueLabel",
                styles: {
                  color: "white"
                }
              }
            ]
          }
        ]
      },
      colorOption: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              width: "50px",
              height: "50px",
              borderWidth: "1px",
              borderColor: "#ccc",
            }
          }
        ]
      },
      activeColorOption: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              width: "50px",
              height: "50px",
              borderWidth: "1px",
              borderColor: "#ccc",
            }
          }
        ]
      },
      editSlots: "boolean"
    },
    importPath: "./components/code-components/ProductOptions",
    importName: "ProductOptionsValues"
  });
}