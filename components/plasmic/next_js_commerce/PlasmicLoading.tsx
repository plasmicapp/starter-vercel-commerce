// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g4Ez5Lq65bFwpS9M8VgRuA
// Component: 4Km3QgFQM0M3rM
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: RYN9c2WQmTlJA/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: u4JDWkLumjaUpM/codeComponent
import NavItem from "../../NavItem"; // plasmic-import: pflHqo5_0S051/component
import { CategoryLink } from "@plasmicpkgs/commerce"; // plasmic-import: ujLcAUEA7LtaTl/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: k5ikEyqhoXasz6/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_next_js_commerce.module.css"; // plasmic-import: g4Ez5Lq65bFwpS9M8VgRuA/projectcss
import sty from "./PlasmicLoading.module.css"; // plasmic-import: 4Km3QgFQM0M3rM/css

export type PlasmicLoading__VariantMembers = {};

export type PlasmicLoading__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoading__VariantsArgs;
export const PlasmicLoading__VariantProps = new Array<VariantPropType>();

export type PlasmicLoading__ArgsType = {};
type ArgPropType = keyof PlasmicLoading__ArgsType;
export const PlasmicLoading__ArgProps = new Array<ArgPropType>();

export type PlasmicLoading__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
  categoryCollection?: p.Flex<typeof CategoryCollection>;
  categoryLink?: p.Flex<typeof CategoryLink>;
  categoryField?: p.Flex<typeof CategoryField>;
};

export interface DefaultLoadingProps {
  className?: string;
}

function PlasmicLoading__RenderFunc(props: {
  variants: PlasmicLoading__VariantsArgs;
  args: PlasmicLoading__ArgsType;
  overrides: PlasmicLoading__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <Navbar
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        className={classNames("__wab_instance", sty.navbar)}
      />

      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column___4C6Ev)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__myxzv)}
            >
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__gb8W9
                )}
              >
                {"All Categories"}
              </h4>

              <CategoryCollection
                data-plasmic-name={"categoryCollection"}
                data-plasmic-override={overrides.categoryCollection}
                className={classNames("__wab_instance", sty.categoryCollection)}
                emptyMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pH0Xm
                    )}
                  >
                    {"No collection found!"}
                  </div>
                }
                loadingMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8AulE
                    )}
                  >
                    {"Loading..."}
                  </div>
                }
              >
                <NavItem
                  className={classNames("__wab_instance", sty.navItem__r0RaU)}
                >
                  <CategoryLink
                    data-plasmic-name={"categoryLink"}
                    data-plasmic-override={overrides.categoryLink}
                    className={classNames("__wab_instance", sty.categoryLink)}
                    linkDest={"/search/{slug}" as const}
                  >
                    <CategoryField
                      data-plasmic-name={"categoryField"}
                      data-plasmic-override={overrides.categoryField}
                      className={classNames(
                        "__wab_instance",
                        sty.categoryField
                      )}
                      field={"name" as const}
                    />
                  </CategoryLink>
                </NavItem>
              </CategoryCollection>
            </p.Stack>
          ) : null}
        </p.Stack>

        <div className={classNames(projectcss.all, sty.column__mo08K)} />

        <div className={classNames(projectcss.all, sty.column__eqkK7)}>
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6GM2V)}
            >
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__vP77G
                )}
              >
                {"Relevance"}
              </h4>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kgYe5)}
              >
                <NavItem
                  className={classNames("__wab_instance", sty.navItem__b1Ele)}
                  queryParam={"sort=trending-desc" as const}
                >
                  {"Trending"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem__tdKt7)}
                  queryParam={"sort=latest-desc" as const}
                >
                  {"Latest Arrivals"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem__dqAhO)}
                  queryParam={"sort=price-asc" as const}
                >
                  {"Price: Low to High"}
                </NavItem>

                <NavItem
                  className={classNames("__wab_instance", sty.navItem___2AxP)}
                  queryParam={"sort=price-desc" as const}
                >
                  {"Price: High to Low"}
                </NavItem>
              </p.Stack>
            </p.Stack>
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "columns",
    "categoryCollection",
    "categoryLink",
    "categoryField"
  ],
  navbar: ["navbar"],
  columns: ["columns", "categoryCollection", "categoryLink", "categoryField"],
  categoryCollection: ["categoryCollection", "categoryLink", "categoryField"],
  categoryLink: ["categoryLink", "categoryField"],
  categoryField: ["categoryField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  columns: "div";
  categoryCollection: typeof CategoryCollection;
  categoryLink: typeof CategoryLink;
  categoryField: typeof CategoryField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoading__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoading__VariantsArgs;
    args?: PlasmicLoading__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoading__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoading__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLoading__ArgProps,
      internalVariantPropNames: PlasmicLoading__VariantProps
    });

    return PlasmicLoading__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoading";
  } else {
    func.displayName = `PlasmicLoading.${nodeName}`;
  }
  return func;
}

export const PlasmicLoading = Object.assign(
  // Top-level PlasmicLoading renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryLink: makeNodeComponent("categoryLink"),
    categoryField: makeNodeComponent("categoryField"),

    // Metadata about props expected for PlasmicLoading
    internalVariantProps: PlasmicLoading__VariantProps,
    internalArgProps: PlasmicLoading__ArgProps
  }
);

export default PlasmicLoading;
/* prettier-ignore-end */