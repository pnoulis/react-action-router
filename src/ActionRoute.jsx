import * as React from "react";
import { useContextActionRouter } from "./ContextActionRouter.jsx";
import { debug } from "./debug.js";

function ActionRoute({ path = "", name = "", action, children }) {
  const ctx = useContextActionRouter();
  const indexRef = React.useRef(
    ctx.register({
      path,
      name,
      action,
    }),
  );

  if (ctx.routes[indexRef.current]?.id === ctx.current()?.id) {
    return children;
  }
}

export { ActionRoute };
