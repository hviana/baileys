const res = await Deno.bundle({
  entrypoints: ["./node_modules/baileys/lib/index.js"],
  minify: true, //baileys does not support minify yet
  format: "esm",
  platform: "deno",
  outputPath: "mod.js",
});
export {};
