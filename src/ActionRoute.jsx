import * as React from "react";
import { useContextActionRouter } from "./ContextActionRouter.jsx";

function ActionRoute({ path = "", name = "", action, children }) {
  const ctx = useContextActionRouter();
  const indexRef = React.useRef(
    ctx.register({
      path,
      name,
      action,
    }),
  );

  if (ctx.elements[indexRef.current]?.id === ctx.getCurrent()?.id) {
    return children;
  }
}

export { ActionRoute };
