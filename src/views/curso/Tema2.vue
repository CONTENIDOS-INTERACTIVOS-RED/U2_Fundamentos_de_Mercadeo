<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Historia y evolución del marketing'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-right") Teniendo claro el concepto y las funciones del mercadeo, lo invitamos a conocer sobre la historia y evolución del marketing.


      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Historia y evolución
              p.mb-4(data-aos="fade-right") El marketing, como disciplina, ha recorrido un camino de constante transformación, adaptándose a los cambios económicos, sociales y tecnológicos que han moldeado la interacción entre empresas y consumidores. En el PDF Historia y evolución, se estudia la historia y evolución del marketing, desde sus orígenes en las civilizaciones antiguas hasta su sofisticación actual, impulsada por la tecnología y la personalización. A través de hitos como la imprenta, la Revolución Industrial y la era digital, se analizará cómo el marketing ha evolucionado hacia un enfoque más relacional y ético, consolidándose como una herramienta esencial para comprender y satisfacer las dinámicas del mercado globalizado.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Historia y evolución

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/1.png', alt='')


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Evolución histórica del mercado contemporáneo

      p(data-aos="fade-right") El mercado contemporáneo ha pasado por diferentes etapas, las cuales conoceremos a continuación:

      .row.align-items-center.mb-5

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Etapa de producción (finales del siglo XIX a principios del siglo XX)")
              p #[b Enfoque principal:] Producción en masa y eficiencia operativa.
              p Durante la revolución industrial, las empresas se centraron en la producción masiva en grandes volúmenes, para satisfacer la alta demanda de productos básicos. La premisa central era que los consumidores comprarían productos que estuvieran disponibles y fueran accesibles económicamente.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Producción eficiente, impulsada por avances tecnológicos y procesos estandarizados.
                li.mb-2
                  i.fas.fa-check-circle
                  | Énfasis en reducir costos para lograr economías de escala.
                li.mb-2
                  i.fas.fa-check-circle
                  | Oferta limitada con baja variedad de productos.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] La compañía Singer fue una de las primeras en producir máquinas de coser en masa, utilizando estrategias de producción eficientes para satisfacer la creciente demanda de productos domésticos en la era industrial.

            div(numero="2" titulo="Etapa de ventas (1920 - 1950)")
              p #[b Enfoque principal:] Persuadir a los consumidores a comprar productos.
              p Tras la sobreproducción derivada de la industrialización, las empresas enfrentaron el desafío de vender sus excedentes. Durante este período, la publicidad y las fuerzas de ventas, se convirtieron en herramientas fundamentales para influir en los consumidores.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Marketing masivo centrado en la promoción y la persuasión.
                li.mb-2
                  i.fas.fa-check-circle
                  | Desarrollo de estrategias específicas para superar la resistencia del cliente.
                li.mb-2
                  i.fas.fa-check-circle
                  | Uso intensivo de medios tradicionales, como radio, periódicos y revistas.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:]  En la década de 1930, Campbell's Soup utilizó campañas publicitarias creativas en revistas y radio, promoviendo sus sopas como un alimento conveniente y saludable, logrando así consolidar su marca en los hogares estadounidenses.

      .row.align-items-center.mb-5

        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="3" titulo="Etapa de orientación al consumidor (1950 - 1980)")
              p #[b Enfoque principal:] Satisfacción del cliente.
              p Con el crecimiento del poder adquisitivo y la diversificación de las necesidades, las empresas adoptaron un enfoque más centrado en el cliente. Durante esta etapa, surgieron prácticas como la investigación de mercados y la segmentación, que permitieron a las empresas diseñar productos más alineados con las expectativas del consumidor.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Uso de datos para comprender y segmentar mercados.
                li.mb-2
                  i.fas.fa-check-circle
                  | Adaptación de productos y servicios según las preferencias del cliente.
                li.mb-2
                  i.fas.fa-check-circle
                  | Introducción de marcas fuertes como diferenciadores competitivos.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] McDonald's implementó su menú infantil "Happy Meal" en los años 70, diseñado específicamente para satisfacer las necesidades de las familias con niños, integrando un enfoque de segmentación basado en la demografía y preferencias de los consumidores.

            div(numero="4" titulo="Etapa de orientación al valor (1980 - 2000)")
              p #[b Enfoque principal:] Relación y lealtad a largo plazo.
              p En esta etapa, las empresas comenzaron a centrarse en construir relaciones sostenibles con los consumidores. La satisfacción del cliente se complementó con estrategias de fidelización y personalización, para garantizar la lealtad.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Creación de programas de fidelización que recompensaban la lealtad.
                li.mb-2
                  i.fas.fa-check-circle
                  | Uso de tecnología emergente para personalizar las interacciones.
                li.mb-2
                  i.fas.fa-check-circle
                  | Énfasis en la calidad total y la mejora continua de la experiencia del cliente.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] El programa de miembros "Club Nintendo" ofreció recompensas exclusivas a los usuarios leales de consolas y videojuegos, fortaleciendo el vínculo entre la marca y los jugadores.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      .row.align-items-center.mb-5

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="5" titulo="Etapa digital y tecnológica (2000 - presente)")
              p #[b Enfoque principal:] Personalización y tecnología.
              p Con la revolución digital, las empresas adoptaron tecnologías avanzadas como el análisis predictivo y la inteligencia artificial, para interactuar con los consumidores, de manera más personalizada y en tiempo real.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Implementación de marketing digital en redes sociales, motores de búsqueda y plataformas de comercio electrónico.
                li.mb-2
                  i.fas.fa-check-circle
                  | Uso de datos en tiempo real para personalizar experiencias del consumidor.
                li.mb-2
                  i.fas.fa-check-circle
                  | Integración de herramientas tecnológicas como chatbots, realidad aumentada y plataformas omnicanal.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Netflix ha transformado el marketing digital, al personalizar las recomendaciones de contenido para cada usuario, utilizando algoritmos que analizan patrones de visualización y preferencias individuales.

            div(numero="6" titulo="Marketing inmersivo y humanístico (Futuro inmediato)")
              p #[b Enfoque principal:] Experiencias inmersivas y sostenibilidad.
              p El marketing del futuro se centra en integrar tecnologías inmersivas, como realidad virtual, aumentada y el metaverso, con un enfoque ético y sostenible que priorice la conexión humana.
              p #[b Características claves:]
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | Diseño de experiencias inmersivas que conecten emocionalmente con los consumidores.
                li.mb-2
                  i.fas.fa-check-circle
                  | Incorporación de valores humanos y responsabilidad social en las estrategias de marketing.
                li.mb-2
                  i.fas.fa-check-circle
                  | Uso de inteligencia artificial para crear interacciones impactantes y memorables.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Nike ha comenzado a explorar el metaverso con su plataforma "Nikeland" en Roblox, donde los consumidores pueden interactuar con la marca en un entorno virtual, participando en actividades deportivas y personalizando productos.
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Perspectiva contemporánea del #[em marketing]

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .py-4.px-5.bg-color-1(data-aos="fade-right")        
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El marketing contemporáneo ha evolucionado hacia un enfoque centrado en el consumidor, adaptándose constantemente a los cambios tecnológicos, sociales y ambientales que caracterizan el mundo actual. Desde la digitalización hasta la sostenibilidad, el #[em marketing] moderno integra elementos tecnológicos, éticos y emocionales para crear conexiones más profundas y significativas entre las marcas y sus audiencias.

        .col-lg-3
          figure
            img(src="@/assets/curso/tema2/6.svg", alt="", data-aos="zoom-in")


      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src="@/assets/curso/tema2/info1.svg", alt="", style="max-width: 622px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="78%" y="30%" numero="1")
                    h5 Personalización a gran escala
                    p El avance de la tecnología, particularmente la inteligencia artificial y el análisis de datos, ha permitido a las empresas personalizar sus ofertas y estrategias, de manera masiva. Herramientas como los algoritmos predictivos y las plataformas digitales, facilitan la creación de experiencias únicas que responden a las preferencias individuales del consumidor.

                    p #[b Ejemplo:] Spotify utiliza datos de consumo para crear listas de reproducción personalizadas como "Discover Weekly", generando una experiencia individualizada que refuerza la lealtad de los usuarios.

                  .bg-color-white.box-shadow.p-3(x="78%" y="80%" numero="2")
                    h5 Marketing digital e inmersivo

                    p La integración de plataformas digitales y tecnologías como la realidad virtual y aumentada, ha transformado la forma en que las marcas interactúan con los consumidores. Estas herramientas no solo aumentan el alcance, sino que también generan experiencias inmersivas que impactan emocionalmente.

                    p #[b Ejemplo:] La marca de cosméticos Sephora, utiliza realidad aumentada en su aplicación "Virtual Artist”, lo que permite a los usuarios probar productos de maquillaje en tiempo real, facilitando la decisión de compra.

                  .bg-color-white.box-shadow.p-3(x="23%" y="80%" numero="3")
                    h5 Ética y sostenibilidad
                    p El marketing contemporáneo también se enfrenta a la presión de adoptar prácticas responsables y sostenibles. Los consumidores modernos valoran la transparencia, el impacto ambiental reducido y los compromisos sociales, por lo que las empresas han comenzado a incluir estos valores en sus estrategias.

                    p #[b Ejemplo:] Patagonia, conocida por su compromiso ambiental, promueve campañas como "Don't Buy This Jacket”, alentando a los consumidores a considerar la sostenibilidad, antes de realizar una compra
                    
                  .bg-color-white.box-shadow.p-3(x="25%" y="34%" numero="4")
                    h5 Conexiones emocionales y humanas
                    p En un mundo digitalizado, las marcas han encontrado en las emociones humanas, una poderosa herramienta para diferenciarse. El marketing contemporáneo busca generar vínculos emocionales profundos que vayan más allá de las transacciones, fomentando lealtad y recomendación.

                    p #[b Ejemplo:] La campaña "Share a Coke" de Coca-Cola, utiliza los nombres de los consumidores en las etiquetas de sus botellas, creando una conexión personal con el cliente.



    
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
