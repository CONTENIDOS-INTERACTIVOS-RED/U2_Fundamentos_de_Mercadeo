<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Historia y evolución del marketing'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  


    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/690597?fs_q=Principios__de__mercadeo&prev=fs" target="_blank" rel="noopener noreferrer") Céspedes Sáenz, A. (2010). Principios de mercadeo (5ª ed.). Ecoe Ediciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/270387" target="_blank" rel="noopener noreferrer") Cortés Cabrera, J. J. (2023). Guía práctica de Marketing para estudiantes y docentes universitarios. Fundación Universitaria San Mateo.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/185006" target="_blank" rel="noopener noreferrer") Giraldo Oliveros, M. E., Ortiz Velásquez, M. & Castro Abello, M. D. (2021). Marketing: una versión gráfica. Universidad del Norte.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/71478" target="_blank" rel="noopener noreferrer") Kotler, P. & Kotler, M. (2016). Marketing de ciudades. LID Editorial España.

            p.d-flex.my-4
            
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/269981" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/243900" target="_blank" rel="noopener noreferrer") UAPA. (2023). Mercadotecnia. Universidad Abierta para Adultos (UAPA).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Nu-bbrdYrpY" target="_blank" rel="noopener noreferrer") Emprende Aprendiendo. (2025). Así Cambiará el Marketing Digital este 2025 | 10 Estrategias Prácticas

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
