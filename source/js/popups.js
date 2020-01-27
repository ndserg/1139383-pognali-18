var header_nav_toggle = document.querySelector(".header-nav__toggle");
var main_nav = document.querySelector(".main-nav");
var page_header = document.querySelector(".page-header");
var logo = document.querySelector(".page-header__logo");

var rates_open = document.querySelector(".rates__button");
var rates_modal = document.querySelector(".rates-modal");
var rates_close = document.querySelector(".rates-modal__button-close");


//modal menu
main_nav.classList.add("main-nav--js");
logo.classList.add("page-header__logo--js");

if (page_header.classList.contains("page-header--nojs")) {
  page_header.classList.remove("page-header--nojs");
};

header_nav_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (main_nav.classList.contains("main-nav--js")) {
    main_nav.classList.remove("main-nav--js");
    page_header.classList.add("page-header--js");
    header_nav_toggle.classList.add("header-nav__toggle--close");
    logo.classList.remove("page-header__logo--js");
  } else {
    main_nav.classList.add("main-nav--js");
    page_header.classList.remove("page-header--js");
    header_nav_toggle.classList.remove("header-nav__toggle--close");
    logo.classList.add("page-header__logo--js");
  };
});
//modal menu end

//rates modal
if (rates_modal) {
rates_open.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (rates_modal.classList.contains("visually-hidden")) {
    rates_modal.classList.remove("visually-hidden");
  };
});

rates_close.addEventListener("click", function (evt) {
  evt.preventDefault();
    rates_modal.classList.add("visually-hidden");
});
};
//rate modal end
