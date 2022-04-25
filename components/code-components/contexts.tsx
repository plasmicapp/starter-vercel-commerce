import React, { useContext } from "react";
import { Product, ProductPlaceholder } from "@plasmicpkgs/commerce";
import { useForm, FormProvider } from "react-hook-form";

export const ProductContext = React.createContext<Product | undefined | null>(undefined);

export function ProductProvider({
  product,
  children
}: {
  product: Product,
  children: React.ReactNode
}) {
  const methods = useForm();
  return (
    <ProductContext.Provider value={product} key={product.id}>
      <FormProvider {...methods}>
        { children }
      </FormProvider>
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const product = useContext(ProductContext);
  return product ?? ProductPlaceholder;
}

export const FormContext = React.createContext<any>(undefined);

