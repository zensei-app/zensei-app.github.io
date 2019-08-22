---
layout: post
permalink: /salud-respiratoria/
title: Salud Respiratoria (Causas, Síntomas, Remedios y Tratamiento)
description: Aquí podrás encontrar todo lo que necesitas saber para controlar el Gripe. Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarlo.
intro: Aquí podrás encontrar todo lo que necesitas saber para controlar el Gripe. Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarlo.
image: /img/F14-10_FISH_chromosome.jpg
category: Salud Respiratoria
last_modified_at: 2019-08-22T10:00:00.000+00:00
---

Bien.

Supongo que si has llegado aquí es porque quieres saber más sobre el Gripe.

Pues mira.

Escribimos todas las semanas sobre el Gripe.

- Cuáles son sus causas.

- Cuáles son sus síntomas.

- Qué remedios son más fáciles para combatirla.

- Y qué tratamientos son más efectivos.

Aquí abajo tienes una lista completa de todos nuestros artículos sobre la Gripe.

<br>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Salud Respiratoria' %}
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
