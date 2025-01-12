<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto y funciones del mercadeo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p(data-aos="fade-right") Para dar inicio a la unidad, es importante conocer primero qué es el mercadeo y cuáles son sus principales funciones.


    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Concepto del mercadeo
            p.mb-4(data-aos="fade-right") El mercadeo, como disciplina estratégica, desempeña un papel clave en la identificación y satisfacción de las necesidades del consumidor, generando valor para empresas, clientes y la sociedad. En el PDF #[b Concepto del mercadeo], se estudia su concepto, evolución y funciones esenciales, destacando cómo el análisis del comportamiento del consumidor, la creación de valor y las herramientas tecnológicas modernas, permiten a las organizaciones adaptarse a un entorno globalizado. A través de principios éticos y responsables, el mercadeo se presenta no solo como un motor de competitividad empresarial, sino también como un agente de impacto positivo en el desarrollo social y ambiental.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto del mercadeo

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')



    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Pilares fundamentales del mercadeo


    .row.mb-5
      .col-lg-8
        .bg-color-3.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 El mercadeo, como disciplina estratégica, tiene como base principios que no solo guían las prácticas empresariales, sino que también definen su impacto en los consumidores, las empresas y la sociedad. Estos pilares permiten a las organizaciones adaptarse a un entorno cambiante, garantizar su competitividad, y contribuir al bienestar social y ambiental. Diversas referencias académicas y autores, como Kotler, Céspedes Sáenz y Orero-Blat, destacan que el mercadeo moderno debe centrarse en el valor, la sostenibilidad, la tecnología y la conexión emocional.

        h5.mb-4(data-aos="fade-left") Creación de valor
        
        p(data-aos="fade-left") El principal objetivo del mercadeo, es la generación de valor, que debe trascender el producto o servicio y conectarse profundamente con las necesidades, deseos y expectativas del consumidor. Este valor tiene tres dimensiones:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
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
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Emocional
              p
                | Generación de experiencias significativas que refuercen la lealtad del consumidor.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:]  las campañas publicitarias de Coca-Cola, que evocan felicidad y momentos compartidos.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Social
              p
                | Integrar valores compartidos, como la sostenibilidad y la inclusión, en la identidad de la marca.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:]  Patagonia, una empresa que prioriza prácticas sostenibles, construye relaciones profundas con consumidores que valoran el cuidado ambiental.





    .bg-full-width.bg-fondo-2.mb-5
      .ps-4.ps-lg-5

        .row.justify-content-center.align-items-stretch

          .col-lg-6(data-aos="fade-left")
            .pt-5
              p(data-aos="fade-left").my-4 #[strong Reflexiones desde la literatura]
              
              ol.lista-ol(data-aos="fade-up")
                li.mb-4
                  .lista-ol--cuadro__vineta
                    span 1
                  | Según Kotler y Keller (Marketing Management), "El valor percibido por el cliente es el núcleo de cualquier estrategia de marketing exitosa. Sin valor, no hay demanda ni lealtad”.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Céspedes Sáenz (2010), refuerza que el mercadeo debe buscar la diferenciación a través de un entendimiento profundo de las expectativas del cliente y el entorno social.


          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:506px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0



    h2(data-aos="fade-left") Satisfacción del cliente

    p(data-aos="fade-left") La satisfacción del cliente es el resultado directo de ofrecer valor que cumpla o supere las expectativas del consumidor. Este pilar se enfoca en:

    .row.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Anticipar las necesidades del cliente") 
            p Analizar las tendencias y comportamientos para personalizar experiencias.
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo:] Amazon utiliza inteligencia artificial para recomendar productos adaptados a los intereses del cliente.

          div(numero="2" titulo="Ofrecer experiencias memorables") 
            p Diseñar interacciones que generen fidelidad y motivación para recomendar la marca.
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo:] los parques temáticos de Disney priorizan experiencias inmersivas, que superan las expectativas de los visitantes.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0




    .row.mb-5
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7
        h5.mb-4 Reflexiones desde la literatura

        .bg-color-1.px-4.pb-4.pt-5(data-aos="fade-left")
          ol.lista-ol
            li.mb-4
              .lista-ol--cuadro__vineta
                span 1
              | Orero-Blat et al. Un enfoque práctico del marketing estratégico, operativo y digital, enfatizan que la satisfacción del cliente debe ser una prioridad que esté respaldada por la tecnología y estrategias personalizadas.

            li 
              .lista-ol--cuadro__vineta
                span 2
              | Según Kotler (#[em Marketing Management]), "Un cliente satisfecho no solo regresa, sino que se convierte en un embajador de la marca, promoviendo su valor a otros consumidores".


    h2(data-aos="fade-left") Relación a largo plazo

    p(data-aos="fade-left") El mercadeo moderno no se enfoca exclusivamente en las transacciones, sino en establecer relaciones sostenibles, basadas en la confianza mutua. Este pilar incluye:


    .row.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Personalización") 
            p Adaptar productos y servicios, según las preferencias individuales.
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo:] Netflix utiliza datos, para ofrecer contenido personalizado a sus usuarios.

          div(numero="2" titulo="Conexión emocional") 
            p Establecer vínculos significativos, que refuercen la fidelidad.
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo:] Apple ha construido relaciones duraderas con sus usuarios, mediante un ecosistema integrado de dispositivos y servicios.

          div(numero="3" titulo="Servicio postventa") 
            p Mantener la relación, a través de atención continua.
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo:] Tesla se destaca por ofrecer soporte técnico y actualizaciones de software, incluso después de la compra.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



    .bg-full-width.bg-fondo-2.mb-5

      .row.justify-content-center.align-items-stretch
        .col-lg-6(data-aos="zoom-in")
          .pe-5
            img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:509px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

        .col-lg-6(data-aos="fade-left")
          .pt-5.pe-5
            p(data-aos="fade-left").my-4 #[strong Reflexiones desde la literatura]
            
            ol.lista-ol(data-aos="fade-up")
              li.mb-5
                .lista-ol--cuadro__vineta
                  span 1
                | Según Kotler y Keller, "El #[em marketing] relacional maximiza el valor del cliente durante toda su vida útil, transformando compradores, en defensores leales de la marca".
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | UAPA (#[em Mercadotecnia], 2023), señala que construir relaciones a largo plazo, no solo aumenta la rentabilidad, sino que reduce significativamente, los costos asociados con la adquisición de nuevos clientes.


    h2(data-aos="fade-left") Adaptabilidad al entorno

    p(data-aos="fade-left") La adaptabilidad, permite a las empresas mantenerse relevantes frente a cambios tecnológicos, sociales y económicos. Esto implica:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")
            .col-lg-7
              h5 Innovación
              p Desarrollo de nuevos productos y servicios que respondan a las demandas cambiantes.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] Spotify y Netflix, adaptaron sus modelos de negocio, al auge del streaming.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")
            .col-lg-7
              h5 Ajuste estratégico
              p Modificar las tácticas basándose en datos e investigación.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] empresas de moda sostenible, responden al creciente interés por el consumo ético.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")
            .col-lg-7
              h5 Tecnología digital
              p Aprovechar herramientas como redes sociales y análisis de datos, para conectar con los consumidores.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] las marcas interactúan directamente con los usuarios a través de campañas, en plataformas como Instagram y TikTok.

    .row.mb-5
      .col-lg-7
        h5.mb-4 Reflexiones desde la literatura

        .bg-color-1.px-4.pb-4.pt-5(data-aos="fade-left")
          ol.lista-ol
            li.mb-4
              .lista-ol--cuadro__vineta
                span 1
              | Orero-Blat et al. destacan que "La capacidad de las empresas para adaptarse, define su éxito en un entorno digital cada vez más competitivo".


            li 
              .lista-ol--cuadro__vineta
                span 2
              | Kotler en #[em Marketing 5.0], subraya que la tecnología es un motor crucial para mantener la competitividad en la era moderna.


      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in").mb-4.mb-lg-0


    #Tarjetas1.bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt="Barreras"
                style="width: 90px"
              )
              h5.mb-2.text-center Transparencia
              p.mb-0.text-center Comunicar con honestidad, para ganar la confianza del consumidor.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt="Información"
                style="width: 90px"
              )
              h5.mb-2.text-center Sostenibilidad
              p.mb-0.text-center Implementar prácticas empresariales responsables, que minimicen el impacto ambiental.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt="Producto"
                style="width: 90px"
              )
              h5.mb-2.text-center Privacidad del cliente
              p.mb-0.text-center Proteger la información personal en un entorno digitalizado.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt="Agentes"
                style="width: 90px"
              )
              h5.mb-2.text-center Agentes
              p.mb-0.text-center Numerosos consumidores y productores.
              p.mb-0.text-center Empresas precio-aceptantes.
              p.mb-0.text-center Sin poder de mercado.


    .bg-full-width.bg-fondo-2.mb-5

      .row.justify-content-center.align-items-stretch
        .col-lg-6(data-aos="zoom-in")
          .pe-5
            img.img-fluid(src='@/assets/curso/tema1/12.svg', style="max-width:509px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

        .col-lg-6(data-aos="fade-left")
          .pt-5.pe-5
            p(data-aos="fade-left").my-4 #[strong Reflexiones desde la literatura]
            
            ol.lista-ol(data-aos="fade-up")
              li.mb-5
                .lista-ol--cuadro__vineta
                  span 1
                | Kotler y Keller enfatizan que "El #[em marketing] ético y responsable, no solo genera confianza, sino que asegura la sostenibilidad de las empresas, a largo plazo".
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Según Giraldo Oliveros et al. (#[em Marketing: una versión gráfica]), el compromiso social no es solo una estrategia, sino una expectativa básica de los consumidores modernos.


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los pilares fundamentales del mercadeo reflejan el equilibrio entre la creación de valor, la satisfacción del cliente, la construcción de relaciones a largo plazo, la adaptabilidad al entorno y la responsabilidad social. Estas prácticas permiten a las empresas prosperar en un mundo globalizado y dinámico, asegurando relevancia, sostenibilidad y rentabilidad. 

    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Funciones del mercadeo

    .row.mb-5

      .col-lg-8

        p(data-aos="fade-left").mb-4 El mercadeo desempeña un papel estratégico dentro de las organizaciones, al integrar múltiples funciones que permiten conectar a las empresas con sus consumidores y adaptarse a las demandas del mercado.  

        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Estas funciones van más allá de la simple promoción o venta de productos, abarcando un enfoque integral para garantizar que las necesidades y expectativas de los consumidores, sean atendidas de manera efectiva. Según Kotler y otros autores (Marketing Management, Céspedes Sáenz, UAPA), las funciones claves del mercadeo son las siguientes:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")



    .row.align-items-center.mb-5

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Investigación de mercados") 
            p La base de toda estrategia de mercadeo, es comprender profundamente al consumidor, el entorno y la competencia. Esta función implica:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Recolección y análisis de datos:] Uso de encuestas, entrevistas, focus groups y herramientas digitales como análisis de Big Data.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Identificación de tendencias:] Analizar los cambios en el comportamiento del consumidor y en el entorno del mercado.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Segmentación de consumidores:] Dividir el mercado en grupos homogéneos, con características y necesidades específicas.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] Netflix utiliza datos sobre preferencias de visualización para desarrollar contenido que se alinee con las demandas de sus usuarios.

          div(numero="2" titulo="Segmentación y posicionamiento") 
            p La segmentación y el posicionamiento, son funciones esenciales para identificar mercados objetivo y construir una imagen distintiva de la marca. Estas etapas incluyen:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Segmentación del mercado:] Dividir el mercado en segmentos específicos, según variables demográficas, psicográficas, conductuales y geográficas.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Definición del mercado objetivo:] Seleccionar los segmentos con mayor potencial para la empresa.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Posicionamiento de la marca:] Crear una percepción única y atractiva en la mente del consumidor, diferenciándose de la competencia.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] IKEA se posiciona como una marca que ofrece diseño accesible y sostenible para hogares modernos, enfocándose en un segmento joven y consciente.

          div(numero="3" titulo="Desarrollo de productos y servicios") 
            p El mercadeo no solo identifica oportunidades en el mercado, sino que guía el diseño y desarrollo de productos y servicios, que satisfagan las necesidades de los consumidores. Esto implica:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Innovación:] Introducir productos que combinen funcionalidad, estética y sostenibilidad.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Pruebas de producto:] Validar la aceptación del mercado, antes del lanzamiento oficial.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ajustes, según el feedback:] Modificar productos o servicios, para mejorar su aceptación.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] Apple utiliza datos y retroalimentación de sus usuarios, para mejorar constantemente productos como el iPhone.

    .row.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="4" titulo="Fijación de precios") 
            p El precio es una de las decisiones más críticas en el mercadeo, dado que afecta directamente la percepción del consumidor y la rentabilidad de la empresa. La fijación de precios incluye:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Evaluación de costos y márgenes.] Garantizar que los precios sean rentables.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Análisis de la competencia.] Establecer precios competitivos sin comprometer el valor percibido.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Valor percibido.] Ajustar precios, según el nivel de beneficios que los consumidores esperan recibir.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] Starbucks cobra precios premium, basados en la experiencia y la percepción de calidad de sus productos.

          div(numero="5" titulo="Promoción y comunicación") 
            p La promoción conecta a las empresas con los consumidores, a través de mensajes que informan, persuaden y recuerdan el valor del producto o servicio. Incluye:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Publicidad.] Campañas en medios tradicionales y digitales.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Relaciones públicas.] Gestión de la reputación de la marca.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Marketing digital.] Uso de redes sociales, e-mail, marketing y estrategias de contenido.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] Nike utiliza su campaña "Just Do It" para inspirar a los consumidores a superar sus límites, conectando emocionalmente a través de mensajes motivadores, atletas reconocidos y contenido digital, en redes sociales que promueven valores de esfuerzo, determinación y logro personal.

          div(numero="6" titulo="Canales de distribución") 
            p La distribución asegura que los productos estén disponibles en el lugar y momento correctos. Esto implica:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Selección de canales.] Elegir entre distribución directa, minoristas, comercio electrónico o modelos híbridos.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Gestión logística.] Garantizar la eficiencia en el transporte, almacenamiento y entrega.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Acceso al consumidor.] Crear puntos de contacto convenientes y accesibles.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] Amazon optimiza su logística, para ofrecer entregas rápidas a través de su red global de distribución.

          div(numero="7" titulo="Gestión de Relaciones con el Cliente (CRM)") 
            p El mercadeo moderno se centra en construir relaciones sostenibles con los clientes, mediante la personalización y el servicio continuo. Esta función incluye:
            ul.lista-ul
              li.mb-2
                i.fas.fa-check-circle
                | #[b Recopilación y análisis de datos.] Identificar patrones de consumo y anticipar necesidades.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Personalización.] Adaptar las ofertas y experiencias, a las preferencias individuales.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Fidelización.] Diseñar programas que incentiven la lealtad, como descuentos o puntos de recompensa.
              li.mb-2
                i.fas.fa-check-circle
                | #[b Ejemplo práctico:] El programa de recompensas Starbucks Rewards, permite a los clientes acumular puntos para futuras compras, fortaleciendo la lealtad.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

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
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
