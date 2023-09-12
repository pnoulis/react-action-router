import Button from "@mui/material/Button";
import { WidgetBack } from "./WidgetBack.jsx";
import { ActionRoute, useContext } from "./ActionRouter.jsx";
import { StyledView } from "./Styles.jsx";
import pugLifeImg from "/assets/pug-life.png";
import catmurder from "/assets/cat-murderrer.jpg";
import raiseglass from "/assets/raise-glass.gif";

function ToolbarView1({ className, style, path, name, target }) {
  const ctx = useContext();
  return (
    <ActionRoute
      path={path}
      name={name}
      target={target}
      style={style}
      className={className}
    >
      <StyledView>
        <header>{target && "mounted "}view 1</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <Button variant="contained" onClick={() => ctx.forward("view2")}>
            go to view 2
          </Button>
        </div>
      </StyledView>
    </ActionRoute>
  );
}

function ToolbarView2({ className, style, path, name, target }) {
  const ctx = useContext();
  return (
    <ActionRoute
      path={path}
      name={name}
      target={target}
      style={style}
      className={className}
    >
      <StyledView>
        <header>{target && "mounted "}view 2</header>
        <div className="content-toolbar">
          <Button variant="contained">dummy button</Button>
          <Button variant="contained" onClick={() => ctx.forward("view3")}>
            go to view 3
          </Button>
          <WidgetBack onClick={ctx.back} />
        </div>
      </StyledView>
    </ActionRoute>
  );
}

function ToolbarView3({ className, style, target }) {
  return (
    <ActionRoute
      style={style}
      className={className}
      target={target}
    ></ActionRoute>
  );
}

function OutletView1({ className, style, target }) {
  return (
    <ActionRoute path="/" style={style} className={className} target={target}>
      <StyledView>
        <header>view 1</header>
        <div className="content-outlet"></div>
        <img src={raiseglass} alt="leo" />
      </StyledView>
    </ActionRoute>
  );
}

function OutletView2({ className, style, target }) {
  return (
    <ActionRoute
      name="view2"
      style={style}
      className={className}
      target={target}
    >
      <StyledView>
        <header>view 2</header>
        <div className="content-outlet"></div>
        <img src={pugLifeImg} alt="The pug life" />
      </StyledView>
    </ActionRoute>
  );
}

function OutletView3({ className, style, target }) {
  return (
    <ActionRoute
      style={style}
      className={className}
      target={target}
    ></ActionRoute>
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
