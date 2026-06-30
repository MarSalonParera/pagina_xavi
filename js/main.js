document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    showPhpMessage();
    initFaq();
});

function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const selector = anchor.getAttribute("href");

            if (!selector || selector === "#") {
                return;
            }

            const target = document.querySelector(selector);

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function initFormValidation() {
    document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", (event) => {
            const requiredFields = form.querySelectorAll("[required]");
            let isValid = true;

            requiredFields.forEach((field) => {
                const hasValue = field.value.trim().length > 0;
                field.toggleAttribute("aria-invalid", !hasValue);

                if (!hasValue) {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();

                const note = form.querySelector(".form-note");

                if (note) {
                    note.textContent = "Revisa los campos obligatorios antes de enviar.";
                }
            }
        });
    });
}

function showPhpMessage() {
    const params = new URLSearchParams(window.location.search);
    const message = params.get("mensaje");
    const messageType = params.get("tipo");

    if (!message) {
        return;
    }

    const notice = document.createElement("div");
    notice.className = `site-notice ${messageType === "error" ? "error" : "success"}`;
    notice.textContent = message;
    document.body.appendChild(notice);
    window.history.replaceState({}, document.title, window.location.pathname);

    setTimeout(() => {
        notice.remove();
    }, 7000);
}

function initFaq() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");
        const icon = item.querySelector(".faq-question span");

        if (!button) {
            return;
        }

        button.setAttribute("type", "button");
        button.setAttribute("aria-expanded", String(item.classList.contains("active")));

        button.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");

            faqItems.forEach((faq) => {
                const faqButton = faq.querySelector(".faq-question");
                const span = faq.querySelector(".faq-question span");

                faq.classList.remove("active");

                if (faqButton) {
                    faqButton.setAttribute("aria-expanded", "false");
                }

                if (span) {
                    span.textContent = "+";
                }
            });

            if (!isOpen) {
                item.classList.add("active");
                button.setAttribute("aria-expanded", "true");

                if (icon) {
                    icon.textContent = "-";
                }
            }
        });
    });
}
