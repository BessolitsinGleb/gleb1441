/* ==========================================================================
   gleb1441 — логика, анимации, переводы и темы
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
  const store = {
    get(k) { try { return localStorage.getItem(`gleb1441:${k}`); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(`gleb1441:${k}`, v); } catch (_) { /* приватный режим */ } },
  };

  /* ---------- Переводы интерфейса ---------- */
  const UI = {
    ru: {
      'meta.title': 'Бессолицин Глеб — ML-инженер · gleb1441',
      'meta.description': 'Бессолицин Глеб (gleb1441) — ML-инженер и бэкенд-разработчик: нейросети, ИИ-агенты, чат-боты, FastAPI. Портфолио, стек и контакты.',
      'avatar.hi': 'привет!',
      'nav.about': 'Обо мне', 'nav.stack': 'Стек', 'nav.achievements': 'Достижения', 'nav.portfolio': 'Портфолио', 'nav.learning': 'Обучение', 'nav.contact': 'Связаться',
      'header.cta': 'Связаться',
      'hero.cta1': 'Обсудить проект', 'hero.cta2': 'Мой стек', 'hero.nick': 'ник', 'hero.scroll': 'листайте',
      'about.title': 'Обо мне', 'about.profile': '// профиль', 'about.qualities': '// личные качества',
      'about.cycle': '// полный цикл', 'about.cycleLead': 'От идеи до продакшена — без передачи проекта между подрядчиками',
      'stack.title': 'Стек', 'stack.kicker': 'Чем владею и с чем работаю каждый день',
      'achievements.title': 'Достижения', 'achievements.empty': 'Скоро здесь появятся достижения',
      'achievements.kicker': 'Хакатоны, олимпиады и проектные смены — с сертификатами', 'achievements.cert': 'Сертификат',
      'portfolio.title': 'Портфолио', 'portfolio.all': 'Все', 'portfolio.empty': 'Скоро здесь появятся работы',
      'portfolio.kicker': 'Проекты с хакатонов и смен, заказы и пет-проекты', 'portfolio.repoSoon': 'репозиторий скоро',
      'learning.title': 'Обучение', 'learning.kicker': 'Постоянно учусь и проверяю знания на практике',
      'learning.now': '// сейчас изучаю', 'learning.practice': '// где практикуюсь', 'learning.courses': '// курсы и интенсивы',
      'learning.open': 'Открыть',
      'viewer.pdf': 'Оригинал PDF', 'viewer.close': 'Закрыть', 'viewer.prev': 'Предыдущий', 'viewer.next': 'Следующий', 'viewer.of': 'из',
      'portfolio.more': 'Больше кода и экспериментов — на GitHub', 'portfolio.openGh': 'Открыть GitHub',
      'contact.title': 'Связаться', 'contact.h1': 'Есть задача?', 'contact.h2': 'Давайте обсудим.',
      'contact.text': 'Напишите в Telegram, на почту или оставьте заявку в форме — отвечу в течение дня.',
      'contact.mail': 'Почта', 'contact.mailSoon': 'почта скоро появится',
      'form.head': '// заявка', 'form.hint': 'Все поля обязательны', 'form.topic': 'Тема',
      'form.topic1': 'Сотрудничество', 'form.topic2': 'Предложение работы', 'form.topic3': 'Вопрос', 'form.topic4': 'Другое',
      'form.name': 'Как вас зовут', 'form.contact': 'Почта или Telegram для ответа', 'form.message': 'Ваше сообщение',
      'form.submit': 'Отправить заявку', 'form.sending': 'Отправляю',
      'form.fill': 'Пожалуйста, заполните все поля',
      'form.notReady': 'Форма скоро заработает. А пока — напишите в Telegram или GitHub.',
      'form.ok': 'Спасибо! Заявка отправлена — скоро отвечу.',
      'form.error': 'Не получилось отправить. Попробуйте ещё раз или напишите напрямую.',
      'form.subject': 'Заявка с сайта gleb1441',
      'footer.top': 'Наверх',
      'toast.tgSoon': 'Telegram скоро появится', 'toast.mailSoon': 'Почта скоро появится',
      'toast.mailCopied': 'Почта скопирована', 'toast.colorCopied': 'Цвет {hex} скопирован', 'toast.sent': 'Заявка отправлена ✓',
      'aria.top': 'gleb1441 — наверх', 'aria.nav': 'Основная навигация', 'aria.lang': 'Switch to English',
      'aria.themeToDark': 'Включить тёмную тему', 'aria.themeToLight': 'Включить светлую тему',
      'aria.menuOpen': 'Открыть меню', 'aria.menuClose': 'Закрыть меню', 'aria.scroll': 'Прокрутить вниз',
      'aria.filters': 'Фильтр проектов', 'aria.copyEmail': 'Скопировать почту',
    },
    en: {
      'meta.title': 'Gleb Bessolitsin — ML Engineer · gleb1441',
      'meta.description': 'Gleb Bessolitsin (gleb1441) — ML engineer and backend developer: neural networks, AI agents, chatbots, FastAPI. Portfolio, tech stack and contacts.',
      'avatar.hi': 'hi there!',
      'nav.about': 'About', 'nav.stack': 'Stack', 'nav.achievements': 'Achievements', 'nav.portfolio': 'Portfolio', 'nav.learning': 'Learning', 'nav.contact': 'Contact',
      'header.cta': "Let's talk",
      'hero.cta1': 'Discuss a project', 'hero.cta2': 'My stack', 'hero.nick': 'nick', 'hero.scroll': 'scroll',
      'about.title': 'About me', 'about.profile': '// profile', 'about.qualities': '// personal qualities',
      'about.cycle': '// full cycle', 'about.cycleLead': 'From idea to production — no hand-offs between contractors',
      'stack.title': 'Stack', 'stack.kicker': 'What I know and work with every day',
      'achievements.title': 'Achievements', 'achievements.empty': 'Achievements are coming soon',
      'achievements.kicker': 'Hackathons, olympiads and project programs — with certificates', 'achievements.cert': 'Certificate',
      'portfolio.title': 'Portfolio', 'portfolio.all': 'All', 'portfolio.empty': 'Projects are coming soon',
      'portfolio.kicker': 'Hackathon projects, client work and side projects', 'portfolio.repoSoon': 'repository coming soon',
      'learning.title': 'Learning', 'learning.kicker': 'Always learning — and testing it in practice',
      'learning.now': '// currently studying', 'learning.practice': '// where I practice', 'learning.courses': '// courses & intensives',
      'learning.open': 'Open',
      'viewer.pdf': 'Original PDF', 'viewer.close': 'Close', 'viewer.prev': 'Previous', 'viewer.next': 'Next', 'viewer.of': 'of',
      'portfolio.more': 'More code and experiments on GitHub', 'portfolio.openGh': 'Open GitHub',
      'contact.title': 'Contact', 'contact.h1': 'Have a task?', 'contact.h2': "Let's talk.",
      'contact.text': 'Message me on Telegram, send an email or leave a request in the form — I reply within a day.',
      'contact.mail': 'Email', 'contact.mailSoon': 'email coming soon',
      'form.head': '// request', 'form.hint': 'All fields are required', 'form.topic': 'Topic',
      'form.topic1': 'Collaboration', 'form.topic2': 'Job offer', 'form.topic3': 'Question', 'form.topic4': 'Other',
      'form.name': 'Your name', 'form.contact': 'Email or Telegram to reply to', 'form.message': 'Your message',
      'form.submit': 'Send request', 'form.sending': 'Sending',
      'form.fill': 'Please fill in all the fields',
      'form.notReady': 'The form is coming soon. Meanwhile, message me on Telegram or GitHub.',
      'form.ok': "Thank you! Your request has been sent — I'll reply soon.",
      'form.error': "Couldn't send it. Please try again or message me directly.",
      'form.subject': 'Request from gleb1441 website',
      'footer.top': 'Back to top',
      'toast.tgSoon': 'Telegram is coming soon', 'toast.mailSoon': 'Email is coming soon',
      'toast.mailCopied': 'Email copied', 'toast.colorCopied': 'Color {hex} copied', 'toast.sent': 'Request sent ✓',
      'aria.top': 'gleb1441 — back to top', 'aria.nav': 'Main navigation', 'aria.lang': 'Переключить на русский',
      'aria.themeToDark': 'Switch to dark theme', 'aria.themeToLight': 'Switch to light theme',
      'aria.menuOpen': 'Open menu', 'aria.menuClose': 'Close menu', 'aria.scroll': 'Scroll down',
      'aria.filters': 'Project filter', 'aria.copyEmail': 'Copy email',
    },
  };

  let lang = root.lang === 'en' ? 'en' : 'ru';
  const t = (key, vars) => {
    let s = (UI[lang] && UI[lang][key]) ?? UI.ru[key] ?? key;
    if (vars) Object.keys(vars).forEach((k) => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
  };
  // значение из content.js: строка или { ru, en }
  const tr = (v) => {
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[lang] ?? v.ru ?? v.en ?? '';
    return v ?? '';
  };
  const trList = (v) => (Array.isArray(v) ? v : tr(v) || []);

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
        const k = (d - p0) / (p1 - p0);
        return `rgb(${c0.map((v, j) => Math.round(v + (c1[j] - v) * k)).join(',')})`;
      }
    }
    return 'rgb(1,7,10)';
  }

  function mulberry32(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let x = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
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
    const polys = tris.map((tri) => {
      const pp = tri.p.map((k) => `${pts[k].x.toFixed(1)},${pts[k].y.toFixed(1)}`).join(' ');
      return `<polygon points="${pp}" fill="${shade(tri.base)}"/>`;
    }).join('');
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="rgba(70,101,111,.35)" stroke-width=".8" stroke-linejoin="round">${polys}</g></svg>`;
  }

  /* ---------- Иконки ---------- */
  const QUALITY_ICONS = [
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14M14 17.5h-4a3 3 0 0 1-3-3V10"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/><path d="M8 9h8M8 12.5h5"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  ];
  
  /* ---------- Рендер контента ---------- */
  function setText(key, value) {
    $$(`[data-text="${key}"]`).forEach((el) => { el.textContent = value; });
  }

  function applyUI() {
    root.lang = lang;
    document.title = t('meta.title');
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    syncThemeLabel();
  }

  function renderContent() {
    const statusEl = $('[data-bind="status"]');
    if (statusEl) {
      const status = tr(SITE.status);
      statusEl.hidden = !status;
      setText('status', status);
    }

    setText('name', tr(SITE.name));
    const lines = trList(SITE.nameLines);
    setText('nameLine1', lines[0] || '');
    setText('nameLine2', lines[1] || '');
    $('.hero__title').setAttribute('aria-label', tr(SITE.name));
    setText('role', tr(SITE.role));
    setText('tagline', tr(SITE.tagline));
    setText('aboutLead', tr(SITE.aboutLead));

    $('#aboutText').innerHTML = trList(SITE.aboutText).map((p) => `<p>${esc(p)}</p>`).join('');
    $('#facts').innerHTML = (SITE.facts || []).map((f) => `<div><dt>${esc(tr(f.label))}</dt><dd>${esc(tr(f.value))}</dd></div>`).join('');

    $('#qualities').innerHTML = (SITE.qualities || []).map((q, i) => `
      <li class="quality">
        <span class="quality__icon" aria-hidden="true">${QUALITY_ICONS[i % QUALITY_ICONS.length]}</span>
        <span class="quality__title">${esc(tr(q.title))}</span>
        <span class="quality__text">${esc(tr(q.text))}</span>
      </li>`).join('');

    renderStats();

    $('#cycle').innerHTML = (SITE.cycle || []).map((c, i) => `
      <li class="cycle__step">
        <span class="cycle__dot" style="--i:${i}" aria-hidden="true"></span>
        <span class="cycle__num">${pad(i + 1)}</span>
        <span class="cycle__title">${esc(tr(c.title))}</span>
        <span class="cycle__text">${esc(tr(c.text))}</span>
      </li>`).join('');

    $('#stackGrid').innerHTML = (SITE.stack || []).map((g, i) => `
      <article class="card stack-card spot${i === 0 ? ' card--feature' : ''}">
        <div class="stack-card__head">
          <h3 class="stack-card__title">${esc(tr(g.title))}</h3>
          <span class="stack-card__num">${pad(i + 1)}</span>
        </div>
        <ul class="chips">${(g.items || []).map((it, k) => `<li class="chip" style="--i:${k}">${esc(tr(it))}</li>`).join('')}</ul>
        ${g.note ? `<p class="stack-card__note">${esc(tr(g.note))}</p>` : ''}
      </article>`).join('');

    // бегущая строка: набор повторяется, чтобы лента была бесшовной
    const words = trList(SITE.marquee);
    const list = words.length ? words : ['gleb1441'];
    const glyph = '<svg viewBox="0 0 20 20"><path d="M10 1 19 18H1Z"/></svg>';
    const set = [];
    while (set.length < 10) set.push(...list);
    const html = set.map((w) => `<span class="marquee__item">${esc(w)}${glyph}</span>`).join('');
    $('#marquee').innerHTML = html + html;

    renderAchievements();
    renderLearning();
    renderLinks();
  }

  let statsCounted = false;
  const formatNum = (n, decimals) => n.toLocaleString(lang === 'en' ? 'en-US' : 'ru-RU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const decimalsOf = (v) => (String(v).split('.')[1] || '').length;

  function renderStats() {
    $('#stats').innerHTML = (SITE.stats || []).map((s) => {
      const v = Number(s.value) || 0;
      return `
        <div class="stat">
          <span class="stat__value"><span data-count="${v}">${formatNum(statsCounted ? v : 0, decimalsOf(v))}</span><small>${esc(s.suffix || '')}</small></span>
          <span class="stat__label">${esc(tr(s.label))}</span>
        </div>`;
    }).join('');
  }

  const EXT = '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const pills = (links) => (links || []).filter((l) => l && l.url)
    .map((l) => `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(tr(l.label))}</a>`).join('');
  const certButton = (group, index, cert, label) => `
    <button class="cert-btn" type="button" data-cert-group="${group}" data-cert-index="${index}">
      <span class="cert-btn__paper"><img src="${esc(cert.thumb || cert.img)}" alt="" loading="lazy"></span>
      <span>${esc(label)}</span>
    </button>`;

  // сертификаты по группам — для листания в просмотрщике
  const certGroups = {};

  function renderAchievements() {
    $('#highlights').innerHTML = (SITE.highlights || []).map((h) => `
      <li class="highlight">
        <span class="highlight__value">${esc(tr(h.value))}</span>
        <span class="highlight__label">${esc(tr(h.label))}</span>
      </li>`).join('');
    $('#highlights').hidden = !(SITE.highlights || []).length;

    const list = $('#achList');
    const items = SITE.achievements || [];
    if (!items.length) {
      list.innerHTML = `<p class="card" style="text-align:center">${esc(t('achievements.empty'))}</p>`;
      return;
    }
    certGroups.ach = [];
    list.innerHTML = items.map((a, i) => {
      let cert = '';
      if (a.cert) {
        certGroups.ach.push({ ...a.cert, title: tr(a.title) });
        cert = certButton('ach', certGroups.ach.length - 1, a.cert, t('achievements.cert'));
      }
      const date = tr(a.date);
      return `
        <article class="card ach spot reveal"${i % 2 ? ' data-delay="1"' : ''}>
          <div class="ach__top">
            ${a.badge ? `<span class="ach__badge">${esc(tr(a.badge))}</span>` : '<span></span>'}
            ${date ? `<span class="ach__date mono">${esc(date)}</span>` : ''}
          </div>
          <h3 class="ach__title">${esc(tr(a.title))}</h3>
          ${a.place ? `<p class="ach__place">${esc(tr(a.place))}</p>` : ''}
          <p class="ach__text">${esc(tr(a.text))}</p>
          <div class="ach__foot">
            <div class="pills">${pills(a.links)}</div>
            ${cert}
          </div>
        </article>`;
    }).join('');
  }

  const LOGOS = { Kaggle: 'K', 'ML Compete': 'ML', 'Hugging Face': 'HF' };

  function renderLearning() {
    $('#learnNow').innerHTML = (SITE.learningNow || []).map((c) => `
      <li class="learn-now__item">
        <span class="learn-now__dot" aria-hidden="true"></span>
        <span class="learn-now__title">${esc(tr(c.title))}</span>
        <span class="learn-now__org">${esc(tr(c.org))}</span>
        ${c.link ? `<a class="learn-now__link" href="${esc(c.link)}" target="_blank" rel="noopener" aria-label="${esc(t('learning.open'))}">${EXT}</a>` : ''}
      </li>`).join('');

    $('#practice').innerHTML = (SITE.practice || []).map((p) => `
      <li>
        <a class="practice__item" href="${esc(p.url)}" target="_blank" rel="noopener">
          <span class="practice__logo" aria-hidden="true">${esc(LOGOS[p.title] || p.title.slice(0, 2))}</span>
          <span class="practice__title">${esc(p.title)}<span class="mono">${esc(p.handle || '')}</span></span>
          <span class="practice__text">${esc(tr(p.text))}</span>
          <svg class="practice__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
        </a>
      </li>`).join('');

    $('#courses').innerHTML = (SITE.courses || []).map((c) => `
      <li class="course">
        <span class="course__title">${esc(tr(c.title))}</span>
        <span class="course__org">${esc(tr(c.org))}</span>
        <span class="course__side">
          ${c.date ? `<span class="course__date">${esc(tr(c.date))}</span>` : ''}
          ${c.link ? `<a class="pill" href="${esc(c.link)}" target="_blank" rel="noopener">${esc(tr(c.linkLabel) || t('learning.open'))}</a>` : ''}
        </span>
      </li>`).join('');

    const sc = SITE.siriusCourses;
    const box = $('#sirius');
    if (!sc || !(sc.certs || []).length) { box.hidden = true; return; }
    certGroups.sirius = sc.certs.map((c) => ({ ...c, title: `${tr(sc.title)} — ${tr(c.title)}` }));
    box.innerHTML = `
      <h3 class="card__title mono">// ${esc(tr(sc.title))}</h3>
      <p class="sirius__org">${esc(tr(sc.org))}</p>
      <div class="sirius__grid">
        ${sc.certs.map((c, i) => `
          <button class="cert-btn sirius__cert" type="button" data-cert-group="sirius" data-cert-index="${i}">
            <span class="cert-btn__paper"><img src="${esc(c.thumb || c.img)}" alt="" loading="lazy"></span>
            <span class="sirius__name">${esc(tr(c.title))}<span class="sirius__date">${esc(tr(c.date))}</span></span>
          </button>`).join('')}
      </div>`;
  }

  function telegramInfo() {
    const tg = String(SITE.telegram || '').trim().replace(/^@/, '').replace(/^https?:\/\/t\.me\//, '');
    return tg ? { url: `https://t.me/${tg}`, handle: `@${tg}` } : null;
  }

  // ссылки не зависят от языка — настраиваются один раз
  function initLinks() {
    const gh = SITE.github || 'https://github.com/BessolitsinGleb';
    $$('[data-link="github"]').forEach((a) => { a.href = gh; });

    const tg = telegramInfo();
    if (tg) {
      $$('[data-link="telegram"]').forEach((a) => { a.href = tg.url; });
    } else {
      $$('[data-bind="telegram"]').forEach((el) => el.remove());
      $$('[data-link="telegram"]').forEach((a) => {
        a.classList.add('is-empty');
        a.removeAttribute('target');
        a.addEventListener('click', (e) => { e.preventDefault(); toast(t('toast.tgSoon')); });
      });
    }

    const email = String(SITE.email || '').trim();
    const mailLink = $('[data-link="email"]');
    if (email) {
      mailLink.href = `mailto:${email}`;
    } else {
      mailLink.closest('.channel').classList.add('is-empty');
      mailLink.addEventListener('click', (e) => { e.preventDefault(); toast(t('toast.mailSoon')); });
    }
  }

  function renderLinks() {
    const tg = telegramInfo();
    setText('telegramHandle', tg ? tg.handle : '@username');
    setText('emailText', String(SITE.email || '').trim() || t('contact.mailSoon'));
  }

  /* ---------- Портфолио ---------- */
  const TONES = [0, 0.18, 0.08, 0.3];
  let currentCat = null;

  function projectCard(p, i, k) {
    const title = tr(p.title);
    const cover = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(title)}" loading="lazy">`
      : meshSVG(hash(`project-${i}`), TONES[i % TONES.length]);
    const cat = tr(p.category);
    const tags = (p.tags || []).map(tr);
    const links = pills(p.links);
    return `
      <article class="project is-entering" style="animation-delay:${k * 70}ms">
        <div class="project__link">
          <div class="project__cover${p.image ? ' project__cover--img' : ''}">
            ${cover}
            <span class="project__index">${pad(i + 1)}</span>
            ${cat ? `<span class="project__cat">${esc(cat)}</span>` : ''}
            ${p.badge ? `<span class="project__flag">${esc(tr(p.badge))}</span>` : ''}
          </div>
          <div class="project__body">
            <div class="project__top">
              <h3 class="project__title">${esc(title)}</h3>
              ${p.status ? `<span class="project__status">${esc(tr(p.status))}</span>` : ''}
            </div>
            <p class="project__desc">${esc(tr(p.desc))}</p>
            ${tags.length ? `<ul class="project__tags">${tags.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
            ${p.note ? `<p class="project__note">${esc(tr(p.note))}</p>` : ''}
            <div class="project__links">${links || `<span class="project__soon">${esc(t('portfolio.repoSoon'))}</span>`}</div>
          </div>
        </div>
      </article>`;
  }

  function renderPortfolio() {
    const grid = $('#projects');
    const filters = $('#filters');
    const projects = SITE.projects || [];

    if (!projects.length) {
      filters.hidden = true;
      grid.innerHTML = `<p class="card" style="grid-column:1/-1;text-align:center">${esc(t('portfolio.empty'))}</p>`;
      return;
    }

    // категории сравниваются по русскому варианту, чтобы фильтр не сбрасывался при смене языка
    const catKey = (p) => (p.category && typeof p.category === 'object' ? p.category.ru : p.category) || '';
    const cats = [...new Set(projects.map(catKey).filter(Boolean))];
    if (currentCat && currentCat !== '*' && !cats.includes(currentCat)) currentCat = '*';
    currentCat = currentCat || '*';
    const labelOf = (key) => tr(projects.find((p) => catKey(p) === key).category);
    const count = (key) => (key === '*' ? projects.length : projects.filter((p) => catKey(p) === key).length);

    filters.innerHTML = ['*', ...cats].map((key) => `
      <button class="filter${key === currentCat ? ' is-active' : ''}" type="button" role="tab" aria-selected="${key === currentCat}" data-cat="${esc(key)}">
        ${esc(key === '*' ? t('portfolio.all') : labelOf(key))}<sup>${count(key)}</sup>
      </button>`).join('');

    const list = projects.map((p, i) => ({ p, i })).filter(({ p }) => currentCat === '*' || catKey(p) === currentCat);
    grid.innerHTML = list.map(({ p, i }, k) => projectCard(p, i, k)).join('');
  }

  function initPortfolio() {
    $('#filters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (!btn || btn.classList.contains('is-active')) return;
      currentCat = btn.dataset.cat;
      renderPortfolio();
    });
    renderPortfolio();
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

    function draw(now) {
      if (!mesh) return;
      ctx.clearRect(0, 0, W, H);
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      const anim = !reduceMotion;
      for (const p of mesh.pts) {
        if (p.free && anim) {
          p.x = p.ox + Math.sin(now * 0.0005 + p.ph) * 4;
          p.y = p.oy + Math.cos(now * 0.0004 + p.ph) * 4;
        }
      }
      const intro = started ? (now - started) / 1400 : (reduceMotion ? 9 : 0);
      ctx.lineJoin = 'round';
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(70,101,111,.38)';
      for (const tri of mesh.tris) {
        const a = clamp((intro - tri.delay * 0.7) * 3, 0, 1);
        if (a <= 0) continue;
        const wave = anim ? Math.sin(now * 0.0007 - (tri.cx + tri.cy) * 0.006) * 0.05 : 0;
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

    function loop(now) {
      draw(now);
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
  const typed = { timer: 0 };
  function startTyped() {
    const el = $('#typed');
    clearTimeout(typed.timer);
    const words = trList(SITE.roleWords);
    if (!el || !words.length) return;
    if (reduceMotion) { el.textContent = words[0]; return; }
    el.textContent = '';
    let w = 0, c = 0, del = false;
    const tick = () => {
      const word = words[w];
      c += del ? -1 : 1;
      el.textContent = word.slice(0, c);
      let delay = del ? 38 : 75;
      if (!del && c === word.length) { del = true; delay = 1800; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; delay = 350; }
      typed.timer = setTimeout(tick, delay);
    };
    typed.timer = setTimeout(tick, 500);
  }

  /* ---------- Тема ---------- */
  const themeColor = $('meta[name="theme-color"]');
  const currentTheme = () => (root.dataset.theme === 'dark' ? 'dark' : 'light');

  function syncThemeLabel() {
    const btn = $('#themeBtn');
    if (btn) btn.setAttribute('aria-label', t(currentTheme() === 'dark' ? 'aria.themeToLight' : 'aria.themeToDark'));
    if (themeColor) themeColor.setAttribute('content', currentTheme() === 'dark' ? '#050C0F' : '#FBFBFB');
    paintTelegram();
  }

  function setTheme(next, origin) {
    const apply = () => {
      root.dataset.theme = next;
      syncThemeLabel();
    };
    if (reduceMotion) { apply(); return; }

    if (document.startViewTransition && origin) {
      const r = origin.getBoundingClientRect();
      const x = r.left + r.width / 2, y = r.top + r.height / 2;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const vt = document.startViewTransition(apply);
      vt.ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 750, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' },
        );
      }).catch(() => {});
      return;
    }
    root.classList.add('theme-fade');
    apply();
    setTimeout(() => root.classList.remove('theme-fade'), 600);
  }

  function initTheme() {
    const btn = $('#themeBtn');
    btn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      store.set('theme', next);
      setTheme(next, btn);
    });
    // если пользователь сам не выбирал тему — следуем за системой
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!store.get('theme')) setTheme(e.matches ? 'dark' : 'light');
    });
    syncThemeLabel();
  }

  /* ---------- Язык ---------- */
  function setLang(next) {
    if (next === lang) return;
    store.set('lang', next);
    const swap = () => {
      lang = next;
      applyUI();
      renderContent();
      renderPortfolio();
      observeReveal();
      if (root.classList.contains('is-loaded')) startTyped();
    };
    if (reduceMotion) { swap(); return; }
    document.body.classList.add('is-switching');
    setTimeout(() => {
      swap();
      requestAnimationFrame(() => document.body.classList.remove('is-switching'));
    }, 220);
  }

  function initLang() {
    $('#langBtn').addEventListener('click', () => setLang(lang === 'ru' ? 'en' : 'ru'));
  }

  /* ---------- Шапка, меню, прогресс ---------- */
  function initHeader() {
    const header = $('#header');
    const burger = $('#burger');
    const progress = $('#progress');
    let lastY = window.scrollY, ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      header.classList.toggle('is-scrolled', y > 20);
      header.classList.toggle('is-hidden', y > lastY && y > 500);
      lastY = y;
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    const setMenu = (open) => {
      header.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open);
      burger.dataset.i18nAttr = `aria-label:${open ? 'aria.menuClose' : 'aria.menuOpen'}`;
      burger.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
      document.body.classList.toggle('is-locked', open);
      if (open !== header.classList.contains('tg-back')) {
        header.classList.toggle('tg-back', open);
        tgBack(open ? () => setMenu(false) : null);
      }
    };
    burger.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
    $$('.nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
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
    const dec = decimalsOf(target);
    if (reduceMotion) { el.textContent = formatNum(target, dec); return; }
    const dur = 1600, t0 = performance.now();
    const step = (now) => {
      const k = clamp((now - t0) / dur, 0, 1);
      const v = target * (1 - Math.pow(1 - k, 3));
      el.textContent = formatNum(dec ? Math.round(v * 10 ** dec) / 10 ** dec : Math.round(v), dec);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('is-visible');
      if (el.classList.contains('card--stats') && !statsCounted) {
        statsCounted = true;
        $$('[data-count]', el).forEach(animateCount);
      }
      revealIO.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  function observeReveal() {
    $$('.reveal:not(.is-visible), .stack-card:not(.is-visible), .card--stats:not(.is-visible), .footer__big:not(.is-visible)')
      .forEach((el) => revealIO.observe(el));
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
      if (!SITE.email) { toast(t('toast.mailSoon')); return; }
      toast((await copy(SITE.email)) ? t('toast.mailCopied') : SITE.email);
    });
    $$('.swatches li').forEach((li) => {
      li.addEventListener('click', async () => {
        if (await copy(li.dataset.hex)) toast(t('toast.colorCopied', { hex: li.dataset.hex }));
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

    const setStatus = (key, type = '') => {
      status.textContent = key ? t(key) : '';
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
      if (!valid) { setStatus('form.fill', 'error'); return; }

      // бот заполнил скрытое поле — делаем вид, что всё хорошо
      if (form.elements._honey.value) { form.reset(); setStatus('form.ok', 'ok'); return; }

      const endpoint = SITE.formEndpoint || (SITE.email ? `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}` : '');
      if (!endpoint) { setStatus('form.notReady', 'error'); return; }

      const topic = t(`form.topic${Number(form.elements.topic.value) + 1}`);
      const data = {
        name: form.elements.name.value.trim(),
        contact: form.elements.contact.value.trim(),
        topic,
        message: form.elements.message.value.trim(),
        language: lang,
        _subject: `${t('form.subject')}: ${topic}`,
        _template: 'table',
        _captcha: 'false',
      };

      btn.disabled = true;
      btn.classList.add('is-loading');
      label.textContent = t('form.sending');
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
        setStatus('form.ok', 'ok');
        toast(t('toast.sent'));
      } catch (err) {
        setStatus('form.error', 'error');
      } finally {
        btn.disabled = false;
        btn.classList.remove('is-loading');
        label.textContent = t('form.submit');
      }
    });
  }

  /* ---------- Telegram (Mini App и встроенный браузер) ---------- */
  let tgApp = null;
  const tgBackHandlers = [];

  function tgBack(handler) {
    if (!tgApp || !tgApp.BackButton) return;
    if (handler) tgBackHandlers.push(handler);
    else tgBackHandlers.pop();
    if (tgBackHandlers.length) tgApp.BackButton.show();
    else tgApp.BackButton.hide();
  }

  function paintTelegram() {
    if (!tgApp) return;
    const color = currentTheme() === 'dark' ? '#050C0F' : '#FBFBFB';
    try {
      tgApp.setHeaderColor(color);
      tgApp.setBackgroundColor(color);
      if (tgApp.setBottomBarColor) tgApp.setBottomBarColor(color);
    } catch (_) { /* старые версии Telegram */ }
  }

  function initTelegram() {
    if (!root.classList.contains('in-telegram')) return;
    let tries = 0;
    const boot = () => {
      const tg = window.Telegram && window.Telegram.WebApp;
      if (!tg) { if (++tries < 50) setTimeout(boot, 100); return; }
      if (!tg.initData) return; // обычная ссылка во встроенном браузере — всё работает как на сайте
      tgApp = tg;
      root.classList.add('tg-app');
      tg.ready();
      tg.expand();
      if (tg.disableVerticalSwipes) tg.disableVerticalSwipes();
      // тема Telegram, если пользователь сам не выбирал
      if (!store.get('theme') && tg.colorScheme) setTheme(tg.colorScheme);
      tg.onEvent('themeChanged', () => { if (!store.get('theme')) setTheme(tg.colorScheme); });
      tg.BackButton.onClick(() => { const h = tgBackHandlers[tgBackHandlers.length - 1]; if (h) h(); });
      paintTelegram();
      // внешние ссылки — через Telegram, чтобы не закрывать приложение
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[target="_blank"]');
        if (!a || e.defaultPrevented) return;
        e.preventDefault();
        if (/^https:\/\/t\.me\//.test(a.href)) tg.openTelegramLink(a.href);
        else tg.openLink(a.href);
      });
    };
    boot();
  }

  /* ---------- Просмотр сертификатов ---------- */
  function initViewer() {
    const dlg = $('#viewer');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    const img = $('#viewerImg'), title = $('#viewerTitle'), pdf = $('#viewerPdf'), count = $('#viewerCount');
    const prev = $('[data-viewer="prev"]', dlg), next = $('[data-viewer="next"]', dlg);
    let group = [], idx = 0;

    const show = (i) => {
      idx = (i + group.length) % group.length;
      const c = group[idx];
      img.style.animation = 'none';
      void img.offsetWidth;
      img.style.animation = '';
      img.src = c.img;
      img.alt = c.title || '';
      title.textContent = c.title || '';
      pdf.hidden = !c.pdf;
      if (c.pdf) pdf.href = c.pdf;
      const many = group.length > 1;
      prev.hidden = next.hidden = !many;
      count.textContent = many ? `${idx + 1} ${t('viewer.of')} ${group.length}` : '';
    };
    const close = () => { if (dlg.open) dlg.close(); };

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cert-group]');
      if (!btn) return;
      group = certGroups[btn.dataset.certGroup] || [];
      if (!group.length) return;
      show(Number(btn.dataset.certIndex) || 0);
      dlg.showModal();
      document.body.classList.add('is-locked');
      tgBack(close);
    });
    dlg.addEventListener('click', (e) => {
      const action = e.target.closest('[data-viewer]');
      if (action) {
        if (action.dataset.viewer === 'close') close();
        else show(idx + (action.dataset.viewer === 'next' ? 1 : -1));
        return;
      }
      if (e.target === dlg || e.target.classList.contains('viewer__stage')) close();
    });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && group.length > 1) show(idx + 1);
      if (e.key === 'ArrowLeft' && group.length > 1) show(idx - 1);
    });
    // свайп по картинке на телефоне
    let x0 = null;
    img.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    img.addEventListener('touchend', (e) => {
      if (x0 === null || group.length < 2) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    dlg.addEventListener('close', () => {
      if (!$('#header').classList.contains('is-open')) document.body.classList.remove('is-locked');
      tgBack(null);
    });
  }

  /* ---------- Запуск ---------- */
  applyUI();
  renderContent();
  initLinks();
  initPortfolio();
  const facade = initFacade();
  initHeader();
  observeReveal();
  initTheme();
  initLang();
  initPointerFx();
  initCopy();
  initForm();
  initViewer();
  initTelegram();
  $('#year').textContent = new Date().getFullYear();

  initIntro(() => {
    facade.start();
    startTyped();
    initAvatar();
  });
})();
