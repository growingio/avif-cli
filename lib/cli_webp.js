const yargs = require("yargs");

const { argv } = yargs
  .usage("Convert images to WebP")
  .option("input", {
    type: "string",
    default: "*.{jpg,jpeg,tif,tiff,webp,png,gif,svg}",
    description: "Input file name(s), supports globs/wildcards",
  })
  .option("output", {
    type: "string",
    default: "",
    description: "Output directory, default is same directory as input",
  })
  .option("quality", {
    type: "number",
    default: 80,
    description:
      "quality, integer 1-100",
  })
  .option("alphaQuality", {
    type: "number",
    default: 100,
    description:
      "quality of alpha layer, integer 0-100",
  })
  .option("lossless", {
    type: "boolean",
    default: false,
    description: "use lossless compression mode",
  })
  .option("nearLossless", {
    type: "boolean",
    default: false,
    description: "use near_lossless compression mode",
  })
  .option("smartSubsample", {
    type: "boolean",
    default: false,
    description: "use high quality chroma subsampling",
  })
  .option("effort", {
    type: "number",
    default: 4,
    description: "CPU effort, between 0 (fastest) and 6 (slowest)",
  })
  .option("loop", {
    type: "number",
    default: 0,
    description: "number of animation iterations, use 0 for infinite animation",
  })
  .option("minSize", {
    type: "boolean",
    default: false,
    description: "prevent use of animation key frames to minimise file size (slow)",
  })
  .option("mixed", {
    type: "boolean",
    default: false,
    description: "allow mixture of lossy and lossless animation frames (slow)",
  })
  .option("force", {
    type: "boolean",
    default: true,
    description: "force WebP output, otherwise attempt to use input format",
  })
  .option("overwrite", {
    type: "boolean",
    default: false,
    description: "Allow existing output files to be overwritten",
  })
  .option("append-ext", {
    type: "boolean",
    default: false,
    description:
      "Append .webp to the file name instead of replacing the current extension (foo.jpg => foo.jpg.webp)",
  })
  .option("verbose", {
    type: "boolean",
    default: false,
    description: "Write progress to stdout",
  })
  .help("h")
  .alias("h", "help")
  .version();

module.exports = argv;
