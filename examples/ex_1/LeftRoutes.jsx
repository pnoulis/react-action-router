import Button from "@mui/material/Button";
import { LeftActionRoute, useLeftContext } from "./LeftRouter.jsx";
import { WidgetBack } from "./WidgetBack.jsx";
import { StyledView } from "./Styles.jsx";
import pugLifeImg from "/assets/pug-life.png";
import catmurder from "/assets/cat-murderrer.jpg";
import raiseglass from "/assets/raise-glass.gif";

function ToolbarView1() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute path="/.*">
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
    </LeftActionRoute>
  );
}

function ToolbarView2() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute name="view2">
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
    </LeftActionRoute>
  );
}

function ToolbarView3() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute name="view3">
      <StyledView>
        <header>view 3</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <WidgetBack onClick={() => ctx.back()} />
        </div>
      </StyledView>
    </LeftActionRoute>
  );
}

function OutletView1() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute path="/.*">
      <StyledView>
        <header>view 1</header>
        <div className="content-outlet"></div>
        <img src={raiseglass} alt="leo" />
      </StyledView>
    </LeftActionRoute>
  );
}

function OutletView2() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute name="view2">
      <StyledView>
        <header>view 2</header>
        <div className="content-outlet"></div>
        <img src={pugLifeImg} alt="The pug life" />
      </StyledView>
    </LeftActionRoute>
  );
}

function OutletView3() {
  const ctx = useLeftContext();
  return (
    <LeftActionRoute name="view3">
      <StyledView>
        <header>view 3</header>
        <div className="content-outlet"></div>
        <img src={catmurder} alt="Cat mafia" />
      </StyledView>
    </LeftActionRoute>
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
