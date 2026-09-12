// ================================
// CUSTOM CURSOR
// ================================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);


document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

});


// ================================
// CURSOR HOVER EFFECT
// ================================

const interactiveElements = document.querySelectorAll(
    "a, button, .skill, .cert, .project-card"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
    });

});
// ================================
// MOUSE FOLLOWING GLOW
// ================================

document.addEventListener("mousemove", (event) => {
    document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
    );
});
// ================================
// MOBILE MENU
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (!menuToggle || !mobileMenu) {
        return;
    }
menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});
    mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open menu");
    });
});
});