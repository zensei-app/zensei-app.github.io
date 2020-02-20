---
layout: landing-app
redirect_from: /app-salud-respiratoria/
permalink: /salud-respiratoria/
title: Diario de síntomas para cuidar tu respiración
description: Aquí podrás encontrar todo lo que necesitas saber para cuidar de tu salud
  respiratoria. Entra y te contamos en detalle como te podemos ayudar a respirar mejor.
intro: |-
  Aquí podrás encontrar todo lo que necesitas saber para cuidar de tu salud respiratoria.

  Bien.
image: "/img/photo-1558554142-0b016c857381.jpeg"
category: Salud Respiratoria
last_modified_at: 2019-09-15 10:00:00 +0000
date: 2019-08-22T10:00:00.000+00:00

---
Supongo que si has llegado aquí es porque te preocupa tu salud respiratoria.

Pues mira.

Hemos diseñado una app diario para personas como tú que quieren cuidar de su respiración.

¿Qué permite nuestra app?

* Te dice cuáles son las causas de tus síntomas respiratorios.
* Te deice cómo te vas a encontrar mañana.
* Y ayuda a tu médico a tomar mejores decisiones en base a tus datos de salud.

Aquí abajo tienes una lista completa de todos nuestros artículos sobre Salud Respiratoria.

<br>
<br>
<div class="home">
<ul class="post-list">
{% for post in site.posts %}
{% if post.category == 'Salud Respiratoria' %}
<li itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">
<span>
{% for tag in post.tags %}
{% capture tag_name %}{{ tag }}{% endcapture %}
<a href="/tag/{{ tag_name }}"><code class="highligher-rouge shake"><nobr>{{ tag_name }}</nobr></code> </a>
{% endfor %}
</span>
<h2>
<a itemprop="url" href="{{ post.url | relative_url }}">
<span class="post-title" itemprop="name headline">{{ post.title | escape }}</span>
</a>
</h2>
<p>
<!-- <span class="post-meta">Por {{ post.author }}</span> · -->
<time class="post-meta" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{% include locale-dates.html date=post.date %}⏳ Actualizado el <b>{{ day }} de {{ month }} de {{ year }}</b></time>
</p>
<p itemprop="description">
{{ post.description | escape }}
<a href="{{ post.url | relative_url }}">
Leer Más
</a>
</p>
<img class="post-cover" src="{{post.img}}" alt="">
</li>
{% endif %}
{% endfor %}
</ul>
</div>