---
layout: landing-app
permalink: /app-epoc/
title: La app para personas con EPOC y quieren cuidarse
description: Lleva un control de tu salud respiratoria y respira mejor sin esfuerzo.
intro: Aquí podrás encontrar todo lo que necesitas saber para controlar el EPOC. Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarlo.
image: /img/photo-1520259075182-da7db177117b.jpeg
category: Epoc
last_modified_at: 2019-08-22T10:00:00.000+00:00
date: 2019-08-22T10:00:00.000+00:00
---

Bien.

Supongo que si has llegado aquí es porque quieres saber más sobre el EPOC.

Pues mira.

Escribimos todas las semanas sobre el EPOC.

- Cuáles son sus causas.

- Cuáles son sus síntomas.

- Qué remedios son más fáciles.

- Y qué tratamientos son más efectivos.

Aquí abajo tienes una lista completa de todos nuestros artículos sobre el EPOC.

<br>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Epoc' %}
      <li itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">
        <span>
          {% for tag in post.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a href="/tag/{{ tag_name }}"><code class="highligher-rouge shake"><nobr>{{ tag_name }}</nobr></code>&nbsp;</a>
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