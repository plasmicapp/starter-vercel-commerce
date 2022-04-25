// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g4Ez5Lq65bFwpS9M8VgRuA
import * as React from "react";
import { ShopifyProviderComponent } from "@plasmicpkgs/commerce-shopify"; // plasmic-import: ecVu7XoFDWFGLZ/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  shopifyProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof ShopifyProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, shopifyProviderComponentProps } = props;

  return (
    <ShopifyProviderComponent
      {...shopifyProviderComponentProps}
      accessToken={
        shopifyProviderComponentProps &&
        "accessToken" in shopifyProviderComponentProps
          ? shopifyProviderComponentProps.accessToken!
          : ("ef7d41c7bf7e1c214074d0d3047bcd7b" as const)
      }
      storeDomain={
        shopifyProviderComponentProps &&
        "storeDomain" in shopifyProviderComponentProps
          ? shopifyProviderComponentProps.storeDomain!
          : ("next-js-store.myshopify.com" as const)
      }
    >
      {children}
    </ShopifyProviderComponent>
  );
}
