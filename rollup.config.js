import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-node-resolve";

export default {
  input: ["src/core/index.js"],
  output: [{ file: "dist/core/index.js", format: "cjs" }],
  plugins: [json(), resolve(), babel({ babelHelpers: "bundled" })],
  external: ["styled-components"],
};
