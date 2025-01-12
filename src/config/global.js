export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Introducción al mercadeo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto y funciones del mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Pilares fundamentales del mercadeo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Funciones del mercadeo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Funciones del <em>mercadeo</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Evolución histórica del mercado contemporáneo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Perspectiva contemporánea del <em>marketing</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diferencia entre <em>marketing</em> tradicional y digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Importancia del mercadeo en un entorno globalizado',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Céspedes Sáenz, A. (2010). Principios de mercadeo (5 ed.). Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Cortés Cabrera, J. J. (2023). Guía práctica de Marketing para estudiantes y docentes universitarios. Fundación Universitaria San Mateo.',
      link: '',
    },
    {
      referencia:
        'Giraldo Oliveros, M. E., Ortiz Velásquez, M. & Castro Abello, M. D. (2021). Marketing: una versión gráfica. Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Kotler, M. (2016). Marketing de ciudades. LID Editorial España.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. L. (2016). Dirección de marketing (15 ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. Kartajaya, H. & Setiawan, I. (2021). Marketing 5.0: tecnología para la humanidad. LID Editorial España.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. Pfoertsch, W. & Sponholz, U. (2024). Marketing Humanístico. Human to Human H2H. LID Editorial Empresarial.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. Kartajaya, H. & Setiawan, I. (2024). Marketing 6.0: el futuro es inmersivo. LID Editorial España.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. (2024). Marketing empresarial: más allá del profesionalismo, hacia la creatividad, el liderazgo y la sostenibilidad. Ediciones Granica.',
      link: '',
    },
    {
      referencia:
        'Orero-Blat, M., Rey Martí, A. & Palacios Marqués, D. (2021). Un enfoque operativo del marketing estratégico, operativo y digital. Editorial de la Universidad Politécnica de Valencia.',
      link: '',
    },
    {
      referencia:
        'Palacios-Chacón, L. A., Lombana-Coy, J. & Reynaga-Alcalá, P. M. (2022). International Economic Integration: Challenges and opportunities for developing markets. Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'UAPA. (2023). Mercadotecnia. Universidad Abierta para Adultos (UAPA).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad para ajustarse a cambios en el entorno tecnológico, económico y social.',
    },
    {
      termino: 'Big Data',
      significado:
        'Análisis de grandes volúmenes de datos, para tomar decisiones estratégicas en el mercadeo.',
    },
    {
      termino: 'Branding',
      significado:
        'Proceso de construcción y gestión de una marca, para diferenciarse en el mercado.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una empresa para destacar frente a la competencia, en el mercado globalizado.',
    },
    {
      termino: 'CRM',
      significado:
        'Gestión de Relaciones con Clientes; estrategia para fidelizar y personalizar la experiencia.',
    },
    {
      termino: 'Digitalización',
      significado:
        'Uso de tecnologías digitales para transformar procesos de negocio y marketing.',
    },
    {
      termino: 'Integridad',
      significado:
        'Valores y prácticas que aseguran un enfoque honesto y transparente en las estrategias de marketing.',
    },
    {
      termino: 'Globalización',
      significado:
        'Integración económica y cultural, entre mercados internacionales.',
    },
    {
      termino: 'Inteligencia Artificial',
      significado:
        'Tecnología que simula procesos humanos para personalizar experiencias de cliente.',
    },
    {
      termino: 'Marketing Digital',
      significado:
        'Estrategias de mercadeo que utilizan herramientas y plataformas digitales.',
    },
    {
      termino: 'Marketing Relacional',
      significado:
        'Enfoque en construir relaciones a largo plazo con clientes basadas en confianza y lealtad.',
    },
    {
      termino: 'Personalización',
      significado:
        'Adaptación de productos y servicios a las necesidades específicas de cada consumidor.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Estrategia para ocupar un lugar distintivo en la mente del consumidor.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Compromiso empresarial con prácticas sostenibles y éticas que beneficien a la sociedad.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'División del mercado en grupos homogéneos, con características y necesidades específicas.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Prácticas empresariales que equilibran el crecimiento económico con el cuidado ambiental.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Incorporación de tecnología digital para mejorar procesos y experiencias.',
    },
    {
      termino: 'Valor',
      significado:
        'Percepción de los beneficios que un cliente obtiene de un producto o servicio.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Cualidad que diferencia a una empresa y le permite destacar frente a la competencia.',
    },
  ],
}
