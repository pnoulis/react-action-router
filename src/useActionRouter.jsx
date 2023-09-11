import * as React from "react";
import { useLocation } from "react-router-dom";

function useActionRouter(routes = [], options = {}) {
  const [stack, setStack] = React.useState(routes.length ? [routes[0]] : []);
  const elementsRef = React.useRef(routes);
  const location = useLocation();

  function setStackMiddleware(newStack) {
    console.log(newStack);
    console.log("new stack");
    setStack(newStack);
  }

  React.useEffect(() => {
    for (let i = 0; i < elementsRef.current.length; i++) {
      const re = new RegExp(`^${elementsRef.current[i].path}$`);
      if (re.test(location.pathname)) {
        return setStackMiddleware([elementsRef.current[i]]);
      }
    }
    setStackMiddleware([]);
  }, [location]);

  function back() {
    setStackMiddleware(stack.slice(0, -1));
  }
  function forward(name) {
    let index = -1;

    // Make sure it is not already in the stack
    if (getCurrent()?.name === name) return;

    for (let i = 0; i < elementsRef.current.length; i++) {
      if (elementsRef.current[i].name === name) {
        index = i;
      }
    }

    if (index < 0) {
      throw new Error(`Missing ${name} element`);
    } else {
      setStackMiddleware([...stack, elementsRef.current[index]]);
    }
  }
  function register({ path, name, action }) {
    if (path && path.at(0) !== "/") {
      path = "/" + path;
    }

    const id = path + name;
    let index = -1;
    for (let i = 0; i < elementsRef.current.length; i++) {
      if (elementsRef.current[i].id === id) {
        index = i;
      }
    }

    if (index < 0) {
      elementsRef.current.push({
        path,
        name,
        id,
        action,
      });
      return elementsRef.current.length - 1;
    } else {
      return index;
    }
  }

  function getCurrent() {
    return stack.at(-1);
  }

  return {
    stack,
    setStack,
    elements: elementsRef.current,
    back,
    forward,
    register,
    getCurrent,
    location,
  };
}

export { useActionRouter };
