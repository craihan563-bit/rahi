/* ============================================================
   SKIN & SOUL — storefront interactions
   ============================================================
   ⚠️ দাম (PRICE) এখানে বদলাও — PRODUCTS array-এর ভেতরে
   "price" = বিক্রয় মূল্য, "mrp" = পুরনো/কাটা দাম (না থাকলে ছেড়ে দাও)।
   প্রতিটা প্রোডাক্টের img = images/ ফোল্ডারের ছবির নাম।
   ============================================================ */

const FREE_SHIP_OVER = 1999; // ৳1,999+ অর্ডারে ফ্রি ডেলিভারি
const SHIP_FEE = 80;         // এর নিচে ডেলিভারি চার্জ (৳)

const PRODUCTS = [
  /* ---------- SUNSCREEN (DOT & KEY) ---------- */
  {
    id: "blueberry-sunscreen", brand: "Dot & Key",
    name: "Blueberry Hydrate Barrier Repair Sunscreen",
    size: "SPF 50+ PA++++ · 80g", price: 1290, mrp: 1550,
    category: "sunscreen", img: "images/blueberry-sunscreen.jpg",
    badge: "Best seller", badgeHot: true,
    tags: ["Hyaluronic", "Ceramides", "80g"],
    desc: "Long-lasting moisture with blueberry, hyaluronic acid and ceramides — repairs a damaged barrier while giving SPF 50+ PA++++ protection. No white cast.",
  },
  {
    id: "watermelon-sunscreen", brand: "Dot & Key",
    name: "Watermelon Cooling Sunscreen",
    size: "SPF 50+ PA++++ · 50g", price: 1190, mrp: 1430,
    category: "sunscreen", img: "images/watermelon-sunscreen.jpg",
    badge: "No white cast",
    tags: ["Watermelon", "Hyaluronic", "Oily skin"],
    desc: "Water-light, instantly absorbed cooling sunscreen made for oily & combination skin. Hydrates, cools and shields — zero grease, zero white cast.",
  },
  {
    id: "vitc-sunscreen", brand: "Dot & Key",
    name: "Vitamin C+E Super Bright Sunscreen",
    size: "SPF 50+ PA++++ · 50g", price: 1290, mrp: 1550,
    category: "sunscreen", img: "images/vitamin-c-sunscreen.jpg",
    badge: "Glow",
    tags: ["Vitamin C+E", "Water-light", "No cast"],
    desc: "A brightening SPF 50+ PA++++ infused with vitamin C+E — fights dullness and dark spots while shielding skin from UV, every single day.",
  },
  {
    id: "boj-relief-sun", brand: "Beauty of Joseon",
    name: "Relief Sun: Rice + Probiotics",
    size: "SPF 50+ PA++++ · 50ml", price: 1150, mrp: 1400,
    category: "sunscreen", img: "images/boj-relief-sun.jpg",
    badge: "K-beauty icon",
    tags: ["Rice", "Probiotics", "No cast"],
    desc: "The viral Korean sunscreen — rice extract + probiotics gives a soft, matte, zero-white-cast finish with SPF 50+ PA++++.",
  },
  {
    id: "isntree-sun-gel", brand: "Isntree",
    name: "Hyaluronic Acid Watery Sun Gel",
    size: "SPF 50+ PA++++ · 50ml", price: 1150, mrp: 1350,
    category: "sunscreen", img: "images/isntree-sun-gel.jpg",
    badge: "Dry skin",
    tags: ["Hyaluronic", "Water gel", "Moist"],
    desc: "A weightless watery sun gel with 8 types of hyaluronic acid — deep moisture plus SPF 50+ PA++++, perfect for dry and sensitive skin.",
  },

  /* ---------- CLEANSERS ---------- */
  {
    id: "anua-cleansing-oil", brand: "Anua",
    name: "Heartleaf Pore Control Cleansing Oil",
    size: "200ml · oil cleanser", price: 1450, mrp: 1700,
    category: "cleanser", img: "images/anua-cleansing-oil.png",
    badge: "Pore control",
    tags: ["Heartleaf", "Blackheads", "Double cleanse"],
    desc: "The cult oil cleanser that melts away makeup, SPF and blackheads with heartleaf — the first step of every K-beauty double cleanse.",
  },
  {
    id: "cerave-cleanser", brand: "CeraVe",
    name: "Hydrating Cleanser",
    size: "355ml · normal to dry skin", price: 1350, mrp: 1550,
    category: "cleanser", img: "images/cerave-cleanser.jpg",
    badge: "Derm favourite",
    tags: ["Ceramides", "Hyaluronic", "Gentle"],
    desc: "Dermatologist-developed hydrating cleanser with 3 ceramides + hyaluronic acid — cleanses without stripping your moisture barrier.",
  },

  /* ---------- TONERS & ESSENCES ---------- */
  {
    id: "anua-toner", brand: "Anua",
    name: "Heartleaf 77% Soothing Toner",
    size: "250ml · daily toner", price: 1350, mrp: 1600,
    category: "essence", img: "images/anua-toner.jpg",
    badge: "Soothing",
    tags: ["Heartleaf 77%", "Calming", "250ml"],
    desc: "77% heartleaf extract calms redness, soothes irritation and balances oil — the gentle daily toner sensitive skin swears by.",
  },
  {
    id: "cosrx-snail", brand: "COSRX",
    name: "Advanced Snail 96 Mucin Power Essence",
    size: "100ml · essence", price: 1750, mrp: 2100,
    category: "essence", img: "images/cosrx-snail.jpg",
    badge: "Bestseller",
    tags: ["Snail 96%", "Repair", "Hydrate"],
    desc: "96% snail mucin repairs, hydrates and restores bounce — the glow essence that made COSRX a K-beauty legend.",
  },

  /* ---------- SERUMS ---------- */
  {
    id: "skin1004-ampoule", brand: "SKIN1004",
    name: "Madagascar Centella Ampoule",
    size: "30ml · soothing serum", price: 1050, mrp: 1300,
    category: "serum", img: "images/skin1004-ampoule.jpg",
    badge: "Sensitive skin",
    tags: ["Centella", "Soothing", "Hydrate"],
    desc: "Pure Madagascar centella asiatica calms irritation, hydrates and balances — the ampoule for angry, sensitive skin.",
  },
  {
    id: "ordinary-ha", brand: "The Ordinary",
    name: "Hyaluronic Acid 2% + B5",
    size: "30ml · hydration", price: 950, mrp: 1100,
    category: "serum", img: "images/ordinary-ha.webp",
    badge: "Hydration",
    tags: ["Hyaluronic 2%", "B5", "Plump"],
    desc: "Multi-weight hyaluronic acid + vitamin B5 draws water into the skin — instant plumping hydration for every skin type.",
  },
  {
    id: "ordinary-peel", brand: "The Ordinary",
    name: "AHA 30% + BHA 2% Peeling Solution",
    size: "30ml · 10-min mask", price: 1250, mrp: 1450,
    category: "serum", img: "images/ordinary-peel.jpg",
    badge: "Glow mask",
    tags: ["AHA 30%", "BHA 2%", "Texture"],
    desc: "The viral red peeling solution — 10 minutes to smoother texture, brighter tone and visibly clearer skin. Use once a week.",
  },
  {
    id: "lrp-cicaplast", brand: "La Roche-Posay",
    name: "Cicaplast Baume B5+",
    size: "40ml · repair balm", price: 1650, mrp: 1900,
    category: "body", img: "images/lrp-cicaplast.jpg",
    badge: "Barrier repair",
    tags: ["Panthenol B5", "Madecassoside", "Repair"],
    desc: "The multi-purpose soothing balm — repairs dry, irritated and compromised skin anywhere on the face or body.",
  },

  /* ---------- SERUMS ---------- */
  {
    id: "anua-serum-30", brand: "Anua",
    name: "Niacinamide 10% + TXA 4% Dark Correcting Serum",
    size: "30ml · full size", price: 2450, mrp: 2900,
    category: "serum", img: "images/anua-serum.jpg",
    badge: "Icon", badgeHot: true,
    tags: ["Niacinamide 10%", "TXA 4%", "Dark spots"],
    desc: "The viral dark-spot eraser — niacinamide 10% + tranexamic acid 4% fades post-acne marks and evens tone. The full 30ml you'll repurchase.",
  },
  {
    id: "anua-serum-10", brand: "Anua",
    name: "Niacinamide 10% + TXA 4% Serum — Travel",
    size: "10ml · try-me size", price: 990, mrp: 1200,
    category: "serum", img: "images/anua-serum.jpg",
    badge: "Travel size",
    tags: ["10ml", "Try-me"],
    desc: "The same correcting formula in a travel-friendly 10ml — perfect first step before committing to the full size.",
  },
  {
    id: "dermaco-vitc", brand: "The Derma Co",
    name: "20% Vitamin C Face Serum",
    size: "20ml · for radiance", price: 1150, mrp: 1400,
    category: "serum", img: "images/dermaco-vitc.jpg",
    badge: "Brightening",
    tags: ["Vitamin C 20%", "Ferulic", "Hyaluronic"],
    desc: "20% vitamin C with ferulic + hyaluronic acid for day-and-night radiance — dermatologist tested, fragrance-free glow.",
  },
  {
    id: "minimalist-sa", brand: "Minimalist",
    name: "Salicylic Acid 02% Face Serum",
    size: "10ml · blackhead control", price: 850, mrp: 1050,
    category: "serum", img: "images/minimalist-sa.jpg",
    badge: "Clarifying",
    tags: ["Salicylic 2%", "Blackheads", "All skin"],
    desc: "Salicylic acid 2% with horehound extract reduces blackheads and controls excess oil — gentle enough for all skin types.",
  },

  /* ---------- BOOSTERS (ARENCIA) ---------- */
  {
    id: "arencia-pdrn", brand: "Arencia",
    name: "PDRN Booster Shot",
    size: "30ml · peptides + PDRN", price: 999,
    category: "booster", img: "images/arencia-pdrn.png",
    badge: "Rosy glow",
    tags: ["PDRN", "Peptides", "Cellular renewal"],
    desc: "PDRN complex + peptides unlocks cellular renewal for that rosy, peptide-powered glow — the deep moisture booster shot.",
  },
  {
    id: "arencia-vitc", brand: "Arencia",
    name: "Vitamin C Glutathione Booster Shot",
    size: "95ml · essence", price: 1200,
    category: "booster", img: "images/arencia-vitc.jpg",
    badge: "Radiance",
    tags: ["Vitamin C 5%", "Glutathione", "Dark spots"],
    desc: "5% vitamin C + glutathione essence unveils radiance and targets dark spots — Arencia's reveal-your-true-glow booster.",
  },

  /* ---------- HAIR ---------- */
  {
    id: "olaplex", brand: "Olaplex",
    name: "N°3 Hair Perfector",
    size: "100ml · bond repair", price: 3200, mrp: 3800,
    category: "hair", img: "images/olaplex.jpg",
    badge: "Bestseller",
    tags: ["Bond repair", "Damage", "Breakage"],
    desc: "The cult bond-repair treatment that rebuilds broken hair bonds — repairs damage and breakage in one weekly ritual.",
  },
  {
    id: "moroccanoil", brand: "Moroccanoil",
    name: "Moroccanoil Treatment",
    size: "100ml · argan oil", price: 2400, mrp: 2700,
    category: "hair", img: "images/moroccanoil.png",
    badge: "Shine",
    tags: ["Argan oil", "Frizz", "Shine"],
    desc: "The original argan-oil treatment — tames frizz, adds mirror shine and softness from root to tip in seconds.",
  },

  /* ---------- BODY & LIP ---------- */
  {
    id: "cerave", brand: "CeraVe",
    name: "Moisturizing Cream",
    size: "340g · face + body", price: 1450, mrp: 1650,
    category: "body", img: "images/cerave.jpg",
    badge: "Deep hydration",
    tags: ["Ceramides", "Hyaluronic", "340g"],
    desc: "Dermatologist-loved daily cream with 3 ceramides + hyaluronic acid — deep hydration for smooth, healthy skin, face and body.",
  },
  {
    id: "ordinary-niacinamide", brand: "The Ordinary",
    name: "Niacinamide 10% + Zinc 1%",
    size: "30ml · blemish control", price: 1050, mrp: 1200,
    category: "body", img: "images/ordinary-niacinamide.jpg",
    badge: "Bestseller",
    tags: ["Niacinamide", "Zinc", "Blemishes"],
    desc: "The Ordinary's iconic 10% niacinamide + 1% zinc serum — clears blemishes, refines pores and balances oil.",
  },
  {
    id: "lrp-effaclar", brand: "La Roche-Posay",
    name: "Effaclar Duo+ M",
    size: "40ml · acne care", price: 1850, mrp: 2100,
    category: "body", img: "images/lrp-effaclar.jpg",
    badge: "Acne",
    tags: ["Salicylic", "Niacinamide", "Oily skin"],
    desc: "Targeted cream that clears pimples, removes blackheads and prevents breakouts for oily, acne-prone and sensitive skin.",
  },
  {
    id: "vaseline-rouge", brand: "Vaseline × Emily in Paris",
    name: "Rouge Romance Tinted Lip Balm",
    size: "3g · limited edition", price: 450, mrp: 550,
    category: "body", img: "images/vaseline-rouge.jpg",
    badge: "Limited",
    tags: ["Tinted", "Rouge Romance", "3g"],
    desc: "Limited-edition Emily in Paris tinted balm — a soft rouge flush with Vaseline's signature care. Collector's favourite.",
  },
];

const BUNDLES = [
  {
    id: "spf-trio", name: "SPF Shield Trio",
    desc: "Three DOT & KEY sunscreens — barrier, cooling and brightening — for every single day of the week.",
    items: ["Blueberry Barrier Repair Sunscreen 80g", "Watermelon Cooling Sunscreen 50g", "Vitamin C+E Super Bright Sunscreen 50g"],
    price: 3490, mrp: 3770, img: "images/hero.jpg",
  },
  {
    id: "glass-glow-duo", name: "Glass Glow Duo",
    desc: "Fade dark spots with Anua's Niacinamide + TXA serum, then lock the glow in with Vitamin C+E SPF.",
    items: ["Anua Niacinamide 10% + TXA 4% Serum 30ml", "Vitamin C+E Super Bright Sunscreen 50g"],
    price: 3490, mrp: 3740, img: "images/duo.jpg",
  },
];

/* ---------- State ---------- */
let bag = JSON.parse(localStorage.getItem("skin-soul-bag") || "{}");
let wish = new Set(JSON.parse(localStorage.getItem("skin-soul-wish") || "[]"));
let edits = JSON.parse(localStorage.getItem("skin-soul-edits") || "{}"); // owner edits (name/price/img/…)
let activeFilter = "all";
let query = "";

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function money(n) {
  return "৳" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), 2400);
}

function saveBag() { localStorage.setItem("skin-soul-bag", JSON.stringify(bag)); }
function saveWish() { localStorage.setItem("skin-soul-wish", JSON.stringify([...wish])); }
function saveEdits() { localStorage.setItem("skin-soul-edits", JSON.stringify(edits)); }
function bagCount() { return Object.values(bag).reduce((a, b) => a + b, 0); }

// Owner-panel edits overlay: merged item = base + saved edits
function merged(item) {
  const e = edits[item.id];
  if (!e) return item;
  const out = Object.assign({}, item);
  for (const k in e) {
    if (e[k] === null) delete out[k]; else out[k] = e[k];
  }
  return out;
}
function getProduct(id) {
  const base = PRODUCTS.find((p) => p.id === id) || BUNDLES.find((b) => b.id === id);
  return base ? merged(base) : null;
}

/* ---------- Cards ---------- */
function cardFor(item, isBundle) {
  const div = document.createElement("article");
  div.className = isBundle ? "b-card" : "p-card";
  div.dataset.category = isBundle ? "bundle" : item.category;

  if (isBundle) {
    const save = item.mrp - item.price;
    div.innerHTML = `
      <div class="b-media"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="b-body">
        <h3>${item.name}</h3>
        <p class="b-desc">${item.desc}</p>
        <ul class="b-items">${item.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        <div class="b-price-row">
          <span class="b-price">${money(item.price)}</span>
          <span class="b-mrp">${money(item.mrp)}</span>
          <span class="b-save">Save ৳${save}</span>
        </div>
        <button class="btn btn-primary" data-add="${item.id}">Add the ritual to bag</button>
      </div>`;
  } else {
    const mrpBlock = item.mrp
      ? `<span class="p-mrp">${money(item.mrp)}</span><span class="p-save">Save ${money(item.mrp - item.price)}</span>`
      : "";
    div.innerHTML = `
      <div class="p-media" data-quick="${item.id}" role="button" tabindex="0" aria-label="Quick view ${item.name}">
        ${item.badge ? `<span class="p-badge${item.badgeHot ? " hot" : ""}">${item.badge}</span>` : ""}
        <button class="p-wish${wish.has(item.id) ? " on" : ""}" data-wish="${item.id}" aria-label="Save ${item.name}">♥</button>
        <span class="p-price-tag${item.mrp ? " was" : ""}">${money(item.price)}</span>
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="p-body">
        <span class="p-brand">${item.brand}</span>
        <h3 class="p-name" data-quick="${item.id}" role="button" tabindex="0">${item.name}</h3>
        <span class="p-size">${item.size}</span>
        <div class="p-tags">${item.tags.map((t) => `<span class="p-tag">${t}</span>`).join("")}</div>
        <div class="p-price-row">
          <span class="p-price">${money(item.price)}</span>
          ${mrpBlock}
        </div>
        <button class="p-add" data-add="${item.id}">Add to bag</button>
      </div>`;
  }
  return div;
}

/* ---------- Render ---------- */
function filteredProducts() {
  let list;
  if (activeFilter === "bundle") list = BUNDLES.map(merged);
  else if (activeFilter === "wish") list = PRODUCTS.map(merged).filter((p) => wish.has(p.id));
  else list = PRODUCTS.map(merged).filter((p) => activeFilter === "all" || p.category === activeFilter);

  if (activeFilter !== "bundle" && query) {
    list = list.filter((p) =>
      (p.name + " " + p.brand + " " + (p.tags || []).join(" ") + " " + (p.size || ""))
        .toLowerCase().includes(query)
    );
  }
  return { list, isBundle: activeFilter === "bundle" };
}

function renderShop() {
  const grid = $("#productGrid");
  grid.innerHTML = "";
  const { list, isBundle } = filteredProducts();
  grid.classList.toggle("bundle-mode", isBundle);
  list.forEach((p) => grid.appendChild(cardFor(p, isBundle)));
  if (!list.length) {
    grid.innerHTML = `<p class="empty-bag" style="grid-column:1/-1">${activeFilter === "wish" && !query ? "You haven't saved anything yet — tap ♥ on any product." : "কিছু পাওয়া যায়নি — অন্য কিছু খুঁজে দেখুন ✦"}</p>`;
  }
}

function renderBundles() {
  const grid = $("#bundleGrid");
  grid.innerHTML = "";
  BUNDLES.forEach((b) => grid.appendChild(cardFor(merged(b), true)));
}

function renderWishBadge() {
  const el = $("#wishCount");
  el.hidden = wish.size === 0;
  el.textContent = wish.size;
}

/* ---------- Bag UI ---------- */
function renderBag() {
  const count = bagCount();
  const countEl = $("#bagCount");
  countEl.hidden = count === 0;
  countEl.textContent = count;
  $("#bagCountInline").textContent = count;

  const body = $("#drawerBody");
  const ids = Object.keys(bag);
  body.innerHTML = "";
  if (!ids.length) {
    body.innerHTML = `<p class="empty-bag">Your bag is empty — your skin deserves better. ✦</p>`;
    $("#drawerFoot").hidden = true;
    return;
  }

  ids.forEach((id) => {
    const item = getProduct(id);
    if (!item) return;
    const qty = bag[id];
    const row = document.createElement("div");
    row.className = "bag-item";
    row.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <div class="bi-name">${item.name}</div>
        <div class="bi-size">${item.size || "Bundle"} · ${money(item.price)}</div>
        <div class="qty">
          <button data-dec="${id}" aria-label="Decrease">−</button>
          <span>${qty}</span>
          <button data-inc="${id}" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="bi-remove" data-rm="${id}" aria-label="Remove">×</button>`;
    body.appendChild(row);
  });

  const subtotal = ids.reduce((s, id) => s + (getProduct(id)?.price || 0) * bag[id], 0);
  const shipping = subtotal >= FREE_SHIP_OVER ? 0 : SHIP_FEE;
  $("#subtotal").textContent = money(subtotal);
  $("#delivery").textContent = shipping === 0 ? "FREE" : money(shipping);
  $("#total").textContent = money(subtotal + shipping);
  $("#freeShipNote").textContent =
    shipping === 0 ? "✦ You've unlocked free delivery!" : `Add ${money(FREE_SHIP_OVER - subtotal)} more for free delivery.`;
  $("#drawerFoot").hidden = false;
}

function openDrawer() {
  $("#bagDrawer").classList.add("open");
  $("#bagDrawer").setAttribute("aria-hidden", "false");
  $("#drawerOverlay").hidden = false;
  requestAnimationFrame(() => $("#drawerOverlay").classList.add("show"));
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  $("#bagDrawer").classList.remove("open");
  $("#bagDrawer").setAttribute("aria-hidden", "true");
  $("#drawerOverlay").classList.remove("show");
  setTimeout(() => ($("#drawerOverlay").hidden = true), 300);
  document.body.style.overflow = "";
}

function addToBag(id, qty = 1) {
  bag[id] = (bag[id] || 0) + qty;
  saveBag();
  renderBag();
  toast("✦ Added to your bag");
}

function checkout() {
  const ids = Object.keys(bag);
  if (!ids.length) return;
  const lines = ids.map((id) => {
    const it = getProduct(id);
    return `• ${it.name} × ${bag[id]} — ${money(it.price * bag[id])}`;
  }).join("\n");
  const subtotal = ids.reduce((s, id) => s + (getProduct(id)?.price || 0) * bag[id], 0);
  const shipping = subtotal >= FREE_SHIP_OVER ? 0 : SHIP_FEE;
  const total = subtotal + shipping;
  const msg =
    `Hi Skin & Soul! ✦ I'd like to order:\n\n${lines}\n\n` +
    `Subtotal: ${money(subtotal)}\nDelivery: ${shipping === 0 ? "FREE" : money(shipping)}\n` +
    `Total: ${money(total)}\n\nName:\nAddress:\nPhone:`;
  window.open(`https://m.me/61581175562401?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}

/* ---------- Quick view ---------- */
let qvId = null, qvQty = 1;

function openQuick(id) {
  const item = getProduct(id);
  if (!item || item.items) return; // bundles না
  qvId = id;
  qvQty = 1;
  $("#qvImg").src = item.img;
  $("#qvImg").alt = item.name;
  $("#qvBrand").textContent = item.brand;
  $("#qvName").textContent = item.name;
  $("#qvSize").textContent = item.size || "";
  $("#qvDesc").textContent = item.desc || "";
  $("#qvTags").innerHTML = (item.tags || []).map((t) => `<span class="p-tag">${t}</span>`).join("");
  $("#qvPrice").textContent = money(item.price);
  $("#qvMrp").textContent = item.mrp ? money(item.mrp) : "";
  $("#qvMrp").style.display = item.mrp ? "" : "none";
  $("#qvSave").textContent = item.mrp ? `Save ${money(item.mrp - item.price)}` : "";
  $("#qvQty").textContent = qvQty;
  $("#qvOverlay").hidden = false;
  requestAnimationFrame(() => $("#qvOverlay").classList.add("show"));
  document.body.style.overflow = "hidden";
}
function closeQuick() {
  $("#qvOverlay").classList.remove("show");
  setTimeout(() => ($("#qvOverlay").hidden = true), 300);
  document.body.style.overflow = "";
}

/* ---------- Owner panel ([D10]) ---------- */
const ALL_ITEMS = () => [...PRODUCTS.map(merged), ...BUNDLES.map(merged)];

function openAdmin() {
  renderAdmin();
  $("#adminOverlay").hidden = false;
  requestAnimationFrame(() => $("#adminOverlay").classList.add("show"));
  document.body.style.overflow = "hidden";
}
function closeAdmin() {
  $("#adminOverlay").classList.remove("show");
  setTimeout(() => ($("#adminOverlay").hidden = true), 300);
  document.body.style.overflow = "";
}

function renderAdmin() {
  const list = $("#adminList");
  list.innerHTML = ALL_ITEMS().map((p) => `
    <div class="admin-row" data-id="${p.id}">
      <img class="ad-thumb" src="${p.img}" alt="">
      <input class="ad-img" value="${p.img}" title="ছবির লিংক">
      <div class="ad-fields">
        <input class="ad-name" value="${p.name.replace(/"/g, "&quot;")}" title="নাম">
        <div class="ad-row2">
          <input class="ad-price" type="number" min="0" value="${p.price}" title="দাম (৳)">
          <input class="ad-mrp" type="number" min="0" value="${p.mrp || ""}" placeholder="পুরনো দাম" title="কাটা দাম">
          <input class="ad-cat" value="${p.category}" title="ক্যাটাগরি">
          <input class="ad-badge" value="${p.badge || ""}" placeholder="ব্যাজ" title="ব্যাজ">
        </div>
      </div>
    </div>`).join("");
}

function collectAdmin() {
  const map = {};
  $$(".admin-row").forEach((r) => {
    const id = r.dataset.id;
    const base = PRODUCTS.find((p) => p.id === id) || BUNDLES.find((b) => b.id === id);
    if (!base) return;
    const val = (sel) => r.querySelector(sel).value.trim();
    const num = (sel) => { const n = Number(val(sel)); return Number.isFinite(n) ? n : null; };
    const o = {};
    const name = val(".ad-name");
    const price = num(".ad-price");
    const mrpRaw = val(".ad-mrp");
    const mrp = mrpRaw === "" ? null : (Number.isFinite(Number(mrpRaw)) ? Number(mrpRaw) : undefined);
    const cat = val(".ad-cat");
    const img = val(".ad-img");
    const badge = val(".ad-badge");

    if (name && name !== base.name) o.name = name;
    if (price !== null && price !== base.price) o.price = price;
    if (mrp === null) { if (base.mrp) o.mrp = null; }
    else if (mrp !== undefined && mrp !== base.mrp) o.mrp = mrp;
    if (cat && cat !== base.category) o.category = cat;
    if (img && img !== base.img) o.img = img;
    if (badge !== base.badge) o.badge = badge === "" ? null : badge;

    if (Object.keys(o).length) map[id] = o; else delete map[id];
  });
  return map;
}

function applyAdmin() {
  edits = collectAdmin();
  saveEdits();
  renderShop();
  renderBundles();
  renderBag();
  renderWishBadge();
  toast("✦ Saved — changes are live");
}

function exportAdmin() {
  const blob = new Blob([JSON.stringify(collectAdmin(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "skin-soul-edits.json";
  a.click();
  URL.revokeObjectURL(a.href);
  toast("✦ Exported skin-soul-edits.json");
}

function importAdmin(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      edits = JSON.parse(reader.result) || {};
      saveEdits();
      renderAdmin();
      renderShop();
      renderBundles();
      renderBag();
      toast("✦ Imported — changes are live");
    } catch (err) {
      toast("Import failed — invalid JSON");
    }
  };
  reader.readAsText(file);
}

function resetAdmin() {
  edits = {};
  saveEdits();
  renderAdmin();
  renderShop();
  renderBundles();
  renderBag();
  toast("✦ Reset to original catalog");
}

/* ---------- Countdown ---------- */
function initCountdown() {
  const KEY = "skin-soul-offer-end";
  let end = Number(localStorage.getItem(KEY));
  if (!end || end < Date.now()) {
    end = Date.now() + 14 * 24 * 60 * 60 * 1000;
    localStorage.setItem(KEY, String(end));
  }
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const diff = Math.max(0, end - Date.now());
    $("#cdD").textContent = pad(Math.floor(diff / 86400000));
    $("#cdH").textContent = pad(Math.floor((diff % 86400000) / 3600000));
    $("#cdM").textContent = pad(Math.floor((diff % 3600000) / 60000));
    $("#cdS").textContent = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const wishBtn = e.target.closest("[data-wish]");
  if (wishBtn) {
    const id = wishBtn.dataset.wish;
    if (wish.has(id)) wish.delete(id); else wish.add(id);
    saveWish();
    renderWishBadge();
    toast(wish.has(id) ? "♥ Saved to your wishlist" : "Removed from wishlist");
    renderShop();
    return;
  }

  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    addToBag(addBtn.dataset.add);
    const prodBtn = addBtn.closest(".p-add");
    if (prodBtn) {
      prodBtn.classList.add("added");
      prodBtn.textContent = "Added ✓";
      setTimeout(() => { prodBtn.classList.remove("added"); prodBtn.textContent = "Add to bag"; }, 1400);
    }
    return;
  }

  const quick = e.target.closest("[data-quick]");
  if (quick) { openQuick(quick.dataset.quick); return; }

  const inc = e.target.closest("[data-inc]");
  if (inc) { bag[inc.dataset.inc] = (bag[inc.dataset.inc] || 0) + 1; saveBag(); renderBag(); return; }
  const dec = e.target.closest("[data-dec]");
  if (dec) {
    const id = dec.dataset.dec;
    bag[id] = (bag[id] || 1) - 1;
    if (bag[id] <= 0) delete bag[id];
    saveBag(); renderBag(); return;
  }
  const rm = e.target.closest("[data-rm]");
  if (rm) { delete bag[rm.dataset.rm]; saveBag(); renderBag(); return; }

  const filterBtn = e.target.closest(".filter-btn");
  if (filterBtn) {
    $$(".filter-btn").forEach((b) => {
      b.classList.toggle("is-active", b === filterBtn);
      b.setAttribute("aria-selected", b === filterBtn ? "true" : "false");
    });
    activeFilter = filterBtn.dataset.filter;
    renderShop();
    return;
  }

  const filterLink = e.target.closest("[data-filter-link]");
  if (filterLink) {
    const f = filterLink.dataset.filterLink;
    const btn = $(`.filter-btn[data-filter="${f}"]`);
    if (btn) btn.click();
    return;
  }
});

/* Keyboard quick-view on Enter */
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches("[data-quick]")) {
    e.preventDefault();
    openQuick(e.target.dataset.quick);
  }
});

$("#searchInput").addEventListener("input", (e) => {
  const t = e.target.value.trim().toUpperCase();
  if (t === "[D10]" || t === "D10") {
    e.target.value = "";
    openAdmin();
    return;
  }
  query = e.target.value.trim().toLowerCase();
  renderShop();
});

$("#wishBtn").addEventListener("click", () => {
  activeFilter = "wish";
  $$(".filter-btn").forEach((b) => {
    const on = b.dataset.filter === "wish";
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  renderShop();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

$("#bagBtn").addEventListener("click", openDrawer);
$("#drawerClose").addEventListener("click", closeDrawer);
$("#drawerOverlay").addEventListener("click", closeDrawer);
$("#checkoutBtn").addEventListener("click", checkout);

$("#qvClose").addEventListener("click", closeQuick);
$("#qvOverlay").addEventListener("click", (e) => { if (e.target === $("#qvOverlay")) closeQuick(); });
$("#qvDec").addEventListener("click", () => { if (qvQty > 1) { qvQty--; $("#qvQty").textContent = qvQty; } });
$("#qvInc").addEventListener("click", () => { qvQty++; $("#qvQty").textContent = qvQty; });
$("#qvAdd").addEventListener("click", () => {
  if (!qvId) return;
  addToBag(qvId, qvQty);
  closeQuick();
});

/* Owner panel wiring */
$("#adminClose").addEventListener("click", closeAdmin);
$("#adminOverlay").addEventListener("click", (e) => { if (e.target === $("#adminOverlay")) closeAdmin(); });
$("#adminSave").addEventListener("click", applyAdmin);
$("#adminExport").addEventListener("click", exportAdmin);
$("#adminImport").addEventListener("change", (e) => { if (e.target.files[0]) importAdmin(e.target.files[0]); });
$("#adminReset").addEventListener("click", resetAdmin);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeDrawer(); closeQuick(); closeAdmin(); }
});

/* Menu */
$("#menuBtn").addEventListener("click", () => {
  const nav = $("#mobileNav");
  const open = nav.hidden;
  nav.hidden = !open;
  $("#menuBtn").setAttribute("aria-expanded", String(open));
});
$$(".mobile-nav a").forEach((a) => a.addEventListener("click", () => {
  $("#mobileNav").hidden = true;
  $("#menuBtn").setAttribute("aria-expanded", "false");
}));

/* Header shadow */
window.addEventListener("scroll", () => {
  $("#siteHeader").classList.toggle("scrolled", window.scrollY > 10);
});

/* ---------- Init ---------- */
$("#year").textContent = new Date().getFullYear();
renderShop();
renderBundles();
renderBag();
renderWishBadge();
initCountdown();
initReveal();
