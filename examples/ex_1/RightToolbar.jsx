import * as React from "react";
import { StyledToolbar, StyledRouteMountpoint } from "./Styles.jsx";
import { ToolbarView1, ToolbarView2, ToolbarView3 } from "./RightRoutes.jsx";

function RightToolbar({ className, style }) {
  return (
    <StyledToolbar style={style} className={"right-toolbar " + className}>
      <header>right toolbar</header>
      <StyledRouteMountpoint>
        <ToolbarView1 />
        <ToolbarView2 />
        <ToolbarView3 />
      </StyledRouteMountpoint>
    </StyledToolbar>
  );
}

export { RightToolbar };
