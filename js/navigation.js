(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelectorAll(".nav-links a");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menü schliessen" : "Menü öffnen");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menü öffnen");
    });
  });
})();
