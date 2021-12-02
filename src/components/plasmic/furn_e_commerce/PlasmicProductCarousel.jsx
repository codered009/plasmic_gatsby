// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h4YeDEMYgWVsBFTw8FMJtM
// Component: YL7BR56HsPOa
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import LinkButton from "../../LinkButton" // plasmic-import: O8HFXgI_9Hdz/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css" // plasmic-import: h4YeDEMYgWVsBFTw8FMJtM/projectcss
import * as sty from "./PlasmicProductCarousel.module.css" // plasmic-import: YL7BR56HsPOa/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO" // plasmic-import: CbQCfL1W-u2C/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO" // plasmic-import: Jqit0q2ivEfX/icon
import slider1UlPyst1K4WwR from "./images/slider1.png" // plasmic-import: ULPyst1K4wwR/picture
import slider2RDqyusih8HRa from "./images/slider2.png" // plasmic-import: rDQYUSIH8hRA/picture
import slider3CXucKwbn3DPs from "./images/slider3.png" // plasmic-import: cXucKwbn3dPS/picture

export const PlasmicProductCarousel__VariantProps = new Array("slider")

export const PlasmicProductCarousel__ArgProps = new Array()

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__g6Pcn
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox___0ErKu,
            {
              [sty.freeBox__slider_second___0ErKuTfcXb]: hasVariant(
                variants,
                "slider",
                "second"
              ),
            }
          )}
        >
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text__dbLdP
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text__c1WOo,
              {
                [sty.text__slider_first__c1WOoHt94H]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.text__slider_second__c1WOoTfcXb]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.text__slider_third__c1WOoNl6F8]: hasVariant(
                  variants,
                  "slider",
                  "third"
                ),
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text__rwVua
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__iwCH
            )}
          >
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__t3Nzm
              )}
            />

            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text__x72Xq,
                {
                  [sty.text__slider_second__x72XqTfcXb]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.text__slider_third__x72XqNl6F8]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text__le6Vg,
                {
                  [sty.text__slider_first__le6VgHt94H]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),

                  [sty.text__slider_second__le6VgTfcXb]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.text__slider_third__le6VgNl6F8]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__uNcXq
            )}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__zFYmW)}
              text={"⊕ Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__weknO)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </p.Stack>
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__lu9P4
          )}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.img__slider_third]: hasVariant(variants, "slider", "third"),
            })}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={
              hasVariant(variants, "slider", "third")
                ? {
                    src: slider3CXucKwbn3DPs,
                    fullWidth: 553,
                    fullHeight: 475,
                    aspectRatio: undefined,
                  }
                : hasVariant(variants, "slider", "second")
                ? {
                    src: slider2RDqyusih8HRa,
                    fullWidth: 528,
                    fullHeight: 559,
                    aspectRatio: undefined,
                  }
                : {
                    src: slider1UlPyst1K4WwR,
                    fullWidth: 507,
                    fullHeight: 549,
                    aspectRatio: undefined,
                  }
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox___8ClPc
        )}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.svg__lYHj9,
            {
              [sty.svg__slider_second__lYHj9TfcXb]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.svg__slider_third__lYHj9Nl6F8]: hasVariant(
                variants,
                "slider",
                "third"
              ),
            }
          )}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.svg__rVg0Q,
            {
              [sty.svg__slider_first__rVg0QHt94H]: hasVariant(
                variants,
                "slider",
                "first"
              ),

              [sty.svg__slider_second__rVg0QTfcXb]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.svg__slider_third__rVg0Qnl6F8]: hasVariant(
                variants,
                "slider",
                "third"
              ),
            }
          )}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.svg__nxYk9,
            {
              [sty.svg__slider_third__nxYk9Nl6F8]: hasVariant(
                variants,
                "slider",
                "third"
              ),
            }
          )}
          role={"img"}
        />
      </p.Stack>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel"
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`
  }
  return func
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps,
  }
)

export default PlasmicProductCarousel
/* prettier-ignore-end */