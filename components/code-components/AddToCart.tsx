
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import React from "react";
import { useProduct } from "./contexts";
import { useFormContext, Controller } from "react-hook-form";
import { useAddItem } from "@plasmicpkgs/commerce";

interface AddToCartProps {
  children?: React.ReactNode;
}

export default function AddToCart(props: AddToCartProps) {
  const { children } = props;

  const product = useProduct();
  const form = useFormContext();
  const addItem = useAddItem();

  const addToCart = async() => {
    if (product) {
      const variantId = form.getValues()["variantId"] ?? product.variants[0].id;
      await addItem({
        productId: product.id,
        variantId: variantId,
        quantity: 1
      })
    }
  }

  return (
    React.isValidElement(children)
      ? React.cloneElement(children, {
          onClick: (e: MouseEvent) => {
            if (children.props.onClick && typeof children.props.onClick === "function") {
              children.props.onClick(e);
            }
            addToCart();
          }
        })
      : null
  )
}


export const registerAddToCart = () =>
  registerComponent(AddToCart, {
    name: "AddToCart",
    displayName: "Add To Cart",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "button",
            value: "Add To Cart"
          }
        ]
      }
    },
    importPath: "./components/code-components/AddToCart",
    isDefaultExport: true,
  });