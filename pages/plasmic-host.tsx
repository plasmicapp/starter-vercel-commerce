
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { registerAddToCart } from '../components/code-components/AddToCart';
import { registerCollapse } from '../components/code-components/Collapse';
import { registerReactFastMarquee } from '../components/code-components/ReactFastMarquee';
import { registerProductFetch } from '../components/code-components/ProductFetch';
import { registerAllProductOptions } from '../components/code-components/ProductOptions';
import { registerProductSlider } from '../components/code-components/ProductSlider';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  );
}
    

import { registerAll } from "@plasmicpkgs/commerce";
import { registerAll as registerAll2 } from "@plasmicpkgs/commerce-shopify";
registerAll();
registerAll2();

registerAddToCart();
registerCollapse();
registerProductFetch();
registerReactFastMarquee();
registerAllProductOptions();
registerProductSlider();