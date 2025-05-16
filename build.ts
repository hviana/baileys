import { denoPlugins } from "esbuild-deno-loader";
import * as esbuild from "esbuild";
import * as path from "path";

const denoJsonPath = path.join(Deno.cwd(), "deno.json");
const windowsPathFixer = () => {
  return {
    name: "fix-windows",
    setup(build: any) {
      if (Deno.build.os === "windows") {
        build.onResolve({ filter: /\.*/ }, (args: any) => {
          if (args.path.startsWith("\\")) {
            const normalized = path.resolve(args.path);
            return {
              path: normalized,
            };
          }
        });
      }
    },
  };
};

const res = await esbuild.build({
  plugins: [
    windowsPathFixer(),
    ...denoPlugins({
      configPath: denoJsonPath,
    }),
  ],
  external: [
    "jimp",
    "music-metadata",
    "sharp",
    "pino",
    "bufferutil",
    "utf-8-validate",
    "node:process",
  ],
  format: "esm",
  minify: true,
  entryPoints: ["./import.ts"],
  platform: "neutral",
  outfile: "mod.js",
  bundle: true,
});
esbuild.stop();
