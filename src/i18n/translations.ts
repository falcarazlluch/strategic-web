export type Lang = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: 'Strategic Decision — AI-Powered Strategic Intelligence',
      description:
        'The first AI that analyses your company like a strategy consulting firm. Boardroom-ready reports in minutes, tailored to your role, sector and business model.',
      ogTitle: 'Strategic Decision — The AI That Thinks Like a Strategy Consultant',
    },
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      signIn: 'Sign In',
      getStarted: 'Get Started',
      forConsultants: 'For Consultants',
    },
    hero: {
      badge: 'AI that learns your company before writing a single line',
      headline: 'The First AI That Analyses Your Business Like a Strategy Consultant',
      subheadline:
        'Before generating a single insight, our system profiles your company, identifies the right consultant frameworks, and builds a personalised report structure. The result: analysis that actually fits your reality.',
      ctaPrimary: 'Start for Free',
      ctaSecondary: 'See how it works',
      stats: [
        { value: '500+', label: 'Reports Generated' },
        { value: '< 10 min', label: 'Per Full Report' },
        { value: '4,000+', label: 'Words Per Report' },
      ],
      mockup: {
        title: 'B2B SaaS Expansion — Southern Europe',
        subtitle: 'Go-to-Market Strategy · Financial Projections',
        progress: 87,
        sections: [
          { label: 'Executive Summary',                         done: true },
          { label: 'Competitive Positioning (Porter)',          done: true },
          { label: 'Business Model Canvas Analysis',           done: true },
          { label: 'Strategic Initiatives & Roadmap',          done: true },
          { label: 'Financial Projections & ROI Model',        done: false },
        ],
        generating: 'Generating financial model…',
      },
    },

    profile: {
      badge: 'Built for your role',
      headline: 'Different role. Different analysis.',
      subheadline:
        'The intake questions, analytical focus, and report structure adapt to who you are. A CFO gets a different report than a CEO — even for the same problem.',
      roles: [
        {
          icon: 'ceo',
          title: 'CEO & Founders',
          description:
            'Strategic direction, market positioning, growth roadmap, investor narrative, and competitive moat. Built for the big picture.',
          tags: ['Growth strategy', 'Market positioning', 'M&A readiness'],
        },
        {
          icon: 'cfo',
          title: 'CFO & Finance Directors',
          description:
            'Financial modelling, ROI projections, cost structure analysis, funding scenarios, and risk quantification. Numbers-first.',
          tags: ['ROI models', 'Cost optimisation', 'Risk analysis'],
        },
        {
          icon: 'cto',
          title: 'CTO & Product Leaders',
          description:
            'Technology strategy, build-vs-buy decisions, platform scalability, digital transformation, and tech-driven competitive advantage.',
          tags: ['Tech strategy', 'Digital transformation', 'Product roadmap'],
        },
        {
          icon: 'consultant',
          title: 'Consultants & Agencies',
          description:
            'White-label reports with your own branding. Manage multiple clients from one workspace. Deliver in minutes, not weeks.',
          tags: ['White-label exports', 'Multi-client', 'Team workspace'],
        },
      ],
    },

    features: {
      badge: 'Full consulting lifecycle',
      headline: 'Everything a consultant does. In minutes.',
      subheadline:
        'Strategic Decision replicates the full methodology of a strategy consulting engagement — from problem framing to boardroom presentation.',
      items: [
        {
          icon: 'brain',
          title: 'Pre-Analysis Before Writing',
          description:
            'Before generating a single word, the system identifies the required consultant profiles, assigns relevant frameworks, and designs a custom section structure for your specific case.',
        },
        {
          icon: 'document',
          title: 'Reports Structured for Your Case',
          description:
            'Every section title is written for your specific problem. A generic "Market Analysis" becomes "B2B SaaS entry into Spanish SME banking" — named, framed, and argued around your actual situation. Each report exceeds 4,000 words and covers: executive summary, strategic diagnosis, prioritised initiatives, financial projections, risk matrix, and implementation roadmap.',
        },
        {
          icon: 'chat',
          title: 'Aris — Your AI Consultant',
          description:
            'Aris is the consultant who wrote your report. With full context, Aris can deepen any section, adapt the tone for different audiences (board, investors, team), pivot the strategic direction, or trigger a full regeneration.',
        },
        {
          icon: 'export',
          title: 'Branded PDF & Word Export',
          description:
            'Download polished PDF or Word files with your company logo and brand colours applied. Ready for your board or to deliver to a client without further editing.',
        },
        {
          icon: 'company',
          title: 'Deep Company Context',
          description:
            'Build a rich company profile: sector, size, business model, development stage, geographic markets, revenue range, and competitors. Upload strategic documents or auto-import context directly from your website URL.',
        },
        {
          icon: 'frameworks',
          title: 'Real Consulting Frameworks',
          description:
            'Every report applies recognised methodologies: Business Model Canvas, Porter\'s Five Forces, SWOT, financial modelling with ROI projections, and sector benchmarks — not generic text.',
        },
      ],
    },

    consulting: {
      badge: 'Applied methodology',
      headline: 'Frameworks, not generic text',
      subheadline:
        'Strategic Decision applies the same structured thinking used by top consulting firms. Each report is built on proven frameworks adapted to your specific situation.',
      frameworks: [
        {
          name: 'Business Model Canvas',
          description: 'Full mapping of your value proposition, channels, customer segments, revenue streams, and cost structure.',
        },
        {
          name: "Porter's Five Forces",
          description: 'Competitive intensity analysis across suppliers, buyers, substitutes, new entrants, and direct rivalry.',
        },
        {
          name: 'SWOT & Strategic Diagnosis',
          description: 'Internal capabilities vs. external opportunities, with prioritised strategic initiatives derived from the analysis.',
        },
        {
          name: 'Financial Modelling',
          description: 'ROI projections, investment scenarios, cost-benefit analysis, and timeline for value realisation.',
        },
        {
          name: 'Risk Matrix',
          description: 'Probability-impact assessment of strategic risks with mitigation plans for each identified threat.',
        },
        {
          name: 'Implementation Roadmap',
          description: 'Prioritised initiatives with effort/impact matrix, sequencing, responsible owners, and KPIs.',
        },
      ],
    },

    howItWorks: {
      badge: 'Simple process',
      headline: 'From problem to strategy in under 15 minutes',
      subheadline:
        'Your company context is set up once and reused across every report. Each new challenge takes minutes — not hours.',
      setupNote: 'One-time setup',
      perReportNote: 'Per report',
      steps: [
        {
          number: '01',
          title: 'Set Up Your Company (once)',
          description:
            'When you sign up, you create your company workspace: sector, business model, geographic markets, development stage, competitors, and your role (CEO, CFO, CTO…). Upload strategic documents or auto-import context from your website. This is done once — every report you generate from that point inherits all this context automatically.',
          time: 'One-time',
          isSetup: true,
        },
        {
          number: '02',
          title: 'Define the Challenge & Choose the Focus',
          description:
            'Describe the specific problem you want to solve. Then choose the analytical approach: Strategic, Tactical, Financial, Operational, or Risk. Plus and Premium plans let you combine multiple approaches in a single report for a more complete analysis.',
          time: '2 min',
          isSetup: false,
        },
        {
          number: '03',
          title: 'AI Strategic Intake',
          description:
            'The system generates 6–8 targeted questions built around your challenge, your company context, and your role. A CEO gets different questions than a CFO — even for the same problem. Designed to surface the key variables that shape the analysis.',
          time: '5 min',
          isSetup: false,
        },
        {
          number: '04',
          title: 'Report Generation',
          description:
            'Watch your report materialise in real time. Sections are named and structured specifically for your case — not generic titles. The system produces 4,000+ words covering executive summary, diagnosis, strategic initiatives, financial projections, risk matrix, and implementation roadmap.',
          time: '3 min',
          isSetup: false,
        },
        {
          number: '05',
          title: 'Refine & Export',
          description:
            'Iterate with Aris, edit sections manually, and export a branded PDF or Word document — ready for your board or to deliver to a client.',
          time: 'Unlimited',
          isSetup: false,
        },
      ],
    },

    agency: {
      badge: 'For consulting firms & agencies',
      headline: 'Your reports. Your brand. Your clients.',
      subheadline:
        'Strategic Decision gives boutique consultancies and independent advisors the infrastructure to deliver McKinsey-quality work at a fraction of the time and cost.',
      features: [
        {
          icon: 'brand',
          title: 'White-Label Exports',
          description: 'Every PDF and Word document carries your firm\'s logo, colours, and visual identity. Clients receive a professional deliverable that looks entirely yours.',
        },
        {
          icon: 'clients',
          title: 'Multi-Client Management',
          description: 'Manage unlimited client companies from a single workspace. Each client\'s data, reports, and context are completely isolated.',
        },
        {
          icon: 'team',
          title: 'Team Workspace',
          description: 'Invite analysts, managers, and partners with role-based access. Analysts see only their assigned clients. Owners have full visibility.',
        },
        {
          icon: 'speed',
          title: 'Deliver in Hours, Not Weeks',
          description: 'A full strategic analysis that would take a junior team 3 weeks is ready in 10 minutes. Bill the same, invest the time differently.',
        },
      ],
      cta: 'Explore Agency Plans',
    },

    video: {
      badge: 'Live demo',
      headline: 'See a report generated in real time',
      subheadline:
        'Watch how Strategic Decision transforms a business challenge into a complete strategic analysis — from problem statement to boardroom-ready report.',
      playLabel: 'Watch demo',
      duration: '3 min demo',
    },

    testimonials: {
      badge: 'From the field',
      headline: 'What real users say',
      items: [
        {
          quote:
            'The intake process is what makes it different. It asks the right questions before generating anything — questions a good strategy partner would ask. The output reflects our actual situation, not a generic template.',
          name: 'Director of Strategy',
          title: 'Industrial manufacturing company',
          company: 'Spain',
          initials: 'DS',
          color: 'bg-indigo-500',
        },
        {
          quote:
            'As a boutique consultancy, we now use Strategic Decision for initial diagnostics on every new client. We deliver in 24 hours what used to take a week of desk research. Our clients see the same quality — we see the margin.',
          name: 'Managing Partner',
          title: 'Strategy consulting boutique',
          company: 'Barcelona',
          initials: 'MP',
          color: 'bg-violet-500',
        },
        {
          quote:
            'I needed a structured analysis to present to the board before a capital raise. The financial projections and risk matrix sections were exactly what the investors wanted to see. Generated in one afternoon.',
          name: 'Co-Founder & CEO',
          title: 'B2B SaaS startup',
          company: 'Madrid',
          initials: 'CF',
          color: 'bg-blue-500',
        },
      ],
    },

    pricing: {
      badge: 'Simple pricing',
      headline: 'One plan for every ambition',
      subheadline: 'Pay per report, not per hour. No hidden costs.',
      packsNote: 'Need more reports? Add packs of 5 (€79) or 10 (€120) at any time.',
      plans: [
        {
          name: 'Basic',
          description: 'For executives exploring AI-driven strategy for the first time.',
          price: 99,
          currency: '€',
          period: '/ month',
          tokens: '2 reports / month · 1 company',
          cta: 'Start Now',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '1 company workspace',
            '2 strategic reports / month',
            'Standard AI analysis',
            'Company profile & context',
            'Basic PDF export',
          ],
          notIncluded: [
            'Multi-strategy reports',
            'On-screen report editing',
            'Report regeneration',
            'Aris AI consultant chat',
            'Branded PDF & Word export',
            'Additional report packs',
          ],
        },
        {
          name: 'Plus',
          description: 'The preferred plan for strategy teams and independent advisors.',
          price: 299,
          currency: '€',
          period: '/ month',
          tokens: '8 reports / month · 3 companies',
          cta: 'Start Now',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '3 company workspaces',
            '8 strategic reports / month',
            'Multi-strategy analysis',
            'Advanced AI model',
            'Document upload (5 categories)',
            'Branded PDF & Word export',
            'On-screen report editing',
            'Report regeneration',
            'Aris AI consultant chat',
            'Additional report packs',
          ],
          notIncluded: [
            'Early access to new features',
          ],
        },
        {
          name: 'Premium',
          description: 'For consulting firms and C-suites that compete at the highest level.',
          price: 599,
          currency: '€',
          period: '/ month',
          tokens: '30 reports / month · Unlimited companies',
          cta: 'Start Now',
          ctaVariant: 'primary' as const,
          featured: true,
          badge: 'Most Powerful',
          features: [
            'Unlimited company workspaces',
            '30 strategic reports / month',
            'Multi-strategy analysis',
            'Advanced AI model',
            'Document upload (5 categories)',
            'Branded PDF & Word export',
            'On-screen report editing',
            'Report regeneration',
            'Aris AI consultant chat',
            'Additional report packs',
            'White-label reports',
            'Early access to new features',
          ],
          notIncluded: [],
        },
        {
          name: 'Agency',
          description: 'For consulting firms managing multiple clients with a team.',
          price: null,
          currency: '€',
          period: '',
          tokens: 'Custom volume · Team workspace',
          cta: 'Contact Sales',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            'Unlimited company workspaces',
            'Custom report volume',
            'Multi-user team workspace',
            'Role-based access (Owner / Admin / Analyst)',
            'Multi-strategy analysis',
            'Advanced AI model',
            'Branded PDF & Word export',
            'White-label reports',
            'On-screen report editing',
            'Report regeneration',
            'Aris AI consultant chat',
          ],
          notIncluded: [],
        },
      ],
    },

    cta: {
      headline: 'Ready to think strategically at AI speed?',
      subheadline:
        'Join the executives and consultants already using Strategic Decision to make faster, better-informed decisions.',
      button: 'Get Started Now',
    },

    footer: {
      tagline: 'AI-powered strategic intelligence for executives and consultants.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: {
        features:  'Features',
        pricing:   'Pricing',
        forConsultants: 'For Consultants',
        about:     'About',
        contact:   'Contact',
        privacy:   'Privacy Policy',
        terms:     'Terms of Service',
      },
      copyright: '© {year} Strategic Decision. All rights reserved.',
      madeWith: '',
    },
  },

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    meta: {
      title: 'Strategic Decision — Inteligencia Estratégica con IA',
      description:
        'El primer sistema de IA que analiza tu empresa como lo haría una consultora estratégica. Informes de nivel directivo en minutos, adaptados a tu rol, sector y modelo de negocio.',
      ogTitle: 'Strategic Decision — La IA que piensa como una consultora estratégica',
    },
    nav: {
      features: 'Funcionalidades',
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      signIn: 'Iniciar Sesión',
      getStarted: 'Empieza Ahora',
      forConsultants: 'Para Consultoras',
    },
    hero: {
      badge: 'IA que aprende tu empresa antes de escribir una sola línea',
      headline: 'El Primer Sistema de IA que Analiza tu Empresa como una Consultora Estratégica',
      subheadline:
        'Antes de generar una sola recomendación, el sistema perfila tu empresa, identifica los marcos de análisis correctos y construye una estructura de informe personalizada. El resultado: análisis que realmente encaja con tu realidad.',
      ctaPrimary: 'Empieza Gratis',
      ctaSecondary: 'Cómo funciona',
      stats: [
        { value: '+500', label: 'Informes Generados' },
        { value: '< 10 min', label: 'Por Informe Completo' },
        { value: '+4.000', label: 'Palabras por Informe' },
      ],
      mockup: {
        title: 'Expansión B2B SaaS — Sur de Europa',
        subtitle: 'Estrategia Go-to-Market · Proyecciones Financieras',
        progress: 87,
        sections: [
          { label: 'Resumen Ejecutivo',                       done: true },
          { label: 'Posicionamiento Competitivo (Porter)',    done: true },
          { label: 'Análisis Business Model Canvas',         done: true },
          { label: 'Iniciativas Estratégicas y Hoja de Ruta', done: true },
          { label: 'Proyecciones Financieras y Modelo ROI',  done: false },
        ],
        generating: 'Generando modelo financiero…',
      },
    },

    profile: {
      badge: 'Adaptado a tu perfil',
      headline: 'Distinto rol. Distinto análisis.',
      subheadline:
        'Las preguntas del intake, el enfoque analítico y la estructura del informe se adaptan a quién eres. Un CFO recibe un informe diferente al de un CEO, incluso ante el mismo problema.',
      roles: [
        {
          icon: 'ceo',
          title: 'CEO y Fundadores',
          description:
            'Dirección estratégica, posicionamiento en el mercado, hoja de ruta de crecimiento, narrativa para inversores y ventaja competitiva sostenible. Para la visión global.',
          tags: ['Estrategia de crecimiento', 'Posicionamiento', 'M&A'],
        },
        {
          icon: 'cfo',
          title: 'CFO y Directores Financieros',
          description:
            'Modelización financiera, proyecciones de ROI, análisis de estructura de costes, escenarios de financiación y cuantificación de riesgos. Orientado a los números.',
          tags: ['Modelos ROI', 'Optimización de costes', 'Análisis de riesgos'],
        },
        {
          icon: 'cto',
          title: 'CTO y Líderes de Producto',
          description:
            'Estrategia tecnológica, decisiones build-vs-buy, escalabilidad de plataforma, transformación digital y ventaja competitiva basada en tecnología.',
          tags: ['Estrategia tech', 'Transformación digital', 'Roadmap de producto'],
        },
        {
          icon: 'consultant',
          title: 'Consultoras y Agencias',
          description:
            'Informes con tu propia marca. Gestiona múltiples clientes desde un panel central. Entrega en minutos lo que antes costaba semanas.',
          tags: ['Exportación white-label', 'Multi-cliente', 'Equipo de trabajo'],
        },
      ],
    },

    features: {
      badge: 'Ciclo completo de consultoría',
      headline: 'Todo lo que hace una consultora. En minutos.',
      subheadline:
        'Strategic Decision replica la metodología completa de un proyecto de consultoría estratégica — desde el planteamiento del problema hasta la presentación al consejo.',
      items: [
        {
          icon: 'brain',
          title: 'Pre-Análisis Antes de Escribir',
          description:
            'Antes de generar una sola palabra, el sistema identifica los perfiles de consultor necesarios, asigna los frameworks relevantes y diseña una estructura de secciones a medida para tu caso concreto.',
        },
        {
          icon: 'document',
          title: 'Informes Estructurados para tu Caso',
          description:
            'Cada sección del informe se titula y argumenta en torno a tu problema concreto. Un "Análisis de Mercado" genérico se convierte en "Penetración SaaS B2B en banca española para PYMEs" — nombrado, enfocado y desarrollado desde tu situación real. Más de 4.000 palabras que cubren: resumen ejecutivo, diagnóstico estratégico, iniciativas priorizadas, proyecciones financieras, matriz de riesgos y hoja de ruta de implementación.',
        },
        {
          icon: 'chat',
          title: 'Aris — Tu Consultor IA',
          description:
            'Aris es el consultor que redactó tu informe. Con contexto completo, puede profundizar en cualquier sección, adaptar el tono para distintas audiencias (consejo, inversores, equipo), cambiar la dirección estratégica o lanzar una regeneración completa.',
        },
        {
          icon: 'export',
          title: 'Exportación PDF y Word con Marca',
          description:
            'Descarga PDFs o documentos Word con el logo y colores corporativos de tu empresa aplicados. Listos para el consejo o para entregar a un cliente sin edición adicional.',
        },
        {
          icon: 'company',
          title: 'Contexto Empresarial Profundo',
          description:
            'Construye un perfil rico de tu empresa: sector, tamaño, modelo de negocio, fase de desarrollo, mercados geográficos, rango de ingresos y competidores. Sube documentos estratégicos o importa el contexto automáticamente desde la URL de tu web.',
        },
        {
          icon: 'frameworks',
          title: 'Frameworks Reales de Consultoría',
          description:
            'Cada informe aplica metodologías reconocidas: Business Model Canvas, Porter\'s Five Forces, SWOT, modelización financiera con proyecciones de ROI y benchmarks sectoriales — no texto genérico.',
        },
      ],
    },

    consulting: {
      badge: 'Metodología aplicada',
      headline: 'Frameworks reales, no texto genérico',
      subheadline:
        'Strategic Decision aplica el mismo pensamiento estructurado que usan las grandes consultoras. Cada informe se construye sobre frameworks probados adaptados a tu situación específica.',
      frameworks: [
        {
          name: 'Business Model Canvas',
          description: 'Mapeo completo de tu propuesta de valor, canales, segmentos de clientes, fuentes de ingresos y estructura de costes.',
        },
        {
          name: 'Porter\'s Five Forces',
          description: 'Análisis de intensidad competitiva en proveedores, compradores, sustitutos, nuevos entrantes y rivalidad directa.',
        },
        {
          name: 'SWOT y Diagnóstico Estratégico',
          description: 'Capacidades internas vs. oportunidades externas, con iniciativas estratégicas priorizadas derivadas del análisis.',
        },
        {
          name: 'Modelización Financiera',
          description: 'Proyecciones de ROI, escenarios de inversión, análisis coste-beneficio y horizonte temporal para la generación de valor.',
        },
        {
          name: 'Matriz de Riesgos',
          description: 'Evaluación probabilidad-impacto de los riesgos estratégicos con planes de mitigación para cada amenaza identificada.',
        },
        {
          name: 'Hoja de Ruta de Implementación',
          description: 'Iniciativas priorizadas con matriz esfuerzo/impacto, secuenciación, responsables y KPIs.',
        },
      ],
    },

    howItWorks: {
      badge: 'Proceso claro',
      headline: 'Del problema a la estrategia en menos de 15 minutos',
      subheadline:
        'El contexto de tu empresa se configura una vez y se reutiliza en todos los informes. Cada nuevo desafío lleva minutos — no horas.',
      setupNote: 'Configuración única',
      perReportNote: 'Por informe',
      steps: [
        {
          number: '01',
          title: 'Configura tu Empresa (una vez)',
          description:
            'Al registrarte, creas el espacio de trabajo de tu empresa: sector, modelo de negocio, mercados geográficos, fase de desarrollo, competidores y tu rol (CEO, CFO, CTO…). Sube documentos estratégicos o importa el contexto automáticamente desde la URL de tu web. Esto se hace una sola vez — cada informe que generes a partir de ese momento hereda todo este contexto de forma automática.',
          time: 'Una vez',
          isSetup: true,
        },
        {
          number: '02',
          title: 'Define el Desafío y Elige el Enfoque',
          description:
            'Describe el problema concreto que quieres resolver. A continuación, elige el enfoque analítico: Estratégico, Táctico, Financiero, Operativo o de Riesgos. Los planes Plus y Premium permiten combinar varios enfoques en un único informe para un análisis más completo.',
          time: '2 min',
          isSetup: false,
        },
        {
          number: '03',
          title: 'Intake Estratégico con IA',
          description:
            'El sistema genera 6–8 preguntas construidas alrededor de tu desafío, el contexto de tu empresa y tu rol. Un CEO recibe preguntas distintas a las de un CFO — ante el mismo problema. Diseñadas para identificar las variables clave que condicionan el análisis.',
          time: '5 min',
          isSetup: false,
        },
        {
          number: '04',
          title: 'Generación del Informe',
          description:
            'Observa cómo tu informe se materializa en tiempo real. Las secciones se titulan y estructuran específicamente para tu caso — sin títulos genéricos. El sistema produce más de 4.000 palabras que cubren resumen ejecutivo, diagnóstico, iniciativas estratégicas, proyecciones financieras, matriz de riesgos y hoja de ruta de implementación.',
          time: '3 min',
          isSetup: false,
        },
        {
          number: '05',
          title: 'Refina y Exporta',
          description:
            'Itera con Aris, edita secciones manualmente y exporta un PDF o Word con tu imagen de marca — listo para el consejo o para entregar a un cliente.',
          time: 'Ilimitado',
          isSetup: false,
        },
      ],
    },

    agency: {
      badge: 'Para consultoras y agencias',
      headline: 'Tus informes. Tu marca. Tus clientes.',
      subheadline:
        'Strategic Decision da a las boutiques de estrategia y asesores independientes la infraestructura para entregar trabajo de calidad McKinsey en una fracción del tiempo y el coste.',
      features: [
        {
          icon: 'brand',
          title: 'Exportación White-Label',
          description: 'Cada PDF y documento Word lleva el logo, colores e identidad visual de tu consultora. El cliente recibe un entregable profesional que parece íntegramente tuyo.',
        },
        {
          icon: 'clients',
          title: 'Gestión Multi-Cliente',
          description: 'Gestiona empresas cliente ilimitadas desde un solo panel. Los datos, informes y contexto de cada cliente están completamente aislados.',
        },
        {
          icon: 'team',
          title: 'Equipo de Trabajo',
          description: 'Invita analistas, managers y socios con acceso por roles. Los analistas solo ven sus clientes asignados. Los owners tienen visibilidad total.',
        },
        {
          icon: 'speed',
          title: 'Entrega en Horas, no Semanas',
          description: 'Un análisis estratégico completo que llevaría 3 semanas a un equipo junior está listo en 10 minutos. Factura igual, invierte el tiempo de otra forma.',
        },
      ],
      cta: 'Ver Planes para Agencias',
    },

    video: {
      badge: 'Demo en vivo',
      headline: 'Mira cómo se genera un informe en tiempo real',
      subheadline:
        'Observa cómo Strategic Decision transforma un desafío empresarial en un análisis estratégico completo — desde el planteamiento hasta el informe listo para el consejo.',
      playLabel: 'Ver demo',
      duration: 'Demo de 3 min',
    },

    testimonials: {
      badge: 'De primera mano',
      headline: 'Lo que dicen los usuarios reales',
      items: [
        {
          quote:
            'Lo que lo diferencia es el proceso de intake. Hace las preguntas correctas antes de generar nada — las que haría un buen socio de estrategia. El resultado refleja nuestra situación real, no una plantilla genérica.',
          name: 'Director de Estrategia',
          title: 'Empresa industrial de fabricación',
          company: 'España',
          initials: 'DE',
          color: 'bg-indigo-500',
        },
        {
          quote:
            'Como boutique de consultoría, ahora usamos Strategic Decision para los diagnósticos iniciales de cada nuevo cliente. Entregamos en 24 horas lo que antes costaba una semana de investigación. Nuestros clientes ven la misma calidad — nosotros vemos el margen.',
          name: 'Managing Partner',
          title: 'Boutique de consultoría estratégica',
          company: 'Barcelona',
          initials: 'MP',
          color: 'bg-violet-500',
        },
        {
          quote:
            'Necesitaba un análisis estructurado para presentar al consejo antes de una ronda de capital. Las proyecciones financieras y la matriz de riesgos fueron exactamente lo que querían ver los inversores. Generado en una tarde.',
          name: 'Co-Fundador y CEO',
          title: 'Startup B2B SaaS',
          company: 'Madrid',
          initials: 'CF',
          color: 'bg-blue-500',
        },
      ],
    },

    pricing: {
      badge: 'Precios claros',
      headline: 'Un plan para cada ambición',
      subheadline: 'Paga por informes, no por horas. Sin costes ocultos.',
      packsNote: '¿Necesitas más informes? Añade packs de 5 (79€) o 10 (120€) en cualquier momento.',
      plans: [
        {
          name: 'Basic',
          description: 'Para directivos que empiezan a explorar la estrategia con IA.',
          price: 99,
          currency: '€',
          period: '/ mes',
          tokens: '2 informes / mes · 1 empresa',
          cta: 'Empieza Ahora',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '1 empresa',
            '2 informes estratégicos / mes',
            'Análisis IA estándar',
            'Perfil y contexto de empresa',
            'Exportación PDF básica',
          ],
          notIncluded: [
            'Informes multi-estrategia',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Aris, consultor IA',
            'PDF y Word con imagen de marca',
            'Packs de informes adicionales',
          ],
        },
        {
          name: 'Plus',
          description: 'El plan preferido por equipos de estrategia y asesores independientes.',
          price: 299,
          currency: '€',
          period: '/ mes',
          tokens: '8 informes / mes · 3 empresas',
          cta: 'Empieza Ahora',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            '3 empresas',
            '8 informes estratégicos / mes',
            'Análisis multi-estrategia',
            'Modelo IA avanzado',
            'Subida de documentos (5 categorías)',
            'PDF y Word con imagen de marca',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Aris, consultor IA',
            'Packs de informes adicionales',
          ],
          notIncluded: [
            'Acceso anticipado a nuevas funciones',
          ],
        },
        {
          name: 'Premium',
          description: 'Para consultoras y directivos que compiten al más alto nivel.',
          price: 599,
          currency: '€',
          period: '/ mes',
          tokens: '30 informes / mes · Empresas ilimitadas',
          cta: 'Empieza Ahora',
          ctaVariant: 'primary' as const,
          featured: true,
          badge: 'Más Potente',
          features: [
            'Empresas ilimitadas',
            '30 informes estratégicos / mes',
            'Análisis multi-estrategia',
            'Modelo IA avanzado',
            'Subida de documentos (5 categorías)',
            'PDF y Word con imagen de marca',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Aris, consultor IA',
            'Packs de informes adicionales',
            'Informes white-label',
            'Acceso anticipado a nuevas funciones',
          ],
          notIncluded: [],
        },
        {
          name: 'Agency',
          description: 'Para consultoras que gestionan múltiples clientes con equipo propio.',
          price: null,
          currency: '€',
          period: '',
          tokens: 'Volumen personalizado · Equipo',
          cta: 'Contactar Ventas',
          ctaVariant: 'outline' as const,
          featured: false,
          badge: null,
          features: [
            'Empresas ilimitadas',
            'Volumen de informes personalizado',
            'Equipo multi-usuario',
            'Acceso por roles (Owner / Admin / Analista)',
            'Análisis multi-estrategia',
            'Modelo IA avanzado',
            'PDF y Word con imagen de marca',
            'Informes white-label',
            'Edición de informe en pantalla',
            'Regeneración de informe',
            'Aris, consultor IA',
          ],
          notIncluded: [],
        },
      ],
    },

    cta: {
      headline: '¿Listo para pensar estratégicamente a velocidad de IA?',
      subheadline:
        'Únete a los directivos y consultoras que ya usan Strategic Decision para tomar decisiones más rápidas y mejor fundamentadas.',
      button: 'Empieza Ahora',
    },

    footer: {
      tagline: 'Inteligencia estratégica con IA para directivos y consultoras.',
      product: 'Producto',
      company: 'Empresa',
      legal: 'Legal',
      links: {
        features:  'Funcionalidades',
        pricing:   'Precios',
        forConsultants: 'Para Consultoras',
        about:     'Sobre nosotros',
        contact:   'Contacto',
        privacy:   'Política de Privacidad',
        terms:     'Términos de Servicio',
      },
      copyright: '© {year} Strategic Decision. Todos los derechos reservados.',
      madeWith: '',
    },
  },
} as const;

export type Translations = typeof translations.en;
