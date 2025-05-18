const translations = {
  en: {
    welcome: "Welcome to My Website",
    about: "About Me",
    description: "I love building websites and learning languages.",
    hobbies: "My Hobbies",
    hobby1: "Gaming",
    hobby2: "Swimming",
    hobby3: "Reading books",
    work: "My Work",
    workDesc: "I create websites, edit videos, and make YouTube channels in many languages."
  },
  fa: {
    welcome: "به وب‌سایت من خوش آمدید",
    about: "درباره من",
    description: "من عاشق ساخت سایت و یادگیری زبان‌ها هستم.",
    hobbies: "علایق من",
    hobby1: "بازی کردن",
    hobby2: "شنا",
    hobby3: "کتاب‌خوانی",
    work: "کارهای من",
    workDesc: "من سایت می‌سازم، ویدیو ادیت می‌کنم و کانال یوتیوب در زبان‌های مختلف می‌زنم."
  },
  zh: {
    welcome: "欢迎来到我的网站",
    about: "关于我",
    description: "我喜欢建立网站和学习语言。",
    hobbies: "我的爱好",
    hobby1: "打游戏",
    hobby2: "游泳",
    hobby3: "看书",
    work: "我的工作",
    workDesc: "我创建网站、编辑视频并用多种语言建立YouTube频道。"
  },
  ko: {
    welcome: "내 웹사이트에 오신 것을 환영합니다",
    about: "나에 대해",
    description: "나는 웹사이트를 만들고 언어를 배우는 것을 좋아해요.",
    hobbies: "내 취미",
    hobby1: "게임하기",
    hobby2: "수영",
    hobby3: "책 읽기",
    work: "내 일",
    workDesc: "나는 웹사이트를 만들고, 영상을 편집하며 여러 언어로 유튜브 채널을 운영합니다."
  },
  ja: {
    welcome: "私のウェブサイトへようこそ",
    about: "私について",
    description: "私はウェブサイトを作ることと言語を学ぶことが大好きです。",
    hobbies: "趣味",
    hobby1: "ゲーム",
    hobby2: "水泳",
    hobby3: "読書",
    work: "仕事",
    workDesc: "私はウェブサイトを作成し、ビデオを編集し、多言語でYouTubeチャンネルを作成します。"
  },
  ru: {
    welcome: "Добро пожаловать на мой сайт",
    about: "Обо мне",
    description: "Я люблю создавать сайты и изучать языки.",
    hobbies: "Мои увлечения",
    hobby1: "Игры",
    hobby2: "Плавание",
    hobby3: "Чтение книг",
    work: "Моя работа",
    workDesc: "Я создаю сайты, редактирую видео и делаю каналы на YouTube на разных языках."
  },
  it: {
    welcome: "Benvenuto nel mio sito web",
    about: "Su di me",
    description: "Adoro creare siti web e imparare le lingue.",
    hobbies: "I miei hobby",
    hobby1: "Giocare",
    hobby2: "Nuotare",
    hobby3: "Leggere libri",
    work: "Il mio lavoro",
    workDesc: "Creo siti web, modifico video e creo canali YouTube in molte lingue."
  }
};

document.getElementById('languageSwitcher').addEventListener('change', (e) => {
  const lang = e.target.value;
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-translate');
    el.innerText = translations[lang][key];
  });
});
