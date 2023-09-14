import * as React from "react";
import { createPortal } from "react-dom";
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
  function MountPoint({ id = "", children }) {
    return <div id={id}>{children}</div>;
  }
  function ActionRoute({
    path = "",
    name = "",
    target = "",
    action,
    children,
  }) {
    const ctx = useContext();
    const [index, setIndex] = React.useState(-1);

    // Because register() might result in rendering of this
    // route it needs to be called after initial rendering.
    React.useEffect(() => {
      setIndex(
        ctx.register({
          path,
          name,
          action,
        }),
      );
    }, [path, name, target]);

    if (index < 0 || ctx.routes[index]?.id !== ctx.current()?.id) {
      return null;
    } else if (target) {
      return createPortal(children, document.getElementById(target));
    } else {
      return children;
    }
  }
  return {
    ContextProvide,
    useContext,
    MountPoint,
    ActionRoute,
    useActionRouter,
  };
}

export { createActionRouter };
