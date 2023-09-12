import * as esbuild from "esbuild";

esbuild.build({
  bundle: true,
  platform: "browser",
  target: "esnext",
  format: "esm",
  entryPoints: ["./src/create-action-router/createActionRouter.jsx"],
  outdir: "./dist",
  drop: ["console"],
  sourcemap: false,
  minify: false,
  external: ["react", "react-router-dom"],
});
