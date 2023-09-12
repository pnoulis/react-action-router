import * as React from "react";
import { StyledToolbar, StyledRouteMountpoint } from "./Styles.jsx";
import { ToolbarView1, ToolbarView2, ToolbarView3 } from "./LeftRoutes.jsx";

function LeftToolbar({ className, style }) {
  return (
    <StyledToolbar style={style} className={"left-toolbar " + className}>
      <header>left toolbar</header>
      <StyledRouteMountpoint>
        <ToolbarView1 />
        <ToolbarView2 />
        <ToolbarView3 />
      </StyledRouteMountpoint>
    </StyledToolbar>
  );
}

export { LeftToolbar };
