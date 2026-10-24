/* ==========================================================================
   gleb1441 — логика и анимации
   Контент берётся из assets/js/content.js (window.SITE)
   ========================================================================== */
(() => {
  'use strict';

  const SITE = window.SITE || {};
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---------- Палитра и генератор «фасада» ---------- */
  const PALETTE = [
    [0, [251, 251, 251]],
    [0.25, [216, 223, 229]],
    [0.55, [143, 171, 183]],
    [0.8, [70, 101, 111]],
    [1, [1, 7, 10]],
  ];
  function shade(d) {
    d = clamp(d, 0, 1);
    for (let i = 1; i < PALETTE.length; i++) {
      const [p1, c1] = PALETTE[i];
      const [p0, c0] = PALETTE[i - 1];
      if (d <= p1) {
        const t = (d - p0) / (p1 - p0);
        return `rgb(${c0.map((v, k) => Math.round(v + (c1[k] - v) * t)).join(',')})`;
      }
    }
    return 'rgb(1,7,10)';
  }

  function mulberry32(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const hash = (str) => { let h = 2166136261; for (const ch of str) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };

  // Сетка из треугольников: точки слегка смещены, тон зависит от положения + случайные «тени»
  function buildMesh(w, h, cols, rows, rand, tone = 0) {
    const pts = [];
    const cw = w / cols, ch = h / rows;
    for (let j = 0; j <= rows; j++) {
      for (let i = 0; i <= cols; i++) {
        const edgeX = i === 0 || i === cols, edgeY = j === 0 || j === rows;
        const x = i * cw + (edgeX ? 0 : (rand() - 0.5) * cw * 0.8);
        const y = j * ch + (edgeY ? 0 : (rand() - 0.5) * ch * 0.8);
        pts.push({ ox: x, oy: y, x, y, ph: rand() * Math.PI * 2, free: !edgeX && !edgeY });
      }
    }
    const idx = (i, j) => j * (cols + 1) + i;
    const tris = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const a = idx(i, j), b = idx(i + 1, j), c = idx(i + 1, j + 1), d = idx(i, j + 1);
        const pair = rand() > 0.5 ? [[a, b, c], [a, c, d]] : [[a, b, d], [b, c, d]];
        for (const p of pair) {
          const cx = (pts[p[0]].ox + pts[p[1]].ox + pts[p[2]].ox) / 3;
          const cy = (pts[p[0]].oy + pts[p[1]].oy + pts[p[2]].oy) / 3;
          let base = 0.08 + 0.36 * ((1 - cx / w) * 0.45 + (cy / h) * 0.55) + (rand() - 0.5) * 0.2 + tone;
          const r = rand();
          if (r < 0.06) base = 0.84 + rand() * 0.14;
          else if (r < 0.17) base = 0.58 + rand() * 0.14;
          tris.push({ p, cx, cy, base, delay: (cx / w) * 0.45 + (cy / h) * 0.55 });
        }
      }
    }
    return { pts, tris };
  }

  function meshSVG(seed, tone) {
    const w = 600, h = 400;
    const { pts, tris } = buildMesh(w, h, 7, 5, mulberry32(seed), tone);
    const polys = tris.map((t) => {
      const pp = t.p.map((k) => `${pts[k].x.toFixed(1)},${pts[k].y.toFixed(1)}`).join(' ');
      return `<polygon points="${pp}" fill="${shade(t.base)}"/>`;
    }).join('');
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="rgba(70,101,111,.35)" stroke-width=".8" stroke-linejoin="round">${polys}</g></svg>`;
  }

  /* ---------- Рендер контента ---------- */
  function setText(key, value) {
    $$(`[data-text="${key}"]`).forEach((el) => { el.textContent = value; });
  }

  function renderContent() {
    if (SITE.status) setText('status', SITE.status);
    else $$('[data-bind="status"]').forEach((el) => el.remove());

    setText('role', SITE.role || 'Разработчик');
    setText('tagline', SITE.tagline || '');
    setText('aboutLead', SITE.aboutLead || '');

    const aboutText = $('#aboutText');
    if (aboutText) aboutText.innerHTML = (SITE.aboutText || []).map((p) => `<p>${esc(p)}</p>`).join('');

    const facts = $('#facts');
    if (facts) facts.innerHTML = (SITE.facts || []).map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('');

    const stats = $('#stats');
    if (stats) {
      stats.innerHTML = (SITE.stats || []).map((s) => `
        <div class="stat">
          <span class="stat__value"><span data-count="${Number(s.value) || 0}">0</span><small>${esc(s.suffix || '')}</small></span>
          <span class="stat__label">${esc(s.label)}</span>
        </div>`).join('');
    }

    const skills = $('#skills');
    if (skills) {
      skills.innerHTML = (SITE.skills || []).map((g) => `
        <div class="skills__group">
          <h4>${esc(g.title)}</h4>
          <ul class="chips">${(g.items || []).map((it) => `<li class="chip">${esc(it)}</li>`).join('')}</ul>
        </div>`).join('');
    }

    // бегущая строка: набор повторяется, чтобы лента была бесшовной
    const marquee = $('#marquee');
    if (marquee) {
      const words = SITE.marquee && SITE.marquee.length ? SITE.marquee : ['gleb1441'];
      const glyph = '<svg viewBox="0 0 20 20"><path d="M10 1 19 18H1Z"/></svg>';
      const set = [];
      while (set.length < 10) set.push(...words);
      const html = set.map((w) => `<span class="marquee__item">${esc(w)}${glyph}</span>`).join('');
      marquee.innerHTML = html + html;
    }

    renderTimeline();
    renderLinks();
  }

  function renderTimeline() {
    const list = $('#timeline');
    if (!list) return;
    const items = SITE.achievements || [];
    if (!items.length) {
      list.innerHTML = '<li class="card reveal" style="text-align:center">Скоро здесь появятся достижения</li>';
      return;
    }
    list.innerHTML = items.map((a) => `
      <li class="tl-item">
        <span class="tl-item__marker" aria-hidden="true"></span>
        <span class="tl-item__date">${esc(a.date)}</span>
        <article class="card tl-card spot reveal">
          <span class="tl-card__place">${esc(a.place)}</span>
          <h3 class="tl-card__title">${esc(a.title)}</h3>
          <p class="tl-card__text">${esc(a.text)}</p>
          ${a.link ? `<a class="link-arrow" href="${esc(a.link)}" target="_blank" rel="noopener">Подробнее</a>` : ''}
        </article>
      </li>`).join('');
  }

  function telegramUrl() {
    const tg = String(SITE.telegram || '').trim().replace(/^@/, '').replace(/^https?:\/\/t\.me\//, '');
    return tg ? { url: `https://t.me/${tg}`, handle: `@${tg}` } : null;
  }

  function renderLinks() {
    const gh = SITE.github || 'https://github.com/BessolitsinGleb';
    $$('[data-link="github"]').forEach((a) => { a.href = gh; });

    const tg = telegramUrl();
    if (tg) {
      $$('[data-link="telegram"]').forEach((a) => { a.href = tg.url; });
      setText('telegramHandle', tg.handle);
    } else {
      $$('[data-bind="telegram"]').forEach((el) => el.remove());
      $$('[data-link="telegram"]').forEach((a) => {
        a.classList.add('is-empty');
        a.removeAttribute('target');
        a.addEventListener('click', (e) => { e.preventDefault(); toast('Telegram скоро появится'); });
      });
    }

    const email = String(SITE.email || '').trim();
    const mailLink = $('[data-link="email"]');
    if (email) {
      mailLink.href = `mailto:${email}`;
      setText('emailText', email);
    } else if (mailLink) {
      mailLink.closest('.channel').classList.add('is-empty');
      mailLink.addEventListener('click', (e) => { e.preventDefault(); toast('Почта скоро появится'); });
    }
  }

  /* ---------- Портфолио ---------- */
  const ARROW = '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const TONES = [0, 0.18, 0.08, 0.3];

  function projectCard(p, i, k) {
    const href = p.link || p.repo || '';
    const tag = href ? 'a' : 'div';
    const attrs = href ? ` href="${esc(href)}" target="_blank" rel="noopener"` : '';
    const cover = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`
      : meshSVG(hash(`${p.title}-${i}`), TONES[i % TONES.length]);
    return `
      <article class="project is-entering" style="animation-delay:${k * 80}ms">
        <${tag} class="project__link"${attrs}>
          <div class="project__cover">
            ${cover}
            <span class="project__index">${pad(i + 1)}</span>
            ${p.category ? `<span class="project__cat">${esc(p.category)}</span>` : ''}
          </div>
          <div class="project__body">
            <div class="project__top">
              <h3 class="project__title">${esc(p.title)}</h3>
              <span class="project__go" aria-hidden="true">${ARROW}</span>
            </div>
            <p class="project__desc">${esc(p.desc)}</p>
            ${(p.tags || []).length ? `<ul class="project__tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
          </div>
        </${tag}>
      </article>`;
  }

  function initPortfolio() {
    const grid = $('#projects');
    const filters = $('#filters');
    if (!grid) return;
    const projects = SITE.projects || [];

    if (!projects.length) {
      filters.remove();
      grid.innerHTML = '<p class="card" style="grid-column:1/-1;text-align:center">Скоро здесь появятся работы</p>';
      return;
    }

    const cats = ['Все', ...new Set(projects.map((p) => p.category).filter(Boolean))];
    const count = (c) => (c === 'Все' ? projects.length : projects.filter((p) => p.category === c).length);
    filters.innerHTML = cats.map((c, i) => `
      <button class="filter${i === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">
        ${esc(c)}<sup>${count(c)}</sup>
      </button>`).join('');

    const draw = (cat) => {
      const list = projects.map((p, i) => ({ p, i })).filter(({ p }) => cat === 'Все' || p.category === cat);
      grid.innerHTML = list.map(({ p, i }, k) => projectCard(p, i, k)).join('');
      bindTilt();
    };

    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (!btn || btn.classList.contains('is-active')) return;
      $$('.filter', filters).forEach((b) => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', b === btn); });
      draw(btn.dataset.cat);
    });

    draw('Все');
  }

  function bindTilt() {
    if (!finePointer || reduceMotion) return;
    $$('.project__link').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Прелоадер и старт ---------- */
  function initIntro(onStart) {
    const pre = $('#preloader');
    let seen = false;
    try { seen = sessionStorage.getItem('gleb1441:intro') === '1'; } catch (_) { /* приватный режим */ }

    const start = () => {
      root.classList.add('is-loaded');
      onStart();
      setTimeout(() => root.classList.add('is-settled'), 2200);
    };

    if (seen || reduceMotion || !pre) {
      if (pre) pre.remove();
      setTimeout(start, 30);
      return;
    }
    try { sessionStorage.setItem('gleb1441:intro', '1'); } catch (_) { /* ignore */ }

    const t0 = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, 1300 - (performance.now() - t0));
      setTimeout(() => {
        pre.classList.add('is-done');
        setTimeout(start, 250);
        setTimeout(() => pre.remove(), 1200);
      }, wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    setTimeout(finish, 2600);
  }

  /* ---------- Фасад на canvas ---------- */
  function initFacade() {
    const canvas = $('#facade');
    if (!canvas) return { start() {} };
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, mesh = null, raf = 0, visible = true, started = 0;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    function build() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = W > H ? 9 : 6;
      const rows = Math.max(4, Math.round((cols * H) / W) + 1);
      mesh = buildMesh(W, H, cols, rows, mulberry32(1441));
      if (!raf) draw(performance.now());
    }

    function draw(t) {
      if (!mesh) return;
      ctx.clearRect(0, 0, W, H);
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      const anim = !reduceMotion;
      for (const p of mesh.pts) {
        if (p.free && anim) {
          p.x = p.ox + Math.sin(t * 0.0005 + p.ph) * 4;
          p.y = p.oy + Math.cos(t * 0.0004 + p.ph) * 4;
        }
      }
      const intro = started ? (t - started) / 1400 : (reduceMotion ? 9 : 0);
      ctx.lineJoin = 'round';
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(70,101,111,.38)';
      for (const tri of mesh.tris) {
        const a = clamp((intro - tri.delay * 0.7) * 3, 0, 1);
        if (a <= 0) continue;
        const wave = anim ? Math.sin(t * 0.0007 - (tri.cx + tri.cy) * 0.006) * 0.05 : 0;
        const dx = tri.cx - mouse.x, dy = tri.cy - mouse.y;
        const glow = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 230);
        const d = tri.base - wave - glow * glow * 0.32;
        const [p0, p1, p2] = tri.p.map((k) => mesh.pts[k]);
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fillStyle = shade(d);
        ctx.fill();
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function loop(t) {
      draw(t);
      raf = visible ? requestAnimationFrame(loop) : 0;
    }

    new ResizeObserver(build).observe(canvas);
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf && !reduceMotion && started) raf = requestAnimationFrame(loop);
    }).observe(canvas);

    const facade = canvas.parentElement;
    facade.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
      if (mouse.x < -999) { mouse.x = mouse.tx; mouse.y = mouse.ty; }
    });
    facade.addEventListener('pointerleave', () => { mouse.tx = mouse.ty = -9999; mouse.x = mouse.y = -9999; });

    return {
      start() {
        started = performance.now();
        if (reduceMotion) { draw(started); return; }
        if (!raf) raf = requestAnimationFrame(loop);
      },
    };
  }

  /* ---------- Печатающийся текст ---------- */
  function initTyped() {
    const el = $('#typed');
    const words = SITE.roleWords || [];
    if (!el || !words.length) return;
    if (reduceMotion) { el.textContent = words[0]; return; }
    let w = 0, c = 0, del = false;
    const tick = () => {
      const word = words[w];
      c += del ? -1 : 1;
      el.textContent = word.slice(0, c);
      let delay = del ? 38 : 75;
      if (!del && c === word.length) { del = true; delay = 1800; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 900);
  }

  /* ---------- Шапка, меню, прогресс ---------- */
  function initHeader() {
    const header = $('#header');
    const burger = $('#burger');
    const progress = $('#progress');
    const timeline = $('#timeline');
    let lastY = window.scrollY, ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      header.classList.toggle('is-scrolled', y > 20);
      header.classList.toggle('is-hidden', y > lastY && y > 500);
      lastY = y;
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const p = clamp((window.innerHeight * 0.6 - r.top) / r.height, 0, 1);
        timeline.style.setProperty('--p', p.toFixed(3));
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    const setMenu = (open) => {
      header.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      document.body.classList.toggle('is-locked', open);
    };
    burger.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
    $$('.nav__link').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.matchMedia('(min-width: 1100px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

    // активный пункт меню
    const links = new Map($$('.nav__link').map((a) => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a, id) => a.classList.toggle('is-active', id === e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', ...links.keys()].forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Появление при прокрутке, счётчики ---------- */
  function animateCount(el) {
    const target = Number(el.dataset.count) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    const dur = 1600, t0 = performance.now();
    const step = (t) => {
      const k = clamp((t - t0) / dur, 0, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('is-visible');
        $$('[data-count]', el).forEach(animateCount);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal, .tl-item, .card--stats, .footer__big').forEach((el) => io.observe(el));
  }

  /* ---------- Микро-взаимодействия ---------- */
  function initPointerFx() {
    if (!finePointer || reduceMotion) return;

    // подсветка карточек за курсором
    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });

    // «магнитные» кнопки
    $$('.magnetic').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });

    // свечение в блоке контактов
    const contact = $('#contact');
    const glow = $('.contact__glow');
    contact.addEventListener('pointermove', (e) => {
      const r = contact.getBoundingClientRect();
      glow.style.setProperty('--gx', `${e.clientX - r.left}px`);
      glow.style.setProperty('--gy', `${e.clientY - r.top}px`);
    });
  }

  function initAvatar() {
    const avatar = $('.avatar');
    if (!avatar || reduceMotion) return;
    setTimeout(() => {
      avatar.classList.add('is-waving');
      setTimeout(() => avatar.classList.remove('is-waving'), 2400);
    }, 2600);
    setInterval(() => {
      if (document.hidden) return;
      avatar.classList.add('is-wobble');
      setTimeout(() => avatar.classList.remove('is-wobble'), 1000);
    }, 14000);
  }

  /* ---------- Тост и копирование ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-shown'), 2400);
  }

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    }
  }

  function initCopy() {
    $('#copyEmail').addEventListener('click', async () => {
      if (!SITE.email) { toast('Почта скоро появится'); return; }
      toast((await copy(SITE.email)) ? 'Почта скопирована' : SITE.email);
    });
    $$('.swatches li').forEach((li) => {
      li.addEventListener('click', async () => {
        if (await copy(li.dataset.hex)) toast(`Цвет ${li.dataset.hex} скопирован`);
      });
    });
  }

  /* ---------- Форма ---------- */
  function initForm() {
    const form = $('#contactForm');
    const status = $('#formStatus');
    const btn = $('#formSubmit');
    const label = $('.btn__label', btn);
    const fields = ['name', 'contact', 'message'].map((n) => form.elements[n]);

    const setStatus = (msg, type = '') => {
      status.textContent = msg;
      status.className = `form__status${type ? ` is-${type}` : ''}`;
    };

    fields.forEach((f) => f.addEventListener('input', () => f.parentElement.classList.remove('is-invalid')));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let valid = true;
      fields.forEach((f) => {
        const bad = !f.value.trim();
        f.parentElement.classList.toggle('is-invalid', bad);
        if (bad && valid) { f.focus(); valid = false; }
      });
      if (!valid) { setStatus('Пожалуйста, заполните все поля', 'error'); return; }

      // бот заполнил скрытое поле — делаем вид, что всё хорошо
      if (form.elements._honey.value) { form.reset(); setStatus('Спасибо! Заявка отправлена.', 'ok'); return; }

      const endpoint = SITE.formEndpoint || (SITE.email ? `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}` : '');
      if (!endpoint) {
        setStatus('Форма скоро заработает. А пока — напишите в Telegram или GitHub.', 'error');
        return;
      }

      const data = {
        name: form.elements.name.value.trim(),
        contact: form.elements.contact.value.trim(),
        topic: form.elements.topic.value,
        message: form.elements.message.value.trim(),
        _subject: `Заявка с сайта gleb1441: ${form.elements.topic.value}`,
        _template: 'table',
        _captcha: 'false',
      };

      btn.disabled = true;
      btn.classList.add('is-loading');
      label.textContent = 'Отправляю';
      setStatus('');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === 'false' || json.success === false) throw new Error(json.message || res.status);
        form.reset();
        setStatus('Спасибо! Заявка отправлена — скоро отвечу.', 'ok');
        toast('Заявка отправлена ✓');
      } catch (err) {
        setStatus('Не получилось отправить. Попробуйте ещё раз или напишите напрямую.', 'error');
      } finally {
        btn.disabled = false;
        btn.classList.remove('is-loading');
        label.textContent = 'Отправить заявку';
      }
    });
  }

  /* ---------- Запуск ---------- */
  renderContent();
  initPortfolio();
  const facade = initFacade();
  initHeader();
  initReveal();
  initPointerFx();
  initCopy();
  initForm();
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  initIntro(() => {
    facade.start();
    initTyped();
    initAvatar();
  });
})();
