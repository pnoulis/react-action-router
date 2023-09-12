import * as React from "react";
import { useActionRouter } from "../useActionRouter.jsx";

function createActionRouter() {
  const Context = React.createContext(null);
  function ContextProvide({ ctx, children }) {
    return <Context.Provider value={ctx}>{children}</Context.Provider>;
  }
  function useContext() {
    const ctx = React.useContext(Context);
    if (ctx == null) {
      throw new Error("<ContextProvide/> missing");
    }
    return ctx;
  }
  function ActionRoute({ path = "", name = "", action, children }) {
    const ctx = useContext();
    const indexRef = React.useRef(
      ctx.register({
        path,
        name,
        action,
      }),
    );
    return ctx.routes[indexRef.current]?.id === ctx.current()?.id
      ? children
      : null;
  }
  return {
    ContextProvide,
    useContext,
    ActionRoute,
    useActionRouter,
  };
}

export { createActionRouter };
