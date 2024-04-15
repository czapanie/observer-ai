import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default [
    {
        input: "src/index.ts",
        output: {
            dir: "dist/index.cjs",
            format: "cjs",
            sourceMap: true,
            plugins: [terser()],
        },
        plugins: [resolve()],
    },
    {
        input: "src/index.ts",
        output: {
            dir: "dist/index.mjs",
            fromat: "esm",
            sourceMap: true,
            plugins: [terser()],
        },
        plugins: [resolve()],
    },
];
