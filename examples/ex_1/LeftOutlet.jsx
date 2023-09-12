import * as React from "react";
import { StyledOutlet, StyledRouteMountpoint } from "./Styles.jsx";
import { OutletView1, OutletView2, OutletView3 } from "./LeftRoutes.jsx";

function LeftOutlet({ className, style }) {
  return (
    <StyledOutlet style={style} className={"left-outlet " + className}>
      <header>left outlet</header>
      <StyledRouteMountpoint>
        <OutletView1 />
        <OutletView2 />
        <OutletView3 />
      </StyledRouteMountpoint>
    </StyledOutlet>
  );
}

export { LeftOutlet };
