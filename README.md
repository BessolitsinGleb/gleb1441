<div align="center">

<img src="assets/img/avatar.jpg" width="120" height="120" alt="gleb1441" style="border-radius:50%">

# gleb1441

**Бессолицин Глеб** — сайт-визитка

[![GitHub](https://img.shields.io/badge/GitHub-BessolitsinGleb-01070A?style=flat-square&logo=github&logoColor=FBFBFB)](https://github.com/BessolitsinGleb)
![HTML](https://img.shields.io/badge/HTML-46656F?style=flat-square&logo=html5&logoColor=FBFBFB)
![CSS](https://img.shields.io/badge/CSS-46656F?style=flat-square&logo=css&logoColor=FBFBFB)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-8FABB7?style=flat-square&logo=javascript&logoColor=01070A)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-D8DFE5?style=flat-square&logo=githubpages&logoColor=01070A)

![#01070A](https://img.shields.io/badge/%2301070A-01070A?style=for-the-badge)
![#46656F](https://img.shields.io/badge/%2346656F-46656F?style=for-the-badge)
![#8FABB7](https://img.shields.io/badge/%238FABB7-8FABB7?style=for-the-badge)
![#D8DFE5](https://img.shields.io/badge/%23D8DFE5-D8DFE5?style=for-the-badge)
![#FBFBFB](https://img.shields.io/badge/%23FBFBFB-FBFBFB?style=for-the-badge)

</div>

---

## ✦ О проекте

Статичный сайт-визитка без сборщиков и зависимостей: открывается из любого хостинга, в том числе из GitHub Pages.
Палитра вдохновлена современной архитектурой — чёрный, тёмно-серо-синий, синевато-серый, светло-серый и белый.

**Что внутри**

- **Первый экран** — имя, роль с «печатающимся» текстом, живой low-poly «фасад» на canvas, который реагирует на курсор, и полоса палитры (клик копирует HEX).
- **Аватар в шапке** — покачивается, машет при загрузке, вращающееся пунктирное кольцо и «привет!» при наведении.
- **01 · Обо мне** — bento-сетка: описание, профиль, навыки, анимированные счётчики.
- **02 · Достижения** — таймлайн, который заполняется при прокрутке.
- **03 · Портфолио** — карточки с фильтрами по категориям и 3D-наклоном; если нет картинки, обложка генерируется в палитре сайта.
- **04 · Связаться** — Telegram, почта (с копированием), GitHub и форма заявки.
- Прелоадер, прогресс прокрутки, «магнитные» кнопки, подсветка карточек за курсором, бегущая строка.
- Адаптив: компьютер, планшет, телефон. Учитывается `prefers-reduced-motion`.

## ✦ Структура

```
.
├── index.html            разметка
├── 404.html              страница «не найдено»
├── .nojekyll             отключает Jekyll на GitHub Pages
└── assets
    ├── css/style.css     стили и адаптив
    ├── js/content.js     ✏️ ВЕСЬ КОНТЕНТ — заполнять здесь
    ├── js/main.js        логика и анимации
    └── img/              аватар и иконки
```

## ✦ Как заполнить

Всё редактируется в одном файле — [`assets/js/content.js`](assets/js/content.js):

| Что | Поле |
| --- | --- |
| Роль, слова для «печатающегося» текста, подзаголовок | `role`, `roleWords`, `tagline` |
| Почта (на неё же приходят заявки с формы) | `email` |
| Telegram (username без `@`) | `telegram` |
| Текст «Обо мне», факты, цифры, навыки | `aboutLead`, `aboutText`, `facts`, `stats`, `skills` |
| Достижения | `achievements` — `{ date, title, place, text, link }` |
| Портфолио | `projects` — `{ title, category, desc, tags, image, link, repo }` |

Картинки проектов кладите в `assets/img/projects/` и указывайте путь в поле `image`.
Пока поля `email` или `telegram` пустые, на сайте показываются аккуратные заглушки.

### Форма заявки

Форма работает без своего сервера через [FormSubmit](https://formsubmit.co):

1. Укажите `email` в `content.js` и опубликуйте сайт.
2. Отправьте с сайта первую тестовую заявку — на почту придёт письмо с подтверждением, нажмите **Activate**.
3. Готово, дальше заявки приходят на почту.

Хотите другой сервис (например, Formspree) — укажите его адрес в `formEndpoint`.

## ✦ Локальный запуск

```bash
python3 -m http.server 5173
```

и откройте <http://localhost:5173>.

## ✦ Публикация на GitHub Pages

1. Создайте репозиторий на GitHub. Если назвать его `BessolitsinGleb.github.io`, сайт будет доступен по адресу `https://bessolitsingleb.github.io/`; при другом имени адрес будет `https://bessolitsingleb.github.io/<имя-репозитория>/`.
2. Отправьте код:
   ```bash
   git remote add origin https://github.com/BessolitsinGleb/<имя-репозитория>.git
   git push -u origin main
   ```
3. В репозитории: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, ветка `main`, папка `/ (root)` → **Save**.
4. Через минуту-две сайт появится по адресу из шага 1.
5. В `index.html` замените `og:image` на полный адрес картинки, чтобы превью ссылки красиво показывалось в мессенджерах.

---

<div align="center">
<sub>© Бессолицин Глеб · gleb1441</sub>
</div>
