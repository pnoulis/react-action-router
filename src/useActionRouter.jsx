import * as React from "react";
import { useLocation } from "react-router-dom";
import { normalizePath, regexizePath } from "./utils.js";

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
  function back() {
    setStackMiddleware(stack.slice(0, -1));
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
