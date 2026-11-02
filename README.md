# אולגה כץ, אתר הדגמה

**אתר שלם לאולגה כץ, צלמת משפחה ובת מצווה מרחובות, שנוצר אוטומטית מתוך מה שהיא מפרסמת בעצמה וכתוב בקולה.**
גלריות לפי סוג צילום, מחירון, מי אני, סדנאות לצלמים, טיפים ויצירת קשר.

האתר: https://leezardnav.github.io/olga-katz/
האתר הרשמי שלה: https://olgakatzphoto.com/

## מה זה

ניסוי של [portal-generator](https://github.com/leeZardNav): לקחת קישור אחד, פוסט בפייסבוק, ולבנות ממנו אתר שלם לאדם שמאחוריו, בגוף ראשון, בשפה שלו, על הכלים הכי פשוטים שמאפשרים לקהילה לערוך אותו.

- **רק מקורות ציבוריים** של אולגה כץ עצמה: הביו, הפוסטים, המחירון שפרסמה באתר שלה, הסדנאות והערוצים.
- **אף תמונה לא הועתקה.** הגלריות מציגות את הפוסטים שלה דרך ההטמעות הרשמיות של אינסטגרם ופייסבוק, והתמונות נשארות בבעלותה.
- **כתוב בגוף ראשון**, אבל לא על ידה. הערה בראש כל דף אומרת זאת, עם הקישור היחיד לאתר הרשמי.
- **שלה.** בקשת עדכון, הסרה או העברת בעלות מתבצעת בלי שאלות: [טופס "בקשה מאולגה כץ"](https://github.com/leeZardNav/olga-katz/issues/new/choose).
- **בלי פרטי קשר ישירים.** רק הוואטסאפ, האינסטגרם והפייסבוק שהיא עצמה מפרסמת.

## איך תורמים

- **תיקון טקסט:** בתחתית כל דף יש "ערכו את הדף הזה".
- **תמונה לגלריה:** מוסיפים לקובץ `_data/gallery.yml` את קוד הפוסט הציבורי באינסטגרם או את קישור הפוסט בפייסבוק. אין להעלות קבצי תמונה למאגר.
- **מחיר או פרט שהשתנה:** `_data/pricing.yml`, `_data/profile.yml`.
- **בלי קוד:** [הצעת תיקון או תוספת](https://github.com/leeZardNav/olga-katz/issues/new/choose).

ראו [CONTRIBUTING.md](CONTRIBUTING.md).

## מבנה המאגר

| נתיב | מה יש שם |
|---|---|
| `index.html` | דף הבית |
| `gallery/` | אינדקס הגלריות ודף לכל סוג צילום, מתוך `_data/gallery.yml` ו-`_data/gallery_sections.yml` |
| `pricing.html` | המחירון, מתוך `_data/pricing.yml` |
| `about.md`, `workshops.md`, `tips.md`, `contact.md` | מי אני, לצלמות ולצלמים, טיפים, צרו קשר |
| `this-site.md` | גילוי נאות: מה מקורי, מה נכתב כאן, ואיך אולגה מקבלת שליטה |
| `_data/profile.yml`, `_data/services.yml`, `_data/works.yml`, `_data/quotes.yml` | הפרופיל, סוגי הצילום, הפוסטים לדף הבית, ציטוטים |
| `_layouts/`, `_includes/`, `assets/` | תבנית, גלריה, ארבעה includes, קובץ CSS אחד |

[Jekyll](https://jekyllrb.com/) על GitHub Pages. כל push ל-`main` מתפרסם אוטומטית. בלי שרת, בלי בנייה מקומית.

## הרצה מקומית (אופציונלי)

```sh
bundle install
bundle exec jekyll serve --livereload
```

ואז http://127.0.0.1:4000/olga-katz/

## רישיון

הקוד ברישיון [MIT](LICENSE). הטקסטים שנכתבו כאן ברישיון [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.he). הציטוטים, התמונות והסרטונים שייכים לאולגה כץ.

---

## English summary

A complete **demo website for Olga Katz**, a family and bat-mitzvah photographer from Rehovot, Israel, generated from what she publishes herself and written in her voice: galleries by genre, a price list, about, workshops, tips and contact. In Hebrew.

It is an experiment of the portal-generator project: start from one shared link, identify the person behind it, and generate the site they could adopt, on the simplest standard tooling a community can edit (Jekyll on GitHub Pages, YAML and Markdown). No images are copied; galleries show her public posts through the official Instagram and Facebook embeds. A notice on every page says the site is an unapproved demo and links to her official site, and she can request changes, removal or ownership of the repository at any time.
