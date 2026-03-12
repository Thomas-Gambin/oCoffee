document.addEventListener("DOMContentLoaded", () => {
    const firstVisitDate = localStorage.getItem("firstVisitDate");
    const dayInMs = 24 * 60 * 60 * 1000;

    if (!firstVisitDate || Date.now() - new Date(firstVisitDate).getTime() > dayInMs) {
        alert("Ce site est un projet qui n'a pas de but lucratif.");
        localStorage.setItem("firstVisitDate", new Date().toString());
    }

    if (window.AOS) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.AOS.init({
            duration: 500,
            once: true,
            offset: 50,
            delay: 0,
            easing: "ease-out-cubic",
            disable: prefersReducedMotion,
        });
    }

    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (menuHamburger && navLinks) {
        menuHamburger.addEventListener("click", () => {
            const isExpanded = menuHamburger.getAttribute("aria-expanded") === "true";
            menuHamburger.setAttribute("aria-expanded", String(!isExpanded));
            menuHamburger.setAttribute("aria-label", isExpanded ? "Ouvrir le menu" : "Fermer le menu");
            const menuIcon = menuHamburger.querySelector(".menu-icon");
            const closeIcon = menuHamburger.querySelector(".close-icon");
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle("hidden", !isExpanded);
                closeIcon.classList.toggle("hidden", isExpanded);
            }
            navLinks.classList.toggle("hidden");
            if (window.lucide) window.lucide.createIcons();
        });
    }

    const seeAllButton = document.getElementById("voir-tous-btn");
    const previewCatalog = document.getElementById("catalog-preview");
    const fullCatalog = document.getElementById("catalog-full");

    if (seeAllButton && previewCatalog && fullCatalog) {
        seeAllButton.addEventListener("click", () => {
            previewCatalog.classList.add("hidden");
            fullCatalog.classList.remove("hidden");
            seeAllButton.classList.add("hidden");
            if (window.AOS) window.AOS.refresh();
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
