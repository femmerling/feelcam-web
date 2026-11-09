// FeelCam website: a few small touches, no framework.
(function () {
  "use strict";

  // TelemetryDeck: anonymous page views, no cookies. Paste the website's App ID from the
  // TelemetryDeck dashboard; empty sends nothing.
  var TELEMETRYDECK_APP_ID = "";

  var root = document.documentElement;
  root.classList.add("js");

  if (TELEMETRYDECK_APP_ID) {
    var td = document.createElement("script");
    td.async = true;
    td.src = "https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js";
    td.dataset.appId = TELEMETRYDECK_APP_ID;
    document.head.appendChild(td);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Current year in the footer.
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // A hairline under the header once the page scrolls.
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Fade sections in as they scroll into view.
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    items.forEach(function (el) { observer.observe(el); });
  });
})();
