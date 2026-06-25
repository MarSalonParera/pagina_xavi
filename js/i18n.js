const languageParam = new URLSearchParams(window.location.search).get("lang");
const requestedLanguage = languageParam ? languageParam.toLowerCase().split("-")[0] : "";
const savedLanguage = localStorage.getItem("siteLanguage") || "";
const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "es"];

const spanishLikeLanguages = ["es", "ca", "gl", "eu"];
const detectedLanguage = browserLanguages[0].toLowerCase().split("-")[0];
const activeLanguage = requestedLanguage || savedLanguage || (spanishLikeLanguages.includes(detectedLanguage) ? "es" : "en");

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

    if (!meta) {
        return;
    }

    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute("content", meta.description);
    }
}

function createLanguageSwitcher(language) {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", language === "en" ? "Language selector" : "Selector de idioma");

    ["es", // Español
    "en", // Inglés
    "pt", // Portugués
    "fr", // Francés
    "de", // Alemán
    "it", // Italiano
    "ca", // Catalán
    "eu", // Euskera
    "ro", // Rumano
    "ar", // Árabe
    "zh", // Chino
  ].forEach((code) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = code.toUpperCase();
        button.className = code === language ? "active" : "";
        button.setAttribute("aria-pressed", String(code === language));

        button.addEventListener("click", () => {
            localStorage.setItem("siteLanguage", code);
            const url = new URL(window.location.href);
            url.searchParams.set("lang", code);
            window.location.href = url.toString();
        });

        switcher.appendChild(button);
    });

    header.appendChild(switcher);
}

function preserveLanguageInLinks(language) {
    if (!["es", "en"].includes(language)) {
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
        return;
    }

    document.documentElement.lang = language;
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
