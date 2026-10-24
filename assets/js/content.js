/* ============================================================================
   ✏️  КОНТЕНТ САЙТА
   Всё, что нужно заполнить, собрано в этом файле. Вёрстку трогать не нужно:
   поменяйте значения ниже, сохраните файл и обновите страницу.

   🌐 Перевод: любой текст можно задать
      • строкой — 'PyTorch'                       (одинаково на обоих языках)
      • объектом — { ru: 'Привет', en: 'Hello' }   (свой текст для каждого языка)
   Списки (roleWords, aboutText, marquee) тоже можно задать объектом { ru: [...], en: [...] }.
   ============================================================================ */

window.SITE = {
  nick: 'gleb1441',
  name: { ru: 'Бессолицин Глеб', en: 'Gleb Bessolitsin' },
  // Две строки большого заголовка на первом экране (вторая — акцентная)
  nameLines: { ru: ['Бессолицин', 'Глеб'], en: ['Gleb', 'Bessolitsin'] },

  /* ---------- Первый экран ---------- */
  // Строка под именем: «<role> / <слово>», слова из roleWords сменяют друг друга
  role: { ru: 'ML-инженер', en: 'ML Engineer' },
  roleWords: {
    ru: ['нейросети', 'ИИ-агенты', 'чат-боты', 'бэкенд на FastAPI', 'computer vision', 'NLP'],
    en: ['neural networks', 'AI agents', 'chatbots', 'FastAPI backends', 'computer vision', 'NLP'],
  },
  tagline: {
    ru: 'Обучаю модели, проектирую бэкенд и довожу проекты от идеи до продакшена: ИИ-агенты, чат-боты, API и сервисы на машинном обучении.',
    en: 'I train models, design backends and ship projects from idea to production: AI agents, chatbots, APIs and ML-powered services.',
  },
  status: { ru: 'Открыт для новых проектов', en: 'Open to new projects' }, // '' — скрыть бейдж
  // Бегущая строка под первым экраном
  marquee: {
    ru: ['Machine Learning', 'Deep Learning', 'ИИ-агенты', 'FastAPI', 'Computer Vision', 'NLP', 'RAG', 'От идеи до продакшена'],
    en: ['Machine Learning', 'Deep Learning', 'AI agents', 'FastAPI', 'Computer Vision', 'NLP', 'RAG', 'From idea to production'],
  },

  /* ---------- Контакты ---------- */
  email: 'bessolitsingleb@yandex.ru', // сюда же приходят письма с формы
  telegram: 'bissalitsin',            // username без @
  github: 'https://github.com/BessolitsinGleb',
  // Необязательно: свой endpoint формы (Formspree и т.п.).
  // Если пусто — форма отправляется через FormSubmit на адрес из `email`.
  formEndpoint: '',

  /* ---------- Обо мне ---------- */
  aboutLead: {
    ru: 'ML-инженер и бэкенд-разработчик. Превращаю идеи в работающие продукты — от модели до продакшена.',
    en: 'ML engineer and backend developer. I turn ideas into working products — from model to production.',
  },
  aboutText: {
    ru: [
      'Три года занимаюсь машинным обучением: классический ML, глубокое обучение, компьютерное зрение, NLP и обучение с подкреплением. Основные инструменты — PyTorch, scikit-learn, pandas, NumPy и Matplotlib.',
      '3,5 года пишу бэкенд на FastAPI, Pydantic и SQLAlchemy. Разрабатываю ИИ-агентов, чат-ботов и API для них, модели подключаю через OpenRouter или LLM Proxy.',
      'Беру проект с нуля и довожу до продакшена: Docker, Git, Redis, PostgreSQL (а при необходимости — любая SQL или NoSQL база), деплой на Railway, Render или VPS.',
    ],
    en: [
      'Three years in machine learning: classic ML, deep learning, computer vision, NLP and reinforcement learning. My main tools are PyTorch, scikit-learn, pandas, NumPy and Matplotlib.',
      '3.5 years building backends with FastAPI, Pydantic and SQLAlchemy. I develop AI agents, chatbots and the APIs behind them, connecting models via OpenRouter or LLM Proxy.',
      'I take projects from scratch to production: Docker, Git, Redis, PostgreSQL (or any SQL / NoSQL database when needed), deployed to Railway, Render or a VPS.',
    ],
  },
  facts: [
    { label: { ru: 'Ник', en: 'Nickname' }, value: 'gleb1441' },
    { label: { ru: 'Имя', en: 'Name' }, value: { ru: 'Бессолицин Глеб', en: 'Gleb Bessolitsin' } },
    { label: { ru: 'Направление', en: 'Focus' }, value: 'ML · Backend' },
    { label: { ru: 'Город', en: 'City' }, value: '—' },                                   // ✏️
    { label: { ru: 'Формат', en: 'Format' }, value: { ru: 'Удалённо', en: 'Remote' } },    // ✏️
  ],
  // Цифры анимируются при прокрутке (можно дробные: 3.5)
  stats: [
    { value: 3, suffix: '+', label: { ru: 'года в ML', en: 'years in ML' } },
    { value: 3.5, suffix: '', label: { ru: 'года в бэкенде', en: 'years in backend' } },
    { value: 5, suffix: '', label: { ru: 'языков программирования', en: 'programming languages' } },
  ],
  // Личные качества
  qualities: [
    {
      title: { ru: 'Целеустремлённость', en: 'Goal-driven' },
      text: { ru: 'Ставлю цель и довожу задачу до результата', en: 'I set a goal and see every task through to the result' },
    },
    {
      title: { ru: 'Организация процесса', en: 'Process organization' },
      text: { ru: 'Умею наладить и организовать рабочий процесс', en: 'I know how to set up and organize the workflow' },
    },
    {
      title: { ru: 'Коммуникабельность', en: 'Communication' },
      text: { ru: 'Легко нахожу общий язык с командой и заказчиком', en: 'Easy to work with for both the team and the client' },
    },
    {
      title: { ru: 'Ответственность', en: 'Responsibility' },
      text: { ru: 'Выполняю свои обязанности на все 100%', en: 'I give 100% to my responsibilities' },
    },
  ],
  // Карточка «Полный цикл»
  cycle: [
    { title: { ru: 'Данные', en: 'Data' }, text: { ru: 'сбор, очистка, анализ', en: 'collection, cleaning, EDA' } },
    { title: { ru: 'Модель', en: 'Model' }, text: { ru: 'обучение и оценка', en: 'training & evaluation' } },
    { title: 'API', text: { ru: 'FastAPI, агенты, боты', en: 'FastAPI, agents, bots' } },
    { title: { ru: 'Продакшен', en: 'Production' }, text: { ru: 'Docker и деплой', en: 'Docker & deploy' } },
  ],

  /* ---------- Стек / чем владею ----------
     { title, items, note } — note необязательна. Первая карточка выделяется. */
  stack: [
    {
      title: 'Machine Learning',
      items: ['PyTorch', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib'],
      note: { ru: '3 года в машинном обучении', en: '3 years in machine learning' },
    },
    {
      title: { ru: 'Направления', en: 'Domains' },
      items: [{ ru: 'Классический ML', en: 'Classic ML' }, 'Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning'],
    },
    {
      title: { ru: 'LLM и ИИ-агенты', en: 'LLM & AI agents' },
      items: [{ ru: 'ИИ-агенты', en: 'AI agents' }, { ru: 'Чат-боты', en: 'Chatbots' }, 'RAG', 'OpenRouter', 'LLM Proxy'],
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Pydantic', 'SQLAlchemy', 'WebSocket', 'REST API'],
      note: { ru: '3,5 года в бэкенде', en: '3.5 years in backend' },
    },
    {
      title: { ru: 'Базы данных', en: 'Databases' },
      items: ['PostgreSQL', 'Redis', 'SQL', 'NoSQL'],
      note: { ru: 'Предпочитаю PostgreSQL, но работаю с любой СУБД', en: 'Prefer PostgreSQL, comfortable with any DBMS' },
    },
    {
      title: { ru: 'DevOps и деплой', en: 'DevOps & deploy' },
      items: ['Docker', 'Git', 'Railway', 'Render', 'VPS'],
      note: { ru: 'Довожу проект от нуля до продакшена', en: 'From zero to production' },
    },
    {
      title: { ru: 'Языки', en: 'Languages' },
      items: ['Python', 'SQL', 'JavaScript', 'Kotlin', { ru: 'C# (базово)', en: 'C# (basic)' }],
    },
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript'],
      note: {
        ru: 'Не фронтенд-разработчик, но поправить вёрстку и доработать интерфейс — могу',
        en: 'Not a frontend developer, but I can fix layouts and polish an interface',
      },
    },
  ],

  /* ---------- Достижения ----------
     { date, title, place, text, link }  — link можно оставить пустым */
  achievements: [
    {
      date: '2026',
      title: { ru: 'Название достижения', en: 'Achievement title' },
      place: { ru: 'Конкурс / организация', en: 'Contest / organization' },
      text: { ru: 'Коротко: что было сделано и какой получился результат.', en: 'In short: what was done and what the result was.' },
      link: '',
    },
    {
      date: '2025',
      title: { ru: 'Название достижения', en: 'Achievement title' },
      place: { ru: 'Конкурс / организация', en: 'Contest / organization' },
      text: { ru: 'Коротко: что было сделано и какой получился результат.', en: 'In short: what was done and what the result was.' },
      link: '',
    },
    {
      date: '2024',
      title: { ru: 'Название достижения', en: 'Achievement title' },
      place: { ru: 'Конкурс / организация', en: 'Contest / organization' },
      text: { ru: 'Коротко: что было сделано и какой получился результат.', en: 'In short: what was done and what the result was.' },
      link: '',
    },
  ],

  /* ---------- Портфолио ----------
     { title, category, desc, tags, image, link, repo }
     image — путь к картинке, например 'assets/img/projects/shop.webp'.
     Если image пустой, обложка сгенерируется автоматически в палитре сайта. */
  projects: [
    {
      title: { ru: 'Проект 01', en: 'Project 01' },
      category: 'ML',
      desc: { ru: 'Описание проекта: задача, решение и результат в паре предложений.', en: 'Project description: the task, the solution and the result in a couple of sentences.' },
      tags: ['Tag', 'Tag'],
      image: '',
      link: '',
      repo: '',
    },
    {
      title: { ru: 'Проект 02', en: 'Project 02' },
      category: 'Backend',
      desc: { ru: 'Описание проекта: задача, решение и результат в паре предложений.', en: 'Project description: the task, the solution and the result in a couple of sentences.' },
      tags: ['Tag', 'Tag'],
      image: '',
      link: '',
      repo: '',
    },
    {
      title: { ru: 'Проект 03', en: 'Project 03' },
      category: 'ML',
      desc: { ru: 'Описание проекта: задача, решение и результат в паре предложений.', en: 'Project description: the task, the solution and the result in a couple of sentences.' },
      tags: ['Tag'],
      image: '',
      link: '',
      repo: '',
    },
    {
      title: { ru: 'Проект 04', en: 'Project 04' },
      category: { ru: 'Боты', en: 'Bots' },
      desc: { ru: 'Описание проекта: задача, решение и результат в паре предложений.', en: 'Project description: the task, the solution and the result in a couple of sentences.' },
      tags: ['Tag', 'Tag'],
      image: '',
      link: '',
      repo: '',
    },
  ],
};
