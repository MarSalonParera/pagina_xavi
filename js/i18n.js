const languageParam = new URLSearchParams(window.location.search).get("lang");
const requestedLanguage = languageParam ? languageParam.toLowerCase().split("-")[0] : "";
const savedLanguage = localStorage.getItem("siteLanguage") || "";
const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "es"];

const spanishLikeLanguages = ["es", "ca", "gl", "eu"];
const detectedLanguage = browserLanguages[0].toLowerCase().split("-")[0];
const supportedLanguages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "pt", label: "Português" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "ca", label: "Català" },
    { code: "eu", label: "Euskera" },
    { code: "ro", label: "Română" },
    { code: "ar", label: "العربية" },
    { code: "zh", label: "中文" }
];
const supportedLanguageCodes = supportedLanguages.map(({ code }) => code);
const activeLanguage = supportedLanguageCodes.includes(requestedLanguage)
    ? requestedLanguage
    : supportedLanguageCodes.includes(savedLanguage)
        ? savedLanguage
        : spanishLikeLanguages.includes(detectedLanguage)
            ? "es"
            : "en";

const translations = {
    en: {
        "Abrir menú": "Open menu",
        "Menú principal": "Main menu",
        "Inicio": "Home",
        "Sobre Nosotros": "About Us",
        "Quién soy": "About me",
        "Servicios": "Services",
        "Metodología": "Methodology",
        "Proyectos": "Projects",
        "Blog": "Blog",
        "Contacto": "Contact",
        "Consultoría regenerativa para territorios vivos": "Regenerative consulting for living territories",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Regenerating soils, water and ecosystems for a sustainable future.",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Innovative solutions in regenerative agriculture, regenerative aquaculture, biofertilizers, biochar and holistic management.",
        "Contactar": "Contact",
        "Solicitar consultoría": "Request consulting",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Consulting for projects that regenerate soil, water and ecosystems.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Learn about True Regenerative's mission, vision and approach.",
        "Ver sección": "View section",
        "Experiencia del fundador y forma de trabajar.": "Founder experience and working approach.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Agriculture, water, aquaculture, microalgae, biofertilizers, biochar and holistic management.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnosis, analysis, design, implementation and follow-up.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Success stories, results and reference locations.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Resources on regenerative agriculture, biochar, microalgae, water and agricultural innovation.",
        "Formulario para solicitar información o consultoría.": "Form to request information or consulting.",
        "Todos los derechos reservados.": "All rights reserved.",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. All rights reserved.",

        "Sobre True Regenerative": "About True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "We design systems that restore fertility, water and biodiversity.",
        "Quiénes somos": "Who we are",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative is a consultancy specialized in regenerative projects for agriculture, water, aquaculture, biofertilizers, biochar, microalgae and holistic management.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "We support farms, agri-food companies, aquaculture projects and public organizations in the transition toward productive models capable of regenerating the resources they depend on.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "We work from a practical perspective: diagnosis, design, implementation and follow-up so each project can improve profitability, resilience and environmental impact.",
        "Misión": "Mission",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Turn technical knowledge into applicable solutions: living soils, better-managed water, less dependence on external inputs and profitable long-term projects.",
        "Visión": "Vision",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Promote productive territories that capture carbon, increase biodiversity and generate economic value without exhausting their natural base.",

        "Experiencia técnica, mirada de campo y vocación regenerativa.": "Technical experience, field perspective and a regenerative vocation.",
        "Foto profesional del fundador de True Regenerative": "Professional photo of the founder of True Regenerative",
        "Fundador de True Regenerative": "Founder of True Regenerative",
        "Especialista en proyectos regenerativos": "Specialist in regenerative projects",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "I am the founder of True Regenerative, and I work by integrating regenerative agriculture, applied microbiology, water restoration, sustainable aquaculture and holistic planning.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "My experience focuses on bringing together science, fieldwork and strategy to turn complex problems into measurable plans: improving soils, optimizing water, reducing costs, capturing carbon and increasing productivity without compromising ecosystems.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "I believe in useful, rigorous regeneration adapted to each territory: listening to the system, measuring what matters, designing with judgment and implementing step by step.",

        "Soluciones para suelo, agua, producción y gestión.": "Solutions for soil, water, production and management.",
        "Agricultura Regenerativa": "Regenerative Agriculture",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Recovery of soil fertility, reduction of chemical inputs and design of sustainable systems.",
        "Regeneración de Agua": "Water Regeneration",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Efficient water management, restoration of aquatic ecosystems and improvement of water cycles.",
        "Acuicultura Regenerativa": "Regenerative Aquaculture",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Sustainable aquaculture systems, resource optimization and low-impact operation design.",
        "Microalgas": "Microalgae",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Production, applications, water treatment and agricultural nutrition based on functional biomass.",
        "Biofertilizantes": "Biofertilizers",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Biological fertilization and improvement of soil microbiology for more resilient crops.",
        "Biochar": "Biochar",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Carbon capture, improved soil structure and increased nutrient retention.",
        "Gestión Holística": "Holistic Management",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Strategic planning, decision-making and integrated design of regenerative projects.",
        "Beneficios": "Benefits",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Results that can be seen in the field and in operating costs.",
        "Mejora de la fertilidad": "Improved fertility",
        "Mayor retención de agua": "Greater water retention",
        "Reducción de costes": "Cost reduction",
        "Sostenibilidad ambiental": "Environmental sustainability",
        "Mayor productividad": "Higher productivity",
        "Captura de carbono": "Carbon capture",

        "Un proceso claro desde el diagnóstico hasta la optimización.": "A clear process from diagnosis to optimization.",
        "Diagnóstico inicial": "Initial diagnosis",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "We understand the productive, economic and environmental context of the project.",
        "Análisis de suelo y agua": "Soil and water analysis",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "We evaluate physical, chemical and biological indicators to make data-based decisions.",
        "Diseño de soluciones": "Solution design",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "We define practices, technologies, schedules and follow-up metrics.",
        "Implementación": "Implementation",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "We support field execution and adjust the plan to operational reality.",
        "Seguimiento y optimización": "Follow-up and optimization",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "We measure results, correct deviations and scale what works.",

        "Proyectos y casos de éxito": "Projects and success stories",
        "Antes, después y resultados medibles.": "Before, after and measurable results.",
        "Antes": "Before",
        "Después": "After",
        "Recuperación de suelo agrícola": "Agricultural soil recovery",
        "Ubicación:": "Location:",
        "Mediterráneo peninsular": "Mainland Mediterranean",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Increase in organic matter, better infiltration and progressive reduction of synthetic fertilization.",
        "Restauración de balsa y riego": "Pond and irrigation restoration",
        "Comunidad Valenciana": "Valencian Community",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Improved water quality, sludge reduction and more efficient use during critical seasons.",

        "Blog y recursos": "Blog and resources",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Content for SEO, training and decision-making.",
        "Agricultura regenerativa": "Regenerative agriculture",
        "Cómo iniciar una transición sin comprometer la producción": "How to start a transition without compromising production",
        "Usos del biochar para carbono, agua y estructura del suelo": "Uses of biochar for carbon, water and soil structure",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Applications in water treatment and agricultural nutrition",
        "Gestión del agua": "Water management",
        "Estrategias para aumentar resiliencia hídrica": "Strategies to increase water resilience",
        "Innovación agrícola": "Agricultural innovation",
        "Tecnologías útiles para medir regeneración real": "Useful technologies for measuring real regeneration",

        "Cuéntanos qué quieres regenerar.": "Tell us what you want to regenerate.",
        "Nombre *": "Name *",
        "Empresa": "Company",
        "Correo *": "Email *",
        "Teléfono": "Phone",
        "Servicio de interés": "Service of interest",
        "Seleccionar...": "Select...",
        "Mensaje *": "Message *",
        "Enviar solicitud": "Send request",
        "Mapa": "Map",
        "Mapa de ubicación de True Regenerative": "Location map for True Regenerative",
        "Datos de contacto": "Contact details",
        "Área de trabajo:": "Work area:",
        "España y proyectos internacionales": "Spain and international projects",
        "Revisa los campos obligatorios antes de enviar.": "Please review the required fields before sending."
    }
};

Object.assign(translations, {
    pt: {
        "Abrir menú": "Abrir menu",
        "Menú principal": "Menu principal",
        "Inicio": "Início",
        "Sobre Nosotros": "Sobre nós",
        "Quién soy": "Quem sou",
        "Servicios": "Serviços",
        "Metodología": "Metodologia",
        "Proyectos": "Projetos",
        "Blog": "Blog",
        "Contacto": "Contacto",
        "Consultoría regenerativa para territorios vivos": "Consultoria regenerativa para territórios vivos",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Regenerando solos, água e ecossistemas para um futuro sustentável.",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Soluções inovadoras em agricultura regenerativa, aquicultura regenerativa, biofertilizantes, biochar e gestão holística.",
        "Contactar": "Contactar",
        "Solicitar consultoría": "Solicitar consultoria",
        "Ver sección": "Ver secção",
        "Sobre True Regenerative": "Sobre a True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Desenhamos sistemas que recuperam fertilidade, água e biodiversidade.",
        "Quiénes somos": "Quem somos",
        "Misión": "Missão",
        "Visión": "Visão",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "Experiência técnica, visão de campo e vocação regenerativa.",
        "Fundador de True Regenerative": "Fundador da True Regenerative",
        "Especialista en proyectos regenerativos": "Especialista em projetos regenerativos",
        "Soluciones para suelo, agua, producción y gestión.": "Soluções para solo, água, produção e gestão.",
        "Agricultura Regenerativa": "Agricultura regenerativa",
        "Regeneración de Agua": "Regeneração da água",
        "Acuicultura Regenerativa": "Aquicultura regenerativa",
        "Microalgas": "Microalgas",
        "Biofertilizantes": "Biofertilizantes",
        "Biochar": "Biochar",
        "Gestión Holística": "Gestão holística",
        "Beneficios": "Benefícios",
        "Mejora de la fertilidad": "Melhoria da fertilidade",
        "Mayor retención de agua": "Maior retenção de água",
        "Reducción de costes": "Redução de custos",
        "Sostenibilidad ambiental": "Sustentabilidade ambiental",
        "Mayor productividad": "Maior produtividade",
        "Captura de carbono": "Captura de carbono",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "Um processo claro desde o diagnóstico até à otimização.",
        "Diagnóstico inicial": "Diagnóstico inicial",
        "Análisis de suelo y agua": "Análise do solo e da água",
        "Diseño de soluciones": "Desenho de soluções",
        "Implementación": "Implementação",
        "Seguimiento y optimización": "Acompanhamento e otimização",
        "Proyectos y casos de éxito": "Projetos e casos de sucesso",
        "Antes, después y resultados medibles.": "Antes, depois e resultados mensuráveis.",
        "Antes": "Antes",
        "Después": "Depois",
        "Recuperación de suelo agrícola": "Recuperação de solo agrícola",
        "Ubicación:": "Localização:",
        "Restauración de balsa y riego": "Restauração de reservatório e rega",
        "Blog y recursos": "Blog e recursos",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Conteúdo para posicionamento, formação e tomada de decisões.",
        "Agricultura regenerativa": "Agricultura regenerativa",
        "Gestión del agua": "Gestão da água",
        "Innovación agrícola": "Inovação agrícola",
        "Cuéntanos qué quieres regenerar.": "Conte-nos o que quer regenerar.",
        "Nombre *": "Nome *",
        "Empresa": "Empresa",
        "Correo *": "Email *",
        "Teléfono": "Telefone",
        "Servicio de interés": "Serviço de interesse",
        "Seleccionar...": "Selecionar...",
        "Mensaje *": "Mensagem *",
        "Enviar solicitud": "Enviar pedido",
        "Mapa": "Mapa",
        "Datos de contacto": "Dados de contacto",
        "Área de trabajo:": "Área de trabalho:",
        "España y proyectos internacionales": "Espanha e projetos internacionais"
    },
    fr: {
        "Abrir menú": "Ouvrir le menu",
        "Menú principal": "Menu principal",
        "Inicio": "Accueil",
        "Sobre Nosotros": "À propos",
        "Quién soy": "Qui suis-je",
        "Servicios": "Services",
        "Metodología": "Méthodologie",
        "Proyectos": "Projets",
        "Blog": "Blog",
        "Contacto": "Contact",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Régénérer les sols, l'eau et les écosystèmes pour un avenir durable.",
        "Contactar": "Contacter",
        "Solicitar consultoría": "Demander une consultation",
        "Ver sección": "Voir la section",
        "Sobre True Regenerative": "À propos de True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Nous concevons des systèmes qui restaurent la fertilité, l'eau et la biodiversité.",
        "Quiénes somos": "Qui nous sommes",
        "Misión": "Mission",
        "Visión": "Vision",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "Expérience technique, regard de terrain et vocation régénérative.",
        "Fundador de True Regenerative": "Fondateur de True Regenerative",
        "Especialista en proyectos regenerativos": "Spécialiste des projets régénératifs",
        "Soluciones para suelo, agua, producción y gestión.": "Solutions pour le sol, l'eau, la production et la gestion.",
        "Agricultura Regenerativa": "Agriculture régénérative",
        "Regeneración de Agua": "Régénération de l'eau",
        "Acuicultura Regenerativa": "Aquaculture régénérative",
        "Microalgas": "Microalgues",
        "Biofertilizantes": "Biofertilisants",
        "Biochar": "Biochar",
        "Gestión Holística": "Gestion holistique",
        "Beneficios": "Bénéfices",
        "Mejora de la fertilidad": "Amélioration de la fertilité",
        "Mayor retención de agua": "Meilleure rétention d'eau",
        "Reducción de costes": "Réduction des coûts",
        "Sostenibilidad ambiental": "Durabilité environnementale",
        "Mayor productividad": "Productivité accrue",
        "Captura de carbono": "Capture du carbone",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "Un processus clair du diagnostic à l'optimisation.",
        "Diagnóstico inicial": "Diagnostic initial",
        "Análisis de suelo y agua": "Analyse du sol et de l'eau",
        "Diseño de soluciones": "Conception de solutions",
        "Implementación": "Mise en œuvre",
        "Seguimiento y optimización": "Suivi et optimisation",
        "Proyectos y casos de éxito": "Projets et cas de réussite",
        "Antes, después y resultados medibles.": "Avant, après et résultats mesurables.",
        "Antes": "Avant",
        "Después": "Après",
        "Recuperación de suelo agrícola": "Récupération du sol agricole",
        "Ubicación:": "Emplacement :",
        "Restauración de balsa y riego": "Restauration de bassin et d'irrigation",
        "Blog y recursos": "Blog et ressources",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Contenu pour le référencement, la formation et la prise de décision.",
        "Agricultura regenerativa": "Agriculture régénérative",
        "Gestión del agua": "Gestion de l'eau",
        "Innovación agrícola": "Innovation agricole",
        "Cuéntanos qué quieres regenerar.": "Dites-nous ce que vous voulez régénérer.",
        "Nombre *": "Nom *",
        "Empresa": "Entreprise",
        "Correo *": "E-mail *",
        "Teléfono": "Téléphone",
        "Servicio de interés": "Service d'intérêt",
        "Seleccionar...": "Sélectionner...",
        "Mensaje *": "Message *",
        "Enviar solicitud": "Envoyer la demande",
        "Mapa": "Carte",
        "Datos de contacto": "Coordonnées",
        "Área de trabajo:": "Zone de travail :",
        "España y proyectos internacionales": "Espagne et projets internationaux"
    },
    de: {
        "Inicio": "Startseite",
        "Sobre Nosotros": "Über uns",
        "Quién soy": "Über mich",
        "Servicios": "Leistungen",
        "Metodología": "Methodik",
        "Proyectos": "Projekte",
        "Contacto": "Kontakt",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Regeneration von Böden, Wasser und Ökosystemen für eine nachhaltige Zukunft.",
        "Contactar": "Kontakt",
        "Solicitar consultoría": "Beratung anfragen",
        "Ver sección": "Abschnitt ansehen",
        "Sobre True Regenerative": "Über True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Wir entwickeln Systeme, die Fruchtbarkeit, Wasser und Biodiversität wiederherstellen.",
        "Quiénes somos": "Wer wir sind",
        "Misión": "Mission",
        "Visión": "Vision",
        "Fundador de True Regenerative": "Gründer von True Regenerative",
        "Especialista en proyectos regenerativos": "Spezialist für regenerative Projekte",
        "Soluciones para suelo, agua, producción y gestión.": "Lösungen für Boden, Wasser, Produktion und Management.",
        "Agricultura Regenerativa": "Regenerative Landwirtschaft",
        "Regeneración de Agua": "Wasserregeneration",
        "Acuicultura Regenerativa": "Regenerative Aquakultur",
        "Microalgas": "Mikroalgen",
        "Biofertilizantes": "Biofertilizer",
        "Gestión Holística": "Ganzheitliches Management",
        "Beneficios": "Vorteile",
        "Mejora de la fertilidad": "Verbesserte Fruchtbarkeit",
        "Mayor retención de agua": "Höhere Wasserspeicherung",
        "Reducción de costes": "Kostensenkung",
        "Sostenibilidad ambiental": "Ökologische Nachhaltigkeit",
        "Mayor productividad": "Höhere Produktivität",
        "Captura de carbono": "Kohlenstoffbindung",
        "Diagnóstico inicial": "Erstdiagnose",
        "Análisis de suelo y agua": "Boden- und Wasseranalyse",
        "Diseño de soluciones": "Lösungsdesign",
        "Implementación": "Umsetzung",
        "Seguimiento y optimización": "Nachverfolgung und Optimierung",
        "Proyectos y casos de éxito": "Projekte und Erfolgsgeschichten",
        "Antes": "Vorher",
        "Después": "Nachher",
        "Ubicación:": "Standort:",
        "Blog y recursos": "Blog und Ressourcen",
        "Agricultura regenerativa": "Regenerative Landwirtschaft",
        "Gestión del agua": "Wassermanagement",
        "Innovación agrícola": "Landwirtschaftliche Innovation",
        "Nombre *": "Name *",
        "Empresa": "Unternehmen",
        "Correo *": "E-Mail *",
        "Teléfono": "Telefon",
        "Servicio de interés": "Gewünschte Leistung",
        "Seleccionar...": "Auswählen...",
        "Mensaje *": "Nachricht *",
        "Enviar solicitud": "Anfrage senden",
        "Datos de contacto": "Kontaktdaten"
    },
    it: {
        "Inicio": "Home",
        "Sobre Nosotros": "Chi siamo",
        "Quién soy": "Chi sono",
        "Servicios": "Servizi",
        "Metodología": "Metodologia",
        "Proyectos": "Progetti",
        "Contacto": "Contatto",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Rigenerare suoli, acqua ed ecosistemi per un futuro sostenibile.",
        "Contactar": "Contattare",
        "Solicitar consultoría": "Richiedi consulenza",
        "Ver sección": "Vedi sezione",
        "Sobre True Regenerative": "Su True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Progettiamo sistemi che recuperano fertilità, acqua e biodiversità.",
        "Quiénes somos": "Chi siamo",
        "Misión": "Missione",
        "Visión": "Visione",
        "Fundador de True Regenerative": "Fondatore di True Regenerative",
        "Especialista en proyectos regenerativos": "Specialista in progetti rigenerativi",
        "Soluciones para suelo, agua, producción y gestión.": "Soluzioni per suolo, acqua, produzione e gestione.",
        "Agricultura Regenerativa": "Agricoltura rigenerativa",
        "Regeneración de Agua": "Rigenerazione dell'acqua",
        "Acuicultura Regenerativa": "Acquacoltura rigenerativa",
        "Microalgas": "Microalghe",
        "Biofertilizantes": "Biofertilizzanti",
        "Gestión Holística": "Gestione olistica",
        "Beneficios": "Benefici",
        "Mejora de la fertilidad": "Miglioramento della fertilità",
        "Mayor retención de agua": "Maggiore ritenzione idrica",
        "Reducción de costes": "Riduzione dei costi",
        "Sostenibilidad ambiental": "Sostenibilità ambientale",
        "Mayor productividad": "Maggiore produttività",
        "Captura de carbono": "Cattura del carbonio",
        "Diagnóstico inicial": "Diagnosi iniziale",
        "Análisis de suelo y agua": "Analisi del suolo e dell'acqua",
        "Diseño de soluciones": "Progettazione di soluzioni",
        "Implementación": "Implementazione",
        "Seguimiento y optimización": "Monitoraggio e ottimizzazione",
        "Proyectos y casos de éxito": "Progetti e casi di successo",
        "Antes": "Prima",
        "Después": "Dopo",
        "Ubicación:": "Località:",
        "Blog y recursos": "Blog e risorse",
        "Agricultura regenerativa": "Agricoltura rigenerativa",
        "Gestión del agua": "Gestione dell'acqua",
        "Innovación agrícola": "Innovazione agricola",
        "Nombre *": "Nome *",
        "Empresa": "Azienda",
        "Correo *": "Email *",
        "Teléfono": "Telefono",
        "Servicio de interés": "Servizio di interesse",
        "Seleccionar...": "Seleziona...",
        "Mensaje *": "Messaggio *",
        "Enviar solicitud": "Invia richiesta",
        "Datos de contacto": "Dati di contatto"
    },
    ca: {
        "Inicio": "Inici",
        "Sobre Nosotros": "Sobre nosaltres",
        "Quién soy": "Qui soc",
        "Servicios": "Serveis",
        "Metodología": "Metodologia",
        "Proyectos": "Projectes",
        "Contacto": "Contacte",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Regenerant sòls, aigua i ecosistemes per a un futur sostenible.",
        "Contactar": "Contactar",
        "Solicitar consultoría": "Sol·licitar consultoria",
        "Ver sección": "Veure secció",
        "Sobre True Regenerative": "Sobre True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Dissenyem sistemes que recuperen fertilitat, aigua i biodiversitat.",
        "Quiénes somos": "Qui som",
        "Misión": "Missió",
        "Visión": "Visió",
        "Fundador de True Regenerative": "Fundador de True Regenerative",
        "Especialista en proyectos regenerativos": "Especialista en projectes regeneratius",
        "Agricultura Regenerativa": "Agricultura regenerativa",
        "Regeneración de Agua": "Regeneració d'aigua",
        "Acuicultura Regenerativa": "Aqüicultura regenerativa",
        "Gestión Holística": "Gestió holística",
        "Beneficios": "Beneficis",
        "Mejora de la fertilidad": "Millora de la fertilitat",
        "Mayor retención de agua": "Més retenció d'aigua",
        "Reducción de costes": "Reducció de costos",
        "Sostenibilidad ambiental": "Sostenibilitat ambiental",
        "Mayor productividad": "Més productivitat",
        "Diagnóstico inicial": "Diagnòstic inicial",
        "Análisis de suelo y agua": "Anàlisi de sòl i aigua",
        "Diseño de soluciones": "Disseny de solucions",
        "Implementación": "Implementació",
        "Seguimiento y optimización": "Seguiment i optimització",
        "Proyectos y casos de éxito": "Projectes i casos d'èxit",
        "Antes": "Abans",
        "Después": "Després",
        "Ubicación:": "Ubicació:",
        "Blog y recursos": "Blog i recursos",
        "Gestión del agua": "Gestió de l'aigua",
        "Innovación agrícola": "Innovació agrícola",
        "Nombre *": "Nom *",
        "Empresa": "Empresa",
        "Correo *": "Correu *",
        "Teléfono": "Telèfon",
        "Servicio de interés": "Servei d'interès",
        "Seleccionar...": "Seleccionar...",
        "Mensaje *": "Missatge *",
        "Enviar solicitud": "Enviar sol·licitud",
        "Datos de contacto": "Dades de contacte"
    },
    eu: {
        "Inicio": "Hasiera",
        "Sobre Nosotros": "Guri buruz",
        "Quién soy": "Nor naiz",
        "Servicios": "Zerbitzuak",
        "Metodología": "Metodologia",
        "Proyectos": "Proiektuak",
        "Contacto": "Kontaktua",
        "Contactar": "Jarri harremanetan",
        "Solicitar consultoría": "Eskatu aholkularitza",
        "Ver sección": "Ikusi atala",
        "Misión": "Misioa",
        "Visión": "Ikuspegia",
        "Agricultura Regenerativa": "Nekazaritza birsortzailea",
        "Regeneración de Agua": "Uraren birsorkuntza",
        "Acuicultura Regenerativa": "Akuikultura birsortzailea",
        "Microalgas": "Mikroalgak",
        "Biofertilizantes": "Bioongarriak",
        "Gestión Holística": "Kudeaketa holistikoa",
        "Beneficios": "Onurak",
        "Diagnóstico inicial": "Hasierako diagnostikoa",
        "Análisis de suelo y agua": "Lurzoruaren eta uraren analisia",
        "Diseño de soluciones": "Soluzioen diseinua",
        "Implementación": "Inplementazioa",
        "Seguimiento y optimización": "Jarraipena eta optimizazioa",
        "Proyectos y casos de éxito": "Proiektuak eta arrakasta kasuak",
        "Antes": "Aurretik",
        "Después": "Ondoren",
        "Ubicación:": "Kokapena:",
        "Blog y recursos": "Bloga eta baliabideak",
        "Nombre *": "Izena *",
        "Empresa": "Enpresa",
        "Correo *": "Posta elektronikoa *",
        "Teléfono": "Telefonoa",
        "Mensaje *": "Mezua *",
        "Enviar solicitud": "Bidali eskaera",
        "Datos de contacto": "Harremanetarako datuak"
    },
    ro: {
        "Inicio": "Acasă",
        "Sobre Nosotros": "Despre noi",
        "Quién soy": "Cine sunt",
        "Servicios": "Servicii",
        "Metodología": "Metodologie",
        "Proyectos": "Proiecte",
        "Contacto": "Contact",
        "Contactar": "Contactează",
        "Solicitar consultoría": "Solicită consultanță",
        "Ver sección": "Vezi secțiunea",
        "Misión": "Misiune",
        "Visión": "Viziune",
        "Agricultura Regenerativa": "Agricultură regenerativă",
        "Regeneración de Agua": "Regenerarea apei",
        "Acuicultura Regenerativa": "Acvacultură regenerativă",
        "Microalgas": "Microalge",
        "Biofertilizantes": "Biofertilizatori",
        "Gestión Holística": "Management holistic",
        "Beneficios": "Beneficii",
        "Mejora de la fertilidad": "Îmbunătățirea fertilității",
        "Mayor retención de agua": "Retenție mai mare a apei",
        "Reducción de costes": "Reducerea costurilor",
        "Sostenibilidad ambiental": "Sustenabilitate ambientală",
        "Mayor productividad": "Productivitate mai mare",
        "Captura de carbono": "Captarea carbonului",
        "Diagnóstico inicial": "Diagnostic inițial",
        "Análisis de suelo y agua": "Analiza solului și apei",
        "Diseño de soluciones": "Proiectarea soluțiilor",
        "Implementación": "Implementare",
        "Seguimiento y optimización": "Monitorizare și optimizare",
        "Proyectos y casos de éxito": "Proiecte și studii de succes",
        "Antes": "Înainte",
        "Después": "După",
        "Ubicación:": "Locație:",
        "Blog y recursos": "Blog și resurse",
        "Nombre *": "Nume *",
        "Empresa": "Companie",
        "Correo *": "E-mail *",
        "Teléfono": "Telefon",
        "Servicio de interés": "Serviciu de interes",
        "Seleccionar...": "Selectează...",
        "Mensaje *": "Mesaj *",
        "Enviar solicitud": "Trimite cererea",
        "Datos de contacto": "Date de contact"
    },
    ar: {
        "Inicio": "الرئيسية",
        "Sobre Nosotros": "من نحن",
        "Quién soy": "من أنا",
        "Servicios": "الخدمات",
        "Metodología": "المنهجية",
        "Proyectos": "المشاريع",
        "Blog": "المدونة",
        "Contacto": "اتصال",
        "Contactar": "تواصل",
        "Solicitar consultoría": "طلب استشارة",
        "Ver sección": "عرض القسم",
        "Misión": "المهمة",
        "Visión": "الرؤية",
        "Agricultura Regenerativa": "الزراعة التجديدية",
        "Regeneración de Agua": "تجديد المياه",
        "Acuicultura Regenerativa": "الاستزراع المائي التجديدي",
        "Microalgas": "الطحالب الدقيقة",
        "Biofertilizantes": "الأسمدة الحيوية",
        "Gestión Holística": "الإدارة الشمولية",
        "Beneficios": "الفوائد",
        "Antes": "قبل",
        "Después": "بعد",
        "Ubicación:": "الموقع:",
        "Nombre *": "الاسم *",
        "Empresa": "الشركة",
        "Correo *": "البريد الإلكتروني *",
        "Teléfono": "الهاتف",
        "Servicio de interés": "الخدمة المطلوبة",
        "Seleccionar...": "اختر...",
        "Mensaje *": "الرسالة *",
        "Enviar solicitud": "إرسال الطلب",
        "Datos de contacto": "بيانات الاتصال"
    },
    zh: {
        "Inicio": "首页",
        "Sobre Nosotros": "关于我们",
        "Quién soy": "关于我",
        "Servicios": "服务",
        "Metodología": "方法",
        "Proyectos": "项目",
        "Blog": "博客",
        "Contacto": "联系",
        "Contactar": "联系",
        "Solicitar consultoría": "申请咨询",
        "Ver sección": "查看部分",
        "Misión": "使命",
        "Visión": "愿景",
        "Agricultura Regenerativa": "再生农业",
        "Regeneración de Agua": "水体再生",
        "Acuicultura Regenerativa": "再生水产养殖",
        "Microalgas": "微藻",
        "Biofertilizantes": "生物肥料",
        "Gestión Holística": "整体管理",
        "Beneficios": "优势",
        "Mejora de la fertilidad": "提高肥力",
        "Mayor retención de agua": "更高保水能力",
        "Reducción de costes": "降低成本",
        "Sostenibilidad ambiental": "环境可持续性",
        "Mayor productividad": "提高生产力",
        "Captura de carbono": "碳捕获",
        "Diagnóstico inicial": "初步诊断",
        "Análisis de suelo y agua": "土壤和水分析",
        "Diseño de soluciones": "解决方案设计",
        "Implementación": "实施",
        "Seguimiento y optimización": "跟踪与优化",
        "Proyectos y casos de éxito": "项目和成功案例",
        "Antes": "之前",
        "Después": "之后",
        "Ubicación:": "地点：",
        "Blog y recursos": "博客和资源",
        "Nombre *": "姓名 *",
        "Empresa": "公司",
        "Correo *": "邮箱 *",
        "Teléfono": "电话",
        "Servicio de interés": "感兴趣的服务",
        "Seleccionar...": "选择...",
        "Mensaje *": "留言 *",
        "Enviar solicitud": "发送请求",
        "Datos de contacto": "联系方式"
    }
});

const translationComplements = {
    pt: {
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "A True Regenerative é uma consultoria especializada em projetos regenerativos para agricultura, água, aquicultura, biofertilizantes, biochar, microalgas e gestão holística.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Acompanhamos explorações agrícolas, empresas agroalimentares, projetos aquícolas e entidades públicas na transição para modelos produtivos capazes de regenerar os recursos de que dependem.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Trabalhamos a partir de uma visão prática: diagnóstico, desenho, implementação e acompanhamento para que cada projeto possa melhorar a sua rentabilidade, resiliência e impacto ambiental.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Transformar conhecimento técnico em soluções aplicáveis: solos vivos, água melhor gerida, menor dependência de insumos externos e projetos rentáveis a longo prazo.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Impulsionar territórios produtivos que capturam carbono, aumentam a biodiversidade e geram valor económico sem esgotar a sua base natural.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Sou o fundador da True Regenerative e trabalho integrando agricultura regenerativa, microbiologia aplicada, restauração hídrica, aquicultura sustentável e planeamento holístico.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "A minha experiência centra-se em unir ciência, campo e estratégia para transformar problemas complexos em planos mensuráveis: melhorar solos, otimizar água, reduzir custos, capturar carbono e aumentar a produtividade sem comprometer os ecossistemas.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Acredito numa regeneração útil, rigorosa e adaptada a cada território: escutar o sistema, medir o que importa, desenhar com critério e implementar passo a passo.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Recuperação da fertilidade do solo, redução de insumos químicos e desenho de sistemas sustentáveis.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Gestão eficiente da água, restauração de ecossistemas aquáticos e melhoria dos ciclos hídricos.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Sistemas aquícolas sustentáveis, otimização de recursos e desenho de operações de baixo impacto.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Produção, aplicações, tratamento de águas e nutrição agrícola baseada em biomassa funcional.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Fertilização biológica e melhoria da microbiologia do solo para culturas mais resilientes.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Captura de carbono, melhoria da estrutura do solo e aumento da retenção de nutrientes.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Planeamento estratégico, tomada de decisões e desenho integral de projetos regenerativos.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Compreendemos o contexto produtivo, económico e ambiental do projeto.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Avaliamos indicadores físicos, químicos e biológicos para tomar decisões com dados.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Definimos práticas, tecnologias, calendário e métricas de acompanhamento.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Acompanhamos a execução no campo e ajustamos o plano à realidade operacional.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Medimos resultados, corrigimos desvios e escalamos o que funciona.",
        "Mediterráneo peninsular": "Mediterrâneo peninsular",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Aumento da matéria orgânica, melhor infiltração e redução progressiva da fertilização sintética.",
        "Comunidad Valenciana": "Comunidade Valenciana",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Melhoria da qualidade da água, redução de lodos e uso mais eficiente em campanhas críticas.",
        "Cómo iniciar una transición sin comprometer la producción": "Como iniciar uma transição sem comprometer a produção",
        "Usos del biochar para carbono, agua y estructura del suelo": "Usos do biochar para carbono, água e estrutura do solo",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Aplicações no tratamento de águas e nutrição agrícola",
        "Estrategias para aumentar resiliencia hídrica": "Estratégias para aumentar a resiliência hídrica",
        "Tecnologías útiles para medir regeneración real": "Tecnologias úteis para medir regeneração real",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Todos os direitos reservados."
    },
    ca: {
        "Consultoría regenerativa para territorios vivos": "Consultoria regenerativa per a territoris vius",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Solucions innovadores en agricultura regenerativa, aqüicultura regenerativa, biofertilitzants, biochar i gestió holística.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Consultoria per a projectes que regeneren sòl, aigua i ecosistemes.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Coneix la missió, visió i enfocament de True Regenerative.",
        "Experiencia del fundador y forma de trabajar.": "Experiència del fundador i manera de treballar.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Agricultura, aigua, aqüicultura, microalgues, biofertilitzants, biochar i gestió holística.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnòstic, anàlisi, disseny, implementació i seguiment.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Casos d'èxit, resultats i ubicacions de referència.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Recursos sobre agricultura regenerativa, biochar, microalgues, aigua i innovació agrícola.",
        "Formulario para solicitar información o consultoría.": "Formulari per sol·licitar informació o consultoria.",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative és una consultoria especialitzada en projectes regeneratius per a agricultura, aigua, aqüicultura, biofertilitzants, biochar, microalgues i gestió holística.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Acompanyem finques, empreses agroalimentàries, projectes aqüícoles i entitats públiques en la transició cap a models productius capaços de regenerar els recursos dels quals depenen.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Treballem des d'una visió pràctica: diagnòstic, disseny, implementació i seguiment perquè cada projecte pugui millorar la rendibilitat, la resiliència i l'impacte ambiental.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Convertir el coneixement tècnic en solucions aplicables: sòls vius, aigua millor gestionada, menor dependència d'insums externs i projectes rendibles a llarg termini.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Impulsar territoris productius que capturen carboni, augmenten la biodiversitat i generen valor econòmic sense esgotar la seva base natural.",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "Experiència tècnica, mirada de camp i vocació regenerativa.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Soc el fundador de True Regenerative i treballo integrant agricultura regenerativa, microbiologia aplicada, restauració hídrica, aqüicultura sostenible i planificació holística.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "La meva experiència se centra a unir ciència, camp i estratègia per transformar problemes complexos en plans mesurables: millorar sòls, optimitzar aigua, reduir costos, capturar carboni i augmentar la productivitat sense comprometre els ecosistemes.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Crec en una regeneració útil, rigorosa i adaptada a cada territori: escoltar el sistema, mesurar allò important, dissenyar amb criteri i implementar pas a pas.",
        "Soluciones para suelo, agua, producción y gestión.": "Solucions per a sòl, aigua, producció i gestió.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Recuperació de la fertilitat del sòl, reducció d'insums químics i disseny de sistemes sostenibles.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Gestió eficient de l'aigua, restauració d'ecosistemes aquàtics i millora dels cicles hídrics.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Sistemes aqüícoles sostenibles, optimització de recursos i disseny d'operacions de baix impacte.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Producció, aplicacions, tractament d'aigües i nutrició agrícola basada en biomassa funcional.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Fertilització biològica i millora de la microbiologia del sòl per a cultius més resilients.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Captura de carboni, millora de l'estructura del sòl i augment de la retenció de nutrients.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Planificació estratègica, presa de decisions i disseny integral de projectes regeneratius.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Resultats que es noten al camp i al compte d'explotació.",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "Un procés clar des del diagnòstic fins a l'optimització.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Comprenem el context productiu, econòmic i ambiental del projecte.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Avaluem indicadors físics, químics i biològics per prendre decisions amb dades.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Definim pràctiques, tecnologies, calendari i mètriques de seguiment.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Acompanyem l'execució al camp i ajustem el pla a la realitat operativa.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Mesurem resultats, corregim desviacions i escalem allò que funciona.",
        "Antes, después y resultados medibles.": "Abans, després i resultats mesurables.",
        "Recuperación de suelo agrícola": "Recuperació de sòl agrícola",
        "Mediterráneo peninsular": "Mediterrani peninsular",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Increment de matèria orgànica, millor infiltració i reducció progressiva de fertilització sintètica.",
        "Restauración de balsa y riego": "Restauració de bassa i reg",
        "Comunidad Valenciana": "Comunitat Valenciana",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Millora de la qualitat de l'aigua, reducció de fangs i ús més eficient en campanyes crítiques.",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Contingut per al posicionament, la formació i la presa de decisions.",
        "Agricultura regenerativa": "Agricultura regenerativa",
        "Cómo iniciar una transición sin comprometer la producción": "Com iniciar una transició sense comprometre la producció",
        "Usos del biochar para carbono, agua y estructura del suelo": "Usos del biochar per a carboni, aigua i estructura del sòl",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Aplicacions en tractament d'aigües i nutrició agrícola",
        "Estrategias para aumentar resiliencia hídrica": "Estratègies per augmentar la resiliència hídrica",
        "Tecnologías útiles para medir regeneración real": "Tecnologies útils per mesurar regeneració real",
        "Cuéntanos qué quieres regenerar.": "Explica'ns què vols regenerar.",
        "Mapa": "Mapa",
        "Área de trabajo:": "Àrea de treball:",
        "España y proyectos internacionales": "Espanya i projectes internacionals",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tots els drets reservats."
    }
};

Object.entries(translationComplements).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const finalTranslationComplements = {
    fr: {
        "Consultoría regenerativa para territorios vivos": "Conseil régénératif pour territoires vivants",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Solutions innovantes en agriculture régénérative, aquaculture régénérative, biofertilisants, biochar et gestion holistique.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Conseil pour des projets qui régénèrent les sols, l'eau et les écosystèmes.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Découvrez la mission, la vision et l'approche de True Regenerative.",
        "Experiencia del fundador y forma de trabajar.": "Expérience du fondateur et manière de travailler.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Agriculture, eau, aquaculture, microalgues, biofertilisants, biochar et gestion holistique.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnostic, analyse, conception, mise en œuvre et suivi.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Cas de réussite, résultats et sites de référence.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Ressources sur l'agriculture régénérative, le biochar, les microalgues, l'eau et l'innovation agricole.",
        "Formulario para solicitar información o consultoría.": "Formulaire pour demander des informations ou une consultation.",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative est un cabinet de conseil spécialisé dans les projets régénératifs pour l'agriculture, l'eau, l'aquaculture, les biofertilisants, le biochar, les microalgues et la gestion holistique.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Nous accompagnons des exploitations, entreprises agroalimentaires, projets aquacoles et organismes publics dans la transition vers des modèles productifs capables de régénérer les ressources dont ils dépendent.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Nous travaillons avec une vision pratique : diagnostic, conception, mise en œuvre et suivi afin que chaque projet puisse améliorer sa rentabilité, sa résilience et son impact environnemental.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Transformer les connaissances techniques en solutions applicables : sols vivants, eau mieux gérée, moindre dépendance aux intrants externes et projets rentables à long terme.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Promouvoir des territoires productifs qui capturent le carbone, augmentent la biodiversité et génèrent de la valeur économique sans épuiser leur base naturelle.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Je suis le fondateur de True Regenerative et je travaille en intégrant agriculture régénérative, microbiologie appliquée, restauration hydrique, aquaculture durable et planification holistique.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "Mon expérience consiste à relier science, terrain et stratégie pour transformer des problèmes complexes en plans mesurables : améliorer les sols, optimiser l'eau, réduire les coûts, capturer le carbone et augmenter la productivité sans compromettre les écosystèmes.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Je crois en une régénération utile, rigoureuse et adaptée à chaque territoire : écouter le système, mesurer l'essentiel, concevoir avec discernement et mettre en œuvre étape par étape.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Récupération de la fertilité des sols, réduction des intrants chimiques et conception de systèmes durables.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Gestion efficace de l'eau, restauration des écosystèmes aquatiques et amélioration des cycles hydriques.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Systèmes aquacoles durables, optimisation des ressources et conception d'opérations à faible impact.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Production, applications, traitement des eaux et nutrition agricole basée sur la biomasse fonctionnelle.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Fertilisation biologique et amélioration de la microbiologie du sol pour des cultures plus résilientes.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Capture du carbone, amélioration de la structure du sol et augmentation de la rétention des nutriments.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Planification stratégique, prise de décision et conception intégrale de projets régénératifs.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Des résultats visibles sur le terrain et dans les coûts d'exploitation.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Nous comprenons le contexte productif, économique et environnemental du projet.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Nous évaluons des indicateurs physiques, chimiques et biologiques pour prendre des décisions fondées sur les données.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Nous définissons les pratiques, technologies, calendrier et indicateurs de suivi.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Nous accompagnons l'exécution sur le terrain et adaptons le plan à la réalité opérationnelle.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Nous mesurons les résultats, corrigeons les écarts et déployons ce qui fonctionne.",
        "Mediterráneo peninsular": "Méditerranée péninsulaire",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Augmentation de la matière organique, meilleure infiltration et réduction progressive de la fertilisation synthétique.",
        "Comunidad Valenciana": "Communauté valencienne",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Amélioration de la qualité de l'eau, réduction des boues et utilisation plus efficace lors des campagnes critiques.",
        "Cómo iniciar una transición sin comprometer la producción": "Comment lancer une transition sans compromettre la production",
        "Usos del biochar para carbono, agua y estructura del suelo": "Usages du biochar pour le carbone, l'eau et la structure du sol",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Applications au traitement des eaux et à la nutrition agricole",
        "Estrategias para aumentar resiliencia hídrica": "Stratégies pour renforcer la résilience hydrique",
        "Tecnologías útiles para medir regeneración real": "Technologies utiles pour mesurer une régénération réelle",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tous droits réservés."
    },
    de: {
        "Blog": "Blog",
        "Consultoría regenerativa para territorios vivos": "Regenerative Beratung für lebendige Regionen",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Innovative Lösungen für regenerative Landwirtschaft, regenerative Aquakultur, Biofertilizer, Biochar und ganzheitliches Management.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Beratung für Projekte, die Boden, Wasser und Ökosysteme regenerieren.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Lernen Sie Mission, Vision und Ansatz von True Regenerative kennen.",
        "Experiencia del fundador y forma de trabajar.": "Erfahrung des Gründers und Arbeitsweise.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Landwirtschaft, Wasser, Aquakultur, Mikroalgen, Biofertilizer, Biochar und ganzheitliches Management.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnose, Analyse, Planung, Umsetzung und Nachverfolgung.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Erfolgsgeschichten, Ergebnisse und Referenzstandorte.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Ressourcen zu regenerativer Landwirtschaft, Biochar, Mikroalgen, Wasser und landwirtschaftlicher Innovation.",
        "Formulario para solicitar información o consultoría.": "Formular zur Anfrage von Informationen oder Beratung.",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative ist eine Beratung, die auf regenerative Projekte für Landwirtschaft, Wasser, Aquakultur, Biofertilizer, Biochar, Mikroalgen und ganzheitliches Management spezialisiert ist.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Wir begleiten Betriebe, Agrar- und Lebensmittelunternehmen, Aquakulturprojekte und öffentliche Einrichtungen beim Übergang zu Produktionsmodellen, die ihre Ressourcen regenerieren können.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Wir arbeiten praxisorientiert: Diagnose, Planung, Umsetzung und Nachverfolgung, damit jedes Projekt Rentabilität, Resilienz und Umweltwirkung verbessern kann.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Ich bin der Gründer von True Regenerative und verbinde regenerative Landwirtschaft, angewandte Mikrobiologie, Wasserrestauration, nachhaltige Aquakultur und ganzheitliche Planung.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "Meine Erfahrung liegt darin, Wissenschaft, Praxis und Strategie zu verbinden, um komplexe Probleme in messbare Pläne zu verwandeln: Böden verbessern, Wasser optimieren, Kosten senken, Kohlenstoff binden und Produktivität steigern, ohne Ökosysteme zu gefährden.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Ich glaube an nützliche, fundierte und an jedes Gebiet angepasste Regeneration: dem System zuhören, das Wichtige messen, durchdacht planen und Schritt für Schritt umsetzen.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Wiederherstellung der Bodenfruchtbarkeit, Reduzierung chemischer Inputs und Entwicklung nachhaltiger Systeme.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Effizientes Wassermanagement, Wiederherstellung aquatischer Ökosysteme und Verbesserung der Wasserkreisläufe.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Nachhaltige Aquakultursysteme, Ressourcenoptimierung und Gestaltung wirkungsarmer Abläufe.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Produktion, Anwendungen, Wasseraufbereitung und landwirtschaftliche Ernährung auf Basis funktioneller Biomasse.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Biologische Düngung und Verbesserung der Bodenmikrobiologie für widerstandsfähigere Kulturen.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Kohlenstoffbindung, Verbesserung der Bodenstruktur und erhöhte Nährstoffspeicherung.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Strategische Planung, Entscheidungsfindung und ganzheitliche Gestaltung regenerativer Projekte.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Wir verstehen den produktiven, wirtschaftlichen und ökologischen Kontext des Projekts.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Wir bewerten physikalische, chemische und biologische Indikatoren, um datenbasierte Entscheidungen zu treffen.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Wir definieren Praktiken, Technologien, Zeitplan und Kennzahlen zur Nachverfolgung.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Wir begleiten die Umsetzung im Feld und passen den Plan an die operative Realität an.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Wir messen Ergebnisse, korrigieren Abweichungen und skalieren, was funktioniert.",
        "Antes, después y resultados medibles.": "Vorher, nachher und messbare Ergebnisse.",
        "Recuperación de suelo agrícola": "Wiederherstellung landwirtschaftlicher Böden",
        "Mediterráneo peninsular": "Festländischer Mittelmeerraum",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Erhöhung der organischen Substanz, bessere Infiltration und schrittweise Reduzierung synthetischer Düngung.",
        "Restauración de balsa y riego": "Wiederherstellung von Speicherbecken und Bewässerung",
        "Comunidad Valenciana": "Valencianische Gemeinschaft",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Verbesserung der Wasserqualität, Reduzierung von Schlamm und effizientere Nutzung in kritischen Kampagnen.",
        "Cómo iniciar una transición sin comprometer la producción": "Wie man eine Umstellung beginnt, ohne die Produktion zu gefährden",
        "Usos del biochar para carbono, agua y estructura del suelo": "Einsatz von Biochar für Kohlenstoff, Wasser und Bodenstruktur",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Anwendungen in Wasseraufbereitung und landwirtschaftlicher Ernährung",
        "Estrategias para aumentar resiliencia hídrica": "Strategien zur Erhöhung der Wasserresilienz",
        "Tecnologías útiles para medir regeneración real": "Nützliche Technologien zur Messung echter Regeneration",
        "Cuéntanos qué quieres regenerar.": "Sagen Sie uns, was Sie regenerieren möchten.",
        "Mapa": "Karte",
        "Área de trabajo:": "Arbeitsgebiet:",
        "España y proyectos internacionales": "Spanien und internationale Projekte",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Alle Rechte vorbehalten."
    }
};

Object.entries(finalTranslationComplements).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const finalTranslationComplements2 = {
    it: {
        "Blog": "Blog",
        "Consultoría regenerativa para territorios vivos": "Consulenza rigenerativa per territori vivi",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Soluzioni innovative in agricoltura rigenerativa, acquacoltura rigenerativa, biofertilizzanti, biochar e gestione olistica.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Consulenza per progetti che rigenerano suolo, acqua ed ecosistemi.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Scopri missione, visione e approccio di True Regenerative.",
        "Experiencia del fundador y forma de trabajar.": "Esperienza del fondatore e metodo di lavoro.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Agricoltura, acqua, acquacoltura, microalghe, biofertilizzanti, biochar e gestione olistica.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnosi, analisi, progettazione, implementazione e monitoraggio.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Casi di successo, risultati e località di riferimento.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Risorse su agricoltura rigenerativa, biochar, microalghe, acqua e innovazione agricola.",
        "Formulario para solicitar información o consultoría.": "Modulo per richiedere informazioni o consulenza.",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative è una consulenza specializzata in progetti rigenerativi per agricoltura, acqua, acquacoltura, biofertilizzanti, biochar, microalghe e gestione olistica.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Accompagniamo aziende agricole, imprese agroalimentari, progetti acquicoli ed enti pubblici nella transizione verso modelli produttivi capaci di rigenerare le risorse da cui dipendono.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Lavoriamo con una visione pratica: diagnosi, progettazione, implementazione e monitoraggio affinché ogni progetto possa migliorare redditività, resilienza e impatto ambientale.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Trasformare la conoscenza tecnica in soluzioni applicabili: suoli vivi, acqua meglio gestita, minore dipendenza da input esterni e progetti redditizi nel lungo periodo.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Promuovere territori produttivi che catturano carbonio, aumentano la biodiversità e generano valore economico senza esaurire la base naturale.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Sono il fondatore di True Regenerative e lavoro integrando agricoltura rigenerativa, microbiologia applicata, restauro idrico, acquacoltura sostenibile e pianificazione olistica.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "La mia esperienza consiste nell'unire scienza, campo e strategia per trasformare problemi complessi in piani misurabili: migliorare i suoli, ottimizzare l'acqua, ridurre i costi, catturare carbonio e aumentare la produttività senza compromettere gli ecosistemi.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Credo in una rigenerazione utile, rigorosa e adattata a ogni territorio: ascoltare il sistema, misurare ciò che conta, progettare con criterio e implementare passo dopo passo.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Recupero della fertilità del suolo, riduzione degli input chimici e progettazione di sistemi sostenibili.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Gestione efficiente dell'acqua, restauro degli ecosistemi acquatici e miglioramento dei cicli idrici.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Sistemi acquicoli sostenibili, ottimizzazione delle risorse e progettazione di operazioni a basso impatto.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Produzione, applicazioni, trattamento delle acque e nutrizione agricola basata su biomassa funzionale.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Fertilizzazione biologica e miglioramento della microbiologia del suolo per colture più resilienti.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Cattura del carbonio, miglioramento della struttura del suolo e aumento della ritenzione dei nutrienti.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Pianificazione strategica, processo decisionale e progettazione integrale di progetti rigenerativi.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Risultati visibili in campo e nei costi di gestione.",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "Un processo chiaro dalla diagnosi all'ottimizzazione.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Comprendiamo il contesto produttivo, economico e ambientale del progetto.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Valutiamo indicatori fisici, chimici e biologici per prendere decisioni basate sui dati.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Definiamo pratiche, tecnologie, calendario e metriche di monitoraggio.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Accompagniamo l'esecuzione in campo e adattiamo il piano alla realtà operativa.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Misuriamo i risultati, correggiamo le deviazioni e scaliamo ciò che funziona.",
        "Antes, después y resultados medibles.": "Prima, dopo e risultati misurabili.",
        "Recuperación de suelo agrícola": "Recupero del suolo agricolo",
        "Mediterráneo peninsular": "Mediterraneo peninsulare",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Aumento della sostanza organica, migliore infiltrazione e riduzione progressiva della fertilizzazione sintetica.",
        "Restauración de balsa y riego": "Restauro di bacino e irrigazione",
        "Comunidad Valenciana": "Comunità Valenciana",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Miglioramento della qualità dell'acqua, riduzione dei fanghi e uso più efficiente nelle campagne critiche.",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Contenuti per posizionamento, formazione e decisioni.",
        "Cómo iniciar una transición sin comprometer la producción": "Come iniziare una transizione senza compromettere la produzione",
        "Usos del biochar para carbono, agua y estructura del suelo": "Usi del biochar per carbonio, acqua e struttura del suolo",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Applicazioni nel trattamento delle acque e nella nutrizione agricola",
        "Estrategias para aumentar resiliencia hídrica": "Strategie per aumentare la resilienza idrica",
        "Tecnologías útiles para medir regeneración real": "Tecnologie utili per misurare la rigenerazione reale",
        "Cuéntanos qué quieres regenerar.": "Raccontaci cosa vuoi rigenerare.",
        "Mapa": "Mappa",
        "Área de trabajo:": "Area di lavoro:",
        "España y proyectos internacionales": "Spagna e progetti internazionali",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tutti i diritti riservati."
    },
    ro: {
        "Blog": "Blog",
        "Consultoría regenerativa para territorios vivos": "Consultanță regenerativă pentru teritorii vii",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Regenerăm soluri, apă și ecosisteme pentru un viitor durabil.",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Soluții inovatoare în agricultură regenerativă, acvacultură regenerativă, biofertilizatori, biochar și management holistic.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Consultanță pentru proiecte care regenerează solul, apa și ecosistemele.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Cunoaște misiunea, viziunea și abordarea True Regenerative.",
        "Experiencia del fundador y forma de trabajar.": "Experiența fondatorului și modul de lucru.",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative este o consultanță specializată în proiecte regenerative pentru agricultură, apă, acvacultură, biofertilizatori, biochar, microalge și management holistic.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Sprijinim ferme, companii agroalimentare, proiecte de acvacultură și instituții publice în tranziția către modele productive capabile să regenereze resursele de care depind.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Lucrăm cu o viziune practică: diagnostic, proiectare, implementare și monitorizare, pentru ca fiecare proiect să își poată îmbunătăți rentabilitatea, reziliența și impactul ambiental.",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "Sunt fondatorul True Regenerative și lucrez integrând agricultura regenerativă, microbiologia aplicată, restaurarea apei, acvacultura durabilă și planificarea holistică.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "Experiența mea se concentrează pe unirea științei, terenului și strategiei pentru a transforma probleme complexe în planuri măsurabile: îmbunătățirea solurilor, optimizarea apei, reducerea costurilor, captarea carbonului și creșterea productivității fără a compromite ecosistemele.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Cred într-o regenerare utilă, riguroasă și adaptată fiecărui teritoriu: să ascultăm sistemul, să măsurăm ceea ce contează, să proiectăm cu criteriu și să implementăm pas cu pas.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Recuperarea fertilității solului, reducerea inputurilor chimice și proiectarea sistemelor durabile.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Gestionarea eficientă a apei, restaurarea ecosistemelor acvatice și îmbunătățirea ciclurilor hidrice.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Sisteme de acvacultură durabile, optimizarea resurselor și proiectarea operațiunilor cu impact redus.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Producție, aplicații, tratarea apelor și nutriție agricolă bazată pe biomasă funcțională.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Fertilizare biologică și îmbunătățirea microbiologiei solului pentru culturi mai reziliente.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Captarea carbonului, îmbunătățirea structurii solului și creșterea retenției de nutrienți.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Planificare strategică, luarea deciziilor și proiectarea integrală a proiectelor regenerative.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Rezultate vizibile în teren și în costurile de exploatare.",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "Un proces clar de la diagnostic la optimizare.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Înțelegem contextul productiv, economic și ambiental al proiectului.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Evaluăm indicatori fizici, chimici și biologici pentru a lua decizii bazate pe date.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Definim practici, tehnologii, calendar și metrici de monitorizare.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Însoțim execuția pe teren și ajustăm planul la realitatea operațională.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Măsurăm rezultatele, corectăm abaterile și scalăm ceea ce funcționează.",
        "Antes, después y resultados medibles.": "Înainte, după și rezultate măsurabile.",
        "Recuperación de suelo agrícola": "Recuperarea solului agricol",
        "Mediterráneo peninsular": "Mediterana peninsulară",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Creșterea materiei organice, infiltrare mai bună și reducerea progresivă a fertilizării sintetice.",
        "Restauración de balsa y riego": "Restaurarea bazinului și irigației",
        "Comunidad Valenciana": "Comunitatea Valenciană",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Îmbunătățirea calității apei, reducerea nămolurilor și utilizare mai eficientă în perioade critice.",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Conținut pentru poziționare, formare și luarea deciziilor.",
        "Cómo iniciar una transición sin comprometer la producción": "Cum să începi o tranziție fără a compromite producția",
        "Usos del biochar para carbono, agua y estructura del suelo": "Utilizări ale biocharului pentru carbon, apă și structura solului",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Aplicații în tratarea apelor și nutriția agricolă",
        "Estrategias para aumentar resiliencia hídrica": "Strategii pentru creșterea rezilienței hidrice",
        "Tecnologías útiles para medir regeneración real": "Tehnologii utile pentru măsurarea regenerării reale",
        "Cuéntanos qué quieres regenerar.": "Spune-ne ce vrei să regenerezi.",
        "Mapa": "Hartă",
        "Área de trabajo:": "Arie de lucru:",
        "España y proyectos internacionales": "Spania și proiecte internaționale",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Toate drepturile rezervate."
    }
};

Object.entries(finalTranslationComplements2).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const finalTranslationComplements3 = {
    eu: {
        "Blog": "Bloga",
        "Consultoría regenerativa para territorios vivos": "Lurralde bizientzako aholkularitza birsortzailea",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "Lurzoruak, ura eta ekosistemak birsortzen etorkizun jasangarri baterako.",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "Irtenbide berritzaileak nekazaritza birsortzailean, akuikultura birsortzailean, bioongarrietan, biocharrean eta kudeaketa holistikoan.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "Lurra, ura eta ekosistemak birsortzen dituzten proiektuetarako aholkularitza.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "Ezagutu True Regenerative-ren misioa, ikuspegia eta lan egiteko modua.",
        "Experiencia del fundador y forma de trabajar.": "Sortzailearen esperientzia eta lan egiteko modua.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "Nekazaritza, ura, akuikultura, mikroalgak, bioongarriak, biocharra eta kudeaketa holistikoa.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "Diagnostikoa, analisia, diseinua, inplementazioa eta jarraipena.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "Arrakasta kasuak, emaitzak eta erreferentziazko kokapenak.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "Nekazaritza birsortzaileari, biocharrari, mikroalgei, urari eta nekazaritza berrikuntzari buruzko baliabideak.",
        "Formulario para solicitar información o consultoría.": "Informazioa edo aholkularitza eskatzeko formularioa.",
        "Sobre True Regenerative": "True Regenerative-ri buruz",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "Emankortasuna, ura eta biodibertsitatea berreskuratzen dituzten sistemak diseinatzen ditugu.",
        "Quiénes somos": "Nor gara",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative nekazaritzarako, urerako, akuikulturarako, bioongarrietarako, biocharrerako, mikroalgetarako eta kudeaketa holistikorako proiektu birsortzaileetan espezializatutako aholkularitza da.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "Baserriak, elikadura-enpresak, akuikultura-proiektuak eta erakunde publikoak laguntzen ditugu, beren baliabideak birsortzeko gai diren ekoizpen-ereduetara igarotzen.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "Ikuspegi praktikotik lan egiten dugu: diagnostikoa, diseinua, inplementazioa eta jarraipena, proiektu bakoitzak errentagarritasuna, erresilientzia eta ingurumen-inpaktua hobetu ditzan.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "Ezagutza teknikoa soluzio aplikagarri bihurtzea: lurzoru biziak, hobeto kudeatutako ura, kanpoko sargaiekiko mendekotasun txikiagoa eta epe luzeko proiektu errentagarriak.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "Karbonoa harrapatzen duten, biodibertsitatea handitzen duten eta oinarri naturala agortu gabe balio ekonomikoa sortzen duten lurralde produktiboak bultzatzea.",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "Esperientzia teknikoa, landa-ikuspegia eta bokazio birsortzailea.",
        "Fundador de True Regenerative": "True Regenerative-ren sortzailea",
        "Especialista en proyectos regenerativos": "Proiektu birsortzaileetan espezialista",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "True Regenerative-ren sortzailea naiz, eta nekazaritza birsortzailea, mikrobiologia aplikatua, uraren leheneratzea, akuikultura jasangarria eta plangintza holistikoa integratuz lan egiten dut.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "Nire esperientzia zientzia, landa eta estrategia uztartzean oinarritzen da, arazo konplexuak plan neurgarri bihurtzeko: lurzoruak hobetzea, ura optimizatzea, kostuak murriztea, karbonoa harrapatzea eta produktibitatea handitzea ekosistemak arriskuan jarri gabe.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "Lurralde bakoitzera egokitutako birsorkuntza erabilgarri eta zorrotzean sinesten dut: sistema entzun, garrantzitsua neurtu, irizpidez diseinatu eta pausoz pauso inplementatu.",
        "Soluciones para suelo, agua, producción y gestión.": "Lurzorurako, urerako, ekoizpenerako eta kudeaketarako soluzioak.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "Lurzoruaren emankortasuna berreskuratzea, sargai kimikoak murriztea eta sistema jasangarriak diseinatzea.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "Uraren kudeaketa eraginkorra, uretako ekosistemen leheneratzea eta ur-zikloen hobekuntza.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "Akuikultura-sistema jasangarriak, baliabideen optimizazioa eta inpaktu txikiko eragiketen diseinua.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "Ekoizpena, aplikazioak, ur-tratamendua eta biomasa funtzionalean oinarritutako nekazaritza-nutrizioa.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "Ongarritze biologikoa eta lurzoruaren mikrobiologiaren hobekuntza labore erresilienteagoetarako.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "Karbonoaren harrapaketa, lurzoruaren egituraren hobekuntza eta mantenugaien atxikipen handiagoa.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "Plangintza estrategikoa, erabakiak hartzea eta proiektu birsortzaileen diseinu integrala.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "Eremuan eta ustiapen-kontuan nabaritzen diren emaitzak.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "Proiektuaren testuinguru produktiboa, ekonomikoa eta ingurumenekoa ulertzen dugu.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "Adierazle fisikoak, kimikoak eta biologikoak ebaluatzen ditugu datuekin erabakiak hartzeko.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "Praktikak, teknologiak, egutegia eta jarraipen-metrikak definitzen ditugu.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "Eremuko exekuzioa laguntzen dugu eta plana errealitate operatibora egokitzen dugu.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "Emaitzak neurtzen ditugu, desbideratzeak zuzentzen ditugu eta funtzionatzen duena eskalatzen dugu.",
        "Antes, después y resultados medibles.": "Aurretik, ondoren eta emaitza neurgarriak.",
        "Recuperación de suelo agrícola": "Nekazaritza-lurzoruaren berreskurapena",
        "Mediterráneo peninsular": "Mediterraneo penintsularra",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "Materia organikoaren handitzea, infiltrazio hobea eta ongarritze sintetikoaren murrizketa progresiboa.",
        "Restauración de balsa y riego": "Ur-baltsaren eta ureztatzearen leheneratzea",
        "Comunidad Valenciana": "Valentziako Erkidegoa",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "Uraren kalitatearen hobekuntza, lokatzen murrizketa eta erabilera eraginkorragoa kanpaina kritikoetan.",
        "Contenido para posicionamiento, formación y toma de decisiones.": "Posizionamendurako, prestakuntzarako eta erabakiak hartzeko edukia.",
        "Agricultura regenerativa": "Nekazaritza birsortzailea",
        "Cómo iniciar una transición sin comprometer la producción": "Ekoizpena arriskuan jarri gabe trantsizioa nola hasi",
        "Usos del biochar para carbono, agua y estructura del suelo": "Biocharraren erabilerak karbonorako, urerako eta lurzoruaren egiturarako",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "Aplikazioak ur-tratamenduan eta nekazaritza-nutrizioan",
        "Gestión del agua": "Uraren kudeaketa",
        "Estrategias para aumentar resiliencia hídrica": "Ur-erresilientzia handitzeko estrategiak",
        "Innovación agrícola": "Nekazaritza-berrikuntza",
        "Tecnologías útiles para medir regeneración real": "Benetako birsorkuntza neurtzeko teknologia erabilgarriak",
        "Cuéntanos qué quieres regenerar.": "Esan zer birsortu nahi duzun.",
        "Servicio de interés": "Intereseko zerbitzua",
        "Seleccionar...": "Hautatu...",
        "Mapa": "Mapa",
        "Área de trabajo:": "Lan-eremua:",
        "España y proyectos internacionales": "Espainia eta nazioarteko proiektuak",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Eskubide guztiak erreserbatuta."
    },
    ar: {
        "Consultoría regenerativa para territorios vivos": "استشارات تجديدية للأراضي الحية",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "تجديد التربة والمياه والأنظمة البيئية من أجل مستقبل مستدام.",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "حلول مبتكرة في الزراعة التجديدية، والاستزراع المائي التجديدي، والأسمدة الحيوية، والبيوتشار، والإدارة الشمولية.",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "استشارات لمشاريع تجدد التربة والمياه والأنظمة البيئية.",
        "Conoce la misión, visión y enfoque de True Regenerative.": "تعرّف على مهمة True Regenerative ورؤيتها ونهجها.",
        "Experiencia del fundador y forma de trabajar.": "خبرة المؤسس وطريقة العمل.",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "الزراعة، المياه، الاستزراع المائي، الطحالب الدقيقة، الأسمدة الحيوية، البيوتشار والإدارة الشمولية.",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "التشخيص، التحليل، التصميم، التنفيذ والمتابعة.",
        "Casos de éxito, resultados y ubicaciones de referencia.": "قصص نجاح ونتائج ومواقع مرجعية.",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "موارد حول الزراعة التجديدية والبيوتشار والطحالب الدقيقة والمياه والابتكار الزراعي.",
        "Formulario para solicitar información o consultoría.": "نموذج لطلب معلومات أو استشارة.",
        "Sobre True Regenerative": "حول True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "نصمم أنظمة تستعيد الخصوبة والمياه والتنوع الحيوي.",
        "Quiénes somos": "من نحن",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative شركة استشارية متخصصة في المشاريع التجديدية للزراعة والمياه والاستزراع المائي والأسمدة الحيوية والبيوتشار والطحالب الدقيقة والإدارة الشمولية.",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "نرافق المزارع وشركات الأغذية الزراعية ومشاريع الاستزراع المائي والجهات العامة في الانتقال إلى نماذج إنتاجية قادرة على تجديد الموارد التي تعتمد عليها.",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "نعمل برؤية عملية: التشخيص، التصميم، التنفيذ والمتابعة حتى يتمكن كل مشروع من تحسين ربحيته ومرونته وأثره البيئي.",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "تحويل المعرفة التقنية إلى حلول قابلة للتطبيق: تربة حية، مياه مُدارة بشكل أفضل، اعتماد أقل على المدخلات الخارجية ومشاريع مربحة على المدى الطويل.",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "دعم أراضٍ إنتاجية تلتقط الكربون وتزيد التنوع الحيوي وتولد قيمة اقتصادية دون استنزاف أساسها الطبيعي.",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "خبرة تقنية، رؤية ميدانية ورسالة تجديدية.",
        "Fundador de True Regenerative": "مؤسس True Regenerative",
        "Especialista en proyectos regenerativos": "متخصص في المشاريع التجديدية",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "أنا مؤسس True Regenerative وأعمل على دمج الزراعة التجديدية، والميكروبيولوجيا التطبيقية، واستعادة المياه، والاستزراع المائي المستدام، والتخطيط الشمولي.",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "تركز خبرتي على الجمع بين العلم والعمل الميداني والاستراتيجية لتحويل المشكلات المعقدة إلى خطط قابلة للقياس: تحسين التربة، تحسين استخدام المياه، خفض التكاليف، التقاط الكربون وزيادة الإنتاجية دون الإضرار بالأنظمة البيئية.",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "أؤمن بتجديد مفيد ودقيق ومتكيف مع كل إقليم: الاستماع إلى النظام، قياس المهم، التصميم بحكمة والتنفيذ خطوة بخطوة.",
        "Soluciones para suelo, agua, producción y gestión.": "حلول للتربة والمياه والإنتاج والإدارة.",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "استعادة خصوبة التربة، تقليل المدخلات الكيميائية وتصميم أنظمة مستدامة.",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "إدارة فعالة للمياه، استعادة الأنظمة المائية وتحسين دورات المياه.",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "أنظمة استزراع مائي مستدامة، تحسين الموارد وتصميم عمليات منخفضة الأثر.",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "إنتاج وتطبيقات ومعالجة مياه وتغذية زراعية قائمة على كتلة حيوية وظيفية.",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "تسميد حيوي وتحسين ميكروبيولوجيا التربة لمحاصيل أكثر مرونة.",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "التقاط الكربون، تحسين بنية التربة وزيادة احتفاظها بالمغذيات.",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "تخطيط استراتيجي، اتخاذ قرارات وتصميم شامل للمشاريع التجديدية.",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "نتائج تظهر في الحقل وفي تكاليف التشغيل.",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "عملية واضحة من التشخيص إلى التحسين.",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "نفهم السياق الإنتاجي والاقتصادي والبيئي للمشروع.",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "نقيم مؤشرات فيزيائية وكيميائية وبيولوجية لاتخاذ قرارات قائمة على البيانات.",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "نحدد الممارسات والتقنيات والجدول الزمني ومؤشرات المتابعة.",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "نرافق التنفيذ الميداني ونعدل الخطة وفق الواقع التشغيلي.",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "نقيس النتائج، نصحح الانحرافات ونوسع ما ينجح.",
        "Antes, después y resultados medibles.": "قبل وبعد ونتائج قابلة للقياس.",
        "Recuperación de suelo agrícola": "استعادة التربة الزراعية",
        "Mediterráneo peninsular": "البحر الأبيض المتوسط في شبه الجزيرة",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "زيادة المادة العضوية، تحسين التسرب وتقليل تدريجي للتسميد الصناعي.",
        "Restauración de balsa y riego": "استعادة الحوض والري",
        "Comunidad Valenciana": "منطقة فالنسيا",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "تحسين جودة المياه، تقليل الحمأة واستخدام أكثر كفاءة في الفترات الحرجة.",
        "Blog y recursos": "المدونة والموارد",
        "Contenido para posicionamiento, formación y toma de decisiones.": "محتوى للظهور في محركات البحث والتدريب واتخاذ القرار.",
        "Agricultura regenerativa": "الزراعة التجديدية",
        "Cómo iniciar una transición sin comprometer la producción": "كيفية بدء الانتقال دون التأثير على الإنتاج",
        "Usos del biochar para carbono, agua y estructura del suelo": "استخدامات البيوتشار للكربون والماء وبنية التربة",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "تطبيقات في معالجة المياه والتغذية الزراعية",
        "Gestión del agua": "إدارة المياه",
        "Estrategias para aumentar resiliencia hídrica": "استراتيجيات لزيادة مرونة المياه",
        "Innovación agrícola": "الابتكار الزراعي",
        "Tecnologías útiles para medir regeneración real": "تقنيات مفيدة لقياس التجديد الحقيقي",
        "Cuéntanos qué quieres regenerar.": "أخبرنا بما تريد تجديده.",
        "Mapa": "خريطة",
        "Área de trabajo:": "نطاق العمل:",
        "España y proyectos internacionales": "إسبانيا ومشاريع دولية",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. جميع الحقوق محفوظة."
    },
    zh: {
        "Consultoría regenerativa para territorios vivos": "面向生命土地的再生咨询",
        "Regenerando suelos, agua y ecosistemas para un futuro sostenible.": "为可持续未来再生土壤、水和生态系统。",
        "Soluciones innovadoras en agricultura regenerativa, acuicultura regenerativa, biofertilizantes, biochar y gestión holística.": "再生农业、再生水产养殖、生物肥料、生物炭和整体管理的创新解决方案。",
        "Consultoría para proyectos que regeneran suelo, agua y ecosistemas.": "为再生土壤、水和生态系统的项目提供咨询。",
        "Conoce la misión, visión y enfoque de True Regenerative.": "了解 True Regenerative 的使命、愿景和方法。",
        "Experiencia del fundador y forma de trabajar.": "创始人的经验和工作方式。",
        "Agricultura, agua, acuicultura, microalgas, biofertilizantes, biochar y gestión holística.": "农业、水、水产养殖、微藻、生物肥料、生物炭和整体管理。",
        "Diagnóstico, análisis, diseño, implementación y seguimiento.": "诊断、分析、设计、实施和跟踪。",
        "Casos de éxito, resultados y ubicaciones de referencia.": "成功案例、结果和参考地点。",
        "Recursos sobre agricultura regenerativa, biochar, microalgas, agua e innovación agrícola.": "关于再生农业、生物炭、微藻、水和农业创新的资源。",
        "Formulario para solicitar información o consultoría.": "用于申请信息或咨询的表格。",
        "Sobre True Regenerative": "关于 True Regenerative",
        "Diseñamos sistemas que recuperan fertilidad, agua y biodiversidad.": "我们设计恢复肥力、水和生物多样性的系统。",
        "Quiénes somos": "我们是谁",
        "True Regenerative es una consultoría especializada en proyectos regenerativos para agricultura, agua, acuicultura, biofertilizantes, biochar, microalgas y gestión holística.": "True Regenerative 是一家专注于农业、水、水产养殖、生物肥料、生物炭、微藻和整体管理再生项目的咨询公司。",
        "Acompañamos a fincas, empresas agroalimentarias, proyectos acuícolas y entidades públicas en la transición hacia modelos productivos capaces de regenerar los recursos de los que dependen.": "我们支持农场、农食企业、水产项目和公共机构向能够再生其依赖资源的生产模式转型。",
        "Trabajamos desde una visión práctica: diagnóstico, diseño, implementación y seguimiento para que cada proyecto pueda mejorar su rentabilidad, su resiliencia y su impacto ambiental.": "我们以实践视角工作：诊断、设计、实施和跟踪，使每个项目都能提高盈利能力、韧性和环境影响。",
        "Convertir el conocimiento técnico en soluciones aplicables: suelos vivos, agua mejor gestionada, menor dependencia de insumos externos y proyectos rentables a largo plazo.": "将技术知识转化为可应用的解决方案：有生命的土壤、更好的水管理、更少依赖外部投入以及长期盈利的项目。",
        "Impulsar territorios productivos que capturan carbono, aumentan biodiversidad y generan valor económico sin agotar su base natural.": "推动能够捕获碳、增加生物多样性并在不耗尽自然基础的情况下创造经济价值的生产型土地。",
        "Experiencia técnica, mirada de campo y vocación regenerativa.": "技术经验、田间视角和再生使命。",
        "Fundador de True Regenerative": "True Regenerative 创始人",
        "Especialista en proyectos regenerativos": "再生项目专家",
        "Soy el fundador de True Regenerative y trabajo integrando agricultura regenerativa, microbiología aplicada, restauración hídrica, acuicultura sostenible y planificación holística.": "我是 True Regenerative 的创始人，工作中整合再生农业、应用微生物学、水体修复、可持续水产养殖和整体规划。",
        "Mi experiencia se centra en unir ciencia, campo y estrategia para transformar problemas complejos en planes medibles: mejorar suelos, optimizar agua, reducir costes, capturar carbono y aumentar la productividad sin comprometer los ecosistemas.": "我的经验集中在结合科学、田间实践和战略，将复杂问题转化为可衡量的计划：改善土壤、优化用水、降低成本、捕获碳并在不损害生态系统的情况下提高生产力。",
        "Creo en una regeneración útil, rigurosa y adaptada a cada territorio: escuchar el sistema, medir lo importante, diseñar con criterio e implementar paso a paso.": "我相信有用、严谨并适应每片土地的再生：倾听系统、衡量重要因素、有判断地设计并逐步实施。",
        "Soluciones para suelo, agua, producción y gestión.": "面向土壤、水、生产和管理的解决方案。",
        "Recuperación de la fertilidad del suelo, reducción de insumos químicos y diseño de sistemas sostenibles.": "恢复土壤肥力、减少化学投入并设计可持续系统。",
        "Gestión eficiente del agua, restauración de ecosistemas acuáticos y mejora de ciclos hídricos.": "高效水管理、恢复水生生态系统并改善水循环。",
        "Sistemas acuícolas sostenibles, optimización de recursos y diseño de operaciones de bajo impacto.": "可持续水产养殖系统、资源优化和低影响运营设计。",
        "Producción, aplicaciones, tratamiento de aguas y nutrición agrícola basada en biomasa funcional.": "基于功能性生物质的生产、应用、水处理和农业营养。",
        "Fertilización biológica y mejora de la microbiología del suelo para cultivos más resilientes.": "生物施肥和改善土壤微生物群，以获得更具韧性的作物。",
        "Captura de carbono, mejora de la estructura del suelo y aumento de la retención de nutrientes.": "碳捕获、改善土壤结构并提高养分保持能力。",
        "Planificación estratégica, toma de decisiones y diseño integral de proyectos regenerativos.": "战略规划、决策和再生项目的整体设计。",
        "Resultados que se notan en el campo y en la cuenta de explotación.": "在田间和经营成本中都能看到的结果。",
        "Un proceso claro desde el diagnóstico hasta la optimización.": "从诊断到优化的清晰流程。",
        "Comprendemos el contexto productivo, económico y ambiental del proyecto.": "我们了解项目的生产、经济和环境背景。",
        "Evaluamos indicadores físicos, químicos y biológicos para tomar decisiones con datos.": "我们评估物理、化学和生物指标，以数据驱动决策。",
        "Definimos prácticas, tecnologías, calendario y métricas de seguimiento.": "我们定义实践、技术、时间表和跟踪指标。",
        "Acompañamos la ejecución en campo y ajustamos el plan a la realidad operativa.": "我们陪伴田间执行，并根据实际运营调整计划。",
        "Medimos resultados, corregimos desviaciones y escalamos lo que funciona.": "我们衡量结果、纠正偏差并扩大有效做法。",
        "Antes, después y resultados medibles.": "之前、之后和可衡量的结果。",
        "Recuperación de suelo agrícola": "农业土壤恢复",
        "Mediterráneo peninsular": "半岛地中海地区",
        "Incremento de materia orgánica, mejor infiltración y reducción progresiva de fertilización sintética.": "有机质增加、渗透改善，并逐步减少合成施肥。",
        "Restauración de balsa y riego": "水池和灌溉修复",
        "Comunidad Valenciana": "瓦伦西亚自治区",
        "Mejora de calidad del agua, reducción de lodos y uso más eficiente en campañas críticas.": "提高水质、减少污泥，并在关键季节更高效用水。",
        "Blog y recursos": "博客和资源",
        "Contenido para posicionamiento, formación y toma de decisiones.": "用于搜索定位、培训和决策的内容。",
        "Agricultura regenerativa": "再生农业",
        "Cómo iniciar una transición sin comprometer la producción": "如何在不影响生产的情况下开始转型",
        "Usos del biochar para carbono, agua y estructura del suelo": "生物炭在碳、水和土壤结构方面的用途",
        "Aplicaciones en tratamiento de aguas y nutrición agrícola": "在水处理和农业营养中的应用",
        "Gestión del agua": "水管理",
        "Estrategias para aumentar resiliencia hídrica": "增强水韧性的策略",
        "Innovación agrícola": "农业创新",
        "Tecnologías útiles para medir regeneración real": "用于衡量真实再生的实用技术",
        "Cuéntanos qué quieres regenerar.": "告诉我们你想再生什么。",
        "Mapa": "地图",
        "Área de trabajo:": "工作区域：",
        "España y proyectos internacionales": "西班牙和国际项目",
        "© 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. 保留所有权利。"
    }
};

Object.entries(finalTranslationComplements3).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const titleAndLabelComplements = {
    en: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Regenerative agriculture and ecosystems",
        "Sobre Nosotros | True Regenerative": "About Us | True Regenerative",
        "Quién soy | True Regenerative": "About me | True Regenerative",
        "Servicios | True Regenerative": "Services | True Regenerative",
        "Metodología | True Regenerative": "Methodology | True Regenerative",
        "Proyectos | True Regenerative": "Projects | True Regenerative",
        "Contacto | True Regenerative": "Contact | True Regenerative",
        "Email:": "Email:",
        "Teléfono:": "Phone:",
        "Teléfono *": "Phone *"
    },
    pt: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Agricultura e ecossistemas regenerativos",
        "Sobre Nosotros | True Regenerative": "Sobre nós | True Regenerative",
        "Quién soy | True Regenerative": "Quem sou | True Regenerative",
        "Servicios | True Regenerative": "Serviços | True Regenerative",
        "Metodología | True Regenerative": "Metodologia | True Regenerative",
        "Proyectos | True Regenerative": "Projetos | True Regenerative",
        "Contacto | True Regenerative": "Contacto | True Regenerative",
        "Email:": "Email:",
        "Teléfono:": "Telefone:",
        "Teléfono *": "Telefone *"
    },
    fr: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Agriculture et écosystèmes régénératifs",
        "Sobre Nosotros | True Regenerative": "À propos | True Regenerative",
        "Quién soy | True Regenerative": "Qui suis-je | True Regenerative",
        "Servicios | True Regenerative": "Services | True Regenerative",
        "Metodología | True Regenerative": "Méthodologie | True Regenerative",
        "Proyectos | True Regenerative": "Projets | True Regenerative",
        "Contacto | True Regenerative": "Contact | True Regenerative",
        "Email:": "E-mail :",
        "Teléfono:": "Téléphone :",
        "Teléfono *": "Téléphone *"
    },
    de: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Regenerative Landwirtschaft und Ökosysteme",
        "Sobre Nosotros | True Regenerative": "Über uns | True Regenerative",
        "Quién soy | True Regenerative": "Über mich | True Regenerative",
        "Servicios | True Regenerative": "Leistungen | True Regenerative",
        "Metodología | True Regenerative": "Methodik | True Regenerative",
        "Proyectos | True Regenerative": "Projekte | True Regenerative",
        "Contacto | True Regenerative": "Kontakt | True Regenerative",
        "Email:": "E-Mail:",
        "Teléfono:": "Telefon:",
        "Teléfono *": "Telefon *"
    },
    it: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Agricoltura ed ecosistemi rigenerativi",
        "Sobre Nosotros | True Regenerative": "Chi siamo | True Regenerative",
        "Quién soy | True Regenerative": "Chi sono | True Regenerative",
        "Servicios | True Regenerative": "Servizi | True Regenerative",
        "Metodología | True Regenerative": "Metodologia | True Regenerative",
        "Proyectos | True Regenerative": "Progetti | True Regenerative",
        "Contacto | True Regenerative": "Contatto | True Regenerative",
        "Email:": "Email:",
        "Teléfono:": "Telefono:",
        "Teléfono *": "Telefono *"
    },
    ca: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Agricultura i ecosistemes regeneratius",
        "Sobre Nosotros | True Regenerative": "Sobre nosaltres | True Regenerative",
        "Quién soy | True Regenerative": "Qui soc | True Regenerative",
        "Servicios | True Regenerative": "Serveis | True Regenerative",
        "Metodología | True Regenerative": "Metodologia | True Regenerative",
        "Proyectos | True Regenerative": "Projectes | True Regenerative",
        "Contacto | True Regenerative": "Contacte | True Regenerative",
        "Email:": "Email:",
        "Teléfono:": "Telèfon:",
        "Teléfono *": "Telèfon *"
    },
    eu: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Nekazaritza eta ekosistema birsortzaileak",
        "Sobre Nosotros | True Regenerative": "Guri buruz | True Regenerative",
        "Quién soy | True Regenerative": "Nor naiz | True Regenerative",
        "Servicios | True Regenerative": "Zerbitzuak | True Regenerative",
        "Metodología | True Regenerative": "Metodologia | True Regenerative",
        "Proyectos | True Regenerative": "Proiektuak | True Regenerative",
        "Contacto | True Regenerative": "Kontaktua | True Regenerative",
        "Email:": "Emaila:",
        "Teléfono:": "Telefonoa:",
        "Teléfono *": "Telefonoa *"
    },
    ro: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | Agricultură și ecosisteme regenerative",
        "Sobre Nosotros | True Regenerative": "Despre noi | True Regenerative",
        "Quién soy | True Regenerative": "Cine sunt | True Regenerative",
        "Servicios | True Regenerative": "Servicii | True Regenerative",
        "Metodología | True Regenerative": "Metodologie | True Regenerative",
        "Proyectos | True Regenerative": "Proiecte | True Regenerative",
        "Contacto | True Regenerative": "Contact | True Regenerative",
        "Email:": "Email:",
        "Teléfono:": "Telefon:",
        "Teléfono *": "Telefon *"
    },
    ar: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | الزراعة والأنظمة البيئية التجديدية",
        "Sobre Nosotros | True Regenerative": "من نحن | True Regenerative",
        "Quién soy | True Regenerative": "من أنا | True Regenerative",
        "Servicios | True Regenerative": "الخدمات | True Regenerative",
        "Metodología | True Regenerative": "المنهجية | True Regenerative",
        "Proyectos | True Regenerative": "المشاريع | True Regenerative",
        "Contacto | True Regenerative": "اتصال | True Regenerative",
        "Email:": "البريد الإلكتروني:",
        "Teléfono:": "الهاتف:",
        "Teléfono *": "الهاتف *"
    },
    zh: {
        "True Regenerative | Agricultura y ecosistemas regenerativos": "True Regenerative | 再生农业与生态系统",
        "Sobre Nosotros | True Regenerative": "关于我们 | True Regenerative",
        "Quién soy | True Regenerative": "关于我 | True Regenerative",
        "Servicios | True Regenerative": "服务 | True Regenerative",
        "Metodología | True Regenerative": "方法 | True Regenerative",
        "Proyectos | True Regenerative": "项目 | True Regenerative",
        "Contacto | True Regenerative": "联系 | True Regenerative",
        "Email:": "邮箱：",
        "Teléfono:": "电话：",
        "Teléfono *": "电话 *"
    }
};

Object.entries(titleAndLabelComplements).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const sharedVisibleTextComplements = {
    en: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. All rights reserved."
    },
    pt: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Todos os direitos reservados."
    },
    fr: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tous droits réservés."
    },
    de: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Alle Rechte vorbehalten."
    },
    it: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tutti i diritti riservati."
    },
    ca: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Tots els drets reservats."
    },
    eu: {
        "Blog | True Regenerative": "Bloga | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Eskubide guztiak erreserbatuta."
    },
    ro: {
        "Blog | True Regenerative": "Blog | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. Toate drepturile rezervate."
    },
    ar: {
        "Blog | True Regenerative": "المدونة | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. جميع الحقوق محفوظة."
    },
    zh: {
        "Blog | True Regenerative": "博客 | True Regenerative",
        "&copy; 2026 True Regenerative. Todos los derechos reservados.": "© 2026 True Regenerative. 保留所有权利。"
    }
};

Object.entries(sharedVisibleTextComplements).forEach(([language, dictionary]) => {
    translations[language] = {
        ...(translations[language] || {}),
        ...dictionary
    };
});

const pageMeta = {
    en: {
        "index.html": {
            title: "True Regenerative | Regenerative agriculture and ecosystems",
            description: "True Regenerative offers consulting in regenerative agriculture, regenerative aquaculture, biofertilizers, biochar, microalgae, water and holistic management."
        },
        "sobre-nosotros.html": {
            title: "About Us | True Regenerative",
            description: "Learn about True Regenerative, a consultancy specialized in regenerative agriculture, water, aquaculture, biofertilizers, biochar and holistic management."
        },
        "quien-soy.html": {
            title: "About me | True Regenerative",
            description: "About me: experience of the founder of True Regenerative in regenerative agriculture, water, applied microbiology and holistic management."
        },
        "servicios.html": {
            title: "Services | True Regenerative",
            description: "True Regenerative services: regenerative agriculture, water regeneration, aquaculture, microalgae, biofertilizers, biochar and holistic management."
        },
        "metodologia.html": {
            title: "Methodology | True Regenerative",
            description: "True Regenerative methodology: diagnosis, soil and water analysis, solution design, implementation and follow-up."
        },
        "proyectos.html": {
            title: "Projects | True Regenerative",
            description: "Projects and success stories by True Regenerative with results, locations and before-and-after comparisons."
        },
        "blog.html": {
            title: "Blog | True Regenerative",
            description: "True Regenerative blog and resources about regenerative agriculture, biochar, microalgae, water management and agricultural innovation."
        },
        "contacto.html": {
            title: "Contact | True Regenerative",
            description: "Contact True Regenerative to request consulting in regenerative agriculture, water, aquaculture, microalgae, biofertilizers, biochar and holistic management."
        }
    }
};

function translateTextNode(node, dictionary) {
    const original = node.nodeValue;
    const trimmed = original.trim();

    if (!trimmed || !dictionary[trimmed]) {
        return;
    }

    node.nodeValue = original.replace(trimmed, dictionary[trimmed]);
}

function translateAttributes(dictionary) {
    document.querySelectorAll("[aria-label]").forEach((element) => {
        const label = element.getAttribute("aria-label");
        if (dictionary[label]) {
            element.setAttribute("aria-label", dictionary[label]);
        }
    });
}

function translatePageMeta(language) {
    const fileName = window.location.pathname.split("/").pop() || "index.html";
    const meta = pageMeta[language] && pageMeta[language][fileName];
    const dictionary = translations[language];

    if (meta) {
        document.title = meta.title;
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.setAttribute("content", meta.description);
        }
        return;
    }

    if (dictionary && dictionary[document.title]) {
        document.title = dictionary[document.title];
    }
}

function createLanguageSwitcher(language) {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    const switcher = document.createElement("label");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", language === "en" ? "Language selector" : "Selector de idioma");

    const shortCode = document.createElement("span");
    shortCode.textContent = language.toUpperCase();
    switcher.appendChild(shortCode);

    const select = document.createElement("select");
    select.setAttribute("aria-label", language === "en" ? "Choose language" : "Elegir idioma");

    supportedLanguages.forEach(({ code, label }) => {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = label;
        option.selected = code === language;
        select.appendChild(option);
    });

    select.addEventListener("change", () => {
        localStorage.setItem("siteLanguage", select.value);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", select.value);
        window.location.href = url.toString();
    });

    switcher.appendChild(select);
    header.appendChild(switcher);
}

function preserveLanguageInLinks(language) {
    if (!supportedLanguages.some(({ code }) => code === language)) {
        return;
    }

    document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach((link) => {
        const href = link.getAttribute("href");

        if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
            return;
        }

        const url = new URL(href, window.location.href);
        url.searchParams.set("lang", language);
        link.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
    });
}

function applyLanguage(language) {
    localStorage.setItem("siteLanguage", language);
    createLanguageSwitcher(language);
    preserveLanguageInLinks(language);

    const dictionary = translations[language];

    if (!dictionary) {
        document.documentElement.lang = "es";
        document.documentElement.dir = "ltr";
        return;
    }

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    translatePageMeta(language);
    translateAttributes(dictionary);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
        translateTextNode(node, dictionary);
        node = walker.nextNode();
    }
}

applyLanguage(activeLanguage);
