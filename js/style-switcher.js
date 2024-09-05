/* ============== TOGGLE STYLE SWITCHER ================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ============== THEME COLORS ================= */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ============== THEME LIGHT AND DARK MODE ================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

/* ============== NAVIGATION ACTIVE ITEM HIGHLIGHT ON CLICK ================= */
const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});

/* ============== HIGHLIGHT NAV ITEM ON SCROLL ================= */
const sections = document.querySelectorAll("section"); // Assuming your sections are defined as <section id="sectionName">...</section>

window.addEventListener("scroll", () => {
    let current = "";

    // Get the current section in view based on scroll position
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id"); // Get the section's ID
        }
    });

    // Remove 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
