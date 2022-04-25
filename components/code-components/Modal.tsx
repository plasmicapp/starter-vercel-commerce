import React from "react";
import { ProductContext } from "./contexts";
import { useProduct } from "@plasmicpkgs/commerce";
import { Modal as AntdModal } from "antd";

interface ModalProps {
  className: string;
  children: React.ReactNode;
  isOpen?: boolean;
  title?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { className, children, isOpen, title } = props;

  return (
    <AntdModal visible={isOpen} title={title}>
      <h1>xas</h1>
    </AntdModal>
  )
}