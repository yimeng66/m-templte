import { defineConfig } from "tsup";

import pkg from "./package.json";

export default defineConfig({
  name: "tsup",
  target: "node15",
  entry: ["./src/index.ts"],
  treeshake: true,
  minify: true,
  clean: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  external: Object.keys(pkg.dependencies),
});
