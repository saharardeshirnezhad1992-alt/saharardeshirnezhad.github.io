# راهنمای سریع انتشار روی GitHub

> این پوشه «آماده‌ی GitHub» است: فایل `index.html` همین‌جا، در ریشه قرار دارد.

1. زیپ را Extract کنید (GitHub خودش زیپ را باز نمی‌کند).
2. در github.com یک Repository **Public** بسازید (تیک Add a README را بزنید).
3. Add file ← Upload files ← **همه‌ی فایل‌ها و پوشه‌های این پوشه** (`index.html`، `css`، `js`، `images`) را بکشید داخل صفحه ← Commit changes.
4. Settings ← Pages ← Source: Deploy from a branch ← Branch: main و پوشه‌ی / (root) ← Save.
5. بعد از ۱ تا ۳ دقیقه سایت در آدرس `https://USERNAME.github.io/REPONAME/` باز می‌شود.

برای ویرایش محتوا فقط `js/data.js` را عوض کنید. توضیحات کامل‌تر در ادامه است.

---

# سایت سحر اردشیرنژاد

سایت استاتیک (HTML / CSS / JS) بدون نیاز به نصب چیزی؛ مناسب GitHub Pages.

## انتشار روی GitHub Pages
1. در github.com یک Repository جدید بسازید (مثلاً `portfolio`).
2. همه‌ی فایل‌های این پوشه را (نه خود پوشه را) داخل ریپو آپلود کنید (Add file → Upload files).
3. Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
4. بعد از ۱–۲ دقیقه آدرس سایت نمایش داده می‌شود: `https://USERNAME.github.io/portfolio/`

## ویرایش محتوا
همه‌چیز در یک فایل است: `js/data.js`
- تلفن، آدرس، متن‌ها، خدمات و «درباره من»
- فولدرها (دسته‌های نمونه‌کار): بخش `folders`
- پروژه‌ها: بخش `projects` — نام، توضیح، کاور، عکس‌ها و مشخصات (هر ردیف دلخواه)
- ترتیب نمایش = ترتیب خط‌ها؛ برای جابه‌جایی، بلوک را بالا/پایین ببرید.

## عوض کردن عکس‌ها
عکس را در `images/` (یا `images/projects/`) بگذارید و نام فایل را در `data.js` عوض کنید.
- لوگو: `images/logo.png` — پس‌زمینه‌ی بالای صفحه: `images/hero-kitchen.jpg`
- برای عکس‌های خیلی سنگین، عرض حدود ۱۴۰۰ پیکسل کافی است.

## ساختار
```
index.html
css/style.css
js/data.js   ← فقط این را ادیت کنید
js/main.js
images/
```

## اضافه کردن پروژه‌ی جدید (هر پروژه = یک فولدر)
1. داخل `images/projects/` یک فولدر با اسم انگلیسی بسازید؛ مثلاً `interior-bedroom`.
2. عکس‌های پروژه را داخلش بگذارید (`01.jpg`، `02.jpg`، ...).
3. در `js/data.js` یک بلوک به آرایه‌ی `projects` اضافه کنید (از پروژه‌های موجود کپی کنید) و مسیر عکس‌ها را بنویسید:
   `images/projects/interior-bedroom/01.jpg`

پروژه‌های فعلی:
- `interior-kitchen` — آشپزخانه
- `architecture-villa-model` — ماکت و مدل ویلا
- `interior-living-studio` — نشیمن و استودیو
- `outdoor-courtyard-villa` — حیاط و محوطه (روز / غروب / شب)
- `interior-bedroom-suite` — سوئیت خواب (۵ عکس + ویدیو)

### ویدیو برای پروژه (اختیاری)
فایل mp4 را در فولدر پروژه بگذارید (بهتر است زیر ~۲۰ مگابایت باشد؛ حد GitHub برای هر فایل ۱۰۰ مگابایت است) و در بلوک پروژه این دو خط را اضافه کنید:
```
video: "images/projects/اسم-فولدر/walkthrough.mp4",
videoPoster: "images/projects/اسم-فولدر/walkthrough-poster.jpg",
```
ویدیو به‌صورت آخرین آیتم گالری نمایش داده می‌شود و روی کارت پروژه برچسب «ویدیو» می‌آید.
- `interior-dental-clinic-zareian` — مطب دندانپزشکی (۱۱ رندر + ۶ شیت نقشه و جزئیات + PDF)

### فایل PDF برای پروژه (اختیاری)
اگر در بلوک پروژه `pdf: "images/projects/اسم-فولدر/file.pdf"` بنویسید، در پنجره‌ی پروژه دکمه‌ی «دانلود نقشه‌ها (PDF)» نمایش داده می‌شود.

### نکته‌ی آپلود روی GitHub
آپلود از طریق مرورگر هر بار حداکثر ۱۰۰ فایل را می‌پذیرد؛ اگر فایل‌ها بیشتر شد، در چند مرحله آپلود کنید (یا از GitHub Desktop استفاده کنید).
