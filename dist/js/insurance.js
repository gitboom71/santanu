/* =========================================================
   The Santanu Space - Insurance Knowledge Centre
   Version 8.2 (Production Optimized & Collision Free)
========================================================= */
document.addEventListener("astro:page-load", () => {
    // Create the back-to-top button ONCE outside the loops to prevent explosion
    let upButton = document.querySelector(".back-to-top");
    if (!upButton && typeof document !== "undefined") {
        upButton = document.createElement("a");
        upButton.setAttribute("href", "#");
        upButton.className = "back-to-top";
        upButton.setAttribute("aria-label", "Scroll back to top");
        upButton.innerHTML = "▲";
        document.body.appendChild(upButton);
    }

    function initInsuranceEngine() {
        /* =====================================
               1. Dynamic FAQ Toggle
        ===================================== */
        const faqItems = document.querySelectorAll(".faq h3");
        faqItems.forEach(function (question) {
            if (question.querySelector(".faq-icon")) return; // Skip if already added
            const answer = question.nextElementSibling;
            if (!answer) return;

            const icon = document.createElement("span");
            icon.className = "faq-icon";
            icon.textContent = "+";
            question.appendChild(icon);

            question.addEventListener("click", function () {
                const isOpen = answer.classList.toggle("is-open");
                icon.textContent = isOpen ? "−" : "+";
                question.setAttribute("aria-expanded", isOpen);
            });
        });

        /* =====================================
           2. Smooth Scroll (FIXED: Skips Main Header Links)
        ===================================== */
        // Only hijack hash anchors inside the main page content, never inside the navigation menu
        const anchors = document.querySelectorAll('main a[href^="#"], .insurance-group a[href^="#"]');

        anchors.forEach(function (anchor) {
            anchor.addEventListener("click", function (event) {
                const targetId = this.getAttribute("href");
                if (targetId === "#") return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }
            });
        });

        /* =====================================
           3. Interactive Premium Calculator
        ===================================== */
        const calcForm = document.getElementById("premium-calc-form");
        if (calcForm) {
            const calculateBtn = document.getElementById("btn-calculate");
            const resultDisplay = document.getElementById("calc-result");

            if (calculateBtn && resultDisplay) {
                calculateBtn.addEventListener("click", function () {
                    const age = parseInt(document.getElementById("calc-age").value) || 30;
                    const coverage = parseInt(document.getElementById("calc-coverage").value) || 1000000;
                    const term = parseInt(document.getElementById("calc-term").value) || 20;

                    const basePremium = (coverage / (term * 12));
                    const ageMultiplier = age < 30 ? 1.0 : age < 50 ? 1.3 : 1.8;
                    const estimatedMonthlyPremium = Math.round(basePremium * ageMultiplier);

                    resultDisplay.textContent = `Estimated Monthly Premium: ₹${estimatedMonthlyPremium.toLocaleString('en-IN')}`;
                    resultDisplay.style.fontWeight = "bold";
                    resultDisplay.style.color = "#0077cc";
                });
            }
        }

        console.log("✅ The Santanu Initiative: Insurance Knowledge Centre Engine Safely Connected.");
    }

    // Execute safely regardless of custom system motion blockers
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initInsuranceEngine);
    } else {
        initInsuranceEngine();
    }
    document.addEventListener("astro:page-load", initInsuranceEngine);

    /* =====================================
       4. Scrollspy (FIXED: Targeted Paths Only)
    ===================================== */
    const sections = document.querySelectorAll("section[id], .insurance-group[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length > 0 && typeof IntersectionObserver !== "undefined") {
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        };

        const scrollObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute("id");
                    navLinks.forEach(function (link) {
                        if (link.getAttribute("href") === `#${currentId}`) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function (section) {
            scrollObserver.observe(section);
        });
    }

    /* =====================================
       5. Scroll Elevation Header Target
    ===================================== */
    const mainHeaderElement = document.querySelector(".site-header");
    let scrollTimeout;
    window.addEventListener("scroll", function () {
        if (!scrollTimeout) {
            window.requestAnimationFrame(function () {
                const currentTop = window.scrollY;
                if (mainHeaderElement) {
                    if (currentTop > 80) {
                        mainHeaderElement.classList.add("scrolled");
                    } else {
                        mainHeaderElement.classList.remove("scrolled");
                    }
                }
                if (upButton) {
                    if (currentTop > 500) {
                        upButton.classList.add("visible");
                    } else {
                        upButton.classList.remove("visible");
                    }
                }
                scrollTimeout = false;
            });
            scrollTimeout = true;
        }
    }, { passive: true });

});