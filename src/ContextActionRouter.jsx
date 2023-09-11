import * as React from "react";

const ContextActionRouter = React.createContext(null);
function ContextProvideActionRouter({ ctx, children }) {
  return (
    <ContextActionRouter.Provider value={ctx}>
      {children}
    </ContextActionRouter.Provider>
  );
}
function useContextActionRouter() {
  const ctx = React.useContext(ContextActionRouter);
  if (ctx == null) {
    throw new Error("<ContextProvideActionRouter/> missing");
  }
  return ctx;
}

export {
  ContextActionRouter,
  ContextProvideActionRouter,
  useContextActionRouter,
};
