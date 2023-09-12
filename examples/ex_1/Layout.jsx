import * as React from "react";
import styled from "styled-components";
import css from "./ex_1.css";

const Layout = styled("main")`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "left_toolbar right_toolbar"
    "left_outlet right_outlet";
  gap: 50px;
`;

export { Layout };
