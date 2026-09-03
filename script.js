/* =========================================================
   YOUTUBE ASSISTANCE
   SCRIPT JAVASCRIPT — VERSION 2026
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU LATÉRAL
    ====================================================== */

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {

        menuButton.addEventListener("click", () => {

            sidebar.classList.toggle("mobile-open");

        });

    }


    /* =====================================================
       FERMER LE MENU APRÈS UN CLIC
    ====================================================== */

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 650) {

                sidebar.classList.remove("mobile-open");

            }

        });

    });


    /* =====================================================
       BOUTON RECHERCHE
    ====================================================== */

    const searchForm =
        document.querySelector(".search-box");

    const searchInput =
        document.querySelector(".search-box input");

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const searchValue =
                searchInput.value.trim();

            if (searchValue === "") {

                searchInput.focus();

                return;

            }

            console.log(
                "Recherche YouTube Assistance :",
                searchValue
            );

            /*
             * Pour l'instant la recherche est visuelle.
             *
             * Nous pourrons ensuite connecter cette recherche
             * à une vraie page de résultats.
             */

            alert(
                "Recherche : " + searchValue
            );

        });

    }


    /* =====================================================
       CATÉGORIES
    ====================================================== */

    const categories =
        document.querySelectorAll(".category");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            categories.forEach(item => {

                item.classList.remove("active");

            });

            category.classList.add("active");

        });

    });


    /* =====================================================
       BOUTONS D'ASSISTANCE
    ====================================================== */

    const contactButtons =
        document.querySelectorAll(
            ".contact-button, .primary-button"
        );

    contactButtons.forEach(button => {

        button.addEventListener("click", () => {

            console.log(
                "Ouverture de l'assistance"
            );

            /*
             * Le véritable chat Tawk.to sera connecté
             * à cet endroit plus tard.
             */

        });

    });


    /* =====================================================
       BOUTONS "PLUS"
    ====================================================== */

    const moreButtons =
        document.querySelectorAll(".more-button");

    moreButtons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            event.stopPropagation();

            console.log(
                "Menu de la carte ouvert"
            );

        });

    });


    /* =====================================================
       ANIMATION D'APPARITION
    ====================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".video-card, .guide-card, .information-section"
        );

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       DÉTECTION DU REDIMENSIONNEMENT
    ====================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 650) {

            sidebar?.classList.remove(
                "mobile-open"
            );

        }

    });


    /* =====================================================
       CONSOLE
    ====================================================== */

    console.log(
        "YouTube Assistance — interface 2026 chargée."
    );

});
