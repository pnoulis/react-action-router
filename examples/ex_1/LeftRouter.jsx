import { createActionRouter } from "../../src/create-action-router/createActionRouter.jsx";

const {
  ActionRoute: LeftActionRoute,
  ContextProvide: LeftContextProvide,
  useContext: useLeftContext,
  useActionRouter: useLeftActionRouter,
} = createActionRouter();

function LeftRouter({ children }) {
  const ctx = useLeftActionRouter();
  return <LeftContextProvide ctx={ctx}>{children}</LeftContextProvide>;
}

export {
  LeftActionRoute,
  LeftContextProvide,
  useLeftContext,
  useLeftActionRouter,
  LeftRouter,
};
