import { readFileSync, writeFileSync } from "fs";
import { Resvg } from "@resvg/resvg-js";

const svg = readFileSync("public/og.svg", "utf-8");
const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
const png = resvg.render();
writeFileSync("public/og.png", png.asPng());
console.log("og.png generated");
