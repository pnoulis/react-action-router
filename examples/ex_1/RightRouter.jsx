import { createActionRouter } from "../../src/create-action-router/createActionRouter.jsx";

const {
  ActionRoute: RightActionRoute,
  ContextProvide: RightContextProvide,
  useContext: useRightContext,
  useActionRouter: useRightActionRouter,
} = createActionRouter();

function RightRouter({ children }) {
  const ctx = useRightActionRouter();
  return <RightContextProvide ctx={ctx}>{children}</RightContextProvide>;
}

export {
  RightActionRoute,
  RightContextProvide,
  useRightContext,
  useRightActionRouter,
  RightRouter,
};
