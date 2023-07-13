import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";
import path from "path";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    // treat css file extension as external and no need to be resolved
    // external: [/\.(css|less|scss)$/],
  },
];
