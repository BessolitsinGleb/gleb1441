<div align="center">

<img src="assets/img/avatar.jpg" width="120" height="120" alt="gleb1441">

# Привет, я Глеб 👋

**ML-инженер и бэкенд-разработчик** · [`gleb1441`](https://github.com/BessolitsinGleb)

Это репозиторий моего сайта-визитки — здесь можно узнать, чем я занимаюсь, посмотреть стек и написать мне.

[![Telegram](https://img.shields.io/badge/Telegram-@bissalitsin-46656F?style=flat-square&logo=telegram&logoColor=FBFBFB)](https://t.me/bissalitsin)
[![Email](https://img.shields.io/badge/Почта-bessolitsingleb@yandex.ru-8FABB7?style=flat-square&logo=maildotru&logoColor=01070A)](mailto:bessolitsingleb@yandex.ru)
[![GitHub](https://img.shields.io/badge/GitHub-BessolitsinGleb-01070A?style=flat-square&logo=github&logoColor=FBFBFB)](https://github.com/BessolitsinGleb)

</div>

---

## Коротко обо мне

Три года занимаюсь машинным обучением и 3,5 года пишу бэкенд. Люблю, когда проект проходит весь путь целиком: от данных и модели до API и живого сервера в продакшене.

- 🧠 **ML** — классический ML, deep learning, computer vision, NLP, RL. PyTorch, scikit-learn, pandas, NumPy, Matplotlib
- 🤖 **ИИ-агенты и боты** — агенты, чат-боты, RAG, модели через OpenRouter или LLM Proxy
- ⚙️ **Бэкенд** — FastAPI, Pydantic, SQLAlchemy, WebSocket
- 🗄 **Данные** — PostgreSQL (мой фаворит), Redis, любые SQL и NoSQL базы
- 🚀 **Деплой** — Docker, Git, Railway, Render, VPS
- 💬 **Языки** — Python, SQL, JavaScript, Kotlin и немного C#

Фронтенд — не моя основная специализация, но поправить вёрстку могу. Как раз этот сайт и есть пример 🙂

## Что есть на сайте

- Две темы — светлая и тёмная. По умолчанию подстраивается под систему, переключатель в шапке.
- Два языка — русский и английский, тоже переключаются в шапке.
- Блоки: обо мне и личные качества, стек, достижения с сертификатами, портфолио, обучение и контакты с формой заявки.
- Сертификаты открываются прямо на сайте — с листанием и ссылкой на оригинальный PDF.
- Сайт удобно открывать из Telegram: красивое превью ссылки, отступы под вырезы экрана, а если подключить его как Mini App в @BotFather — подстраивается под тему Telegram и кнопку «Назад».
- Аккуратно смотрится на компьютере, планшете и телефоне.
- Много небольших анимаций: «живой» фасад из треугольников на первом экране, машущий аватар, плавное появление блоков. Если в системе включено «уменьшить движение», анимации отключаются.

Палитра — спокойные архитектурные цвета:

![#01070A](https://img.shields.io/badge/%2301070A-01070A?style=for-the-badge)
![#46656F](https://img.shields.io/badge/%2346656F-46656F?style=for-the-badge)
![#8FABB7](https://img.shields.io/badge/%238FABB7-8FABB7?style=for-the-badge)
![#D8DFE5](https://img.shields.io/badge/%23D8DFE5-D8DFE5?style=for-the-badge)
![#FBFBFB](https://img.shields.io/badge/%23FBFBFB-FBFBFB?style=for-the-badge)

## Как поменять содержимое

Весь текст лежит в одном файле — [`assets/js/content.js`](assets/js/content.js). В вёрстку лезть не нужно: правите текст, сохраняете, обновляете страницу.

У каждой фразы два варианта — для русской и английской версии:

```js
title: { ru: 'Базы данных', en: 'Databases' }
```

Если текст одинаковый на обоих языках (например, `'PyTorch'`), достаточно обычной строки.

Что где лежит:

- `aboutLead`, `aboutText` — текст «Обо мне»
- `qualities` — личные качества
- `stats` — цифры (можно дробные, например `3.5`)
- `stack` — карточки стека; чтобы добавить технологию, допишите её в `items` нужной карточки
- `highlights` — четыре главные цифры над достижениями
- `achievements` — достижения: бейдж, описание, ссылки и сертификат (`cert`)
- `projects` — портфолио: обложка, ссылки (`links`), бейдж и статус. Картинки кладите в `assets/img/projects/` и указывайте путь в `image`. Если картинки нет, обложка нарисуется сама.
- `learningNow`, `courses`, `siriusCourses`, `practice` — блок «Обучение»

Сертификаты лежат в `assets/certs/`: большая картинка (`.webp`), маленькое превью (`-thumb.webp`) и оригинал (`.pdf`), если он есть.
- `email`, `telegram` — контакты

> 💡 GitHub Pages разрешает браузерам до 10 минут держать старые файлы. Чтобы посетители сразу увидели правки, увеличьте число `?v=…` у файлов в конце `index.html` и в `<head>` (например, `?v=4` → `?v=5`). А у себя можно просто обновить страницу через **Cmd+Shift+R** (на Windows — **Ctrl+F5**).

### Про форму заявки

Письма с формы приходят на почту из `email` через бесплатный сервис [FormSubmit](https://formsubmit.co) — свой сервер не нужен. Есть один нюанс: после самой первой заявки FormSubmit пришлёт письмо с кнопкой **Activate**. Нажмите её, и дальше всё будет приходить само.

## Как запустить у себя

Сборка не нужна, это обычные HTML, CSS и JS. Достаточно поднять любой локальный сервер в папке проекта:

```bash
python3 -m http.server 5173
```

и открыть <http://localhost:5173>.

## Как выложить на GitHub Pages

1. Создайте репозиторий на GitHub. Если назвать его `BessolitsinGleb.github.io`, сайт откроется прямо по адресу `https://bessolitsingleb.github.io/`. С любым другим именем адрес будет `https://bessolitsingleb.github.io/<имя-репозитория>/`.
2. Отправьте туда код:
   ```bash
   git remote add origin https://github.com/BessolitsinGleb/<имя-репозитория>.git
   git push -u origin main
   ```
3. В репозитории откройте **Settings → Pages**, в **Source** выберите **Deploy from a branch**, ветку `main` и папку `/ (root)`, нажмите **Save**.
4. Через пару минут сайт будет доступен по адресу из первого шага.
5. Напоследок поменяйте в `index.html` ссылку в `og:image` на полный адрес картинки — тогда превью в мессенджерах будет с аватаркой.

## Как устроен проект

```
.
├── index.html          разметка страницы
├── 404.html            страница «не найдено»
├── assets/certs/       сертификаты: картинки и PDF
├── .nojekyll           чтобы GitHub Pages отдавал файлы как есть
└── assets
    ├── css/style.css   стили, темы и адаптив
    ├── js/content.js   весь текст сайта — правится здесь
    ├── js/main.js      анимации, переводы, темы, форма
    └── img/            аватар и иконки
```

---

<div align="center">
<sub>Сделано с вниманием к деталям · © Бессолицин Глеб</sub>
</div>
