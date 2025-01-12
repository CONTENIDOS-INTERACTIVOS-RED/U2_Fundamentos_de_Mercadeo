<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pb-0.mb-5


    .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .py-4.px-5.bg-color-1(data-aos="fade-right")
            p.mb-0 El propósito de esta unidad es el de proporcionar una comprensión integral de los principios fundamentales del mercadeo y su relevancia en un mundo globalizado y digitalizado. Se enfatizará cómo el mercadeo impacta directamente en la satisfacción del cliente, la creación de valor y la construcción de relaciones duraderas entre las marcas y sus consumidores. En este contexto, se explorarán tres temas esenciales que permiten comprender la evolución y las dinámicas actuales del mercadeo.

        .col-lg-5
          figure
            img(src="@/assets/curso/intro/1.svg", alt="", data-aos="zoom-in")




    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 1
                p.mb-0 Se abordará el concepto y las funciones del mercadeo, analizando su definición, objetivos y las tareas clave que desempeña dentro de las organizaciones para conectar con los consumidores.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 2
                p.mb-0 Se realizará un recorrido por la historia y evolución del #[em marketing], explorando las distintas etapas que han marcado su desarrollo, desde los primeros enfoques orientados a la producción masiva hasta las estrategias contemporáneas basadas en experiencias inmersivas y sostenibilidad.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 3
                p.mb-0 Se estudiarán las diferencias entre el #[em marketing] tradicional y digital, destacando los contrastes entre ambas estrategias en términos de alcance, interactividad, costos y personalización, lo que permitirá identificar sus beneficios y limitaciones en diversos contextos.


                
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esta unidad proporciona una base sólida para entender cómo el mercadeo ha evolucionado y cómo continúa transformándose para responder a los desafíos de un entorno dinámico y en constante cambio.
</template>
