/* ============================================================================
   ✏️  КОНТЕНТ САЙТА
   Всё, что нужно заполнить, собрано в этом файле. Вёрстку трогать не нужно:
   поменяйте значения ниже, сохраните файл и обновите страницу.

   🌐 Перевод: любой текст можно задать
      • строкой — 'PyTorch'                       (одинаково на обоих языках)
      • объектом — { ru: 'Привет', en: 'Hello' }   (свой текст для каждого языка)
   Списки (roleWords, aboutText, marquee) тоже можно задать объектом { ru: [...], en: [...] }.

   📄 Сертификаты лежат в assets/certs/: картинка для просмотра (.webp),
      маленькая превью (-thumb.webp) и, если есть, оригинал (.pdf).
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
    ru: 'ML-инженер и бэкенд-разработчик. Делаю ML-сервисы под реальные задачи — от данных и модели до API в продакшене.',
    en: 'ML engineer and backend developer. I build ML services for real tasks — from data and models to a production API.',
  },
  aboutText: {
    ru: [
      'Три года в машинном обучении и 3,5 года в бэкенде. За это время — коммерческие проекты по ТЗ партнёров: рекомендательная система для МГПУ, многоагентное обучение с подкреплением для горной техники «ДСТ-Урал», NLP-модели на медицинских текстах для Сбера, а также заказные сайты и сервисы.',
      'В ML работаю с классическими моделями, глубоким обучением, компьютерным зрением, NLP и обучением с подкреплением: PyTorch, scikit-learn, CatBoost, LightGBM, Hugging Face. Строю честную валидацию и подбираю решение под метрику заказчика.',
      'В бэкенде — FastAPI, Pydantic, SQLAlchemy и WebSocket. Делаю ИИ-агентов, чат-ботов и RAG, подключаю модели через OpenRouter или LLM Proxy, работаю с PostgreSQL, Redis и другими SQL и NoSQL базами. Проект сдаю под ключ: Docker, Git, деплой на Railway, Render или VPS.',
      'Живу во Владивостоке, работаю удалённо и подстраиваюсь под часовой пояс команды — созвоны и ответы в удобное для вас время.',
    ],
    en: [
      'Three years in machine learning and 3.5 years in backend. Along the way — commercial projects built to partners’ specs: a course recommender for Moscow City University, multi-agent reinforcement learning for DST-Ural mining machinery, NLP models on medical texts for Sber, plus client websites and services.',
      'In ML I work with classic models, deep learning, computer vision, NLP and reinforcement learning: PyTorch, scikit-learn, CatBoost, LightGBM, Hugging Face. I set up honest validation and tune the solution to the client’s metric.',
      'On the backend — FastAPI, Pydantic, SQLAlchemy and WebSocket. I build AI agents, chatbots and RAG, connect models via OpenRouter or LLM Proxy, and work with PostgreSQL, Redis and other SQL and NoSQL databases. I deliver end to end: Docker, Git, deployment to Railway, Render or a VPS.',
      'I live in Vladivostok, work remotely and adapt to the team’s time zone — calls and replies at a time that suits you.',
    ],
  },
  facts: [
    { label: { ru: 'Ник', en: 'Nickname' }, value: 'gleb1441' },
    { label: { ru: 'Имя', en: 'Name' }, value: { ru: 'Бессолицин Глеб', en: 'Gleb Bessolitsin' } },
    { label: { ru: 'Направление', en: 'Focus' }, value: 'ML · Backend' },
    { label: { ru: 'Город', en: 'City' }, value: { ru: 'Владивосток', en: 'Vladivostok' } },
    { label: { ru: 'Часовой пояс', en: 'Time zone' }, value: { ru: 'Любой — под клиента', en: 'Any — yours' } },
    { label: { ru: 'Формат', en: 'Format' }, value: { ru: 'Удалённо', en: 'Remote' } },
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
      items: ['PyTorch', 'scikit-learn', 'CatBoost', 'LightGBM', 'Hugging Face', 'pandas', 'NumPy'],
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
      note: { ru: 'Реляционные и NoSQL базы', en: 'Relational and NoSQL databases' },
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
     { date, title, place, text, badge, links: [{ label, url }], cert: { img, thumb, pdf } }
     cert и links необязательны. */
  highlights: [
    { value: { ru: 'Победа', en: 'Win' }, label: { ru: 'IT-хакатон ДВФУ · направление ИИ', en: 'FEFU IT hackathon · AI track' } },
    { value: { ru: 'Топ-10', en: 'Top 10' }, label: { ru: 'AI Challenge 2026 от Сбера', en: 'Sber AI Challenge 2026' } },
    { value: { ru: 'Топ-35', en: 'Top 35' }, label: { ru: 'финал FAIO из ~500 команд', en: 'FAIO final, of ~500 teams' } },
    { value: { ru: '271-е место', en: '271st place' }, label: { ru: 'из 43 023 · Всероссийская олимпиада по ИИ', en: 'of 43,023 · All-Russian AI Olympiad' } },
  ],
  achievements: [
    {
      date: { ru: 'Октябрь 2026', en: 'October 2026' },
      badge: { ru: '🏆 Лучший продукт смены', en: '🏆 Best product of the program' },
      title: { ru: 'Профильная смена «Информационные технологии» от Т-Банка', en: 'T-Bank “Information Technology” intensive program' },
      place: { ru: 'Т-Банк × Сириус Приморье · очно, 19–24 октября', en: 'T-Bank × Sirius Primorye · on-site, Oct 19–24' },
      text: {
        ru: 'За неделю наша команда сделала два продукта. «Амба» — ИИ-гид по Приморскому краю, который собирает план поездки и проверяет, что он сходится с реальностью, — победил в номинации «Самый качественный и проработанный продукт». Второй — «Токенман», веб-аркада с пятью популярными играми. В «Амбе» отвечал за бэкенд.',
        en: 'In one week our team built two products. “Amba”, an AI travel guide for Primorsky Krai that builds a trip plan and checks it against reality, won “Most polished and well-crafted product”. The second one is “Tokenman”, a web arcade with five popular games. I was a backend developer on Amba.',
      },
      links: [
        { label: { ru: 'Приложение «Амба»', en: 'Amba app' }, url: 'https://amba-qm59.onrender.com/' },
        { label: { ru: 'Сайт команды', en: 'Team website' }, url: 'https://bessolitsingleb.github.io/AI-ta/site/' },
        { label: 'GitHub', url: 'https://github.com/BessolitsinGleb/AI-ta' },
        { label: { ru: 'Токенман', en: 'Tokenman' }, url: 'https://bessolitsingleb.github.io/Tokenman/' },
      ],
      cert: { img: 'assets/certs/tbank-it-2026.webp', thumb: 'assets/certs/tbank-it-2026-thumb.webp', pdf: 'assets/certs/tbank-it-2026.pdf' },
    },
    {
      date: { ru: 'Май 2026', en: 'May 2026' },
      badge: { ru: '🏆 Победители', en: '🏆 Winners' },
      title: { ru: 'Победа на IT-хакатоне «Большого межпредметного турнира»', en: 'Winner of the “Big Interdisciplinary Tournament” IT hackathon' },
      place: { ru: 'ДВФУ × Kodik × Slavda × FESCO · направление «Искусственный интеллект»', en: 'FEFU × Kodik × Slavda × FESCO · Artificial Intelligence track' },
      text: {
        ru: 'Был бэкенд-разработчиком в команде-победителе. Сделали «AI-рекрутера олимпиад» — персонального помощника, который по анкете школьника подбирает олимпиады, конкурсы и конференции, объясняет с помощью LLM, почему они подходят, и собирает календарь дедлайнов.',
        en: 'Backend developer in the winning team. We built an “AI olympiad recruiter” — a personal assistant that matches a student’s profile with olympiads, contests and conferences, explains each pick with an LLM and builds a deadline calendar.',
      },
      links: [{ label: 'GitHub', url: 'https://github.com/leksik-phew/AI-Recruiter-olimpiads' }],
      cert: { img: 'assets/certs/hackathon-dvfu.webp', thumb: 'assets/certs/hackathon-dvfu-thumb.webp', pdf: 'assets/certs/hackathon-dvfu.pdf' },
    },
    {
      date: { ru: 'Июль 2026', en: 'July 2026' },
      badge: { ru: 'Конкурсный отбор', en: 'Competitive selection' },
      title: { ru: 'Смена «Большие вызовы» в «Сириусе»', en: '“Big Challenges” program at Sirius' },
      place: { ru: 'Сириус, Сочи · проект КГТУ · 1–24 июля', en: 'Sirius, Sochi · KSTU project · July 1–24' },
      text: {
        ru: 'На смену попадают только победители отбора. Единственный программист в команде проекта КГТУ: собрали с нуля безэкипажный катамаран для мониторинга малых водоёмов. Я написал прошивки и веб-панель управления — движение, клапаны для забора проб, телеметрия и данные датчиков (pH, солёность, температура) в реальном времени — и обучал нейросеть распознавать рыб. «Сириус» взял у меня интервью для новости о проекте.',
        en: 'Only selection winners get in. I was the only programmer on the KSTU project team: we built an uncrewed catamaran for monitoring small bodies of water from scratch. I wrote the firmware and the web control panel — movement, water-sampling valves, telemetry and live sensor data (pH, salinity, temperature) — and trained a neural network to recognize fish. Sirius interviewed me for a news story about the project.',
      },
      links: [
        { label: 'GitHub', url: 'https://github.com/BessolitsinGleb/catamaran_vodolaz' },
        { label: { ru: 'Статья «Сириуса»', en: 'Sirius news story' }, url: 'https://sochisirius.ru/news/7747' },
      ],
      cert: { img: 'assets/certs/sirius-big-challenges.webp', thumb: 'assets/certs/sirius-big-challenges-thumb.webp', pdf: 'assets/certs/sirius-big-challenges.pdf' },
    },
    {
      date: '2026',
      badge: { ru: 'Топ-10 команд', en: 'Top 10 teams' },
      title: { ru: 'Международный конкурс по ИИ «AI Challenge 2026»', en: 'International AI contest “AI Challenge 2026”' },
      place: { ru: 'Альянс в сфере ИИ × Сбер', en: 'AI Alliance × Sber' },
      text: {
        ru: 'Наша команда вошла в десятку лучших: 66,9 из 70 баллов за точность. Кейс от Сбера — анализ клинических рекомендаций: модель определяет, применим ли пункт рекомендации к протоколу осмотра пациента. Подробности — в портфолио.',
        en: 'Our team made the top ten with 66.9 of 70 accuracy points. Sber’s case was clinical guideline analysis: the model decides whether a guideline item applies to a patient’s examination record. Details are in the portfolio.',
      },
      cert: { img: 'assets/certs/ai-challenge-2026.webp', thumb: 'assets/certs/ai-challenge-2026-thumb.webp' },
    },
    {
      date: { ru: 'Сентябрь 2026', en: 'September 2026' },
      badge: { ru: 'Финалист · топ-35', en: 'Finalist · top 35' },
      title: { ru: 'Финал международной олимпиады по ИИ FAIO', en: 'FAIO International AI Olympiad — final' },
      place: { ru: 'Fizmat AI Olympiad · Алматы, Казахстан', en: 'Fizmat AI Olympiad · Almaty, Kazakhstan' },
      text: {
        ru: 'Команда «Russia, Vladivostok» заняла 35-е место в отборочном туре из примерно 500 команд и вошла в 50 сильнейших — нас пригласили в финал в Алматы.',
        en: 'Team “Russia, Vladivostok” placed 35th of about 500 teams in the qualifying round and made the top 50 — we were invited to the final in Almaty.',
      },
      links: [{ label: 'faio.kz', url: 'https://faio.kz/' }],
      cert: { img: 'assets/certs/faio-2026.webp', thumb: 'assets/certs/faio-2026-thumb.webp' },
    },
    {
      date: { ru: 'Октябрь 2026', en: 'October 2026' },
      badge: { ru: '271 из 43 023', en: '271st of 43,023' },
      title: { ru: 'Всероссийская олимпиада по искусственному интеллекту', en: 'All-Russian Artificial Intelligence Olympiad' },
      place: { ru: 'Основной этап · входит в перечень Минпросвещения', en: 'Main stage · listed by the Ministry of Education' },
      text: {
        ru: 'Участник основного этапа: 271-е место из 43 023 участников по итогам первого тура.',
        en: 'Main stage participant: 271st place out of 43,023 participants after the first round.',
      },
      links: [{ label: 'ai.edu.gov.ru', url: 'https://ai.edu.gov.ru/' }],
      cert: { img: 'assets/certs/roai-2026.webp', thumb: 'assets/certs/roai-2026-thumb.webp', pdf: 'assets/certs/roai-2026.pdf' },
    },
  ],

  /* ---------- Портфолио ----------
     { title, category, desc, tags, image, badge, status, links: [{ label, url }] }
     image — путь к картинке; если пусто, обложка сгенерируется в палитре сайта.
     category можно задать объектом { ru, en } — фильтры строятся автоматически. */
  projects: [
    {
      kind: 'client',
      client: { ru: 'по ТЗ «ДСТ-Урал»', en: 'spec by DST-Ural' },
      title: { ru: 'Многоагентное управление техникой в карьере', en: 'Multi-agent control of quarry machinery' },
      category: 'ML',
      badge: { ru: 'Прототип в симуляции', en: 'Working simulation prototype' },
      desc: {
        ru: 'Исследовал, может ли многоагентное обучение с подкреплением (MARL) координировать горную технику в карьере. Собрал свою среду с логистикой карьера и обучил агентов работать вместе: в симуляции они научились выполнять задачи и не мешать друг другу.',
        en: 'Explored whether multi-agent reinforcement learning (MARL) can coordinate mining machinery in a quarry. I built a custom environment that models quarry logistics and trained agents to work together: in simulation they learned to complete tasks without getting in each other’s way.',
      },
      details: {
        ru: [
          'Прошёл путь от одноагентного RL к многоагентному: PPO на CartPole и LunarLanderContinuous, затем кооперативные среды PettingZoo (simple_spread).',
          'Написал собственную среду на PettingZoo, которая моделирует логистику карьера. Агентов обучал алгоритмом MAPPO по схеме «централизованное обучение — децентрализованное исполнение»: критик видит всё состояние карьера, а каждый агент действует только по своим наблюдениям. Для координации добавил агентам каналы коммуникации.',
          'Решал типичные проблемы MARL: распределение награды между агентами, нестационарность среды, подбор reward shaping для кооперативного поведения.',
        ],
        en: [
          'Went from single-agent to multi-agent RL: PPO on CartPole and LunarLanderContinuous, then cooperative PettingZoo environments (simple_spread).',
          'Wrote a custom PettingZoo environment that models quarry logistics. Agents were trained with MAPPO using centralized training and decentralized execution: the critic sees the whole quarry state while each agent acts on its own observations. I added communication channels to help them coordinate.',
          'Tackled the usual MARL problems: credit assignment between agents, non-stationarity and reward shaping for cooperative behaviour.',
        ],
      },
      tags: ['Python', 'PyTorch', 'PettingZoo', 'Gymnasium', 'MAPPO'],
      private: true,
    },
    {
      kind: 'client',
      client: { ru: 'по ТЗ МГПУ', en: 'spec by MCU' },
      title: { ru: 'Рекомендательная система элективов', en: 'Elective course recommender' },
      category: 'ML',
      desc: {
        ru: 'Каждому студенту МГПУ система подбирает 5 элективных дисциплин, которые он с наибольшей вероятностью выберет. Качество — по метрике pNDCG@5, которая учитывает и попадание, и порядок рекомендаций.',
        en: 'For every student of Moscow City University the system suggests the 5 electives they are most likely to pick. Quality is measured with pNDCG@5, which rewards both hits and ranking order.',
      },
      details: {
        ru: [
          'Двухэтапный пайплайн: сначала отбираются кандидаты, затем модель ранжирования упорядочивает их. Основа — LightGBM-ранкер на признаках студента, дисциплины и их взаимодействия; описания курсов векторизовал через TF-IDF со снижением размерности SVD.',
          'Сравнивал подходы на локальной валидации по официальной метрике: коллаборативная фильтрация (ALS, EASE), CatBoost с ранжирующими лоссами, retrieval + re-ranking. Уже пройденные курсы исключаются из рекомендаций.',
        ],
        en: [
          'A two-stage pipeline: candidate retrieval followed by a ranking model. The core is a LightGBM ranker on student, course and interaction features; course descriptions are vectorized with TF-IDF and reduced with SVD.',
          'Compared approaches on local validation with the official metric: collaborative filtering (ALS, EASE), CatBoost with ranking losses, retrieval + re-ranking. Courses a student has already taken are excluded.',
        ],
      },
      tags: ['Python', 'pandas', 'LightGBM', 'CatBoost', 'scikit-learn', 'implicit'],
      private: true,
    },
    {
      kind: 'client',
      client: { ru: 'кейс Сбера', en: 'Sber case' },
      title: { ru: 'Анализ клинических рекомендаций', en: 'Clinical guideline analysis' },
      category: 'ML',
      badge: { ru: 'Топ-10 · 66,9 из 70', en: 'Top 10 · 66.9 / 70' },
      desc: {
        ru: 'NLP на медицинских текстах: модель определяет, применим ли пункт клинической рекомендации к протоколу осмотра конкретного пациента, и классифицирует заголовки рекомендаций. 66,9 из 70 баллов за точность — команда вошла в топ-10 AI Challenge 2026.',
        en: 'NLP on medical texts: the model decides whether a clinical guideline item applies to a specific patient’s examination record and classifies guideline headings. 66.9 of 70 accuracy points — our team made the top 10 of AI Challenge 2026.',
      },
      details: {
        ru: [
          'Ансамбль двух моделей. Кросс-энкодер на RuBioBERT получает заголовок и протокол вместе и оценивает их соответствие; CatBoost работает на 168 признаках — текстовых, возрастных, числовых и кодах МКБ из протоколов. Замена rubert-tiny2 на доменную RuBioBERT дала прирост в обеих подзадачах.',
          'Чтобы обойти лимит длины BERT, переупорядочил текст протокола: ключевая информация не теряется при усечении. Пороги подбирал под целевые F-метрики (macro-F0.5 и macro-F2) по out-of-fold предсказаниям.',
          'Заметил, что пересечение заголовков между train и test завышает обычную кросс-валидацию, и ввёл групповую валидацию — она отсеяла переобучающиеся идеи.',
        ],
        en: [
          'An ensemble of two models. A RuBioBERT cross-encoder reads the heading and the record together and scores how well they match; CatBoost runs on 168 features — text, age, numeric and ICD codes extracted from the records. Switching from rubert-tiny2 to the domain-specific RuBioBERT improved both subtasks.',
          'To get around BERT’s length limit I reordered the record text so key information survives truncation. Thresholds were tuned for the target F-metrics (macro-F0.5 and macro-F2) on out-of-fold predictions.',
          'I noticed that heading overlap between train and test inflated regular cross-validation and switched to group validation, which filtered out overfitting ideas.',
        ],
      },
      tags: ['Python', 'PyTorch', 'Transformers', 'RuBioBERT', 'CatBoost'],
      private: true,
    },
    {
      kind: 'client',
      client: { ru: 'кейс Т-Банка', en: 'T-Bank case' },
      title: { ru: 'Амба — ИИ-гид по Приморью', en: 'Amba — AI guide to Primorye' },
      category: { ru: 'ИИ-агенты', en: 'AI agents' },
      badge: { ru: '🏆 Лучший продукт · Т-Банк', en: '🏆 Best product · T-Bank' },
      desc: {
        ru: 'Пишете поездку обычными словами — агент сам выбирает из 10 инструментов (погода, маршруты, кафе, АЗС, транспорт), собирает план по дням с картой и кодом проверяет около 15 условий: часы работы, закат, погоду, заправки, расписания. План можно доработать в чате.',
        en: 'Describe a trip in plain words — the agent picks from 10 tools (weather, routes, cafés, fuel stations, transport), builds a day-by-day plan with a map and checks ~15 constraints in code: opening hours, sunset, weather, fuel, timetables. The plan can be refined in chat.',
      },
      tags: ['Python', 'FastAPI', 'LLM agent', 'Redis', 'OpenStreetMap'],
      image: 'assets/img/projects/amba.webp',
      links: [
        { label: { ru: 'Приложение', en: 'App' }, url: 'https://amba-qm59.onrender.com/' },
        { label: { ru: 'Сайт', en: 'Website' }, url: 'https://bessolitsingleb.github.io/AI-ta/site/' },
        { label: 'GitHub', url: 'https://github.com/BessolitsinGleb/AI-ta' },
      ],
      note: { ru: 'Если приложение не отвечает — значит, демо-ключ API уже отозван', en: 'If the app does not respond, the demo API key has been revoked' },
    },
    {
      kind: 'client',
      client: { ru: 'заказ ТЦ', en: 'for the mall' },
      title: { ru: 'Сайт ТЦ «Уссури Молл»', en: 'Ussuri Mall website' },
      category: { ru: 'Веб', en: 'Web' },
      desc: {
        ru: 'Сайт крупнейшего торгового центра Уссурийска: интерактивная карта этажей, каталог магазинов и информация о ТЦ.',
        en: 'Website for the largest shopping mall in Ussuriysk: an interactive floor map, a store directory and mall information.',
      },
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/img/projects/ussuri-mall.webp',
      links: [{ label: { ru: 'Сайт', en: 'Website' }, url: 'https://bessolitsingleb.github.io/ussuri_mall/' }],
    },
    {
      kind: 'client',
      client: { ru: 'кейс Т-Банка', en: 'T-Bank case' },
      title: { ru: 'Токенман', en: 'Tokenman' },
      category: { ru: 'Веб', en: 'Web' },
      badge: { ru: 'Т-Банк × Сириус Приморье', en: 'T-Bank × Sirius Primorye' },
      desc: {
        ru: '«Токен Аркада» — веб-приложение с пятью аркадами: Токенман по мотивам классики, Флаппи, Блок-бласт, Бильярд и Три в ряд. Рекорды, профиль, звук, управление с клавиатуры и джойстик на телефоне.',
        en: '“Token Arcade” — a web app with five arcade games: Tokenman inspired by the classic, Flappy, Block Blast, Billiards and Match-3. High scores, a profile, sound, keyboard controls and an on-screen joystick on phones.',
      },
      tags: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
      image: 'assets/img/projects/tokenman.webp',
      links: [{ label: { ru: 'Играть', en: 'Play' }, url: 'https://bessolitsingleb.github.io/Tokenman/' }],
    },
    {
      kind: 'event',
      title: { ru: 'AI-рекрутер олимпиад', en: 'AI Olympiad Recruiter' },
      category: { ru: 'ИИ-агенты', en: 'AI agents' },
      badge: { ru: '🏆 Победа на хакатоне', en: '🏆 Hackathon winner' },
      desc: {
        ru: 'Помощник для школьников: по анкете подбирает олимпиады, конкурсы и конференции из перечней РСОШ и Минпросвещения, объясняет выбор с помощью LLM и строит календарь дедлайнов. Работает и без ключа API.',
        en: 'An assistant for students: matches a profile with olympiads, contests and conferences from the official lists, explains each pick with an LLM and builds a deadline calendar. Works even without an API key.',
      },
      tags: ['FastAPI', 'React', 'LLM', 'Recommender'],
      links: [{ label: 'GitHub', url: 'https://github.com/leksik-phew/AI-Recruiter-olimpiads' }],
    },
    {
      kind: 'event',
      title: { ru: 'Катамаран «Водолаз»', en: '“Vodolaz” catamaran' },
      category: { ru: 'Системы', en: 'Systems' },
      badge: { ru: 'Сириус · Большие вызовы', en: 'Sirius · Big Challenges' },
      desc: {
        ru: 'Безэкипажный катамаран для мониторинга водоёмов: прошивки ESP32, веб-панель с джойстиком, очередь пилотов по QR, телеметрия по WebSocket, камера и считывание датчика воды.',
        en: 'An uncrewed catamaran for monitoring water bodies: ESP32 firmware, a web panel with a joystick, a QR pilot queue, WebSocket telemetry, a camera feed and water-sensor readings.',
      },
      tags: ['ESP32', 'C++', 'FastAPI', 'WebSocket', 'CV'],
      image: 'assets/img/projects/catamaran.webp',
      links: [
        { label: 'GitHub', url: 'https://github.com/BessolitsinGleb/catamaran_vodolaz' },
        { label: { ru: 'Статья', en: 'News' }, url: 'https://sochisirius.ru/news/7747' },
      ],
    },
    {
      kind: 'pet',
      title: 'EFCT',
      category: { ru: 'Системы', en: 'Systems' },
      status: { ru: 'На доработке', en: 'In development' },
      desc: {
        ru: 'Экосистема для контейнерного терминала (ЭДКТ). В разы ускоряет поиск и перестановку контейнеров, подбирает оптимальную расстановку по габаритам, дате отправки и другим факторам и сама формирует отчёт для каждого заказчика — стоянка и все перестановки с ценами.',
        en: 'A digital ecosystem for container terminals. Speeds up finding and moving containers many times over, suggests the best placement by size, departure date and other factors, and generates a per-client report — storage and every move with prices.',
      },
      tags: ['Python', 'Optimization', 'Logistics'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/EFCT' }],
    },
    {
      kind: 'pet',
      title: 'Comsim',
      category: { ru: 'ИИ-агенты', en: 'AI agents' },
      status: { ru: 'В разработке', en: 'In progress' },
      desc: {
        ru: 'Тренажёр продаж: человек общается с ИИ-«клиентом» и пытается продать ему продукт в реальном времени. Два режима — переписка в чате и живой голосовой звонок.',
        en: 'A sales trainer: you talk to an AI “client” and try to sell them a product in real time. Two modes — text chat and a live voice call.',
      },
      tags: ['Python', 'FastAPI', 'LLM', 'Speech'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/communication_simulator' }],
    },
    {
      kind: 'pet',
      title: 'Smart Wardrobe',
      category: { ru: 'ИИ-агенты', en: 'AI agents' },
      desc: {
        ru: 'Цифровой гардероб с ИИ-стилистом: загружаете фото вещей, оцениваете их и получаете готовые аутфиты с учётом сезона, повода и ваших оценок. Веб-версия и мобильное приложение.',
        en: 'A digital wardrobe with an AI stylist: upload photos of your clothes, rate them and get ready outfits that match the season, occasion and your ratings. Web version and a mobile app.',
      },
      tags: ['FastAPI', 'React Native', 'OpenRouter', 'TypeScript'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/smart_wardrobe' }],
    },
    {
      kind: 'pet',
      title: 'Resentment Level',
      category: 'ML',
      desc: {
        ru: 'Telegram-бот, который оценивает степень обиды в сообщении. Под капотом — RoBERTa, дообученная на отзывах с Reddit. Проект готов, бот сейчас выключен.',
        en: 'A Telegram bot that rates how offended a message sounds. Under the hood — RoBERTa fine-tuned on Reddit reviews. The project is complete; the bot is currently offline.',
      },
      tags: ['PyTorch', 'RoBERTa', 'NLP', 'Telegram Bot'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/resentment_level' }],
    },
    {
      kind: 'pet',
      title: 'Voice Read',
      category: { ru: 'Системы', en: 'Systems' },
      status: { ru: 'Для себя', en: 'Personal tool' },
      desc: {
        ru: 'Инструмент, чтобы слушать, а не читать: озвучивает PDF-файлы, а в режиме автозачитывания сам читает текст из выбранного окна вслух и перелистывает страницы, пока текст не закончится.',
        en: 'A tool for listening instead of reading: voices PDF files, and in auto-read mode reads text from a selected window aloud and turns pages until the text runs out.',
      },
      tags: ['Python', 'TTS', 'OCR'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/voice_read' }],
    },
    {
      kind: 'pet',
      title: 'OS AI Survey',
      category: 'ML',
      desc: {
        ru: 'Опрос, который подбирает операционную систему под человека. Внутри — мой первый трансформер, обученный своими руками.',
        en: 'A survey that picks the operating system that suits you best. Inside is my first transformer, trained from scratch by hand.',
      },
      tags: ['PyTorch', 'Transformer', 'HTML'],
      links: [{ label: 'GitHub', url: 'https://github.com/BessolitsinGleb/os_ai_survey' }],
    },
  ],

  /* ---------- Обучение ---------- */
  learningNow: [
    {
      title: { ru: 'Deep Learning School, 2-й семестр', en: 'Deep Learning School, 2nd semester' },
      org: { ru: 'МФТИ', en: 'MIPT' },
      link: 'https://stepik.org/course/250969/promo',
    },
    {
      title: { ru: 'Кружок по машинному обучению «Т-Поколение»', en: '“T-Generation” machine learning club' },
      org: { ru: 'Т-Банк', en: 'T-Bank' },
    },
    {
      title: { ru: 'Специализация «Разработка ИИ-агентов»', en: '“AI Agent Development” specialization' },
      org: { ru: 'Яндекс Лицей', en: 'Yandex Lyceum' },
    },
  ],
  courses: [
    {
      title: 'Agents Week',
      org: { ru: 'ШАД Яндекса · недельный интенсив', en: 'Yandex School of Data Analysis · one-week intensive' },
      date: { ru: 'Апрель 2026', en: 'April 2026' },
    },
    {
      title: { ru: 'Deep Learning School, 1-й семестр', en: 'Deep Learning School, 1st semester' },
      org: { ru: 'МФТИ', en: 'MIPT' },
      link: 'https://stepik.org/course/250969/promo',
    },
    {
      title: 'CS231n: Deep Learning for Computer Vision (2025)',
      org: { ru: 'Стэнфордский университет · открытый курс', en: 'Stanford University · open course' },
      link: 'https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16',
      linkLabel: { ru: 'Лекции', en: 'Lectures' },
    },
    {
      title: 'Deep Reinforcement Learning Course',
      org: { ru: 'Hugging Face · открытый курс', en: 'Hugging Face · open course' },
      link: 'https://huggingface.co/learn/deep-rl-course/unit0/introduction',
    },
    {
      title: { ru: 'Машинное обучение: введение и продвинутый уровень', en: 'Machine learning: intro and advanced' },
      org: { ru: 'Академия ИИ', en: 'AI Academy' },
    },
  ],
  // Курсы «Сириуса» — карточка с сертификатами, по порядку прохождения программы
  siriusCourses: {
    title: { ru: 'Сириус Курсы: от Python до NLP', en: 'Sirius Courses: from Python to NLP' },
    org: { ru: 'Онлайн-курсы образовательного центра «Сириус»', en: 'Online courses by the Sirius Educational Center' },
    certs: [
      { title: { ru: 'Введение в программирование на Python', en: 'Introduction to programming in Python' }, date: { ru: 'май — август 2025', en: 'May — Aug 2025' }, img: 'assets/certs/course-python.webp', thumb: 'assets/certs/course-python-thumb.webp', pdf: 'assets/certs/course-python.pdf' },
      { title: { ru: 'Введение в алгоритмы на Python', en: 'Introduction to algorithms in Python' }, date: { ru: 'июль — ноябрь 2025', en: 'Jul — Nov 2025' }, img: 'assets/certs/course-algorithms.webp', thumb: 'assets/certs/course-algorithms-thumb.webp', pdf: 'assets/certs/course-algorithms.pdf' },
      { title: { ru: 'Анализ данных на Python', en: 'Data analysis in Python' }, date: { ru: 'август — декабрь 2025', en: 'Aug — Dec 2025' }, img: 'assets/certs/course-data-analysis.webp', thumb: 'assets/certs/course-data-analysis-thumb.webp', pdf: 'assets/certs/course-data-analysis.pdf' },
      { title: { ru: 'Введение в машинное обучение', en: 'Introduction to machine learning' }, date: { ru: 'октябрь 2025 — январь 2026', en: 'Oct 2025 — Jan 2026' }, img: 'assets/certs/course-ml.webp', thumb: 'assets/certs/course-ml-thumb.webp', pdf: 'assets/certs/course-ml.pdf' },
      { title: { ru: 'Глубокое обучение', en: 'Deep learning' }, date: { ru: 'июль — октябрь 2025', en: 'Jul — Oct 2025' }, img: 'assets/certs/course-dl.webp', thumb: 'assets/certs/course-dl-thumb.webp', pdf: 'assets/certs/course-dl.pdf' },
      { title: { ru: 'Обработка естественного языка', en: 'Natural language processing' }, date: { ru: 'август — декабрь 2025', en: 'Aug — Dec 2025' }, img: 'assets/certs/course-nlp.webp', thumb: 'assets/certs/course-nlp-thumb.webp', pdf: 'assets/certs/course-nlp.pdf' },
    ],
  },
  // Где практикуюсь
  practice: [
    {
      title: 'Kaggle',
      handle: 'glebik1',
      url: 'https://www.kaggle.com/glebik1',
      text: { ru: 'Участвую в крупных соревнованиях и практикуюсь на реальных данных', en: 'I take part in major competitions and practice on real-world data' },
    },
    {
      title: 'ML Compete',
      handle: 'gleb1441',
      url: 'https://platform.olimpiada-ai.ro/ru/profile/gleb1441',
      text: { ru: 'Международная платформа с олимпиадными задачами по ML', en: 'An international platform with olympiad-style ML problems' },
    },
    {
      title: 'Hugging Face',
      handle: 'Gleb1441',
      url: 'https://huggingface.co/Gleb1441',
      text: { ru: 'Практикуюсь в RL: агенты с курса и собственные проекты', en: 'RL practice: agents from the course and my own projects' },
    },
  ],
};
