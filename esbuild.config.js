import * as esbuild from "esbuild";

const MODE = process.env.MODE;
esbuild.build({
  bundle: true,
  platform: "browser",
  target: "esnext",
  format: "esm",
  entryPoints: ["./src/create-action-router/createActionRouter.jsx"],
  outdir: "./dist",
  drop: MODE === "production" ? ["console"] : [],
  sourcemap: false,
  minify: MODE === "production",
  external: ["react", "react-router-dom", "react-dom"],
});
