# אולגה כץ, פורטל לא רשמי

**פורטל על אולגה כץ, צלמת משפחה ובת מצווה מרחובות**, שנבנה מתוך מה שהיא מפרסמת בעצמה: העבודות, הסגנון, ההדרכות, ואיפה למצוא אותה.

האתר: https://leezardnav.github.io/olga-katz/
האתר הרשמי שלה: https://olgakatzphoto.com/

## מה זה

ניסוי של [portal-generator](https://github.com/leeZardNav): לקחת קישור אחד, פוסט בפייסבוק, ולבנות ממנו פורטל על האדם שמאחוריו, בשפה שלו, על הכלים הכי פשוטים שמאפשרים לקהילה לערוך אותו.

- **רק מקורות ציבוריים** של אולגה כץ עצמה. מידע עסקי בלבד, בלי טלפון, מייל, כתובת או מחירים.
- **אף תמונה לא הועתקה.** העבודות מוצגות דרך ההטמעות הרשמיות של אינסטגרם ופייסבוק ונשארות בבעלותה.
- **לא האתר הרשמי.** כתוב בכל דף, עם קישור לאתר שלה.
- **שלה.** בקשת עדכון, הסרה או העברת בעלות מתבצעת בלי שאלות: [טופס "בקשה מאולגה כץ"](https://github.com/leeZardNav/olga-katz/issues/new/choose).

## איך תורמים

- **תיקון טקסט:** בתחתית כל דף באתר יש "ערכו את הדף הזה".
- **עבודה, ציטוט או קישור:** עורכים את קובץ הנתונים המתאים ושולחים Pull Request, או [פותחים הצעה](https://github.com/leeZardNav/olga-katz/issues/new/choose).

ראו [CONTRIBUTING.md](CONTRIBUTING.md).

## מבנה המאגר

| נתיב | מה יש שם |
|---|---|
| `_data/profile.yml` | הפרופיל הציבורי: ביו, ערוצים, עובדות, ציוני דרך, הפוסט המקורי |
| `_data/services.yml` | מה היא מצלמת, עם קישורים לגלריות ולמחירונים באתר הרשמי |
| `_data/works.yml`, `_data/works_groups.yml` | העבודות הנבחרות (קודי פוסטים באינסטגרם) והנושאים |
| `_data/quotes.yml` | ציטוטים קצרים עם קישור למקור |
| `index.html`, `works.html` | דף הבית והעבודות |
| `about.md`, `teaching.md`, `articles.md`, `links.md`, `portal.md` | אודות, הדרכה, מאמרים, קישורים, על הפורטל |
| `_layouts/`, `_includes/`, `assets/` | תבנית אחת, שלושה includes, קובץ CSS אחד |

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

An **unofficial portal about Olga Katz**, a family and bat-mitzvah photographer from Rehovot, Israel, built only from what she publishes herself: her selected works (via official Instagram and Facebook embeds, nothing copied), her style, her teaching, and where to find her. In Hebrew, her language and her audience's.

It is an experiment of the portal-generator project: start from one shared link, identify the person behind it, and publish a portal about them on the simplest standard tooling a community can edit (Jekyll on GitHub Pages, YAML and Markdown). Business information only, no contact details, clearly marked as unofficial, and the subject can request changes, removal, or ownership of the repository at any time.
