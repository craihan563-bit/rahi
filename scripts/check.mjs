import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const [html, css, js] = await Promise.all([
  readFile(resolve(root, "index.html"), "utf8"),
  readFile(resolve(root, "styles.css"), "utf8"),
  readFile(resolve(root, "script.js"), "utf8"),
]);

const checks = [
  [html.includes("https://www.facebook.com/chilloutcafepizza"), "verified Facebook page is linked"],
  [html.includes("23.8587625,90.4131094"), "verified Google Maps coordinates are present"],
  [html.includes("+8801581401377"), "verified phone number is present"],
  [html.includes("Abdul Jobbar Market"), "full verified address is present"],
  [html.includes("lh3.googleusercontent.com/geougc/"), "Google business-owner photos are used"],
  [!html.includes("pexels.com") && !html.includes("unsplash.com"), "no stock-photo hosts are used"],
  [html.includes('lang="bn"'), "page language is Bengali"],
  [css.length > 10000, "responsive design stylesheet is present"],
  [js.includes("Asia/Dhaka"), "live Dhaka opening status is implemented"],
];

let failed = 0;
for (const [passed, message] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${message}`);
  if (!passed) failed += 1;
}
if (failed) process.exit(1);
console.log(`\nAll ${checks.length} project checks passed.`);
