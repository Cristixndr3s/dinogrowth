import { 
  Layout, 
  Code2, 
  Rocket, 
  ShoppingCart, 
  ShieldCheck, 
  Search,
  Zap,
  Target,
  BarChart3,
  Lock
} from "lucide-react"

export type ServiceDetail = {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: any
  heroImage?: string
  problems: {
    title: string
    description: string
  }[]
  solution: {
    title: string
    description: string
    points: string[]
  }
  benefits: {
    title: string
    description: string
    icon: any
  }[]
  process: {
    step: string
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const servicesData: Record<string, ServiceDetail> = {
  "sitios-web": {
    slug: "sitios-web",
    title: "Sitios Web de Alto Impacto",
    subtitle: "Tu oficina virtual 24/7 diseñada para convertir visitantes en clientes.",
    description: "No solo construimos páginas, creamos activos digitales que proyectan autoridad y maximizan la conversión usando inteligencia artificial.",
    icon: Layout,
    problems: [
      {
        title: "Baja conversión",
        description: "Mucho tráfico pero nadie contacta. Tu sitio actual no guía al usuario a la acción."
      },
      {
        title: "Lentitud extrema",
        description: "Si tu web tarda más de 3 segundos en cargar, estás perdiendo al 50% de tus clientes."
      },
      {
        title: "Diseño genérico",
        description: "Páginas que parecen plantillas baratas y no transmiten la confianza que tu marca merece."
      }
    ],
    solution: {
      title: "La Metodología Dinogrowth",
      description: "Fusionamos diseño psicológico con optimización técnica impulsada por IA.",
      points: [
        "Copywriting persuasivo generado y refinado por IA.",
        "Arquitectura de carga ultra-rápida (Edge Computing).",
        "Diseño UX centrado en dispositivos móviles.",
        "Integración nativa con WhatsApp y CRM."
      ]
    },
    benefits: [
      {
        title: "Autoridad Instantánea",
        description: "Una imagen profesional que te posiciona como líder en tu sector.",
        icon: Target
      },
      {
        title: "Velocidad de Carga",
        description: "Optimización técnica superior para una experiencia de usuario fluida.",
        icon: Zap
      },
      {
        title: "Medición de Datos",
        description: "Análisis preciso de qué hacen tus usuarios para mejorar constantemente.",
        icon: BarChart3
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico de Marca",
        description: "Analizamos tu nicho, competencia y objetivos comerciales."
      },
      {
        step: "02",
        title: "Estrategia de Conversión",
        description: "Diseñamos el flujo que seguirán tus clientes para comprar."
      },
      {
        step: "03",
        title: "Desarrollo con IA",
        description: "Construimos tu sitio en tiempo récord sin sacrificar calidad."
      },
      {
        step: "04",
        title: "Lanzamiento y Optimización",
        description: "Publicamos y monitoreamos resultados en tiempo real."
      }
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo toma el desarrollo?",
        answer: "Nuestro estándar para sitios corporativos de alto impacto es de 5 a 10 días hábiles."
      },
      {
        question: "¿El sitio será mío?",
        answer: "Totalmente. Entregamos propiedad absoluta del código y accesos."
      },
      {
        question: "¿Incluye mantenimiento?",
        answer: "Ofrecemos planes de Webmaster Proactivo, pero el sitio es autogestionable."
      }
    ]
  },
  "software-a-la-medida": {
    slug: "software-a-la-medida",
    title: "Software a la Medida",
    subtitle: "Automatización inteligente para escalar tu operación sin límites.",
    description: "Desarrollamos ecosistemas digitales robustos que eliminan cuellos de botella y transforman procesos manuales en flujos de trabajo eficientes y rentables.",
    icon: Code2,
    problems: [
      {
        title: "Procesos manuales lentos",
        description: "Depender de hojas de cálculo y procesos humanos limita tu crecimiento y aumenta drásticamente el margen de error."
      },
      {
        title: "Sistemas desconectados",
        description: "Herramientas que no se comunican entre sí, duplicando el trabajo y fragmentando la información vital de tu empresa."
      },
      {
        title: "Falta de escalabilidad",
        description: "Tu infraestructura actual no soporta el aumento de demanda, convirtiéndose en el freno principal de tu expansión."
      }
    ],
    solution: {
      title: "Ingeniería Potenciada por IA",
      description: "No solo escribimos código; diseñamos la columna vertebral tecnológica que tu empresa necesita para dominar su industria.",
      points: [
        "Arquitecturas micro-modulares preparadas para el crecimiento infinito.",
        "Automatización de procesos mediante agentes de IA personalizados.",
        "Integración total de APIs y ecosistemas de terceros.",
        "Seguridad de nivel bancario con encriptación de datos de extremo a extremo."
      ]
    },
    benefits: [
      {
        title: "Eficiencia Operativa",
        description: "Reduce costos eliminando tareas repetitivas y optimizando el tiempo de tu equipo.",
        icon: Zap
      },
      {
        title: "Decisiones con Datos",
        description: "Tableros de control en tiempo real para una visión clara y estratégica de tu negocio.",
        icon: BarChart3
      },
      {
        title: "Seguridad y Control",
        description: "Protección proactiva de tu activo más valioso: la información de tu empresa.",
        icon: Lock
      }
    ],
    process: [
      {
        step: "01",
        title: "Consultoría Técnica",
        description: "Levantamiento profundo de requerimientos y lógica de negocio específica."
      },
      {
        step: "02",
        title: "Diseño de Arquitectura",
        description: "Planificación de la infraestructura cloud y flujo de datos optimizado."
      },
      {
        step: "03",
        title: "Desarrollo Iterativo",
        description: "Sprints ágiles con entregas funcionales constantes para feedback temprano."
      },
      {
        step: "04",
        title: "Despliegue y Evolución",
        description: "Implementación en la nube y optimización continua basada en el uso real."
      }
    ],
    faqs: [
      {
        question: "¿El software será propiedad de mi empresa?",
        answer: "Sí, el código fuente y la propiedad intelectual te pertenecen al 100% tras la entrega."
      },
      {
        question: "¿Se puede integrar con lo que ya uso?",
        answer: "Absolutamente. Nos especializamos en crear puentes entre tecnologías existentes y soluciones modernas."
      },
      {
        question: "¿Cómo aseguran la escalabilidad?",
        answer: "Utilizamos arquitecturas cloud-native que permiten aumentar recursos automáticamente según la demanda."
      }
    ]
  },
  "ecommerce": {
    slug: "ecommerce",
    title: "E-commerce Escalable",
    subtitle: "Transforma tu catálogo en una máquina de ventas automatizada.",
    description: "Diseñamos ecosistemas de comercio electrónico de alto rendimiento que eliminan la fricción de compra y proyectan tu marca a nivel nacional con integraciones robustas.",
    icon: ShoppingCart,
    problems: [
      {
        title: "Abandono masivo de carritos",
        description: "Procesos de pago complejos y lentos que hacen que tus clientes se arrepientan en el último segundo."
      },
      {
        title: "Logística desincronizada",
        description: "Vender productos sin stock o tener una gestión de envíos manual que consume todo tu tiempo y genera errores."
      },
      {
        title: "Experiencia móvil deficiente",
        description: "El 80% de las compras en Colombia son por celular; si tu tienda no vuela en móvil, no existe."
      }
    ],
    solution: {
      title: "Infraestructura de Venta Sin Fricciones",
      description: "Creamos tiendas online que no solo exhiben productos, sino que cierran ventas mediante psicología de consumo e IA.",
      points: [
        "Integración nativa con pasarelas locales: Wompi, Bold, Mercado Pago y PSE.",
        "Sincronización automatizada de inventarios y sistemas de envíos (Envia, Coordinadora).",
        "Arquitectura Headless para una velocidad de carga instantánea.",
        "Motores de recomendación impulsados por IA para aumentar el ticket promedio."
      ]
    },
    benefits: [
      {
        title: "Aumento en Conversión",
        description: "Optimización del funnel de ventas para convertir más visitantes en compradores reales.",
        icon: Target
      },
      {
        title: "Automatización Total",
        description: "Desde el pago hasta la generación de la guía de envío, todo fluye sin intervención manual.",
        icon: Zap
      },
      {
        title: "Escalabilidad Nacional",
        description: "Infraestructura preparada para soportar picos de tráfico como Black Friday o días sin IVA.",
        icon: BarChart3
      }
    ],
    process: [
      {
        step: "01",
        title: "Estrategia de Catálogo",
        description: "Analizamos tu mix de productos y definimos la jerarquía de navegación óptima."
      },
      {
        step: "02",
        title: "Configuración de Ecosistema",
        description: "Configuración de pagos, impuestos, zonas de envío y reglas de negocio."
      },
      {
        step: "03",
        title: "Desarrollo de Experiencia",
        description: "Diseño UI/UX enfocado en la facilidad de compra y confianza del usuario."
      },
      {
        step: "04",
        title: "QA y Lanzamiento",
        description: "Pruebas rigurosas de estrés y pasarelas antes de salir al mercado nacional."
      }
    ],
    faqs: [
      {
        question: "¿Con qué pasarelas de pago trabajan?",
        answer: "Integramos las principales de Colombia: Wompi, Bold, PayU, Mercado Pago y sistemas de recaudo por PSE."
      },
      {
        question: "¿Cómo se manejan los envíos?",
        answer: "Podemos integrar sistemas automáticos que calculan el costo de envío en tiempo real y generan guías con transportadoras nacionales."
      },
      {
        question: "¿Puedo vender por Instagram y WhatsApp?",
        answer: "Sí, la tienda se convierte en tu centro de operaciones, permitiendo links de pago y catálogo sincronizado con Meta."
      }
    ]
  },
  "mvp": {
    slug: "mvp",
    title: "Desarrollo de MVP",
    subtitle: "Valida tu idea de negocio en tiempo récord con tecnología IA.",
    description: "Convertimos conceptos complejos en productos funcionales y escalables. Lanza tu startup al mercado en semanas, no en meses, reduciendo el riesgo y maximizando el aprendizaje.",
    icon: Rocket,
    problems: [
      {
        title: "Análisis por parálisis",
        description: "Meses planeando sin lanzar nada, permitiendo que la competencia se adelante o que la idea pierda relevancia."
      },
      {
        title: "Costos de desarrollo excesivos",
        description: "Invertir presupuestos gigantes en funciones que el mercado aún no ha validado si realmente necesita."
      },
      {
        title: "Tecnología obsoleta",
        description: "Construir sobre bases débiles que obligan a rehacer todo el proyecto cuando la base de usuarios crece."
      }
    ],
    solution: {
      title: "Desarrollo Lean Potenciado por IA",
      description: "Utilizamos un enfoque de ingeniería ágil que prioriza las funciones core que generan valor inmediato.",
      points: [
        "Prototipado ultra-rápido para validación de flujo de usuario.",
        "Arquitectura escalable desde el día 1 (lista para recibir inversión).",
        "Stack moderno (Next.js, Supabase, Vercel) para despliegue global.",
        "Integración de modelos de IA para automatizar el valor central de tu producto."
      ]
    },
    benefits: [
      {
        title: "Time-to-Market Reducido",
        description: "Lanzamiento en tiempo récord para capturar feedback real de usuarios lo antes posible.",
        icon: Zap
      },
      {
        title: "Optimización de Capital",
        description: "Inversión inteligente enfocada solo en lo que realmente importa para validar tu modelo.",
        icon: BarChart3
      },
      {
        title: "Base Tecnológica Sólida",
        description: "Software de alta calidad que evoluciona junto con tu modelo de negocio.",
        icon: Code2
      }
    ],
    process: [
      {
        step: "01",
        title: "Sprint de Definición",
        description: "Identificamos el 'Core Value' y eliminamos funciones innecesarias para el lanzamiento."
      },
      {
        step: "02",
        title: "Diseño de UX/UI Ágil",
        description: "Creación de la interfaz enfocada en la usabilidad y la conversión temprana."
      },
      {
        step: "03",
        title: "Desarrollo con IA",
        description: "Construcción paralela de módulos usando herramientas de IA para acelerar el código."
      },
      {
        step: "04",
        title: "Lanzamiento y Feedback",
        description: "Despliegue en producción y configuración de herramientas de análisis de usuario."
      }
    ],
    faqs: [
      {
        question: "¿Qué tan rápido pueden lanzar un MVP?",
        answer: "Dependiendo de la complejidad, podemos tener una versión funcional lista para usuarios en un periodo de 15 a 30 días."
      },
      {
        question: "¿El MVP servirá para el futuro?",
        answer: "Sí, construimos con tecnologías de clase mundial que permiten escalar de 1 a 100,000 usuarios sin necesidad de reescribir el código."
      },
      {
        question: "¿Ayudan con el diseño de la idea?",
        answer: "Absolutamente. Actuamos como consultores tecnológicos para pulir la lógica de negocio y hacerla técnicamente viable."
      }
    ]
  },
  "webmaster": {
    slug: "webmaster",
    title: "Webmaster Proactivo",
    subtitle: "Tu departamento de tecnología dedicado para una web siempre impecable.",
    description: "Nos encargamos de la salud técnica, seguridad y rendimiento de tu activo digital más valioso. Tú te enfocas en tu negocio, nosotros en que tu tecnología nunca falle.",
    icon: ShieldCheck,
    problems: [
      {
        title: "Vulnerabilidades y Hackeos",
        description: "Sitios desprotegidos que son blanco fácil para malware, poniendo en riesgo los datos de tus clientes y tu reputación."
      },
      {
        title: "Errores y Plugins Rotos",
        description: "Actualizaciones mal hechas que 'rompen' el diseño o las funciones de tu página, dejando a tus clientes sin poder contactarte."
      },
      {
        title: "Degradación de Velocidad",
        description: "Con el tiempo, los sitios se vuelven lentos por falta de mantenimiento, afectando tu SEO y la experiencia del usuario."
      }
    ],
    solution: {
      title: "Mantenimiento 360° con IA",
      description: "Implementamos sistemas de monitoreo inteligente que detectan y corrigen problemas antes de que afecten a tus usuarios.",
      points: [
        "Monitoreo de disponibilidad 24/7 con alertas instantáneas.",
        "Backups automáticos diarios en servidores externos seguros.",
        "Actualizaciones controladas de core, plugins y temas con pruebas de regresión.",
        "Optimización mensual de base de datos y archivos para máxima velocidad."
      ]
    },
    benefits: [
      {
        title: "Tranquilidad Total",
        description: "Duerme tranquilo sabiendo que expertos vigilan y protegen tu sitio cada minuto.",
        icon: Lock
      },
      {
        title: "Performance Constante",
        description: "Tu web siempre rápida y funcional, tal como el día del lanzamiento.",
        icon: Zap
      },
      {
        title: "Soporte Prioritario",
        description: "Línea directa con técnicos que conocen tu proyecto y resuelven tus dudas rápido.",
        icon: Target
      }
    ],
    process: [
      {
        step: "01",
        title: "Auditoría de Salud",
        description: "Evaluamos el estado actual de seguridad y rendimiento de tu sitio."
      },
      {
        step: "02",
        title: "Blindaje Inicial",
        description: "Implementación de firewalls, limpieza de archivos y configuración de backups."
      },
      {
        step: "03",
        title: "Gestión Activa",
        description: "Mantenimiento recurrente y aplicación de mejoras técnicas constantes."
      },
      {
        step: "04",
        title: "Reporte de Valor",
        description: "Entrega mensual de informes de rendimiento, seguridad y acciones realizadas."
      }
    ],
    faqs: [
      {
        question: "¿Qué incluye el servicio de Webmaster?",
        answer: "Seguridad, backups, actualizaciones, optimización de velocidad y un paquete de horas para cambios menores en contenido."
      },
      {
        question: "¿Qué pasa si mi web se cae?",
        answer: "Nuestro sistema de monitoreo nos avisa al instante y nuestro equipo interviene de inmediato para restaurar el servicio."
      },
      {
        question: "¿Puedo pedir cambios en los textos o fotos?",
        answer: "Sí, todos nuestros planes incluyen un tiempo dedicado para que nos pidas ajustes y nosotros los hagamos por ti."
      }
    ]
  },
  "seo": {
    slug: "seo",
    title: "Posicionamiento SEO",
    subtitle: "Domina los resultados de búsqueda y atrae clientes calificados 24/7.",
    description: "Implementamos estrategias de SEO técnico y de contenido de última generación para que tu negocio aparezca frente a quienes ya están buscando lo que ofreces.",
    icon: Search,
    problems: [
      {
        title: "Invisibilidad en Google",
        description: "Tu negocio no aparece en la primera página, lo que significa que le estás regalando todos tus clientes potenciales a la competencia."
      },
      {
        title: "Dependencia de la Pauta",
        description: "En cuanto dejas de pagar anuncios en Facebook o Google, tus ventas desaparecen. No tienes un canal de adquisición propio."
      },
      {
        title: "Contenido que no Rankea",
        description: "Tienes un blog o textos que nadie lee porque no están optimizados para los algoritmos modernos de búsqueda e IA."
      }
    ],
    solution: {
      title: "SEO Semántico e Inteligencia de Datos",
      description: "Superamos el SEO tradicional de palabras clave. Construimos autoridad temática basada en la intención de búsqueda del usuario.",
      points: [
        "Auditoría técnica profunda y optimización de Core Web Vitals.",
        "Estrategia de contenidos optimizada con IA para dominar nichos específicos.",
        "Link building ético y construcción de autoridad de dominio.",
        "SEO Local para dominar las búsquedas en ciudades específicas de Colombia."
      ]
    },
    benefits: [
      {
        title: "Tráfico Orgánico Gratuito",
        description: "Genera un flujo constante de visitantes sin pagar por cada clic de forma indefinida.",
        icon: Zap
      },
      {
        title: "Autoridad de Marca",
        description: "Aparecer en los primeros lugares genera una confianza instantánea que ninguna publicidad puede comprar.",
        icon: Target
      },
      {
        title: "Retorno de Inversión (ROI)",
        description: "El SEO es la estrategia de marketing digital con el costo de adquisición de cliente más bajo a largo plazo.",
        icon: BarChart3
      }
    ],
    process: [
      {
        step: "01",
        title: "Keyword & Market Research",
        description: "Identificamos qué buscan tus clientes y qué está haciendo tu competencia para superarlos."
      },
      {
        step: "02",
        title: "Optimización On-Page",
        description: "Ajustamos la estructura, etiquetas y contenido de tu sitio para que sea amado por Google."
      },
      {
        step: "03",
        title: "Autoridad Off-Page",
        description: "Mejoramos la relevancia de tu sitio en internet mediante estrategias de relaciones públicas digitales."
      },
      {
        step: "04",
        title: "Monitoreo y Ajuste",
        description: "Seguimiento de posiciones y ajuste constante de la estrategia basado en cambios de algoritmo."
      }
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tarda en verse el resultado?",
        answer: "El SEO es una estrategia de mediano plazo. Los primeros cambios se notan en 3 meses, con resultados sólidos a partir del sexto mes."
      },
      {
        question: "¿Garantizan el primer lugar en Google?",
        answer: "Nadie puede garantizar el #1 (quien lo haga miente), pero garantizamos una mejora drástica en visibilidad y tráfico calificado."
      },
      {
        question: "¿Qué es el SEO Local?",
        answer: "Es la optimización para aparecer cuando alguien busca un servicio 'cerca de mí' o en una ciudad específica (ej: Medellín, Bogotá)."
      }
    ]
  }
}
