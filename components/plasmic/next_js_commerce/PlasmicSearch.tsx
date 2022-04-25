// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g4Ez5Lq65bFwpS9M8VgRuA
// Component: YxsDSYFu6tZaWP
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
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: ny07p45F84c_/codeComponent
import NavItem from "../../NavItem"; // plasmic-import: pflHqo5_0S051/component
import { CategoryLink } from "@plasmicpkgs/commerce"; // plasmic-import: fA0CIfqZOwRH/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: hzqiq--xdG5T/codeComponent
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import ProductCard from "../../ProductCard"; // plasmic-import: FvHW5jBcyeTo6/component
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_next_js_commerce.module.css"; // plasmic-import: g4Ez5Lq65bFwpS9M8VgRuA/projectcss
import sty from "./PlasmicSearch.module.css"; // plasmic-import: YxsDSYFu6tZaWP/css

export type PlasmicSearch__VariantMembers = {};

export type PlasmicSearch__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearch__VariantsArgs;
export const PlasmicSearch__VariantProps = new Array<VariantPropType>();

export type PlasmicSearch__ArgsType = {};
type ArgPropType = keyof PlasmicSearch__ArgsType;
export const PlasmicSearch__ArgProps = new Array<ArgPropType>();

export type PlasmicSearch__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
  categoryCollection?: p.Flex<typeof CategoryCollection>;
  categoryLink?: p.Flex<typeof CategoryLink>;
  categoryField?: p.Flex<typeof CategoryField>;
  productCollection?: p.Flex<typeof ProductCollection>;
  productCard?: p.Flex<typeof ProductCard>;
  productTextField?: p.Flex<typeof ProductTextField>;
};

export interface DefaultSearchProps {}

function PlasmicSearch__RenderFunc(props: {
  variants: PlasmicSearch__VariantsArgs;
  args: PlasmicSearch__ArgsType;
  overrides: PlasmicSearch__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
              className={classNames(projectcss.all, sty.column___2Kp2D)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__tjTae)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__cvww1
                    )}
                  >
                    {"All Categories"}
                  </h4>

                  <CategoryCollection
                    data-plasmic-name={"categoryCollection"}
                    data-plasmic-override={overrides.categoryCollection}
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection
                    )}
                    emptyMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qKq8Q
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
                          sty.text__sIu6T
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                  >
                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem__n8G2
                      )}
                    >
                      <CategoryLink
                        data-plasmic-name={"categoryLink"}
                        data-plasmic-override={overrides.categoryLink}
                        className={classNames(
                          "__wab_instance",
                          sty.categoryLink
                        )}
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

            <div className={classNames(projectcss.all, sty.column__t9Q7B)}>
              <ProductCollection
                data-plasmic-name={"productCollection"}
                data-plasmic-override={overrides.productCollection}
                className={classNames("__wab_instance", sty.productCollection)}
                emptyMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8IgUl
                    )}
                  >
                    {"No product found!"}
                  </div>
                }
                loadingMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lptr9
                    )}
                  >
                    {"Loading..."}
                  </div>
                }
              >
                <ProductCard
                  data-plasmic-name={"productCard"}
                  data-plasmic-override={overrides.productCard}
                  className={classNames("__wab_instance", sty.productCard)}
                  color={"violet" as const}
                >
                  <ProductTextField
                    data-plasmic-name={"productTextField"}
                    data-plasmic-override={overrides.productTextField}
                    className={classNames(
                      "__wab_instance",
                      sty.productTextField
                    )}
                    field={"name" as const}
                  />
                </ProductCard>
              </ProductCollection>
            </div>

            <div className={classNames(projectcss.all, sty.column___1QvVz)}>
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__il8Ij)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4___2XL0S
                    )}
                  >
                    {"Relevance"}
                  </h4>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vtQ3)}
                  >
                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem__xZsDe
                      )}
                      queryParam={"sort=trending-desc" as const}
                    >
                      {"Trending"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem__nxc6
                      )}
                      isActive={true}
                      queryParam={"sort=latest-desc" as const}
                    >
                      {"Latest Arrivals"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem__j4Dn
                      )}
                      queryParam={"sort=price-asc" as const}
                    >
                      {"Price: Low to High"}
                    </NavItem>

                    <NavItem
                      className={classNames(
                        "__wab_instance",
                        sty.navItem___3CcWp
                      )}
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "columns",
    "categoryCollection",
    "categoryLink",
    "categoryField",
    "productCollection",
    "productCard",
    "productTextField"
  ],
  navbar: ["navbar"],
  columns: [
    "columns",
    "categoryCollection",
    "categoryLink",
    "categoryField",
    "productCollection",
    "productCard",
    "productTextField"
  ],
  categoryCollection: ["categoryCollection", "categoryLink", "categoryField"],
  categoryLink: ["categoryLink", "categoryField"],
  categoryField: ["categoryField"],
  productCollection: ["productCollection", "productCard", "productTextField"],
  productCard: ["productCard", "productTextField"],
  productTextField: ["productTextField"]
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
  productCollection: typeof ProductCollection;
  productCard: typeof ProductCard;
  productTextField: typeof ProductTextField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearch__VariantsArgs;
    args?: PlasmicSearch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSearch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSearch__ArgProps,
      internalVariantPropNames: PlasmicSearch__VariantProps
    });

    return PlasmicSearch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearch";
  } else {
    func.displayName = `PlasmicSearch.${nodeName}`;
  }
  return func;
}

export const PlasmicSearch = Object.assign(
  // Top-level PlasmicSearch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryLink: makeNodeComponent("categoryLink"),
    categoryField: makeNodeComponent("categoryField"),
    productCollection: makeNodeComponent("productCollection"),
    productCard: makeNodeComponent("productCard"),
    productTextField: makeNodeComponent("productTextField"),

    // Metadata about props expected for PlasmicSearch
    internalVariantProps: PlasmicSearch__VariantProps,
    internalArgProps: PlasmicSearch__ArgProps
  }
);

export default PlasmicSearch;
/* prettier-ignore-end */
