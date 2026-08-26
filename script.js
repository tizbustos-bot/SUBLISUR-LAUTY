/* =========================================================
   SUBLISUR LAUTY — Interacciones
   ========================================================= */
(function () {
  "use strict";

  /* ---- WhatsApp: un solo lugar para número y mensaje ---- */
  const WA_NUMBER = "5491139031751"; // formato internacional, sin + ni espacios
  const WA_MESSAGE = "Hola SUBLISUR LAUTY 👋 Vi su página web y quería consultar por sus productos.";
  const WA_LINK = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);

  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.setAttribute("href", WA_LINK);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  /* ---- Header: sombra al scrollear ---- */
  const header = document.querySelector(".site-header");
  const onScroll = function () {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menú hamburguesa ---- */
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");

  const closeMenu = function () {
    nav.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menú");
  };

  hamburger.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  // Cerrar al tocar un link
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  // Cerrar al tocar fuera
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  /* ---- FAQ acordeón ---- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");

    q.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Cerrar todos
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.classList.remove("active");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-a").style.maxHeight = null;
      });

      // Abrir el actual si estaba cerrado
      if (!isActive) {
        item.classList.add("active");
        q.setAttribute("aria-expanded", "true");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---- "Ver más productos" (solo mobile) ---- */
  var verMas = document.getElementById("verMas");
  if (verMas) {
    var productos = document.getElementById("productos");
    var verMasTxt = verMas.querySelector(".ver-mas-txt");
    verMas.addEventListener("click", function () {
      var expanded = productos.classList.toggle("expanded");
      verMas.setAttribute("aria-expanded", String(expanded));
      verMas.classList.toggle("open", expanded);
      verMasTxt.textContent = expanded ? "Ver menos" : "Ver más productos";
    });
  }

  /* ---- Reveal al scroll (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    revealEls.forEach(function (el) { io.observe(el); });

    // Red de seguridad: si por algún motivo el observer no dispara,
    // mostrar todo a los 2.5s para no dejar contenido invisible.
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Año dinámico (si algún día se quiere) ---- */
  // document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
