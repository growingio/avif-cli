#!/usr/bin/env node

const fs = require("fs").promises;
const { constants } = require("fs");
const {
  input,
  output,
  quality,
  alphaQuality,
  lossless,
  nearLossless,
  smartSubsample,
  effort,
  loop,
  minSize,
  mixed,
  force,
  overwrite,
  appendExt,
  verbose,
} = require("../lib/cli_webp");
const { glob } = require("glob");
const convert = require("../lib/convert_webp");

const webp = async () => {
  const files = await glob(input, { absolute: true, nodir: true });
  if (verbose) {
    process.stdout.write(`Found ${files.length} file(s) matching ${input}\n`);
  }
  if (output) {
    try {
      await fs.access(output, constants.W_OK);
    } catch (e) {
      await fs.mkdir(output, { recursive: true });
    }
  }
  const results = await Promise.all(
    files.map((file) =>
      convert({
        input: file,
        output,
        quality,
        alphaQuality,
        lossless,
        nearLossless,
        smartSubsample,
        effort,
        loop,
        minSize,
        mixed,
        force,
        overwrite,
        appendExt,
        verbose,
      })
    )
  );
  process.exit(results.every(Boolean) ? 0 : 1);
};
webp();
