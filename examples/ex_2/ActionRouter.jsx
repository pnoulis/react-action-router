import { createActionRouter } from "../../src/create-action-router/createActionRouter.jsx";

const { ContextProvide, useContext, MountPoint, ActionRoute, useActionRouter } =
  createActionRouter();

function ActionRouter({ children }) {
  const ctx = useActionRouter();
  return <ContextProvide ctx={ctx}>{children}</ContextProvide>;
}

export { ActionRouter, MountPoint, useContext, ActionRoute };
