(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- آیکون‌ها ---------- */
  var ICONS = {
    interior: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 14a2 2 0 0 1 4 0v1h12v-1a2 2 0 0 1 4 0v4H2z"/><path d="M5 18v2M19 18v2"/></svg>',
    landscape: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V11"/><path d="M12 11c-4 0-6-2.5-6-6 4 0 6 2.5 6 6zM12 14c3.500 0 6-2 6-5.500-3.500 0-6 2-6 5.500z"/><path d="M4 21h16"/></svg>',
    outdoor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l5-9 4 6 3-4 6 7z"/><circle cx="17" cy="6" r="2"/></svg>',
    architecture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.200 7-11a7 7 0 0 0-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.800 7L3 21l2-5.500A8 8 0 1 1 21 12z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r=".8" fill="#fff"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  /* ---------- هیرو و برند ---------- */
  var b = S.brand;
  $("heroBg").style.backgroundImage = "url('" + b.heroImage + "')";
  $("heroLogo").src = b.logo;
  $("heroTitle").textContent = b.title + " — " + b.faName;
  $("heroTagline").textContent = b.tagline;
  $("footLogo").src = b.logo;
  $("footText").textContent = "© " + new Date().getFullYear() + " " + b.faName + " · همه‌ی حقوق محفوظ است";
  document.title = b.faName + " | " + b.title;

  /* ---------- خدمات ---------- */
  $("servicesGrid").innerHTML = S.services.map(function (s, i) {
    return '<article class="service reveal" style="transition-delay:' + i * 90 + 'ms">' +
      '<div class="service__icon">' + (ICONS[s.icon] || ICONS.architecture) + '</div>' +
      '<h3>' + esc(s.title) + '</h3><small>' + esc(s.en) + '</small><p>' + esc(s.text) + '</p></article>';
  }).join("");

  /* ---------- درباره ---------- */
  var a = S.about;
  $("aboutImg").src = a.image;
  $("aboutImg2").src = a.secondImage;
  $("aboutHeading").textContent = a.heading;
  $("aboutText").innerHTML = a.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("aboutStats").innerHTML = a.stats.map(function (s) {
    return "<li><strong>" + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></li>";
  }).join("");

  /* ---------- تماس ---------- */
  var c = S.contact, cards = [];
  if (c.phone) cards.push('<a class="ccard" href="tel:' + esc(c.phone) + '"><span class="ccard__ico">' + ICONS.phone + '</span><span><small>تلفن</small><strong class="ltr">' + esc(c.phone) + '</strong></span></a>');
  if (c.whatsapp) cards.push('<a class="ccard" target="_blank" rel="noopener" href="https://wa.me/' + esc(c.whatsapp) + '"><span class="ccard__ico">' + ICONS.chat + '</span><span><small>پیام در واتساپ</small><strong>گفتگو با من</strong></span></a>');
  if (c.instagram) cards.push('<a class="ccard" target="_blank" rel="noopener" href="' + esc(c.instagram) + '"><span class="ccard__ico">' + ICONS.insta + '</span><span><small>اینستاگرام</small><strong>صفحه‌ی من</strong></span></a>');
  if (c.email) cards.push('<a class="ccard" href="mailto:' + esc(c.email) + '"><span class="ccard__ico">' + ICONS.mail + '</span><span><small>ایمیل</small><strong class="ltr">' + esc(c.email) + '</strong></span></a>');
  if (c.address) cards.push('<div class="ccard"><span class="ccard__ico">' + ICONS.pin + '</span><span><small>آدرس</small><strong>' + esc(c.address) + '</strong></span></div>');
  $("contactCards").innerHTML = cards.join("");

  /* ---------- نمونه‌کارها (فولدرها) ---------- */
  var current = "all";
  var folderById = {};
  S.folders.forEach(function (f) { folderById[f.id] = f; });

  function count(id) {
    return S.projects.filter(function (p) { return id === "all" || p.folder === id; }).length;
  }

  function renderTabs() {
    var all = [{ id: "all", title: "همه" }].concat(S.folders);
    $("folderTabs").innerHTML = all.map(function (f) {
      return '<button class="folder' + (f.id === current ? " is-active" : "") + '" role="tab" data-f="' + esc(f.id) + '">' +
        ICONS.folder + esc(f.title) + "<em>" + count(f.id) + "</em></button>";
    }).join("");
  }

  function renderProjects() {
    var list = S.projects
      .map(function (p, i) { p._i = i; return p; })
      .filter(function (p) { return current === "all" || p.folder === current; });
    $("projectsGrid").innerHTML = list.length ? list.map(function (p, n) {
      var f = folderById[p.folder];
      return '<article class="project" data-i="' + p._i + '" style="animation-delay:' + n * 80 + 'ms" tabindex="0">' +
        '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy">' +
        '<div class="project__over"><span class="project__tag">' + esc(f ? f.title : "") + "</span>" +
        '<h3 class="project__title">' + esc(p.title) + '</h3><span class="project__more">مشاهده جزئیات ←</span></div>' +
        (p.video ? '<span class="project__video" title="ویدیو">▶ ویدیو</span>' : "") + '</article>';
    }).join("") : '<p class="empty">هنوز پروژه‌ای در این فولدر نیست.</p>';
  }

  $("folderTabs").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-f]");
    if (!btn) return;
    current = btn.dataset.f;
    renderTabs(); renderProjects();
  });

  /* ---------- مودال پروژه ---------- */
  var modal = $("modal"), lastFocus = null, modalNav = function () {};

  function openProject(i) {
    var p = S.projects[i]; if (!p) return;
    var f = folderById[p.folder];
    var imgs = (p.images && p.images.length) ? p.images : [p.cover];
    // ویدیو (اختیاری): اگر p.video باشد، به‌عنوان آخرین آیتم گالری اضافه می‌شود
    var items = imgs.map(function (src) { return { type: "img", src: src }; });
    if (p.video) items.push({ type: "video", src: p.video, poster: p.videoPoster || p.cover });
    $("mFolder").textContent = f ? f.en : "";
    $("mTitle").textContent = p.title;
    $("mDesc").textContent = p.description || "";
    $("mSpecs").innerHTML = (p.specs || []).map(function (s) {
      return "<div><dt>" + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd></div>";
    }).join("");
    var vid = $("mVideo"), cur = 0;
    function show(k) {
      cur = (k + items.length) % items.length; k = cur;
      var it = items[k];
      vid.pause();
      if (it.type === "video") {
        $("mImg").hidden = true; vid.hidden = false;
        vid.poster = it.poster; vid.src = it.src;
      } else {
        vid.hidden = true; vid.removeAttribute("src"); vid.load();
        $("mImg").hidden = false; $("mImg").src = it.src; $("mImg").alt = p.title;
      }
      Array.prototype.forEach.call($("mThumbs").children, function (t, n) { t.classList.toggle("is-active", n === k); });
    }
    $("mThumbs").innerHTML = items.length > 1 ? items.map(function (it, n) {
      return '<div class="thumb' + (it.type === "video" ? " thumb--video" : "") + '" data-k="' + n + '"><img src="' + esc(it.type === "video" ? it.poster : it.src) + '" alt=""></div>';
    }).join("") : "";
    $("mThumbs").onclick = function (e) { var t = e.target.closest("[data-k]"); if (t) show(+t.dataset.k); };
    $("mPrev").hidden = $("mNext").hidden = items.length < 2;
    $("mPrev").onclick = function () { show(cur - 1); };
    $("mNext").onclick = function () { show(cur + 1); };
    modalNav = function (d) { if (items.length > 1) show(cur + d); };
    var pdfBtn = $("mPdf");
    if (p.pdf) { pdfBtn.href = p.pdf; pdfBtn.hidden = false; } else { pdfBtn.hidden = true; pdfBtn.removeAttribute("href"); }
    show(0);
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    var v = $("mVideo"); v.pause(); v.removeAttribute("src"); v.load();
    modal.hidden = true; document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("projectsGrid").addEventListener("click", function (e) {
    var el = e.target.closest("[data-i]"); if (el) openProject(+el.dataset.i);
  });
  $("projectsGrid").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { var el = e.target.closest("[data-i]"); if (el) openProject(+el.dataset.i); }
  });
  modal.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft") modalNav(1);   // سایت راست‌به‌چپ است
    else if (e.key === "ArrowRight") modalNav(-1);
  });

  renderTabs(); renderProjects();

  /* ---------- نوار بالا و منوی موبایل ---------- */
  var nav = $("nav"), links = $("navLinks"), tg = $("navToggle");
  function onScroll() { nav.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.55); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  tg.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    tg.setAttribute("aria-expanded", open); nav.classList.toggle("menu-open", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); tg.setAttribute("aria-expanded", false); nav.classList.remove("menu-open"); }
  });

  /* ---------- انیمیشن ظاهر شدن ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }
})();
