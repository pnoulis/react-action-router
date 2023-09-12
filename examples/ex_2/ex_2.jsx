import * as React from "react";
import * as ReactDOM from "react-dom/client";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ActionRouter } from "./ActionRouter.jsx";
import { Layout } from "./Styles.jsx";
import { Toolbar } from "./Toolbar.jsx";
import { Outlet } from "./Outlet.jsx";

function Page() {
  return (
    <ActionRouter>
      <Layout>
        <Toolbar />
        <Outlet />
      </Layout>
    </ActionRouter>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
