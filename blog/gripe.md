---
layout: list-posts
redirect_from: /app-gripe/
permalink: /gripe/
title: Diario de Salud para evitar los virus
description:
  Lleva un control de tu salud respiratoria y evita los horribles síntomas
  de la gripe.
intro:
  Aquí podrás encontrar todo lo que necesitas saber para controlar el Gripe.
  Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarlo.
image: "/img/photo-1422433555807-2559a27433bd.webp"
category: Gripe
last_modified_at: 2019-08-22T10:00:00.000+00:00
date: 2019-08-22T10:00:00.000+00:00

---

## **En Zensei te ayudamos a controlar tu salud respiratoria con la app diario que hemos diseñado conjúntamente con médicos**

Ahora, no esperes una solución mágica, porque esto es para seres humanos que quieren prevenir los síntomas de la gripe, no para hipocondriacos que están deseando cogerla gripe para no ir a trabajar.

Bien.

Si eso te interesa, genial. Si no te interesa, pues puedes volver a buscar en Google un tratamiento milagroso.

Por cierto, si quieres descargarte nuestra app para prevenir la gripe, es aquí:

{% include common/app-cta-landing.html %}

Mira.

Si sueles coger catarros, constipados o la gripe todos lso años.

Seguro que estás cansada de padecerlos.

Pues imagínate poder adelantarte a ellos y saber que los causa exactamente.

Así podrás tomarte medidas para evitar el virus de la gripe y otros virus respiratorios.

La solución, nada mágica.

Nuestro diario de salud respiratoria te permitirá llevar un control diario de tus síntomas sin esfuerzo y asociarlos con tu entorno (contaminación, pólenes, virus respiratorios, clima), hábitos y medicación.

Y esto se traduce en que podrás:

✅ Saber que causa tus síntomas de respiratorios.

✅ Saber que hacer para prevenir la gripe.

✅ Conocer mejor tu salud respiratoria y respirar mejor.

Y cómo puedes evitar los horribles síntomas de la gripe. Dedicando solo 10 segundos diarios a guardar tus síntomas.

Del resto nos encargamos nosotros.

Analizaremos tus datos de salud, los asociaremos con otros datos de entorno, hábitos y medicación para descubrir exactamente cuales son los desencandenantes de tus síntomas respiratorios.

Vale.

Si quieres evitar los síntomas de la gripe.

Descárgate nuestra app diario aquí.

{% include common/app-cta-landing.html %}

## **Artículos sobre la Gripe en nuestro blog**

Aquí abajo tienes una lista completa de todos nuestros artículos sobre la gripe. Solo por si quieres seguir aprendiendo sobre ella.

<br>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Gripe' %}
      <li itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">
        <span>
          {% for tag in post.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a rel="noopener noreferrer" href="/tag/{{ tag_name }}"><code class="highligher-rouge shake"><nobr>{{ tag_name }}</nobr></code>&nbsp;</a>
          {% endfor %}
        </span>
        <h2>
          <a itemprop="url" rel="noopener noreferrer" href="{{ post.url | relative_url }}">
            <span class="post-title" itemprop="name headline">{{ post.title | escape }}</span>
          </a>
        </h2>
        <p>
          <!-- <span class="post-meta">Por {{ post.author }}</span> · -->
          <time class="post-meta" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{% include utils/locale-dates.html date=post.date %}⏳ Actualizado el <b>{{ day }} de {{ month }} de {{ year }}</b></time>
        </p>
        <p itemprop="description">
          {{ post.description | escape }}
          <a rel="noopener noreferrer" href="{{ post.url | relative_url }}">
            Leer Más
          </a>
        </p>
        <img class="post-cover" src="{{post.img}}" alt="">
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
