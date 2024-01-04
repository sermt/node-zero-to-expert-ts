import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show table",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: './outputs',
    describe: "File destination dir",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: 'multiplication-table',
    describe: "file name",
  })
  .check((argv) => {
    if (argv.b < 0) {
      throw new Error("The base must be greater than 0");
    }
    if (isNaN(argv.b)) {
      throw new Error("The base must be a number");
    }

    if (argv.l < 0) {
      throw new Error("The limit must be greater than 0");
    }

    if (isNaN(argv.l)) {
      throw new Error("The limit must be a number");
    }
    
    return true;
  })
  .parseSync();
