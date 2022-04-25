// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CartIcon(props: CartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      viewBox={"0 0 20 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 1L1 5v14a2 2 0 002 2h14a2 2 0 002-2V5l-3-4H4zM1 5h18m-5 4a4 4 0 11-8 0"
        }
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CartIcon;
/* prettier-ignore-end */
