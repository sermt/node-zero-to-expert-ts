import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, show } = yarg;

const header = `
=================
Tabla del ${base}
=================\n`;

let messageContent = "";
for (let i = 1; i <= limit; i++) {
  messageContent += `${base} x ${i} = ${base * i}\n`;
}
const message = header + messageContent;
if (show) {
  console.log(message);
}

const outputPath = `./dist/outputs/`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(outputPath + `${base}.txt`, message, { encoding: "utf-8" });
