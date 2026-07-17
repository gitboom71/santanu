/* =========================================================
   The Santanu Initiative - Insurance Knowledge Centre
   Version 8.2 (Production Optimized)
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
/* =====================================
       1. Dynamic & Smooth FAQ Toggle (v8.3)
    ===================================== */
    const faqItems = document.querySelectorAll(".faq h3");

    faqItems.forEach(function (question) {
        const answer = question.nextElementSibling;
        
        if (!answer) return;

        // Create and append the status indicator (+ icon)
        const icon = document.createElement("span");
        icon.className = "faq-icon";
        icon.textContent = "+";
        question.appendChild(icon);

        // Interactive Toggle Event
        question.addEventListener("click", function () {
            // Toggle the 'is-open' class on the paragraph element
            const isOpen = answer.classList.toggle("is-open");
            
            // Update indicator icon based on class presence
            icon.textContent = isOpen ? "−" : "+";
            
            // Update accessibility attribute
            question.setAttribute("aria-expanded", isOpen);
        });
    });
    /* =====================================
       2. Cross-Browser Smooth Scroll Fallback
    ===================================== */
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function(anchor) {
        anchor.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href");
            
            // Skip empty hash links
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();
                
                // Safe smooth scroll fallback
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Update URL hash cleanly without jumping the page
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    /* =====================================
       3. Interactive Premium Calculator Framework
    ===================================== */
    const calcForm = document.getElementById("premium-calc-form");
    
    // Only runs if a element with id "premium-calc-form" exists in HTML
    if (calcForm) {
        const calculateBtn = document.getElementById("btn-calculate");
        const resultDisplay = document.getElementById("calc-result");

        if (calculateBtn && resultDisplay) {
            calculateBtn.addEventListener("click", function() {
                const age = parseInt(document.getElementById("calc-age").value) || 30;
                const coverage = parseInt(document.getElementById("calc-coverage").value) || 1000000;
                const term = parseInt(document.getElementById("calc-term").value) || 20;

                // Base calculation logic: (Coverage / Term) scaled slightly by age
                const basePremium = (coverage / (term * 12));
                const ageMultiplier = age < 30 ? 1.0 : age < 50 ? 1.3 : 1.8;
                const estimatedMonthlyPremium = Math.round(basePremium * ageMultiplier);

                resultDisplay.textContent = `Estimated Monthly Premium: ₹${estimatedMonthlyPremium.toLocaleString('en-IN')}`;
                resultDisplay.style.fontWeight = "bold";
                resultDisplay.style.color = "#0077cc";
            });
        }
    }

    console.log("✅ The Santanu Initiative: Insurance Knowledge Centre v8.2 Engine Loaded.");
});
/* =====================================
       4. Dynamic Scrollspy / Active Nav (v8.4)
    ===================================== */
    // Select all major sections on your page that have an explicit ID attribute
    const sections = document.querySelectorAll("header[id], section[id], .insurance-group[id], footer[id]");
    const navLinks = document.querySelectorAll("nav a");

    // Configure when the navigation link should switch highlights
    const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -60% 0px", // Triggers when a section takes up the primary view window
        threshold: 0
    };

    const scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            // Check if a specific section has entered the focal area of the screen
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                // Loop through nav items and toggle the '.active' gold styling
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

    // Tell the browser to monitor each section
    sections.forEach(function (section) {
        scrollObserver.observe(section);
    });
    /* =====================================
       5. Dynamic Scroll Elevation & Back to Top (v8.5)
    ===================================== */
    const targetNav = document.querySelector("nav");
    
    // Inject the floating button programmatically to keep HTML markup immaculate
    const upButton = document.createElement("a");
    upButton.setAttribute("href", "#");
    upButton.className = "back-to-top";
    upButton.setAttribute("aria-label", "Scroll back to top");
    upButton.innerHTML = "▲"; 
    document.body.appendChild(upButton);

    // Optimized scroll check loop using requestAnimationFrame for 60fps performance
    let scrollTimeout;
    window.addEventListener("scroll", function () {
        if (!scrollTimeout) {
            window.requestAnimationFrame(function () {
                const currentTop = window.scrollY;

                // Toggle navbar drop-shadow treatment
                if (currentTop > 80) {
                    targetNav.classList.add("scrolled");
                } else {
                    targetNav.classList.remove("scrolled");
                }

                // Fade floating controller in or out based on reading depth
                if (currentTop > 500) {
                    upButton.classList.add("visible");
                } else {
                    upButton.classList.remove("visible");
                }

                scrollTimeout = false;
            });
            scrollTimeout = true;
        }
    }, { passive: true });