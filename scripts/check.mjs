import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const [html, css, js] = await Promise.all([
  readFile(resolve(root, "index.html"), "utf8"),
  readFile(resolve(root, "styles.css"), "utf8"),
  readFile(resolve(root, "script.js"), "utf8"),
]);
const images = await readdir(resolve(root, "images"));

const checks = [
  [html.includes("https://www.facebook.com/people/Skin-Soul/61581175562401/"), "verified Facebook page is linked"],
  [html.includes("m.me/61581175562401"), "Messenger order link is wired"],
  [html.includes('lang="bn"'), "page language is Bengali"],
  [html.includes("Cash on Delivery"), "COD is advertised"],
  [html.includes("Dhaka"), "Dhaka is referenced"],

  // Full catalog from the Facebook page
  [js.includes('id: "blueberry-sunscreen"'), "Blueberry sunscreen in catalog"],
  [js.includes('id: "watermelon-sunscreen"'), "Watermelon sunscreen in catalog"],
  [js.includes('id: "vitc-sunscreen"'), "Vitamin C+E sunscreen in catalog"],
  [js.includes('id: "anua-serum-30"'), "Anua serum in catalog"],
  [js.includes('id: "dermaco-vitc"'), "Derma Co vitamin C serum in catalog"],
  [js.includes('id: "minimalist-sa"'), "Minimalist salicylic serum in catalog"],
  [js.includes('id: "arencia-pdrn"'), "Arencia PDRN booster in catalog"],
  [js.includes('id: "arencia-vitc"'), "Arencia vitamin C booster in catalog"],
  [js.includes('id: "olaplex"'), "Olaplex N°3 in catalog"],
  [js.includes('id: "moroccanoil"'), "Moroccanoil in catalog"],
  [js.includes('id: "cerave"'), "CeraVe in catalog"],
  [js.includes('id: "ordinary-niacinamide"'), "The Ordinary in catalog"],
  [js.includes('id: "lrp-effaclar"'), "La Roche-Posay in catalog"],
  [js.includes('id: "vaseline-rouge"'), "Vaseline Rouge Romance in catalog"],

  // New arrivals batch
  [js.includes('id: "boj-relief-sun"'), "Beauty of Joseon Relief Sun in catalog"],
  [js.includes('id: "isntree-sun-gel"'), "Isntree watery sun gel in catalog"],
  [js.includes('id: "anua-cleansing-oil"'), "Anua cleansing oil in catalog"],
  [js.includes('id: "cerave-cleanser"'), "CeraVe hydrating cleanser in catalog"],
  [js.includes('id: "anua-toner"'), "Anua heartleaf toner in catalog"],
  [js.includes('id: "cosrx-snail"'), "COSRX snail essence in catalog"],
  [js.includes('id: "skin1004-ampoule"'), "SKIN1004 ampoule in catalog"],
  [js.includes('id: "ordinary-ha"'), "The Ordinary HA in catalog"],
  [js.includes('id: "ordinary-peel"'), "The Ordinary peeling solution in catalog"],
  [js.includes('id: "lrp-cicaplast"'), "LRP Cicaplast in catalog"],

  // Sunscreen category must not be duplicated as extra sections
  [!html.includes('id="spf"'), "no duplicate sunscreen spotlight section"],
  [!html.includes('id="cats"'), "no duplicate category tiles section"],

  // Single navigation (no row + column duplication)
  [css.includes("[hidden] { display: none !important; }"), "hidden attribute is enforced (mobile nav only via hamburger)"],

  // New features
  [html.includes('id="searchInput"'), "search box present"],
  [html.includes('id="qvOverlay"'), "quick view modal present"],
  [html.includes('id="wishBtn"'), "wishlist button present"],
  [html.includes('id="adminOverlay"'), "owner panel ([D10]) present"],
  [js.includes("openAdmin"), "owner panel logic wired"],
  [js.includes('skin-soul-edits'), "owner edits persist locally"],
  [js.includes("data-wish"), "wishlist toggle wired"],
  [js.includes("openQuick"), "quick view logic wired"],
  [css.includes("--terracotta: #8f2440"), "maroon accent applied"],
  [css.includes("--espresso: #261721"), "dark plum applied"],

  [js.includes("localStorage"), "bag persists across reloads"],
  [css.length > 10000, "responsive design stylesheet is present"],
  [images.includes("arencia-pdrn.png"), "arencia pdrn image present"],
  [images.includes("arencia-vitc.jpg"), "arencia vitc image present"],
  [images.includes("olaplex.jpg"), "olaplex image present"],
  [images.includes("cerave.jpg"), "cerave image present"],
  [images.includes("ordinary-niacinamide.jpg"), "ordinary niacinamide image present"],
  [images.includes("hero.jpg"), "hero image present"],
  [images.includes("boj-relief-sun.jpg"), "boj relief sun image present"],
  [images.includes("anua-cleansing-oil.png"), "anua cleansing oil image present"],
  [images.includes("cosrx-snail.jpg"), "cosrx snail image present"],
  [images.includes("skin1004-ampoule.jpg"), "skin1004 ampoule image present"],
  [images.includes("ordinary-ha.webp"), "ordinary HA image present"],
  [images.includes("lrp-cicaplast.jpg"), "lrp cicaplast image present"],
];

let failed = 0;
for (const [passed, message] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${message}`);
  if (!passed) failed += 1;
}
if (failed) process.exit(1);
console.log(`\nAll ${checks.length} project checks passed.`);
