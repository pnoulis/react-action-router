import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import { ContextProvideActionRouter } from "./ContextActionRouter.jsx";
import { useActionRouter } from "./useActionRouter.jsx";
import { ActionRoute } from "./ActionRoute.jsx";

function Page() {
  const ctx = useActionRouter();
  return (
    <div>
      <h1>react-action-router using react-router-dom</h1>
      <div>
        <ContextProvideActionRouter ctx={ctx}>
          <ActionRoute path="/">
            <>
              <div>index default route</div>
            </>
          </ActionRoute>
          <ActionRoute path="yolo">
            <>
              <p>yolo action route</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  ctx.back();
                }}
              >
                go back
              </button>
            </>
          </ActionRoute>
          <ActionRoute path='/banana/.*'>
            <p>banana</p>
          </ActionRoute>
          <ActionRoute name="zito">
            <h1> This is zito</h1>
            <button
              type="button"
              onClick={() => {
                ctx.back();
              }}
            >go back from zito</button>
          </ActionRoute>
          <button
            type="button"
            onClick={() => {
              ctx.forward("zito");
            }}
          >
            change view
          </button>
        </ContextProvideActionRouter>
        <NavLink to="yolo">go to yolo</NavLink>
        <NavLink to="/">go to home</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
function YoloPage() {
  return <div>yolo page</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "yolo",
        element: <YoloPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
