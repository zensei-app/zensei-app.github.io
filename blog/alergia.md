---
layout: post
permalink: /alergia/
title: Alergia (Causas, Síntomas, Remedios y Tratamiento)
description: Aquí podrás encontrar todo lo que necesitas saber para controlar la alergia respiratoria (rinitis alérgica). Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarla.
intro: Aquí podrás encontrar todo lo que necesitas saber para controlar la alergia respiratoria (rinitis alérgica). Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarla.
image: /img/F14-10_FISH_chromosome.jpg
category: Alergia
last_modified_at: 2019-08-22T10:00:00.000+00:00
---

Bien.

Supongo que si has llegado aquí es porque quieres saber más sobre la alergia respiratoria o también conocida como rinitis alérgica.

Pues mira.

Escribimos todas las semanas sobre la alergia (rinitis alérgica).

- Cuáles son sus causas.

- Cuáles son sus síntomas.

- Qué remedios son más fáciles.

- Y qué tratamientos son más efectivos.

Aquí abajo tienes una lista completa de todos nuestros artículos sobre la alergia respiratoria.

<br>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Alergia' %}
      <li itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">
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
