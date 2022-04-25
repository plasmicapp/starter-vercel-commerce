import { useKeenSlider } from "keen-slider/react";
import React, { Children, isValidElement, MutableRefObject, useRef, useState } from "react";
import cn from 'clsx';
import sty from './ProductSlider.module.css';
import { PlasmicCanvasContext } from "@plasmicapp/host";
import { useProduct } from "./contexts";
import registerComponent from "@plasmicapp/host/registerComponent";
import ProductCard from "../ProductCard";
import PlasmicProductCard from "../plasmic/next_js_commerce/PlasmicProductCard";

interface ProductSliderPros {
  className?: string;
  children: React.ReactNode;
  slideContainer?: React.ReactElement;
  thumbsContainer?: React.ReactElement;
  imageContainer?: React.ReactElement;
  id?: string;
}

export default function ProductSlider(props: ProductSliderPros) {
  const { 
    className, 
    slideContainer = (<div></div>),
    thumbsContainer = (<div></div>),
    id,
  } = props;
  
  const product = useProduct();
  
  const slides = product?.images.map((image, i) => 
    <div key={`slides-${image.url}`}>
      {React.cloneElement(
        slideContainer, 
        {},
          <PlasmicProductCard 
            color="violet"
            hideWishlist={true}
            hidePrice={true}
            imageUrl={true}
            imageContainer={
              <div style={{
                width: "600px",
                height: "600px",
              }}>
                <img src={image.url} style={{width: "100%"}} />
                </div>
            }
          />
      )
        //<img src={image.url} style={{ width: "100%", height: "100%"}} /> )
      } 
    </div>) as React.ReactNode[];
  const thumbs = product?.images.map(image => 
    <div key={`thumbs-${image.url}`}>
      {React.cloneElement(
        thumbsContainer, 
        {}, 
        <img src={image.url} style={{objectFit: "cover", width: "100%", height: "100%"}} /> )
      } 
    </div>) as React.ReactNode[];
      
  const thumbsCount = 4;

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef<HTMLDivElement>(null)
  const thumbsContainerRef = useRef<HTMLDivElement>(null)
  let leftmostSlide = 0;
  const inStudio = React.useContext(PlasmicCanvasContext);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: () => setIsMounted(true),
    slideChanged(s) {
      const slideNumber = s.track.details.rel
      setCurrentSlide(slideNumber);
      const rightmostSlide = leftmostSlide + thumbsCount - 1;
      if (thumbsContainerRef.current) {
        const $prevLastEl = document.getElementById(`thumb-${rightmostSlide-(thumbsCount > 2 ? 1 : 0)}`);
        if (slideNumber === rightmostSlide && rightmostSlide !== s.slides.length) {
          thumbsContainerRef.current.scrollLeft = $prevLastEl!.offsetLeft;
          leftmostSlide = Math.min(rightmostSlide-(thumbsCount > 2 ? 1 : 0), s.slides.length - thumbsCount);
        } else if (slideNumber === leftmostSlide && slideNumber > 0) {
          const newLeftmostSlide = (leftmostSlide + 1) - thumbsCount + (thumbsCount > 2 ? 1 : 0);
          leftmostSlide = Math.max(0, newLeftmostSlide);
          const $el = document.getElementById(`thumb-${leftmostSlide}`);
          thumbsContainerRef.current.scrollLeft = $el!.offsetLeft;
        }         
      }
    },
  })
  React.useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      const touchXPosition = event.touches[0].pageX
      const touchXRadius = event.touches[0].radiusX || 0
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault()
    }
    if (product && !inStudio) {
      const slider = sliderContainerRef.current!
      slider.addEventListener('touchstart', preventNavigation)
      return () => {
        if (slider) {
          slider.removeEventListener('touchstart', preventNavigation)
        }
      }
    }
  }, [product, inStudio])

  if (!slides) {
    return null;
  }

  if (inStudio) {
    return (
      <div className={className}>
        {React.cloneElement(slideContainer, {})}
      </div>
    )
  }

  return (
    <div ref={sliderContainerRef} className={className}>
      {React.cloneElement(slideContainer, {
          ref, 
          className: cn(sty.slider, { [sty.show]: isMounted }, 'keen-slider', slideContainer.props.className)
        }, Children.map(slides, (child) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`,
              },
            }
          }
          return child
        }))}
      {React.cloneElement(thumbsContainer, {
        ref: thumbsContainerRef,
        className: cn(sty.album, thumbsContainer.props.className)
      }, Children.map(thumbs, (child, idx) => {
            if (isValidElement(child)) {
              return {
                ...child,
                props: {
                  ...child.props,
                  className: cn(child.props.className, sty.thumb, {
                    [sty.selected]: currentSlide === idx,
                  }),
                  style: {
                    width: `calc(100% / ${thumbsCount})`
                  },
                  id: `thumb-${idx}`,
                  onClick: () => {
                    slider.current?.moveToIdx(idx)
                  },
                },
              }
            }
            return child
          }))}
    </div>
  )
}

export const registerProductSlider = () =>
  registerComponent(ProductSlider, {
    name: "ProductSlider", 
    props: {
      thumbsCount: "number",
      slideContainer: {
        type: "slot",
        defaultValue: {
          type: "box"
        }
      },
      thumbsContainer: {
        type: "slot",
        defaultValue: {
          type: "box"
        }
      },
    },
    importPath: "./components/code-components/ProductSlider",
    isDefaultExport: true,
  });
