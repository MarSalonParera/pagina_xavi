const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const target = document.querySelector(anchor.getAttribute("href"));

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        const requiredFields = form.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            const hasValue = field.value.trim().length > 0;
            field.toggleAttribute("aria-invalid", !hasValue);
            isValid = isValid && hasValue;
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

const params = new URLSearchParams(window.location.search);
const message = params.get("mensaje");
const messageType = params.get("tipo");

if (message) {
    const notice = document.createElement("div");
    notice.className = `site-notice ${messageType === "error" ? "error" : "success"}`;
    notice.textContent = message;
    document.body.appendChild(notice);

    window.history.replaceState({}, document.title, window.location.pathname);

    setTimeout(() => {
        notice.remove();
    }, 7000);
}
