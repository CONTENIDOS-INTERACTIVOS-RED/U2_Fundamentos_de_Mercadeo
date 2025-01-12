<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Diferencia entre marketing tradicional y digital'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El marketing ha evolucionado significativamente en las últimas décadas, pasando de estrategias tradicionales, basadas en medios físicos y masivos, a enfoques digitales que aprovechan las tecnologías y los canales interactivos. Ambos tipos de marketing tienen características específicas, que los hacen relevantes en diferentes contextos y estrategias. Estas son:


      .row.align-items-center.mb-5

        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Alcance y audiencia")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing tradicional:] Se dirige a una audiencia masiva a través de medios como televisión, radio, prensa y publicidad exterior. Su alcance suele ser amplio, pero con una segmentación limitada, lo que puede resultar en una menor precisión al llegar al público objetivo (Céspedes Sáenz, 2010).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Una campaña en televisión nacional para promover un nuevo producto de limpieza.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing digital:] Permite un alcance global con herramientas que segmentan audiencias de manera precisa, según datos demográficos, comportamentales o geográficos. Además, facilita la personalización del mensaje para cada grupo o individuo (Kotler et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Anuncios dirigidos en redes sociales, como un anuncio de Facebook para un gimnasio local, que solo aparece a personas interesadas en fitness dentro de un radio de 10 km.

            div(numero="2" titulo="Interactividad")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing tradicional:] Es predominantemente unidireccional, donde la empresa comunica un mensaje y el consumidor lo recibe, sin interacción inmediata. Este enfoque limita las posibilidades de feedback directo y en tiempo real (Kotler & Keller, 2016).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Un anuncio impreso en una revista, donde el lector no puede interactuar con la marca en ese momento.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing digital:] Es bidireccional e interactivo, lo que permite a los consumidores no solo recibir el mensaje, sino también interactuar con la marca a través de comentarios, mensajes directos o compartiendo contenido (Kotler et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Un usuario comenta en un video de YouTube, sobre una marca de tecnología y recibe una respuesta directa, en minutos.

            div(numero="3" titulo="Costos")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing tradicional:] Implica costos más altos debido a la producción y distribución en medios físicos. Los anuncios en televisión, radio o prensa, suelen requerir inversiones significativas, lo que puede limitar su acceso para pequeñas empresas (Orero-Blat et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] El costo de una valla publicitaria en una carretera principal, puede ser considerablemente alto.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Marketing digital:] Tiene costos más flexibles, permitiendo campañas efectivas con presupuestos reducidos. Herramientas como Google Ads o redes sociales, ofrecen opciones para ajustar las inversiones, según el alcance deseado (Kotler et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Una campaña en Instagram, con un presupuesto diario de 10 dólares.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")

            div(numero="4" titulo="Medición de resultados")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing tradicional. La medición es más complicada y generalmente indirecta, basada en estimaciones de alcance o encuestas posteriores. Esto dificulta conocer el impacto exacto de una campaña (Céspedes Sáenz, 2010).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. Medir el impacto de un anuncio de televisión a través de estudios de mercado, realizados semanas después.
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing digital. Ofrece métricas en tiempo real y detalladas, como clics, conversiones y tasas de interacción, lo que permite ajustes inmediatos para mejorar el rendimiento de las campañas (Kotler & Keller, 2016).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. Google Analytics, proporciona datos precisos sobre cómo los usuarios interactúan con un sitio web.

            div(numero="5" titulo="Temporalidad")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing tradicional. Las campañas suelen ser estáticas y programadas a largo plazo, dado que realizar cambios en los anuncios puede ser costoso y lento (Orero-Blat et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. Una campaña en televisión que dura tres meses sin modificaciones.
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing digital. Permite cambios instantáneos y adaptaciones sobre la marcha, lo que lo hace altamente flexible en entornos cambiantes (Kotler et al., 2021).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. Cambiar el texto o imagen de un anuncio en Google Ads, en minutos, para ajustarse a la tendencia del momento.

            div(numero="6" titulo="Conexión emocional")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing tradicional. Tiende a generar conexiones emocionales fuertes, a través de campañas creativas en medios masivos, como comerciales de televisión con narrativas poderosas (Kotler & Keller, 2016).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. El icónico comercial de los relojes Timex, que evoca nostalgia y familia.
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing digital. Aunque también genera conexión emocional, se centra más en la interacción personalizada y la comunidad en línea (Kotler et al., 2024).
                li.mb-2
                  i.fas.fa-check-circle
                  | Ejemplo. Campañas interactivas como las encuestas de Instagram, que permiten a los usuarios participar directamente.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El #[em marketing] tradicional y el #[em marketing] digital, no son excluyentes, sino complementarios. El #[em marketing] tradicional sigue siendo efectivo para llegar a audiencias masivas y construir reconocimiento de marca, mientras que el #[em marketing] digital ofrece herramientas para la personalización, interacción y análisis en tiempo real. Las empresas que integran ambos enfoques en sus estrategias, logran un impacto más significativo y equilibrado. 

  

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Importancia del mercadeo en un entorno globalizado


      .bg-full-width.bg-fondo-4
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Marketing multicultural
                  p.mb-0 Reconocer y respetar las diferencias culturales en los mensajes y campañas.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Transformación digital 
                  p.mb-0 Las empresas deben adaptarse a plataformas y tecnologías emergentes, como el comercio electrónico, el Big Data y la inteligencia artificial, para optimizar sus estrategias y mejorar la experiencia del cliente.


      .row.mb-5
        .col-lg-6
          p(data-aos="fade-right") En un entorno globalizado, el mercadeo desempeña un papel crucial en la conexión de empresas con consumidores a escala global, permitiendo la construcción de relaciones sólidas, el desarrollo de estrategias personalizadas y la adaptación a mercados diversificados. La globalización ha transformado los mercados locales en escenarios internacionales, exigiendo un enfoque de mercadeo más estratégico, ético e innovador, a través de:
        .col-lg-6
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in").mt-4.mt-lg-0


      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7
                h5 Funcional
                p Soluciones prácticas que resuelven problemas específicos.

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] productos como electrodomésticos eficientes que facilitan tareas diarias.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7
                h5 Emocional
                p
                  | Generación de experiencias significativas que refuercen la lealtad del consumidor.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Ejemplo:]  las campañas publicitarias de Coca-Cola, que evocan felicidad y momentos compartidos.


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Marketing tradicional y digital',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué etapa marcó la transición hacia un enfoque relacional en el <em>marketing</em>?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Etapa de orientación al valor',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Etapa de producción',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '<em>Marketing</em> digital',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Etapa de ventas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué diferencia clave tiene el <em>marketing</em> digital respecto al tradicional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Es más costoso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Permite medir resultados en tiempo real',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Utiliza únicamente medios como televisión y radio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No requiere segmentación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué característica define al <em>marketing</em> tradicional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Comunicación unidireccional a través de medios masivos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Personalización de mensajes',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Análisis de datos en tiempo real',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Interacción constante con el consumidor',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué ventaja ofrece el <em>marketing</em> digital en comparación con el tradicional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Costos elevados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Alcance limitado',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Segmentación más precisa',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Dependencia de medios físicos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un ejemplo de una estrategia de <em>marketing</em> tradicional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un anuncio impreso en una revista',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Una campaña en redes sociales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un chatbot en una página web',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Email <em>marketing</em>',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
