import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  // treeshake: true,
  // esbuildOptions(options) {
  //   options.mangleProps = /^_/; // Mangle private properties (minification)
  //   options.keepNames = false;  // Reduce function name retention
  // },
  // bundle: true,
  // skipNodeModulesBundle: true,
  // target: "esnext",
  // splitting: true,
  // platform: "browser",
  // metafile: true,
});
