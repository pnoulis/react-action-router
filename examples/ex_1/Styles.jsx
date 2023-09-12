import styled from "styled-components";

const StyledToolbar = styled("section")`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  header {
    font-size: 25px;
    padding: 5px;
  }
`;

const StyledOutlet = styled("section")`
  border-top: 2px solid black;
  padding-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  header {
    font-size: 25px;
    padding: 5px;
  }
`;

const StyledRouteMountpoint = styled("div")`
  flex: 1;
  width: 100%;
`;

const StyledView = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;

  header {
    background-color: black;
    color: white;
    text-align: center;
  }
  .content-toolbar {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }

  img {
    margin: auto;
    width: 400px;
    height: 400px;
  }
`;

export { StyledToolbar, StyledOutlet, StyledRouteMountpoint, StyledView };
