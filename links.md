---
layout: page
title: כל הקישורים
eyebrow: איפה היא מפרסמת
lead: הערוצים הרשמיים של אולגה כץ, דפי האתר הרשמי, והמקומות שבהם היא מופיעה אצל אחרים. רק קישורים ציבוריים.
permalink: /links/
---

{% assign pr = site.data.profile %}

## הערוצים שלה

<div class="channel-grid">
  {% for c in pr.channels %}
    <a class="channel{% if c.primary %} channel--primary{% endif %}" href="{{ c.url }}" rel="noopener" target="_blank">
      <strong>{{ c.label }}</strong>
      <span>{{ c.note }}</span>
    </a>
  {% endfor %}
</div>

<p class="section__hint">המספרים נכונים ל{{ pr.as_of }}.</p>

## באתר הרשמי

<ul class="linklist">
  {% for s in site.data.services %}
  <li>
    <strong><a href="{{ s.gallery }}" rel="noopener" target="_blank">גלריה: {{ s.title_he }}</a></strong>
    {% if s.pricing %}<span><a href="{{ s.pricing }}" rel="noopener" target="_blank">המחירון של {{ s.title_he }}</a></span>{% endif %}
  </li>
  {% endfor %}
  <li>
    <strong><a href="https://olgakatzphoto.com/%d7%9e%d7%90%d7%9e%d7%a8%d7%99%d7%9d/" rel="noopener" target="_blank">מאמרים</a></strong>
    <span>שני מדריכים ללקוחות</span>
  </li>
  <li>
    <strong><a href="https://olgakatzphoto.com/%d7%9c%d7%a6%d7%9c%d7%9e%d7%99%d7%9d/" rel="noopener" target="_blank">לצלמים</a></strong>
    <span>סדנאות באור טבעי ובסטודיו</span>
  </li>
  <li>
    <strong><a href="https://olgakatzphoto.com/%d7%90%d7%95%d7%93%d7%95%d7%aa/" rel="noopener" target="_blank">אודות</a></strong>
    <span>הסיפור שלה, במילים שלה</span>
  </li>
  <li>
    <strong><a href="https://olgakatzphoto.com/%d7%a6%d7%95%d7%a8-%d7%a7%d7%a9%d7%a8/" rel="noopener" target="_blank">צור קשר</a></strong>
    <span>הדרך הרשמית לפנות אליה</span>
  </li>
</ul>

## איפה היא מופיעה אצל אחרים

<ul class="linklist">
  <li>
    <strong><a href="https://www.phototips.co.il/event-details/hrzh-wnlyyn-wlgh-kz-zylwmy-msphh-bwr-tby" rel="noopener" target="_blank">פוטו טיפס: הרצאה אונליין, צילומי משפחה באור טבעי</a></strong>
    <span>25 באפריל 2020</span>
  </li>
  <li>
    <strong><a href="https://35awards.com/winners5th/country/city/3906/" rel="noopener" target="_blank">35AWARDS: דירוג הצלמים מרחובות, התחרות החמישית</a></strong>
    <span>קטגוריית צילום ילדים, 2019. <a href="https://35awards.com/author/katzolga/" rel="noopener" target="_blank">דף המשתתפת</a></span>
  </li>
  <li>
    <strong><a href="{{ pr.seed_post.url }}" rel="noopener" target="_blank">הפוסט שממנו נולד הפורטל</a></strong>
    <span>{{ pr.seed_post.date_he }}, "{{ pr.seed_post.title_he }}"</span>
  </li>
</ul>
