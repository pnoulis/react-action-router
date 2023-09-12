import * as React from "react";
import { StyledOutlet, StyledRouteMountpoint } from "./Styles.jsx";
import { OutletView1, OutletView2, OutletView3 } from "./RightRoutes.jsx";

function RightOutlet({ className, style }) {
  return (
    <StyledOutlet style={style} className={"right-outlet " + className}>
      <header>right outlet</header>
      <StyledRouteMountpoint>
        <OutletView1 />
        <OutletView2 />
        <OutletView3 />
      </StyledRouteMountpoint>
    </StyledOutlet>
  );
}

export { RightOutlet };
