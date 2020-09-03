for (let ch of document.querySelectorAll(".navigation-item-children")) {
    ch.style.display = "none";
    ch.setAttribute("aria-hidden", true);
}
for (let a of document.querySelectorAll("a.navigation-link-parent")) {
    a.setAttribute("tabindex", 0);
    a.setAttribute("aria-haspopup", false);
    a.setAttribute("aria-expanded", false);
    a.addEventListener("click", (e) => {
        toggleMenu(e.target);
    });
    a.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.key === " ")
            toggleSubmenu(e.target);
    });
}

function toggleSubmenu(link) {
    let active = link.classList.toggle("navigation-link-parent-active");
    link.setAttribute("aria-expanded", active);
    let children = link.parentNode.nextElementSibling;
    if(active) {
        children.style.display = "contents";
        children.setAttribute("aria-hidden", false);
    } else {
        children.style.display = "none";
        children.setAttribute("aria-hidden", true);
    }
}

