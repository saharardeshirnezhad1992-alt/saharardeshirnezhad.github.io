/* =====================================================================
   ✏️  فایل ویرایش محتوای سایت  —  فقط همین فایل را ادیت کنید
   ---------------------------------------------------------------------
   • متن‌ها، شماره تلفن، آدرس، عکس‌ها و پروژه‌ها همه از اینجا خوانده می‌شوند.
   • برای عوض کردن عکس: عکس جدید را داخل پوشه‌ی images (یا images/projects)
     بگذارید و فقط نام فایل را در همین‌جا عوض کنید.
   • برای جابه‌جا کردن ترتیب: خط مربوطه را بالا یا پایین ببرید.
   • برای اضافه کردن پروژه: یک بلوک { ... } داخل آرایه‌ی projects کپی کنید.
   • برای ساخت فولدر (دسته) جدید: یک بلوک به folders اضافه کنید.
   ===================================================================== */

window.SITE = {

  /* ---------- مشخصات کلی ---------- */
  brand: {
    firstName: "Sahar",
    lastName: "Ardeshirnezhad",
    faName: "سحر اردشیرنژاد",
    title: "معمار و طراح داخلی",
    tagline: "فضاهایی که حس خانه می‌دهند؛ ساده، طبیعی و ماندگار.",
    logo: "images/logo.png",              // لوگوی سفید (روی عکس‌های تیره)
    heroImage: "images/hero-kitchen.jpg"  // تصویر پس‌زمینه‌ی بالای صفحه
  },

  /* ---------- تماس ---------- */
  contact: {
    phone: "09170000000",
    whatsapp: "989170000000",   // با کد کشور و بدون صفر اول؛ خالی بگذارید تا دکمه حذف شود
    instagram: "",              // مثال: "https://instagram.com/username"
    email: "",                  // مثال: "info@example.com"
    address: "ایران . شیراز . شهر شما"
  },

  /* ---------- خدمات ---------- */
  services: [
    { icon: "interior",     title: "طراحی داخلی",       en: "Interior Design",
      text: "طراحی کامل فضای داخلی؛ از چیدمان و متریال تا نورپردازی و جزئیات اجرایی." },
    { icon: "landscape",    title: "طراحی لندسکیپ",     en: "Landscape Design",
      text: "خلق باغ و فضای سبز هماهنگ با معماری، اقلیم و سبک زندگی شما." },
    { icon: "outdoor",      title: "طراحی محوطه",       en: "Site & Outdoor Space Design",
      text: "طراحی حیاط، مسیرها، نشیمن‌های بیرونی و محوطه‌های کاربردی و زیبا." },
    { icon: "architecture", title: "طراحی معماری",      en: "Architectural Design",
      text: "از ایده تا نقشه و مدل سه‌بعدی؛ طراحی ساختمان‌های مسکونی و تجاری." }
  ],

  /* ---------- درباره من ---------- */
  about: {
    heading: "درباره‌ی من",
    image: "images/sahar-portrait.jpg",
    secondImage: "images/architectural-model.jpg",
    paragraphs: [
      "من سحر اردشیرنژاد هستم؛ معمار و طراح داخلی. باور دارم هر فضا باید با آدم‌هایی که در آن زندگی می‌کنند هماهنگ باشد.",
      "در هر پروژه از اولین خط نقشه تا مدل‌سازی سه‌بعدی و اجرا کنار شما هستم تا نتیجه، دقیقاً همان چیزی شود که تصور کرده‌اید."
    ],
    stats: [
      { value: "+۵", label: "سال تجربه" },
      { value: "+۵۰", label: "پروژه‌ی انجام‌شده" },
      { value: "۳D", label: "مدل‌سازی و رندر" }
    ]
  },

  /* ---------- فولدرهای نمونه‌کار ---------- */
  folders: [
    { id: "interior",     title: "طراحی داخلی",   en: "Interior Design" },
    { id: "architecture", title: "طراحی معماری",  en: "Architectural Design" },
    { id: "landscape",    title: "لندسکیپ",       en: "Landscape Design" },
    { id: "outdoor",      title: "طراحی محوطه",   en: "Site & Outdoor" }
  ],

  /* ---------- پروژه‌ها ----------
     folder  : باید با id یکی از فولدرهای بالا یکی باشد
     cover   : عکس کاور
     images  : عکس‌های داخل گالری (cover هم اگر خواستید تکرار کنید)
     specs   : مشخصات؛ هر ردیف دلخواه است (برچسب و مقدار)
  --------------------------------------------------------------- */
  projects: [
    {
      folder: "interior",
      title: "آشپزخانه‌ی مدرن با کابینت طوسی و چوب طبیعی",
      description: "ترکیب سطوح مات طوسی با روکش چوب بلوط و نورپردازی پنهان، برای فضایی گرم، تمیز و کاربردی.",
      cover: "images/projects/interior-kitchen/01.jpg",
      images: ["images/projects/interior-kitchen/01.jpg"],
      specs: [
        { label: "نوع پروژه", value: "آشپزخانه" },
        { label: "مکان",      value: "شیراز" },
        { label: "متراژ",     value: "۲۰ متر" },
        { label: "سال",       value: "۱۴۰۴" },
        { label: "خدمات",     value: "طراحی، مدل‌سازی سه‌بعدی، رندر" }
      ]
    },
    {
      folder: "architecture",
      title: "ویلای مدرن یک‌طبقه (ماکت و مدل سه‌بعدی)",
      description: "طراحی حجمی ساده با پنجره‌های بزرگ، ارتباط مستقیم با حیاط و ماکت فیزیکی برای ارائه‌ی پروژه.",
      cover: "images/projects/architecture-villa-model/01.jpg",
      images: ["images/projects/architecture-villa-model/01.jpg"],
      specs: [
        { label: "نوع پروژه", value: "ویلا" },
        { label: "مکان",      value: "شیراز" },
        { label: "زیربنا",    value: "۲۰۰ متر" },
        { label: "سال",       value: "۱۴۰۴" },
        { label: "خدمات",     value: "طراحی معماری، ماکت، مدل سه‌بعدی" }
      ]
    },
    {
      folder: "interior",
      title: "فضای نشیمن و استودیو کار",
      description: "فضایی روشن با نورپردازی خطی، متریال‌های طبیعی و ارتباط بصری با حیاط.",
      cover: "images/projects/interior-living-studio/01.jpg",
      images: ["images/projects/interior-living-studio/01.jpg"],
      specs: [
        { label: "نوع پروژه", value: "نشیمن / استودیو" },
        { label: "مکان",      value: "شیراز" },
        { label: "متراژ",     value: "۶۰ متر" },
        { label: "سال",       value: "۱۴۰۴" }
      ]
    },
    {
      folder: "outdoor",
      title: "حیاط و محوطه‌ی ویلا با دیوار سبز و نورپردازی",
      description: "طراحی حیاط مرکزی با درخت، پرچین و چمن، دیوار سبز عمودی، دیوار سفید سوراخ‌دار و نورپردازی ملایم؛ در سه حالت روز، غروب و شب.",
      cover: "images/projects/outdoor-courtyard-villa/01-dusk.jpg",
      images: [
        "images/projects/outdoor-courtyard-villa/01-dusk.jpg",
        "images/projects/outdoor-courtyard-villa/02-night.jpg",
        "images/projects/outdoor-courtyard-villa/03-day.jpg"
      ],
      specs: [
        { label: "نوع پروژه", value: "حیاط و محوطه" },
        { label: "مکان",      value: "شیراز" },
        { label: "متراژ",     value: "۱۵۰ متر" },
        { label: "سال",       value: "۱۴۰۴" },
        { label: "خدمات",     value: "طراحی محوطه، لندسکیپ، رندر سه‌بعدی" }
      ]
    },
    {
      folder: "interior",
      title: "سوئیت خواب مدرن با میز آرایش و دیوار نورپردازی‌شده",
      description: "اتاق خوابی با پالت قهوه‌ای و سفید، نورهای خطی سقفی، کتابخانه‌ی قوس‌دار پشت تلویزیون و پارتیشن دکوراتیو بین تخت و میز آرایش. شامل ویدیوی walkthrough.",
      cover: "images/projects/interior-bedroom-suite/01.jpg",
      images: [
        "images/projects/interior-bedroom-suite/01.jpg",
        "images/projects/interior-bedroom-suite/02.jpg",
        "images/projects/interior-bedroom-suite/03.jpg",
        "images/projects/interior-bedroom-suite/04.jpg",
        "images/projects/interior-bedroom-suite/05.jpg"
      ],
      video: "images/projects/interior-bedroom-suite/walkthrough.mp4",
      videoPoster: "images/projects/interior-bedroom-suite/walkthrough-poster.jpg",
      specs: [
        { label: "نوع پروژه", value: "اتاق خواب" },
        { label: "مکان",      value: "شیراز" },
        { label: "متراژ",     value: "۲۵ متر" },
        { label: "سال",       value: "۱۴۰۴" },
        { label: "خدمات",     value: "طراحی داخلی، نورپردازی، رندر و ویدیو" }
      ]
    },
    {
      folder: "interior",
      title: "طراحی داخلی مطب دندانپزشکی (دکتر زارعیان)",
      description: "طراحی پذیرش، سالن انتظار و اتاق درمان یک مطب مدرن؛ کانتر پذیرش دوتکه با سنگ کوارتز و لوگوی برجسته، نشیمن دوخت‌دکمه‌ای با فضای ذخیره‌سازی زیر آن، نورپردازی خطی و ریلی، کف سنگ مرمر و قاب بزرگ رادیوگرافی. اتاق درمان با دیوار فیروزه‌ای و لوگوی نورانی، کابینت‌های سفید با دستگیره‌ی مشکی و سنگ طوسی پشت یونیت؛ در کنار رندرها، پلان و جزئیات اجرایی.",
      cover: "images/projects/interior-dental-clinic-zareian/02.jpg",
      images: [
        "images/projects/interior-dental-clinic-zareian/01.jpg",
        "images/projects/interior-dental-clinic-zareian/02.jpg",
        "images/projects/interior-dental-clinic-zareian/03.jpg",
        "images/projects/interior-dental-clinic-zareian/04.jpg",
        "images/projects/interior-dental-clinic-zareian/05.jpg",
        "images/projects/interior-dental-clinic-zareian/06.jpg",
        "images/projects/interior-dental-clinic-zareian/07.jpg",
        "images/projects/interior-dental-clinic-zareian/08.jpg",
        "images/projects/interior-dental-clinic-zareian/09.jpg",
        "images/projects/interior-dental-clinic-zareian/10.jpg",
        "images/projects/interior-dental-clinic-zareian/11.jpg",
        "images/projects/interior-dental-clinic-zareian/12.jpg",
        "images/projects/interior-dental-clinic-zareian/13.jpg",
        "images/projects/interior-dental-clinic-zareian/14.jpg",
        "images/projects/interior-dental-clinic-zareian/15.jpg",
        "images/projects/interior-dental-clinic-zareian/board-1.jpg",
        "images/projects/interior-dental-clinic-zareian/board-2.jpg",
        "images/projects/interior-dental-clinic-zareian/board-3.jpg",
        "images/projects/interior-dental-clinic-zareian/board-4.jpg",
        "images/projects/interior-dental-clinic-zareian/board-5.jpg",
        "images/projects/interior-dental-clinic-zareian/board-6.jpg"
      ],
      pdf: "images/projects/interior-dental-clinic-zareian/dr-zareian-clinic-boards.pdf",
      specs: [
        { label: "نوع پروژه", value: "مطب دندانپزشکی" },
        { label: "کارفرما",   value: "دکتر زارعیان" },
        { label: "مکان",      value: "شیراز، معالی‌آباد" },
        { label: "ابعاد پلان", value: "۳٫۳۲ × ۵٫۲۷ متر" },
        { label: "سال",       value: "۱۴۰۵" },
        { label: "خدمات",     value: "طراحی داخلی، نقشه‌ی اجرایی، رندر سه‌بعدی" }
      ]
    }
  ]
};
