"use strict";
(function () {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
  };

  const body = document.body;
  watchDevice();
  window.addEventListener("resize", watchDevice);

  function watchDevice() {
    if (isMobile.any()) {
      if (body.classList.contains("pc")) {
        body.classList.remove("pc");
      }
      body.classList.add("mobile");
    } else {
      if (body.classList.contains("mobile")) {
        body.classList.remove("mobile");
      }
      body.classList.add("pc");
    }
  }

  if (isMobile.any()) {
    const allHasSubmenu = document.querySelectorAll(".js-menu__item--has-submenu");
    allHasSubmenu.forEach((submenuTrigger) => {
      submenuTrigger.addEventListener("click", () => {
        submenuTrigger.classList.toggle("js-menu__item--submenu-open");
      });
    });
  }
  // ----------show menu---------
  const menuIcon = document.querySelector(".js-menu");
  menuIcon.addEventListener("click", showMobileMenu);

  function showMobileMenu(event) {
    const menu = event.currentTarget;

    if (event.target.closest(".menu__icon")) {
      menu.classList.toggle("js-menu--open");

      const mediaQuery = window.matchMedia("(min-width: 992px)");
      function handleTabletChange(e) {
        if (e.matches) {
          menu.classList.remove("js-menu--open");
        }
      }
      mediaQuery.addListener(handleTabletChange);
      handleTabletChange(mediaQuery);
    }
    function removeClass() {
      menu.classList.remove("js-menu--open");
    }
  }
})();
