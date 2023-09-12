import * as React from "react";
import * as ReactDOM from "react-dom/client";
import styled from "styled-components";
import { Layout } from "./Layout.jsx";
import { LeftToolbar } from "./LeftToolbar.jsx";
import { RightToolbar } from "./RightToolbar.jsx";
import { LeftOutlet } from "./LeftOutlet.jsx";
import { RightOutlet } from "./RightOutlet.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeftRouter } from "./LeftRouter.jsx";
import { RightRouter } from "./RightRouter.jsx";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

/*
  This example showcases simple navigation through user actions.
  Page 1 makes use of 2 sibling routers.
  Page 2 make use of 1 parent router and a nested router.
 */

function Page() {
  return (
    <>
      <StyledLayoutHeader>
        <p>page 1 sibling react-action-router</p>
        <Button variant="contained">
          <NavLink to="/">page 1</NavLink>
        </Button>
        <Button variant="contained">
          <NavLink to="/page2">page 2</NavLink>
        </Button>
      </StyledLayoutHeader>
      <Layout>
        <LeftRouter>
          <LeftToolbar style={{ gridArea: "left_toolbar" }} />
          <LeftOutlet style={{ gridArea: "left_outlet" }} />
        </LeftRouter>
        <SplitLine />
        <RightRouter>
          <RightToolbar style={{ gridArea: "right_toolbar" }} />
          <RightOutlet style={{ gridArea: "right_outlet" }} />
        </RightRouter>
      </Layout>
    </>
  );
}

function Page2() {
  return (
    <>
      <StyledLayoutHeader>
        <p>page 2 nested react-action-router</p>
        <Button variant="contained">
          <NavLink to="/">page 1</NavLink>
        </Button>
        <Button variant="contained">
          <NavLink to="/page2">page 2</NavLink>
        </Button>
      </StyledLayoutHeader>
      <Layout>
        <LeftRouter>
          <LeftToolbar style={{ gridArea: "left_toolbar" }} />
          <LeftOutlet style={{ gridArea: "left_outlet" }} />
          <RightRouter>
            <RightToolbar style={{ gridArea: "right_toolbar" }} />
            <RightOutlet style={{ gridArea: "right_outlet" }} />
          </RightRouter>
        </LeftRouter>
      </Layout>
    </>
  );
}

const SplitLine = styled("hr")`
  position: absolute;
  width: 7px;
  height: 100%;
  background-color: #3399ff;
  left: 50%;
  top: 0;
  transform: translate(-50%);
`;

const StyledLayoutHeader = styled("header")`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  gap: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
