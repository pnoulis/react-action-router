function normalizePath(path) {
  if (typeof path !== "string") {
    return "";
  } else if (path.at(0) !== "/") {
    path = "/" + path;
  }
  return path.replace(/\/{2,}/g, path);
}

function regexizePath(path) {
  return new RegExp(`^${path}/*$`);
}

export { normalizePath, regexizePath };
