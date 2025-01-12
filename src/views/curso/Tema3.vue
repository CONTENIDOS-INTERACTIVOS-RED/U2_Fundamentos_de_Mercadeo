<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Diferencia entre marketing tradicional y digital'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

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
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/269981" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/270611" target="_blank" rel="noopener noreferrer") Kotler, P. Kartajaya, H. & Setiawan, I. (2021). Marketing 5.0: tecnología para la humanidad. LID Editorial España.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/269656" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2024). Marketing 6.0: el futuro es inmersivo. LID Editorial España.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=LEvE2xQx-bg&t=36s" target="_blank" rel="noopener noreferrer") DW Español. (2023). Big Data: ¿utopía o distopía?

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
