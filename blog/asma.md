---
layout: landing-app
permalink: /app-asma/
title: La app para personas con asma y que quieren evitar la falta de aire
description: Lleva un control de tu salud respiratoria y evita los horribles ataques de asma
intro: Aquí podrás encontrar todo lo que necesitas saber para controlar el asma. Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarlo.
image: /img/woman-short-of-breath.jpg
category: Asma
last_modified_at: 2019-08-22T10:00:00.000+00:00
date: 2019-08-22T10:00:00.000+00:00
---

## **En Zensei te ayudamos a controlar tu salud respiratoria con la app diario que hemos diseñado conjúntamente con médicos**

Ahora, no esperes una solución mágica, porque esto es para seres humanos que quieren prevenir los horribles síntomas del asma, no para asmáticos que están todo el día enganchados al ventolín.

Bien.

Si eso te interesa, genial. Si no te interesa, pues puedes volver a buscar en Google un tratamiento milagroso.

Por cierto, si quieres descargarte nuestra app para controlar tu asma, es aquí: 

{% include app-cta-landing.html %}

Mira.

Si recurrentemente tienes falta de aire, pitidos al respirar o mareos.

Seguro que estás cansada de padecerlos.

Pues imagínate poder adelantarte a ellos y saber que los causa exactamente.

Así podrás tomarte tu inhalador de rescate cuando realmente lo necesitas.

La solución, nada mágica. 

Nuestro diario de salud respiratoria te permitirá llevar un control diario de tus síntomas sin esfuerzo y asociarlos con tu entorno (contaminación o pólenes),
hábitos y medicación.

Y esto se traduce en que podrás:

✅ Saber que causa tus ataques de asma.

✅ Recordar cuando tomarte la medicación de control.

✅ Saber cuando habrá más probabilidades de que te tomes tu inhalador de rescate según los factores que provocan tus síntomas.

✅ Conocer mejor tu condición de salud y respirar mejor.

Y cómo puedes evitar los horribles ataques de asma. Dedicando solo 10 segundos diarios a guardar tus síntomas.

Del resto nos encargamos nosotros.

Analizaremos tus datos de salud, los asociaremos con otros datos de entorno, hábitos y medicación para descubrir exactamente cuales son los desencandenantes de tus síntomas.

Vale. 

Si quieres evitar la falta de aire y respirar mejor.

Descárgate nuestra app diario aquí.

{% include app-cta-landing.html %}

{% include respiratory-report.html %}

## **Artículos sobre el Asma en nuestro blog**

Aquí abajo tienes una lista completa de todos nuestros artículos sobre el asma. Solo por si quieres seguir aprendiendo sobre él.

<br>
<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Asma' %}
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