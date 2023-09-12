import * as React from "react";
import { StyledToolbar } from "./Styles.jsx";
import { MountPoint } from "./ActionRouter.jsx";
import { ToolbarView1, ToolbarView2 } from "./Routes.jsx";

function Toolbar({ className, style }) {
  return (
    <StyledToolbar style={style} className={`toolbar ${className || ""}`}>
      <header>toolbar</header>
      <MountPoint id="toolbar-router-root">
        <ToolbarView1 path="/" />
      </MountPoint>
    </StyledToolbar>
  );
}

export { Toolbar };
