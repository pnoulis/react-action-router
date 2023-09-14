import * as React from "react";
import { useLocation } from "react-router-dom";
import { normalizePath, regexizePath } from "./utils.js";
import { debug } from "./debug.js";

function useActionRouter() {
  const [stack, setStack] = React.useState([]);
  const routesRef = React.useRef([]);
  const location = useLocation();

  function setStackMiddleware(newStack) {
    setStack(newStack);
  }
  function current() {
    return stack.length > 0 ? routesRef.current[stack.at(-1)] : null;
  }
  function back(name) {
    const newStack = stack.slice(0, -1);
    if (name) {
      for (let i = 0; i < routesRef.current.length; i++) {
        if (name === routesRef.current[i].name) {
          if (newStack.at(-1)?.name === name) {
            return setStackMiddleware(newStack);
          } else {
            return setStackMiddleware(newStack.concat(routesRef.current[i]));
          }
        }
      }
      throw new Error(`Missing ${name} element`);
    }
    setStackMiddleware(newStack);
  }
  function forward(name) {
    if (current()?.name === name) return;
    for (let i = 0; i < routesRef.current.length; i++) {
      if (routesRef.current[i].name === name) {
        setStackMiddleware([...stack, i]);
        return;
      }
    }
    throw new Error(`Missing ${name} element`);
  }

  function register({ path, name, action } = {}) {
    const route = {
      path: path ? regexizePath(normalizePath(path)) : "",
      name: name || "",
    };
    route.id = route.path + route.name;
    let i = 0;
    for (; i < routesRef.current.length; i++) {
      if (routesRef.current[i].id === route.id) {
        routesRef.current[i] = route;
        return i;
      }
    }
    routesRef.current.push(route);
    if (route.path.test?.(location.pathname)) {
      setStackMiddleware([i]);
    }
    return routesRef.current.length - 1;
  }

  React.useEffect(() => {
    for (let i = 0; i < routesRef.current.length; i++) {
      if (routesRef.current[i].path.test?.(location.pathname)) {
        setStackMiddleware([i]);
        return;
      }
    }
    setStackMiddleware([]);
  }, [location]);

  React.useEffect(() => {
    debug(stack, "STACK");
  }, [stack]);

  return {
    stack,
    routes: routesRef.current,
    location,
    back,
    forward,
    register,
    current,
  };
}

export { useActionRouter };
