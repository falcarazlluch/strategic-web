export type Lang = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: 'Strategic Decision — AI-Powered Strategic Intelligence',
      description:
        'Generate comprehensive boardroom-ready strategic reports in minutes. Powered by GPT-4o, tailored to your company\'s specific context.',
      ogTitle: 'Strategic Decision — Turn Business Challenges Into Boardroom-Ready Strategy',
    },
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      signIn: 'Sign In',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Now powered by GPT-4o',
      headline: 'Turn Business Challenges Into Boardroom-Ready Strategy',
      subheadline:
        'Generate comprehensive strategic reports in minutes — not months. GPT-4o learns your company\'s context before producing a single insight.',
      ctaPrimary: 'Start Now',
      ctaSecondary: 'See how it works',
      stats: [
        { value: '500+', label: 'Reports Generated' },
        { value: '< 10 min', label: 'Per Full Report' },
        { value: '4.9 / 5', label: 'User Rating' },
      ],
      mockup: {
        title: 'Market Entry Analysis',
        subtitle: 'European SaaS Expansion — Q1 2025',
        progress: 87,
        sections: [
          { label: 'Executive Summary',     done: true },
          { label: 'Market Analysis',       done: true },
          { label: 'Competitive Landscape', done: true },
          { label: 'Strategic Initiatives', done: true },
          { label: 'Financial Projections', done: false },
        ],
        generating: 'Generating financial model…',
      },
    },
    features: {
      badge: 'Built for executives',
      headline: 'Everything you need to decide faster',
      subheadline:
        'From initial problem framing to final boardroom presentation, Strategic Decision covers the entire consulting lifecycle.',
      items: [
        {
          icon: 'brain',
          title: 'AI-Powered Analysis',
          description:
            'GPT-4o ingests your company context, uploaded documents, and problem statement to deliver insights that would take consultants weeks.',
        },
        {
          icon: 'document',
          title: 'Boardroom-Ready Reports',
          description:
            'Executive summaries, strategic frameworks, financial projections, and implementation roadmaps — structured for maximum boardroom impact.',
        },
        {
          icon: 'chat',
          title: 'Iterative Refinement',
          description:
            'Chat directly with the AI to deepen any section, pivot the strategic direction, or add new initiatives — unlimited iterations included.',
        },
        {
          icon: 'export',
          title: 'Multi-Format Export',
          description:
            'Download polished PDF, Word, or PowerPoint files the moment your report is ready. Board-ready from the first draft.',
        },
        {
          icon: 'company',
          title: 'Company Context Engine',
          description:
            'Upload financials, annual reports, and internal documents. The AI builds a deep understanding of your business before generating any recommendation.',
        },
        {
          icon: 'security',
          title: 'Enterprise-Grade Security',
          description:
            'Your data never trains our models. End-to-end encryption, SOC 2 compliant infrastructure, and full data isolation by default.',
        },
      ],
    },
    howItWorks: {
      badge: 'Simple process',
      headline: 'From problem to strategy in under 15 minutes',
      subheadline:
        'A structured AI intake process ensures every recommendation is grounded in your specific business reality.',
      steps: [
        {
          number: '01',
          title: 'Define Your Challenge',
          description:
            'Describe your business problem in plain language. Add your company profile and upload relevant documents for richer context.',
          time: '2 min',
        },
        {
          number: '02',
          title: 'AI Intake Interview',
          description:
            'The AI asks 5–8 targeted clarifying questions — just like a seasoned strategy partner would — to understand the full strategic picture.',
          time: '5 min',
        },
        {
          number: '03',
          title: 'Report Generation',
          description:
            'Watch your complete strategic report materialize in real time: executive summary, initiatives, financials, roadmap, and risk analysis.',
          time: '3 min',
        },
        {
          number: '04',
          title: 'Refine & Export',
          description:
            'Iterate via chat, edit sections manually, then export a polished document ready for your board or leadership team.',
          time: '5 min',
        },
      ],
    },
    video: {
      badge: 'Live demo',
      headline: 'See a report generated in real time',
      subheadline:
        'Watch how Strategic Decision transforms a business challenge into a complete strategic analysis — from problem statement to boardroom-ready report.',
      playLabel: 'Watch demo',
      duration: '3 min demo',
    },
    pricing: {
      badge: 'Simple pricing',
      headline: 'One plan for every ambition',
      subheadline: 'Token-based capacity. No surprise overage fees.',
      plans: [
        {
          name: 'Basic',
          description: 'For executives exploring AI-driven strategy for the first time.',
          price: 99,
          currency: '€',
          period: '/ month',
          tokens: 'Standard analysis capacity',
          cta: 'Start Now',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '1 company',
            '2 reports / month',
            'Single report strategy type',
            'Standard AI model (GPT-4o)',
            'Limited context upload (10 MB)',
          ],
          notIncluded: [
            'Multi-strategy reports',
            'Advanced AI models',
            'PDF & Word export',
            'On-screen report editing',
            'Conversational AI agent (Aris)',
            'API access',
          ],
        },
        {
          name: 'Plus',
          description: 'The preferred plan for strategy teams.',
          price: 299,
          currency: '€',
          period: '/ month',
          tokens: 'Extended analysis capacity',
          cta: 'Start Now',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '3 companies',
            '8 reports / month',
            'Multi-strategy reports',
            'Advanced AI models (GPT-4o+)',
            'Wide documentation upload (100 MB)',
            'Personalised PDF & Word export',
            'On-screen report editing',
            'Report regeneration',
            'Conversational AI agent (Aris)',
          ],
          notIncluded: [
            'Multi-project comparative analysis',
            'Strategic history & memory',
            'Early access to new features',
            'API access',
          ],
        },
        {
          name: 'Premium',
          description: 'For consulting firms and C-suites competing at the highest level.',
          price: 599,
          currency: '€',
          period: '/ month',
          tokens: 'Unlimited practical analysis capacity',
          cta: 'Start Now',
          ctaVariant: 'primary' as const,
          featured: true,
          badge: 'Most Powerful',
          features: [
            'Unlimited companies',
            '30 reports / month',
            'Multi-strategy reports',
            'Advanced AI models (GPT-4o+)',
            'Wide documentation upload (100 MB)',
            'Personalised PDF & Word export',
            'On-screen report editing',
            'Report regeneration',
            'Conversational AI agent (Aris)',
            'Multi-project comparative analysis',
            'Strategic history & memory',
            'Early access to new features',
          ],
          notIncluded: [
            'API access',
            'Custom integrations',
            'SSO & SAML',
            'Dedicated account manager',
          ],
        },
        {
          name: 'Enterprise',
          description: 'For organisations deploying strategic AI at scale.',
          price: null,
          currency: '€',
          period: '',
          tokens: 'Custom analysis capacity',
          cta: 'Contact Sales',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            'Unlimited companies',
            'Unlimited reports',
            'Multi-strategy reports',
            'Advanced AI models',
            'Unlimited documentation upload',
            'Personalised PDF & Word export',
            'On-screen report editing',
            'Report regeneration',
            'Conversational AI agent (Aris)',
            'Multi-project comparative analysis',
            'Strategic history & memory',
            'Early access to new features',
            'API access',
            'Custom integrations',
            'White-label options',
            'SSO & SAML',
            'Dedicated account manager',
            'SLA guarantee',
          ],
          notIncluded: [],
        },
      ],
    },
    testimonials: {
      badge: 'Trusted by leaders',
      headline: 'What executives are saying',
      items: [
        {
          quote:
            'We used to spend €80,000 on a strategy consulting engagement for the kind of analysis Strategic Decision generates in 10 minutes. The quality is genuinely comparable.',
          name: 'Marcus Chen',
          title: 'Chief Strategy Officer',
          company: 'Nexus Capital Group',
          initials: 'MC',
          color: 'bg-blue-500',
        },
        {
          quote:
            "As a founder, I don't have a strategy team. This tool gives me the structured thinking I need to present to the board and win investor confidence.",
          name: 'Amara Okonkwo',
          title: 'CEO & Co-Founder',
          company: 'Helix Biotech',
          initials: 'AO',
          color: 'bg-emerald-500',
        },
        {
          quote:
            'The intake process is brilliant — it asks exactly the right questions before generating anything. Reports are board-ready from the very first draft.',
          name: 'Laurent Moreau',
          title: 'VP Strategy, EMEA',
          company: 'Axiom Retail Group',
          initials: 'LM',
          color: 'bg-violet-500',
        },
      ],
    },
    cta: {
      headline: 'Ready to think strategically at AI speed?',
      subheadline:
        'Join the executives already using Strategic Decision to make faster, better-informed decisions.',
      button: 'Get Started Now',
    },
    footer: {
      tagline: 'AI-powered strategic intelligence for modern executives.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: {
        features:  'Features',
        pricing:   'Pricing',
        changelog: 'Changelog',
        about:     'About',
        contact:   'Contact',
        privacy:   'Privacy Policy',
        terms:     'Terms of Service',
      },
      copyright: '© {year} Strategic Decision. All rights reserved.',
      madeWith: 'Built for leaders who move fast.',
    },
  },

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    meta: {
      title: 'Strategic Decision — Inteligencia Estratégica con IA',
      description:
        'Genera informes estratégicos de nivel directivo en minutos. Impulsado por GPT-4o, adaptado al contexto específico de tu empresa.',
      ogTitle: 'Strategic Decision — Transforma Desafíos Empresariales en Estrategia de Alto Nivel',
    },
    nav: {
      features: 'Funcionalidades',
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      signIn: 'Iniciar Sesión',
      getStarted: 'Empieza Ahora',
    },
    hero: {
      badge: 'Ahora con GPT-4o',
      headline: 'Transforma Desafíos Empresariales en Estrategia de Alto Nivel',
      subheadline:
        'Genera informes estratégicos de alto nivel en minutos, no en meses. GPT-4o aprende el contexto específico de tu empresa antes de producir una sola recomendación.',
      ctaPrimary: 'Empieza Ahora',
      ctaSecondary: 'Cómo funciona',
      stats: [
        { value: '+500', label: 'Informes Generados' },
        { value: '< 10 min', label: 'Por Informe Completo' },
        { value: '4,9 / 5', label: 'Valoración de Usuarios' },
      ],
      mockup: {
        title: 'Análisis de Entrada al Mercado',
        subtitle: 'Expansión SaaS en Europa — Q1 2025',
        progress: 87,
        sections: [
          { label: 'Resumen Ejecutivo',        done: true },
          { label: 'Análisis de Mercado',      done: true },
          { label: 'Panorama Competitivo',     done: true },
          { label: 'Iniciativas Estratégicas', done: true },
          { label: 'Proyecciones Financieras', done: false },
        ],
        generating: 'Generando modelo financiero…',
      },
    },
    features: {
      badge: 'Diseñado para directivos',
      headline: 'Todo lo que necesitas para decidir más rápido',
      subheadline:
        'Desde el planteamiento inicial del problema hasta la presentación al consejo, Strategic Decision cubre todo el ciclo de consultoría.',
      items: [
        {
          icon: 'brain',
          title: 'Análisis con IA',
          description:
            'GPT-4o ingiere el contexto de tu empresa, documentos subidos y el planteamiento del problema para entregar insights que a consultores les llevaría semanas.',
        },
        {
          icon: 'document',
          title: 'Informes para el Consejo',
          description:
            'Resúmenes ejecutivos, marcos estratégicos, proyecciones financieras y hojas de ruta de implementación — estructurados para el máximo impacto en el consejo.',
        },
        {
          icon: 'chat',
          title: 'Refinamiento Iterativo',
          description:
            'Chatea directamente con la IA para profundizar en cualquier sección, cambiar la dirección estratégica o añadir nuevas iniciativas — iteraciones ilimitadas.',
        },
        {
          icon: 'export',
          title: 'Exportación Multiformato',
          description:
            'Descarga PDFs, documentos Word o presentaciones PowerPoint en cuanto tu informe esté listo. Listos para el consejo desde el primer borrador.',
        },
        {
          icon: 'company',
          title: 'Motor de Contexto Empresarial',
          description:
            'Sube estados financieros, informes anuales y documentos internos. La IA construye un entendimiento profundo de tu negocio antes de generar cualquier recomendación.',
        },
        {
          icon: 'security',
          title: 'Seguridad de Nivel Empresarial',
          description:
            'Tus datos nunca entrenan nuestros modelos. Cifrado extremo a extremo, infraestructura SOC 2 compliant y aislamiento total de datos por defecto.',
        },
      ],
    },
    howItWorks: {
      badge: 'Proceso sencillo',
      headline: 'Del problema a la estrategia en menos de 15 minutos',
      subheadline:
        'Un proceso de intake estructurado con IA garantiza que cada recomendación esté fundamentada en la realidad específica de tu negocio.',
      steps: [
        {
          number: '01',
          title: 'Define tu Desafío',
          description:
            'Describe tu problema de negocio en lenguaje natural. Añade el perfil de tu empresa y sube documentos relevantes para un contexto más rico.',
          time: '2 min',
        },
        {
          number: '02',
          title: 'Entrevista de Intake con IA',
          description:
            'La IA hace de 5 a 8 preguntas de aclaración específicas — exactamente como lo haría un estratega senior — para entender el panorama estratégico completo.',
          time: '5 min',
        },
        {
          number: '03',
          title: 'Generación del Informe',
          description:
            'Observa cómo tu informe estratégico completo se materializa en tiempo real: resumen ejecutivo, iniciativas, finanzas, hoja de ruta y análisis de riesgos.',
          time: '3 min',
        },
        {
          number: '04',
          title: 'Refina y Exporta',
          description:
            'Itera mediante chat, edita secciones manualmente y exporta un documento listo para tu consejo de administración o equipo directivo.',
          time: '5 min',
        },
      ],
    },
    video: {
      badge: 'Demo en vivo',
      headline: 'Mira cómo se genera un informe en tiempo real',
      subheadline:
        'Observa cómo Strategic Decision transforma un desafío empresarial en un análisis estratégico completo — desde el planteamiento hasta el informe listo para el consejo.',
      playLabel: 'Ver demo',
      duration: 'Demo de 3 min',
    },
    pricing: {
      badge: 'Precios simples',
      headline: 'Un plan para cada ambición',
      subheadline: 'Capacidad basada en tokens. Sin sorpresas por exceso de uso.',
      plans: [
        {
          name: 'Basic',
          description: 'Para directivos que empiezan a explorar la estrategia con IA.',
          price: 99,
          currency: '€',
          period: '/ mes',
          tokens: 'Capacidad de análisis estándar',
          cta: 'Empieza Ahora',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '1 empresa',
            '2 informes / mes',
            'Un tipo de estrategia de informe',
            'Modelo IA estándar (GPT-4o)',
            'Subida de contexto limitada (10 MB)',
          ],
          notIncluded: [
            'Informes multi-estrategia',
            'Modelos IA avanzados',
            'Exportación PDF y Word',
            'Edición de informe en pantalla',
            'Edición conversacional con agente IA (Aris)',
            'Acceso API',
          ],
        },
        {
          name: 'Plus',
          description: 'El plan preferido por equipos de estrategia.',
          price: 299,
          currency: '€',
          period: '/ mes',
          tokens: 'Capacidad de análisis ampliada',
          cta: 'Empieza Ahora',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '3 empresas',
            '8 informes / mes',
            'Informes multi-estrategia',
            'Modelos IA avanzados (GPT-4o+)',
            'Subida de documentación amplia (100 MB)',
            'Exportación PDF y Word personalizado',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Edición conversacional con agente IA (Aris)',
          ],
          notIncluded: [
            'Análisis comparativo multi-proyecto',
            'Historial y memoria estratégica',
            'Acceso anticipado a nuevas funciones',
            'Acceso API',
          ],
        },
        {
          name: 'Premium',
          description: 'Para consultoras y direcciones generales que compiten al más alto nivel.',
          price: 599,
          currency: '€',
          period: '/ mes',
          tokens: 'Capacidad de análisis sin límite práctico',
          cta: 'Empieza Ahora',
          ctaVariant: 'primary' as const,
          featured: true,
          badge: 'Más Potente',
          features: [
            'Empresas ilimitadas',
            '30 informes / mes',
            'Informes multi-estrategia',
            'Modelos IA avanzados (GPT-4o+)',
            'Subida de documentación amplia (100 MB)',
            'Exportación PDF y Word personalizado',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Edición conversacional con agente IA (Aris)',
            'Análisis comparativo multi-proyecto',
            'Historial y memoria estratégica',
            'Acceso anticipado a nuevas funciones',
          ],
          notIncluded: [
            'Acceso API',
            'Integraciones personalizadas',
            'SSO y SAML',
            'Account manager dedicado',
          ],
        },
        {
          name: 'Enterprise',
          description: 'Para organizaciones que despliegan IA estratégica a escala.',
          price: null,
          currency: '€',
          period: '',
          tokens: 'Capacidad de análisis personalizada',
          cta: 'Contactar Ventas',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            'Empresas ilimitadas',
            'Informes ilimitados',
            'Informes multi-estrategia',
            'Modelos IA avanzados',
            'Subida de documentación ilimitada',
            'Exportación PDF y Word personalizado',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Edición conversacional con agente IA (Aris)',
            'Análisis comparativo multi-proyecto',
            'Historial y memoria estratégica',
            'Acceso anticipado a nuevas funciones',
            'Acceso API',
            'Integraciones personalizadas',
            'Opciones white-label',
            'SSO y SAML',
            'Account manager dedicado',
            'Garantía SLA',
          ],
          notIncluded: [],
        },
      ],
    },
    testimonials: {
      badge: 'Confiado por líderes',
      headline: 'Lo que dicen los directivos',
      items: [
        {
          quote:
            'Antes gastábamos 80.000 € en consultoría estratégica para el tipo de análisis que Strategic Decision genera en 10 minutos. La calidad es genuinamente comparable.',
          name: 'Marcus Chen',
          title: 'Chief Strategy Officer',
          company: 'Nexus Capital Group',
          initials: 'MC',
          color: 'bg-blue-500',
        },
        {
          quote:
            'Como fundador, no tengo un equipo de estrategia. Esta herramienta me da el pensamiento estructurado que necesito para presentar al consejo y ganar la confianza de los inversores.',
          name: 'Amara Okonkwo',
          title: 'CEO y Co-Fundadora',
          company: 'Helix Biotech',
          initials: 'AO',
          color: 'bg-emerald-500',
        },
        {
          quote:
            'El proceso de intake es brillante — hace exactamente las preguntas correctas antes de generar nada. Los informes están listos para el consejo desde el primer borrador.',
          name: 'Laurent Moreau',
          title: 'VP Estrategia, EMEA',
          company: 'Axiom Retail Group',
          initials: 'LM',
          color: 'bg-violet-500',
        },
      ],
    },
    cta: {
      headline: '¿Listo para pensar estratégicamente a velocidad de IA?',
      subheadline:
        'Únete a los directivos que ya usan Strategic Decision para tomar decisiones más rápidas y mejor fundamentadas.',
      button: 'Empieza Ahora',
    },
    footer: {
      tagline: 'Inteligencia estratégica con IA para directivos modernos.',
      product: 'Producto',
      company: 'Empresa',
      legal: 'Legal',
      links: {
        features:  'Funcionalidades',
        pricing:   'Precios',
        changelog: 'Novedades',
        about:     'Sobre nosotros',
        contact:   'Contacto',
        privacy:   'Política de Privacidad',
        terms:     'Términos de Servicio',
      },
      copyright: '© {year} Strategic Decision. Todos los derechos reservados.',
      madeWith: 'Construido para líderes que se mueven rápido.',
    },
  },
} as const;

export type Translations = typeof translations.en;
