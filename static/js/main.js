
// =====================================
// MOBILE NAVIGATION MENU
// =====================================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealItems.forEach(item => {
        observer.observe(item);
    });

} else {

    revealItems.forEach(item => {
        item.classList.add("visible");
    });

}


// =====================================
// ANIMATED TYPING EFFECT
// =====================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const roles = [
        "Python Developer",
        "Full Stack Developer",
        "AI/ML Enthusiast"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        typingText.textContent =
            currentRole.substring(0, charIndex);

        if (!deleting && charIndex < currentRole.length) {

            charIndex++;
            setTimeout(typeEffect, 100);

        } else if (!deleting && charIndex === currentRole.length) {

            deleting = true;
            setTimeout(typeEffect, 1200);

        } else if (deleting && charIndex > 0) {

            charIndex--;
            setTimeout(typeEffect, 50);

        } else {

            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 300);

        }

    }

    typeEffect();

}
