import Button from "@mui/material/Button";
import { RightActionRoute, useRightContext } from "./RightRouter.jsx";
import { WidgetBack } from "./WidgetBack.jsx";
import { StyledView } from "./Styles.jsx";
import ironman from "/assets/iron-man.gif";
import biznisClass from "/assets/air-balkans.jpg";
import batdog from "/assets/batdog.jpg";

function ToolbarView1() {
  const ctx = useRightContext();
  return (
    <RightActionRoute path="/.*">
      <StyledView>
        <header>view 1</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <Button
            variant="contained"
            onClick={() => {
              ctx.forward("view2");
            }}
          >
            go to view 2
          </Button>
        </div>
      </StyledView>
    </RightActionRoute>
  );
}

function ToolbarView2() {
  const ctx = useRightContext();
  return (
    <RightActionRoute name="view2">
      <StyledView>
        <header>view 2</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <Button
            variant="contained"
            onClick={() => {
              ctx.forward("view3");
            }}
          >
            go to view 3
          </Button>
          <WidgetBack onClick={() => ctx.back()} />
        </div>
      </StyledView>
    </RightActionRoute>
  );
}

function ToolbarView3() {
  const ctx = useRightContext();
  return (
    <RightActionRoute name="view3">
      <StyledView>
        <header>view 3</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <WidgetBack onClick={() => ctx.back()} />
        </div>
      </StyledView>
    </RightActionRoute>
  );
}

function OutletView1() {
  const ctx = useRightContext();
  return (
    <RightActionRoute path="/.*">
      <StyledView>
        <header>view 1</header>
        <div className="content-outlet"></div>
        <img src={ironman} alt="iron man" />
      </StyledView>
    </RightActionRoute>
  );
}

function OutletView2() {
  const ctx = useRightContext();
  return (
    <RightActionRoute name="view2">
      <StyledView>
        <header>view 2</header>
        <div className="content-outlet"></div>
        <img src={biznisClass} alt="Balkan first class" />
      </StyledView>
    </RightActionRoute>
  );
}

function OutletView3() {
  const ctx = useRightContext();
  return (
    <RightActionRoute name="view3">
      <StyledView>
        <header>view 3</header>
        <div className="content-outlet"></div>
        <img src={batdog} alt="batdog" />
      </StyledView>
    </RightActionRoute>
  );
}

export {
  ToolbarView1,
  ToolbarView2,
  ToolbarView3,
  OutletView1,
  OutletView2,
  OutletView3,
};
