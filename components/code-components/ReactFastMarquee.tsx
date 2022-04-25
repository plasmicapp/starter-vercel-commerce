import Marquee from "react-fast-marquee";
import React from "react";
import { useProduct } from "./contexts";
import registerComponent from "@plasmicapp/host/registerComponent";

interface ReactFastMarqueeProps {
  className: string;
  children: React.ReactNode;
  gradient?: boolean;
  speed?: number;
  customStyle?: object;
}

export default function ReactFastMarquee(props: ReactFastMarqueeProps) {
  const { className, children, gradient, speed, customStyle } = props;
  return (
    <Marquee 
      className={className} 
      gradient={gradient}
      speed={speed}
      style={customStyle}
    >
      {children}
    </Marquee>
  );
};

export const registerReactFastMarquee = () =>
  registerComponent(ReactFastMarquee, {
    name: "ReactFastMarquee",
    props: {
      children: "slot",
      gradient: {
        type: "boolean",
        defaultValue: true
      },
      speed: "number",
      customStyle: "object"
    },
    importPath: "./components/code-components/ReactFastMarquee",
    isDefaultExport: true,
  });