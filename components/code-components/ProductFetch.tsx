import React from "react";
import { ProductContext } from "./contexts";
import { useProduct } from "@plasmicpkgs/commerce";
import registerComponent from "@plasmicapp/host/registerComponent";

interface ProductFetchProps {
  className: string;
  children: React.ReactNode;
  id?: string;
  loadingMessage?: React.ReactNode;
}

export default function ProductFetch(props: ProductFetchProps) {
  const { className, children, id, loadingMessage } = props;

  const { data: product, error, isLoading } = useProduct({id});

  if (isLoading) {
    return React.isValidElement(loadingMessage)
      ? loadingMessage
      : null;
  }

  if (error) {
    throw new Error(error.message);
  }

  return <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
}

export const registerProductFetch = () =>
  registerComponent(ProductFetch, {
    name: "ProductFetch",
    props: {
      id: "string",
      loadingMessage: "slot",
      children: "slot"
    },
    importPath: "./components/code-components/ProductFetch",
    isDefaultExport: true,
  })