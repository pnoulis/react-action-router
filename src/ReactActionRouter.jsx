import * as React from "react";

function createActionRouter(routes = [], options = {}) {
  return () => {
    const [stack, setStack] = React.useState(routes);
    function back() {}
    function forward() {}
  };
}

function ReactActionRouter() {
  return <div>yolo</div>;
}

// React router is a function, which

export { ReactActionRouter };
