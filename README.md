# Skin & Soul

Responsive, editorial one-page storefront for **Skin & Soul** — an authentic Korean & global skincare shop based in Dhaka, Bangladesh.

## Verified business information

- **Facebook:** <https://www.facebook.com/people/Skin-Soul/61581175562401/>
- **Messenger orders:** <https://m.me/61581175562401>
- **Location:** Dhaka, Bangladesh
- **Category:** Beauty, cosmetic & personal care
- **Community:** 2.8K followers

Products found on the page (public photo captions / album alt-text):

- **Sunscreen:** DOT & KEY Blueberry Hydrate Barrier Repair, Watermelon Cooling, Vitamin C+E Super Bright (SPF 50+ PA++++)
- **Serums:** Anua Niacinamide 10% + TXA 4% Dark Correcting, The Derma Co 20% Vitamin C, Minimalist Salicylic Acid 02%
- **Boosters:** Arencia PDRN Booster Shot (৳999), Arencia Vitamin C Glutathione Booster Shot (৳1,200)
- **Hair:** Olaplex N°3 Hair Perfector, Moroccanoil Treatment
- **Body & Lip:** CeraVe Moisturizing Cream, The Ordinary Niacinamide 10% + Zinc 1%, La Roche-Posay Effaclar Duo+ M, Vaseline × Emily in Paris Rouge Romance

> ⚠️ Facebook blocks the exact price list from logged-out visitors. Prices shown in `script.js` (`PRODUCTS` / `BUNDLES`) are realistic Bangladesh market prices (except the two Arencia boosters, which are captioned on the page). Edit them in one place and the whole site updates.

## Live

- **GitHub Pages:** <https://craihan563-bit.github.io/rahi/>

## Owner panel

Search box-এ **`[D10]`** (বা `D10`) লিখলে owner panel খোলে — সেখানে দাম, নাম, ছবির লিংক, ব্যাজ, ক্যাটাগরি বদলে **Save changes** চাপলে সাথে সাথে সাইটে লেগে যায় (এই ব্রাউজারে saved থাকে)। **Export JSON** দিয়ে ব্যাকআপ, **Import JSON** দিয়ে আবার ফেরত নেওয়া যায়, **Reset all** দিয়ে আসল অবস্থায় ফেরা যায়।

## Run locally

```bash
npm run dev
```

The dependency-free Node server binds to `0.0.0.0` and uses port `4173` by default. Set `PORT` to override it.

## Validate and build

```bash
npm run check
npm run build
```

The build command writes deployable static files (including `images/`) to `dist/`.
