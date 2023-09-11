import * as React from "react";
import { useLocation } from "react-router-dom";

/*
  1. A place that renders UI
  2. A method to declare a new UI
  3. The new UI must inherit parent contexts.
 */

function useActionRouter(routes = [], options = {}) {
  const [stack, setStack] = React.useState(routes.length ? [routes[0]] : []);
  const elementsRef = React.useRef(routes);
  const location = useLocation();

  React.useEffect(() => {
    let index = -1;
    for (let i = 0; i < stack.length; i++) {
      if (stack[i]?.path === location.pathname) {
        index = i;
      }
    }
    if (index > -1) {
      setStack(stack.slice(0, index || 1));
    } else {
      for (let i = 0; i < elementsRef.current.length; i++) {
        if (elementsRef.current[i]?.path == null) {
          continue;
        }
        const re = new RegExp(elementsRef.current[i].path);
        if (re.test(location.pathname)) {
          setStack([...stack, elementsRef.current[i]]);
        }
      }
    }
  }, [location]);

  function back() {
    setStack(stack.slice(0, -1));
  }
  function forward(id) {
    let index = -1;
    for (let i = 0; i < elementsRef.current.length; i++) {
      if (
        elementsRef.current[i]?.path === id ||
        elementsRef.current[i]?.id === id
      ) {
        index = i;
      }
    }

    if (index < 0) {
      throw new Error(`Missing ${id} element`);
    } else {
      setStack([...stack, elementsRef.current[index]]);
    }
  }
  function register({ path, id, action }) {
    let index = -1;
    for (let i = 0; i < elementsRef.current.length; i++) {
      if (
        elementsRef.current[i]?.path === path ||
        elementsRef.current[i]?.id === id
      ) {
        index = i;
      }
    }

    if (index < 0) {
      elementsRef.current.push({
        path,
        id,
        action,
      });
      return elementsRef.current.length - 1;
    } else {
      return index;
    }
  }

  function unregister(id) {
    let index = 1;
    for (let i = 0; i < elementsRef.current; i++) {
      if (
        elementsRef.current[i]?.path === path ||
        elementsRef.current[i]?.id === id
      ) {
        index = i;
      }
    }
    if (index < 0) {
      throw new Error(`Missing ${id} element`);
    } else {
      elementsRef.current = [
        ...elementsRef.current.slice(0, index),
        ...elementsRef.current.slice(index + 1),
      ];
    }
  }

  function getCurrent() {
    return stack.at(-1);
  }

  return {
    stack,
    setStack,
    back,
    forward,
    register,
    unregister,
    getCurrent,
  };
}

const ContextActionRouter = React.createContext(null);
const ContextProvideActionRouter = ({ ctx, children }) => (
  <ContextActionRouter.Provider value={ctx}>
    {children}
  </ContextActionRouter.Provider>
);
const useContextActionRouter = () => React.useContext(ContextActionRouter);

function createActionRouter(routes = [], options = {}) {
  return {
    useActionRouter,
  };
}

function ActionRoute({ def, path, id, action, children }) {
  const ctx = useContextActionRouter();

  React.useEffect(() => {
    if (!def) {
      ctx.register({
        path,
        id,
        action,
      });
    }
    return () => ctx.unregister(path || id);
  }, [path, id, action]);

  if (def && ctx.stack.length < 1) {
    return children;
  } else if (ctx.getCurrent()?.path + ctx.getCurrent()?.id === path + id) {
    return children;
  }
}

function ReactActionRouter() {
  return <div>yolo</div>;
}

// React router is a function, which

export {
  ReactActionRouter,
  useActionRouter,
  createActionRouter,
  ContextProvideActionRouter,
  ActionRoute,
};
