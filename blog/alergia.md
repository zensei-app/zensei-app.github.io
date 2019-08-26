---
layout: landing-app
permalink: /app-alergia/
title: La app para personas con alergia respiratoria (Rinitis alérgica)
description: Lleva un control de tu salud respiratoria y evita los horribles síntomas de la alergia.
intro: Aquí podrás encontrar todo lo que necesitas saber para controlar la alergia respiratoria (rinitis alérgica). Que lo causa, cuales son sus síntomas, remedios y tratamiento para controlarla.
image: '/img/photo-1444930694458-01babf71870c.jpeg'
category: Alergia
last_modified_at: 2019-08-22T10:00:00.000+00:00
date: 2019-08-22T10:00:00.000+00:00
---

## **En Zensei te ayudamos a controlar tu salud respiratoria con la app diario que hemos diseñado conjúntamente con médicos**

Ahora, no esperes una solución mágica, porque esto es para seres humanos que quieren prevenir los síntomas de la alergia, no para alérgicos que esperan a tenerlos para atiborrase a antihistamínicos.

Bien.

Si eso te interesa, genial. Si no te interesa, pues puedes volver a buscar en Google un tratamiento milagroso.

Por cierto, si quieres descargarte nuestra app para controlar tu alergia, es aquí: 

{% include app-cta-landing.html %}

Mira.

Si llevas varios días con la nariz taponada, dolor de garganta y los ojos cansados e hinchados.

Seguro que estás cansada de padecerlos.

Pues imagínate poder adelantarte a ellos y saber que los causa exactamente.

Así podrás tomarte la medicación antes de que te pegue el bofetón y no estar todo el día adormilada.

La solución, nada mágica. 

Nuestro diario de salud respiratoria te permitirá llevar un control diario de tus síntomas sin esfuerzo y asociarlos con tu entorno (contaminación o pólenes),
hábitos y medicación.

Y esto se traduce en que podrás:

✅ Saber que causa tus síntomas de la alergia respiratoria.

✅ Saber cuando tomarte la medicación según los factores que provocan tus síntomas.

✅ Conocer mejor tu condición de salud y respirar mejor.

Y cómo puedes evitar los horribles síntomas de la alergia. Dedicando solo 10 segundos diarios a guardar tus síntomas.

Del resto nos encargamos nosotros.

Analizaremos tus datos de salud, los asociaremos con otros datos de entorno, hábitos y medicación para descubrir exactamente cuales son los desencandenantes de tus síntomas.

Vale. 

Si quieres evitar los síntomas de la rinitis alérgica.

Descárgate nuestra app diario aquí.

{% include app-cta-landing.html %}

## **Artículos sobre la alergia respiratoria en nuestro blog**

Aquí abajo tienes una lista completa de todos nuestros artículos sobre la alergia respiratoria. Solo por si quieres seguir aprendiendo sobre ella.

<br>
<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.category == 'Alergia' %}
      <li itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting">
        <span>
          {% for tag in post.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a href="/tag/{{ tag_name }}"><code class="highligher-rouge shake"><nobr>{{ tag_name }}</nobr></code>&nbsp;</a>
          {% endfor %}
        </span>
        <br>
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
