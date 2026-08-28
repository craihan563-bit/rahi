(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const MAP_URL = "https://www.google.com/maps?cid=1437954348720770008";

  const photos = [
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipNiBiYm6tb44SpTkqzZXlZJlcGjrs6dcoRVMsrc=w1800-h1400-k-no",
      alt: "চিল আউট ক্যাফের থাই থিক স্যুপ",
      title: "Thai Thick Soup",
      source: "Google Maps · মালিকের পোস্ট · ৭ মে ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipMZYwfoljqA4v-cqmDquFyhJcRW9_olXE7d2rV4=w1600-h1600-k-no",
      alt: "এগ ফ্রাইড রাইস, থাই ফ্রাইড চিকেন, সবজি ও সালাদের সেট মেনু",
      title: "Set Menu 01",
      source: "Google Maps · মালিকের পোস্ট · ২৭ এপ্রিল ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipN7r691QwFES2CuUEUjYlVdhPzYaVn3qnWL55e7=w1600-h1600-k-no",
      alt: "চিকেন, ক্যাপসিকাম, মাশরুম ও চিজের ওভেন বেকড পাস্তা",
      title: "Oven Baked Pasta",
      source: "Google Maps · মালিকের পোস্ট · ২৭ এপ্রিল ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipM7jEI1wqEi2GkK0rfXL9wpK0xwVdiQcd1IisaL=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ১",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০১",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipPBciPpE3o-OkJLG4VJNjk0XwNnzcg5-mct1H-z=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ২",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০২",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipMdLAieP6Zn_neocwtFn-Rgi1m5t882ousJNEf-=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৩",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৩",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipPB5icTLyecuZ9S827zcLJPXBrYTMrj383BlbkV=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৪",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৪",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipM2WqgE66Kft84LFLCIHK0qVV_S8xUYZjfFvCwM=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৫",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৫",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipOxSPFaREfocGd5qUDpFVN_SSmIustiU9CWDTj9=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৬",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৬",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipPvMADIQyNR6bBnLqIPUfZl6Acahy547gqxpnd-=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৭",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৭",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/geougc/AF1QipPUABAFWF50MkUFPLKhYUrCsccX8Pf2OTqHBrKs=w1400-h1900-k-no",
      alt: "চিল আউট ক্যাফের অফিশিয়াল মেনু, পৃষ্ঠা ৮",
      title: "অফিশিয়াল মেনু · পৃষ্ঠা ০৮",
      source: "Google Maps · মালিকের আপলোড · ২৪ মার্চ ২০২৬",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5Reu_uwogEU4KtO1d5Es-USUyB49jVSq9oC8mMHNHNrRnMtXBYF2VMhGx10h3u1n-_X0LvE7jgflxn9kA5re6c7uxTtONGgaG3Kw6Spf-Q1v1SxOJp8k17aSBrsSOBSuGtXqt=w1800-h1200-k-no",
      alt: "চিল আউট ক্যাফে & পিৎজার Google Maps ছবি",
      title: "Chill Out Cafe & Pizza",
      source: "Google Maps · ব্যবসায়িক প্রোফাইল",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWltY62AzPKpezKbElPCYWM0n8Hp3U1hOklIbEQSDc27JLHfGsPSeHp5EWEM7dO1cyfMssXZMhJWx11z91wWelQWVXyow5Fyvrhrfrf7MzRn1WlP7lm-9NUOubQystwrumJEikwYgA=w1600-h1600-k-no",
      alt: "চিল আউট ক্যাফের Google Maps ভিডিও কভার",
      title: "ব্যবসার ভিডিও কভার",
      source: "Google Maps · ২১ মে ২০২৪",
    },
    {
      src: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ALTQ77Iy9ywlz9tiqZ5sEg&cb_client=maps_sv.tactile&w=1800&h=1100&yaw=298.17505&pitch=0&thumbfov=100",
      alt: "Google Street View-এ চিল আউট ক্যাফের অবস্থান",
      title: "প্রেমবাগানে আমাদের অবস্থান",
      source: "Google Street View · ২৭ নভেম্বর ২০২৫",
    },
  ];

  // Header state and mobile navigation
  const header = $(".site-header");
  const topbar = $(".topbar");
  const menuButton = $(".menu-toggle");
  const nav = $(".site-nav");

  const setHeaderState = () => {
    const sticky = window.scrollY > 74;
    header?.classList.toggle("sticky", sticky);
    header?.classList.toggle("top-hidden", sticky);
  };

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
  };

  menuButton?.addEventListener("click", () => {
    const nextState = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(nextState));
    nav?.classList.toggle("open", nextState);
    document.body.classList.toggle("nav-open", nextState);
  });

  $$(".site-nav a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  // Reveal elements when they enter the viewport.
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // Highlight the current page section in the desktop nav.
  const sectionLinks = new Map(
    $$(".site-nav a[href^='#']").map((link) => [link.getAttribute("href").slice(1), link]),
  );
  const sections = [...sectionLinks.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        sectionLinks.forEach((link, id) => link.classList.toggle("active", id === current.target.id));
      },
      { threshold: [0.2, 0.45], rootMargin: "-20% 0px -58%" },
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Official menu carousel
  const menuTrack = $("#menu-track");
  const scrollMenu = (direction) => {
    if (!menuTrack) return;
    const page = $(".menu-page", menuTrack);
    const amount = page ? page.getBoundingClientRect().width + 15 : 310;
    menuTrack.scrollBy({ left: amount * direction, behavior: "smooth" });
  };
  $(".carousel-prev")?.addEventListener("click", () => scrollMenu(-1));
  $(".carousel-next")?.addEventListener("click", () => scrollMenu(1));

  // Image lightbox
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightbox-image");
  const captionTitle = $("#lightbox-caption strong");
  const captionSource = $("#lightbox-caption span");
  const closeLightboxButton = $(".lightbox-close");
  let currentPhoto = 0;
  let lastFocusedElement = null;

  const showPhoto = (index) => {
    currentPhoto = (index + photos.length) % photos.length;
    const photo = photos[currentPhoto];
    if (!lightboxImage || !captionTitle || !captionSource) return;
    lightboxImage.classList.remove("image-error");
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt;
    captionTitle.textContent = photo.title;
    captionSource.textContent = `${photo.source} · ${currentPhoto + 1}/${photos.length}`;
  };

  const openLightbox = (index, trigger) => {
    if (!lightbox) return;
    lastFocusedElement = trigger || document.activeElement;
    showPhoto(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    window.setTimeout(() => closeLightboxButton?.focus(), 30);
  };

  const closeLightbox = () => {
    if (!lightbox?.classList.contains("open")) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lightboxImage) lightboxImage.src = "";
    lastFocusedElement?.focus?.();
  };

  $$('[data-lightbox]').forEach((trigger) => {
    const open = () => openLightbox(Number(trigger.dataset.lightbox), trigger);
    trigger.addEventListener("click", open);
    if (trigger.getAttribute("role") === "button" && trigger.tagName !== "BUTTON") {
      trigger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    }
  });

  closeLightboxButton?.addEventListener("click", closeLightbox);
  $(".lightbox-prev")?.addEventListener("click", () => showPhoto(currentPhoto - 1));
  $(".lightbox-next")?.addEventListener("click", () => showPhoto(currentPhoto + 1));
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeLightbox();
    }
    if (!lightbox?.classList.contains("open")) return;
    if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
    if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
    if (event.key === "Tab") {
      const controls = $$("button", lightbox).filter((button) => !button.disabled);
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Copy the verified full address.
  const copyButton = $("#copy-address");
  const toast = $("#toast");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  };

  copyButton?.addEventListener("click", async () => {
    const value = copyButton.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast("ঠিকানা কপি হয়েছে");
    } catch {
      const helper = document.createElement("textarea");
      helper.value = value;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand("copy");
      helper.remove();
      showToast(copied ? "ঠিকানা কপি হয়েছে" : "কপি করা যায়নি—Maps খুলুন");
    }
  });

  // Dhaka-local opening state. Google Maps lists 11:00–23:00 daily.
  const bnDigits = (input) => String(input).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  const updateHours = () => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
    const minute = Number(parts.find((part) => part.type === "minute")?.value || 0);
    const open = hour >= 11 && hour < 23;
    const remainingMinutes = open ? 23 * 60 - (hour * 60 + minute) : 0;
    let label;
    if (open && remainingMinutes <= 60) label = "খোলা · শিগগির বন্ধ হবে";
    else if (open) label = "এখন খোলা";
    else if (hour < 11) label = "বন্ধ · সকাল ১১টায় খুলবে";
    else label = "বন্ধ · কাল সকাল ১১টায় খুলবে";

    const topStatus = $("#open-status");
    const largeStatus = $("#open-status-large");
    if (topStatus) topStatus.textContent = label;
    if (largeStatus) largeStatus.textContent = label;
    $$(".status-dot").forEach((dot) => dot.classList.toggle("closed", !open));

    const formattedTime = new Intl.DateTimeFormat("bn-BD", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
    const timeElement = $("#dhaka-time");
    if (timeElement) timeElement.textContent = `${bnDigits(formattedTime)} · ঢাকা সময়`;
  };
  updateHours();
  window.setInterval(updateHours, 60_000);

  // Graceful fallback if a third-party image endpoint is temporarily unavailable.
  const fallbackSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#29483c"/><stop offset="1" stop-color="#14231d"/></linearGradient></defs>
      <rect width="1000" height="800" fill="url(#g)"/>
      <circle cx="760" cy="120" r="220" fill="#d9ef76" opacity=".14"/>
      <circle cx="180" cy="700" r="280" fill="#f2643b" opacity=".17"/>
      <text x="500" y="350" text-anchor="middle" fill="#d9ef76" font-family="Arial,sans-serif" font-size="72" font-weight="800">CHILL OUT</text>
      <text x="500" y="420" text-anchor="middle" fill="#f6f0e4" font-family="Arial,sans-serif" font-size="25" letter-spacing="6">CAFE &amp; PIZZA</text>
      <text x="500" y="500" text-anchor="middle" fill="#f6f0e4" opacity=".6" font-family="Arial,sans-serif" font-size="18">View original photos on Google Maps</text>
    </svg>`);
  const fallbackSrc = `data:image/svg+xml;charset=UTF-8,${fallbackSvg}`;

  $$('img:not([src^="data:"])').forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = "true";
      image.classList.add("image-error");
      image.src = fallbackSrc;
    });
  });
  lightboxImage?.addEventListener("error", () => {
    if (lightboxImage.dataset.fallbackApplied === lightboxImage.src) return;
    lightboxImage.dataset.fallbackApplied = lightboxImage.src;
    lightboxImage.classList.add("image-error");
    lightboxImage.src = fallbackSrc;
  });

  // Current year and a small convenience for map attribution links.
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  $$("[data-map-link]").forEach((link) => (link.href = MAP_URL));

  // The topbar is intentionally referenced to avoid layout tooling removing it.
  void topbar;
})();
