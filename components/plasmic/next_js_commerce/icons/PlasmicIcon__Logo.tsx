// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIcon(props: LogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg plasmic_default__all plasmic_default__svg NavBar__logo__vkYhs"
      )}
      role={"img"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"100%"} height={"100%"} rx={"16"} fill={"#fff"}></rect>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.648 10.13l-1.77-3.104L7.03 22.55h3.498l7.12-12.42zm2.232 3.916l-1.77 3.152 1.284 2.253h-2.549l-1.74 3.099h9.622l-4.847-8.504z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
