import * as esbuild from "esbuild";

esbuild.build({
  bundle: true,
  platform: "browser",
  target: "esnext",
  format: "esm",
  entryPoints: ["./src/ReactActionRouter.jsx"],
  outdir: "./dist",
  drop: ["console"],
  sourcemap: false,
  minify: true,
});
