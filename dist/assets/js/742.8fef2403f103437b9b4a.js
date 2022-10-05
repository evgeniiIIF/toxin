(self["webpackChunkwebpack_5_docguides"] = self["webpackChunkwebpack_5_docguides"] || []).push([[742],{

/***/ 7830:
/***/ (function() {

"use strict";


(function () {
  var dropdownLists = document.querySelectorAll(".js-dropdown");

  if (dropdownLists.length) {
    var init = function init(e) {
      currentDropdownInput = e.currentTarget;
      currentDropdown = currentDropdownInput.closest(".js-dropdown");
    };

    var toggleDropdown = function toggleDropdown(e) {
      currentDropdown.classList.toggle("dropdown--menu-open");
      bodyClear(currentDropdown);
    };

    var bodyClear = function bodyClear(element) {
      if (element.classList.contains("dropdown--menu-open")) {
        body.addEventListener("click", removeClass);
      } else {
        body.removeEventListener("click", removeClass);
      }
    };

    var removeClass = function removeClass(event) {
      if (!currentDropdown.contains(event.target)) {
        body.removeEventListener("click", removeClass);
        currentDropdown.classList.remove("dropdown--menu-open");
      }

      if (prevDropdown && prevDropdown != currentDropdown) {
        prevDropdown.classList.remove("dropdown--menu-open");
      }

      prevDropdown = currentDropdown;
    };

    var keypress = function keypress(e) {
      if (e.keyCode === 27) {
        currentDropdown.classList.remove("dropdown--menu-open");
      }

      if (e.keyCode === 13) {
        toggleDropdown(e);
      }
    };

    var currentDropdownInput;
    var currentDropdown;
    var body = document.body;
    var prevDropdown;
    dropdownLists.forEach(function (dropdown) {
      var inputs = dropdown.querySelectorAll(".js-dropdown__button");
      inputs.forEach(function (currentInput) {
        currentInput.addEventListener("focus", init);
        currentInput.addEventListener("mouseover", init);
        currentInput.addEventListener("click", toggleDropdown);
        currentInput.addEventListener("keydown", keypress);
      });
    });
  }
})();

/***/ }),

/***/ 5120:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/uikit/elements/dropdown/dropdown.js
var dropdown = __webpack_require__(7830);
// EXTERNAL MODULE: ./src/uikit/elements/item-quantity-dropdown/item-quantity-dropdown.js
var item_quantity_dropdown = __webpack_require__(3893);
// EXTERNAL MODULE: ./node_modules/air-datepicker/index.es.js
var index_es = __webpack_require__(1808);
;// CONCATENATED MODULE: ./src/uikit/elements/air-datepicker-calendar/air-datepicker-calendar.js

 // import "../../../pages/search-room/localStorage";

var airDatepickerCalendars = document.querySelectorAll(".js-air-datepicker-calendar");
var allDatepickers = [];
airDatepickerCalendars.forEach(function (airDatepickerCalendar) {
  var airDatepickerCalendarMenu = airDatepickerCalendar.querySelector(".js-air-datepicker-calendar__menu");
  var dropdownOne = airDatepickerCalendar.querySelector(".js-dropdown__button [data-id='drop1']");
  var dropdownTwo = airDatepickerCalendar.querySelector(".js-dropdown__button [data-id='drop2']");
  var dropdownThree = document.querySelector(".js-dropdown__button [data-id='drop3']"); // <button for calendar>

  var apply = {
    content: "применить",
    className: "custom-apply-classname",
    type: "button",
    onClick: function onClick(dp) {
      var dropdown = dp.$el.closest(".js-dropdown.dropdown--menu-open");
      dropdown.classList.remove("dropdown--menu-open");
    }
  }; // </button for calendar>

  var calendar = new index_es/* default */.Z(airDatepickerCalendarMenu, {
    range: true,
    // selectedDates: ["2022-10-22", "2022-10-23"],
    // selectedDates: dropdownThree ? [localStorage.getItem("dateFrom"), localStorage.getItem("dateTo")] : false,
    selectedDates: localStorage.getItem("dateFrom") ? [localStorage.getItem("dateFrom"), localStorage.getItem("dateTo")] : false,
    autoClose: true,
    navTitles: {
      days: "MMMM yyyy"
    },
    multipleDatesSeparator: " - ",
    altField: dropdownThree || false,
    altFieldDateFormat: "dd MMM",
    minDate: new Date(),
    disableNavWhenOutOfRange: true,
    dynamicRange: true,
    buttons: ["clear", apply],
    prevHtml: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.0156 8.01562V9.98438H4.82812L10.4062 15.6094L9 17.0156L0.984375 9L9 0.984375L10.4062 2.39062L4.82812 8.01562H17.0156Z\" fill=\"#BC9CFF\"/></svg>",
    nextHtml: "<svg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"/></svg>",
    onSelect: function onSelect(date) {
      function getSelectedDates(i) {
        if (date.formattedDate.length == 2) {
          var d = date.formattedDate[i];
          localStorage.setItem("dateFromOrigin", date.formattedDate[0]);
          localStorage.setItem("dateToOrigin", date.formattedDate[1]);
          var arr = d.split(".");
          return "".concat(arr[2], "-").concat(arr[1], "-").concat(arr[0]);
        }
      } // localStorage share1
      // if (!dropdownThree) {


      localStorage.setItem("dateFrom", getSelectedDates(0));
      localStorage.setItem("dateTo", getSelectedDates(1)); // }

      if (dropdownOne && date.formattedDate[0]) {
        if (localStorage.getItem("dateFrom")) {
          dropdownOne.value = date.formattedDate[0];
        }
      }

      if (dropdownTwo && date.formattedDate[1]) {
        dropdownTwo.value = date.formattedDate[1];
      }
    }
  });
  allDatepickers.push(calendar); // localStorage share2

  if (localStorage.getItem("dateFromOrigin") && dropdownOne) {
    dropdownOne.value = localStorage.getItem("dateFromOrigin");
  }

  if (localStorage.getItem("dateToOrigin") && dropdownTwo) {
    dropdownTwo.value = localStorage.getItem("dateToOrigin");
  } // localStorage.clear();
  // <button for calendar>


  var buttonClear = airDatepickerCalendar.querySelector(".air-datepicker-button");
  buttonClear.addEventListener("click", clearDropdownInputValue);
  airDatepickerCalendar.querySelectorAll(".air-datepicker-button").forEach(function (button) {
    button.setAttribute("type", "button");
  });

  function clearDropdownInputValue() {
    if (dropdownOne || dropdownTwo) {
      dropdownOne.value = dropdownTwo.value = "";
    }
  } // </button for calendar>

});
// EXTERNAL MODULE: ./src/uikit/elements/like-button/like-button.js
var like_button = __webpack_require__(2207);
// EXTERNAL MODULE: ./node_modules/nouislider/dist/nouislider.js
var nouislider = __webpack_require__(4211);
var nouislider_default = /*#__PURE__*/__webpack_require__.n(nouislider);
;// CONCATENATED MODULE: ./src/uikit/elements/noUiSlider/nouisliderMain.js


var slider = document.querySelector(".js-nouislider-plugin");

if (slider) {
  nouislider_default().create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 15000
    }
  });
  slider.noUiSlider.on("update", function (values, handle) {
    var rangeSliderValues = document.querySelector(".range-slider__values");
    var value1 = Math.round(values[0]);
    var value2 = Math.round(values[1]);
    rangeSliderValues.innerHTML = "".concat(value1, "\u20BD - ").concat(value2, "\u20BD");
  });
}
// EXTERNAL MODULE: ./src/uikit/elements/images-slider/images-slider.js
var images_slider = __webpack_require__(9702);
// EXTERNAL MODULE: ./src/uikit/elements/header/header.js
var header = __webpack_require__(3830);
;// CONCATENATED MODULE: ./src/uikit/elements/elements-page/elements-page.js
// elements/







 // import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";
// import "../dropdown/dropdown";

/***/ }),

/***/ 3830:
/***/ (function() {

"use strict";


(function () {
  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
  var mediaQuery = window.matchMedia("(min-width: 992px)");
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  function handleTabletChange(e) {
    if (e.matches) {// menu.classList.remove("js-menu--open");
    }
  }

  var body = document.body;
  window.addEventListener("resize", watchDevice);
  watchDevice();

  function watchDevice() {
    if (isMobile.any() || !mediaQuery.matches) {
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
  } // ----------show mobile menu---------


  var menuIcon = body.querySelector(".js-menu");
  menuIcon.addEventListener("click", showMobileMenu);
  var header = menuIcon.closest(".header");
  var isOpenMobileMenu = false;

  function showMobileMenu(event) {
    var menu = event.currentTarget;

    if (event.target.closest(".menu__icon")) {
      var _handleTabletChange = function _handleTabletChange(e) {
        console.log(_mediaQuery);

        if (e.matches) {
          menu.classList.remove("js-menu--open");
          body.classList.remove("_lock");
        }
      };

      var addScrollWidth = function addScrollWidth() {
        var scrollWidth = getScrollWidth();
        header.style.paddingRight = scrollWidth;
        body.style.paddingRight = scrollWidth;
      };

      var removeScrollWidth = function removeScrollWidth() {
        header.style.paddingRight = "";
        body.style.paddingRight = "";
      };

      var getScrollWidth = function getScrollWidth() {
        var div = document.createElement("div");
        div.style.overflowY = "scroll";
        div.style.width = "50px";
        div.style.height = "50px";
        document.body.append(div);
        var scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth + "px";
      };

      if (!isOpenMobileMenu) {
        menu.classList.add("js-menu--open");
        body.classList.add("_lock");
        addScrollWidth();
        isOpenMobileMenu = true;
      } else {
        menu.classList.remove("js-menu--open");
        body.classList.remove("_lock");
        removeScrollWidth();
        isOpenMobileMenu = false;
      }

      var _mediaQuery = window.matchMedia("(min-width: 992px)");

      _mediaQuery.addListener(_handleTabletChange);

      _handleTabletChange(_mediaQuery);
    }
  }

  if (isMobile.any() || !mediaQuery.matches) {
    var showSubmenu = function showSubmenu(e) {
      var submenuButton = e.target.closest(".js-item-menu--has-submenu");
      var body = e.currentTarget;

      if (submenuButton) {
        if (!submenuIsOpen) {
          submenuButton.classList.add("js-item-menu--submenu-open");
          body.addEventListener("click", hideSubmenu);
          submenuIsOpen = true;
        } else {
          body.removeEventListener("click", hideSubmenu);
        }
      }

      function hideSubmenu(e) {
        if (!e.target.closest(".submenu")) {
          submenuButton.classList.remove("js-item-menu--submenu-open");
          body.removeEventListener("click", hideSubmenu);
          submenuIsOpen = false;
        }
      }
    };

    body.addEventListener("click", showSubmenu);
    var submenuIsOpen = false;
  }
})();

/***/ }),

/***/ 9702:
/***/ (function() {

"use strict";


(function () {
  function imagesSlider(slider) {
    var sliderLine = slider.querySelector(".js-images-slider__line");
    var allSlides = sliderLine.querySelectorAll(".js-images-slider__slide");
    var btnPrev = slider.querySelector(".js-images-slider__control-previous");
    var btnNext = slider.querySelector(".js-images-slider__control-next");
    var progress = slider.querySelector(".js-images-slider__control-progress");
    var quantitySlides = allSlides.length;
    var currentSlideIndex = 0;
    var linePosition = 0;
    var offset = 100;
    var allProgressItems = progressItemsCreate();
    setProgress();
    allProgressItems.forEach(function (progressItem, indexProgressItem) {
      progressItem.addEventListener("click", function (e) {
        linePosition = -offset * indexProgressItem;
        currentSlideIndex = indexProgressItem;
        setProgress();
        positionSetting();
      });
    });
    btnPrev.addEventListener("click", scrollBack);
    btnNext.addEventListener("click", scrollForward);

    function scrollForward() {
      linePosition = linePosition - offset;
      currentSlideIndex += 1;

      if (linePosition <= -offset * quantitySlides) {
        linePosition = 0;
        currentSlideIndex = 0;
      }

      positionSetting();
      setProgress();
    }

    function scrollBack() {
      linePosition = linePosition + offset;
      currentSlideIndex -= 1;

      if (linePosition > 0) {
        linePosition = -offset * (quantitySlides - 1);
        currentSlideIndex = quantitySlides - 1;
      }

      positionSetting();
      setProgress();
    }

    function positionSetting() {
      sliderLine.style.transform = "translateX(".concat(linePosition, "%)");
    }

    function progressItemsCreate() {
      for (var i = 1; i < quantitySlides; i++) {
        var progressItem = document.createElement("div");
        progressItem.classList.add("js-images-slider__control-progress-item");
        progress.append(progressItem);
      }

      return progress.querySelectorAll(".js-images-slider__control-progress-item");
    }

    function setProgress() {
      var allProgressItem = progress.querySelectorAll(".js-images-slider__control-progress-item");
      allProgressItem.forEach(function (item) {
        item.classList.remove("js-images-slider__control-progress-item--active");
      });
      allProgressItem[currentSlideIndex].classList.add("js-images-slider__control-progress-item--active");
    }

    function settingFromProgress(e) {
      console.log(e.currentTarget);
    }
  }

  var imagesSlidersAll = document.querySelectorAll(".js-images-slider");
  imagesSlidersAll.forEach(function (sliderItem) {
    new imagesSlider(sliderItem);
  });
})();

/***/ }),

/***/ 3893:
/***/ (function() {

"use strict";


(function () {
  function ItemQuantityDropdown(el) {
    var currentDropdown = el.closest(".dropdown");
    var dropdownInput = currentDropdown.querySelector(".dropdown__input");
    var totalCount;
    var itemCount = {};
    var iqDropdownItems = el.querySelectorAll(".iq-dropdown-item");
    var wordsTotal;
    var wordsItem;
    var wordsItem1;
    var wordsItem2;
    var wordsItem3;
    var iqDropdownId = el.dataset.id;

    if (iqDropdownId == "guests") {
      wordsTotal = ["гость", "гостя", "гостей"];
      wordsItem = ["младенец", "младенца", "младенцев"];
    }

    if (iqDropdownId == "facilities") {
      wordsItem1 = ["спальня", "спальни", "спален"];
      wordsItem2 = ["кровать", "кровати", "кроватей"];
      wordsItem3 = ["ванная комнаты", "ванные комнаты", "ванных комнат"];
    }

    var buttonClear = el.querySelector("[data-name='clear']");
    var buttonApply = el.querySelector("[data-name='apply']");
    iqDropdownItems.forEach(function (iqDropdownItem) {
      var itemId = iqDropdownItem.dataset.id;
      var itemViewCount = iqDropdownItem.querySelector(".iq-dropdown-item__count");
      itemCount[itemId] = +itemViewCount.outerText;
      var decrementButton = iqDropdownItem.querySelector("[data-action=decrement-button]");
      var incrementButton = iqDropdownItem.querySelector("[data-action=increment-button]"); // if (iqDropdownItems.length === Object.values(itemCount).length) {

      updateItemCountDisplay(); // }

      decrementButton.addEventListener("click", function () {
        if (itemCount[itemId] <= 0) {
          return;
        }

        itemCount[itemId] -= 1;
        updateItemCountDisplay();
      });
      incrementButton.addEventListener("click", function () {
        itemCount[itemId] += 1;
        updateItemCountDisplay();
      });

      if (buttonClear) {
        buttonClear.addEventListener("click", function () {
          totalCount = 0;
          itemCount[itemId] = 0;
          updateItemCountDisplay();
        });
      }

      if (buttonApply) {
        buttonApply.addEventListener("click", function () {
          currentDropdown.classList.remove("dropdown--menu-open");
        });
      }

      function updateItemCountDisplay() {
        totalCount = getTotalCount();
        showButtonClear();

        if (totalCount == 0) {
          dropdownInput.value = "";
        } else {
          dropdownInput.value = getStr();
        }

        if (itemCount[itemId] <= 0) {
          decrementButton.classList.add("iq-dropdown-item__quantity-button--disabled");
          itemCount[itemId] = 0;
        }

        if (itemCount[itemId] > 0) {
          decrementButton.classList.remove("iq-dropdown-item__quantity-button--disabled");
        }

        itemViewCount.innerHTML = itemCount[itemId];
      }

      function getTotalCount() {
        return Object.values(itemCount).reduce(function (prev, current) {
          return prev + +current;
        }, 0);
      }

      function showButtonClear() {
        if (buttonClear) {
          if (totalCount <= 0) {
            buttonClear.classList.add("iq-dropdown__button--disabled");
          } else {
            buttonClear.classList.remove("iq-dropdown__button--disabled");
          }
        }
      }

      function getStr() {
        var str;

        if (iqDropdownId == "guests") {
          var item3 = itemCount["item3"];
          var substrGuest;
          var substBaby;
          substrGuest = getSubstr(wordsTotal, totalCount);

          if (item3) {
            substBaby = getSubstr(wordsItem, item3);
            str = "".concat(totalCount, " ").concat(substrGuest, ", ").concat(item3, " ").concat(substBaby);
          } else {
            str = "".concat(totalCount, " ").concat(substrGuest);
          }
        }

        if (iqDropdownId == "facilities") {
          var countItem1 = itemCount["item1"];
          var countItem2 = itemCount["item2"];
          var countItem3 = itemCount["item3"];
          var substrItem1;
          var substrItem2;
          var substrItem3;

          if (countItem1) {
            substrItem1 = getSubstr(wordsItem1, countItem1);
            str = "".concat(countItem1, " ").concat(substrItem1);
          }

          if (countItem2) {
            substrItem2 = getSubstr(wordsItem2, countItem2);
            str = "".concat(countItem1, " ").concat(substrItem1, ", ").concat(countItem2, " ").concat(substrItem2);
          }

          if (countItem3) {
            substrItem3 = getSubstr(wordsItem3, countItem3);
            str = "".concat(countItem1, " ").concat(substrItem1, ", ").concat(countItem2, " ").concat(substrItem2, ", ").concat(countItem3, " ").concat(substrItem3);
          }
        }

        return str;
      }

      function getSubstr(arr, counter) {
        var cr = counter.toString().slice(-2);
        var substr;
        if (cr > 9 && cr < 20) substr = arr[2];else {
          cr = counter.toString().slice(-1);
          if (cr == 0) substr = arr[2];
          if (cr == 1) substr = arr[0];
          if (cr > 1) substr = arr[1];
          if (cr > 4) substr = arr[2];
        }
        return substr;
      }
    });
  }

  var iqDropdownElements = document.querySelectorAll(".iq-dropdown");
  iqDropdownElements.forEach(function (iqDropdown) {
    new ItemQuantityDropdown(iqDropdown);
  });
})();

/***/ }),

/***/ 2207:
/***/ (function() {

"use strict";


(function () {
  liked();

  function liked() {
    var likeButtons = document.querySelectorAll(".like-button .like-button__body");
    likeButtons.forEach(function (likeButton) {
      var likeCount = likeButton.querySelector(".like-button__value");
      var isLiked = false;
      likeButton.addEventListener("click", function (e) {
        if (isLiked) {
          e.currentTarget.classList.remove("like-button--liked");
          likeCount.value = +likeCount.value - 1;
          isLiked = false;
        } else {
          e.currentTarget.classList.add("like-button--liked");
          likeCount.value = +likeCount.value + 1;
          isLiked = true;
        }
      });
    });
  }
})();

/***/ }),

/***/ 2678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/TOXIN.c5e5e7134dfb702dc534.png";

/***/ }),

/***/ 2720:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/favicon.70b06d41853be30e5782.png";

/***/ }),

/***/ 5720:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/star.svg";

/***/ }),

/***/ 7981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/star_border.svg";

/***/ }),

/***/ 4271:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/facebook.svg";

/***/ }),

/***/ 471:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/instagramm.svg";

/***/ }),

/***/ 1783:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/twiter.svg";

/***/ }),

/***/ 7835:
/***/ (function() {

/* (ignored) */

/***/ })

}]);