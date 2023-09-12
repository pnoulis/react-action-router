import * as React from "react";
import { StyledOutlet } from "./Styles.jsx";
import { ToolbarView2, OutletView1, OutletView2 } from "./Routes.jsx";

function Outlet({ className, style }) {
  return (
    <StyledOutlet style={style} className={`outlet ${className || ""}`}>
      <header>outlet</header>
      <ToolbarView2 name="view2" target="toolbar-router-root" />
      <OutletView1 />
      <OutletView2 />
    </StyledOutlet>
  );
}

export { Outlet };
