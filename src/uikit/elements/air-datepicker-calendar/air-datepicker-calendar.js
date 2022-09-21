import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.scss";

const airDatepickerCalendars = document.querySelectorAll(".js-air-datepicker-calendar");
const allDatepickers = [];

airDatepickerCalendars.forEach((airDatepickerCalendar) => {
  const airDatepickerCalendarMenu = airDatepickerCalendar.querySelector(".js-air-datepicker-calendar__menu");
  const dropdownOne = airDatepickerCalendar.querySelector(".js-dropdown__button [data-id='drop1']");
  const dropdownTwo = airDatepickerCalendar.querySelector(".js-dropdown__button [data-id='drop2']");
  const dropdownThree = document.querySelector(".js-dropdown__button [data-id='drop3']");

  // <button for calendar>
  let apply = {
    content: "применить",
    className: "custom-apply-classname",
    onClick: (dp) => {
      let dropdown = dp.$el.closest(".js-dropdown.dropdown--menu-open");
      dropdown.classList.remove("dropdown--menu-open");
    },
  };

  // </button for calendar>

  const calendar = new AirDatepicker(airDatepickerCalendarMenu, {
    range: true,
    navTitles: {
      days: "MMMM yyyy",
    },
    multipleDatesSeparator: " - ",
    altField: dropdownThree,
    altFieldDateFormat: "dd MMM",
    minDate: new Date(),
    disableNavWhenOutOfRange: true,
    dynamicRange: true,
    buttons: ["clear", apply],
    prevHtml: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0156 8.01562V9.98438H4.82812L10.4062 15.6094L9 17.0156L0.984375 9L9 0.984375L10.4062 2.39062L4.82812 8.01562H17.0156Z" fill="#BC9CFF"/></svg>`,
    nextHtml: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>`,
    onSelect(date) {
      if (dropdownOne && date.formattedDate[0]) {
        dropdownOne.value = date.formattedDate[0];
      }
      if (dropdownTwo && date.formattedDate[1]) {
        dropdownTwo.value = date.formattedDate[1];
      }
    },
  });

  allDatepickers.push(calendar);

  // <button for calendar>
  let buttonClear = airDatepickerCalendar.querySelector(".air-datepicker-button");
  buttonClear.addEventListener("click", clearDropdownInputValue);

  function clearDropdownInputValue() {
    if (dropdownOne || dropdownTwo) {
      dropdownOne.value = dropdownTwo.value = "";
    }
  }
  // </button for calendar>
});

// console.log(allDatepickers);
