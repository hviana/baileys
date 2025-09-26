const res = await Deno.bundle({
  entrypoints: ["./import.ts"],
  minify: true,
  format: "esm",
  platform: "browser",
  outputPath: "mod.js",
});
export {};
