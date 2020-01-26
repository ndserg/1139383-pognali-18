var header_nav_toggle = document.querySelector(".header-nav__toggle");
var main_nav = document.querySelector(".main-nav");
var page_header = document.querySelector(".page-header");

main_nav.classList.add("main-nav--js");

if (page_header.classList.contains("page-header--nojs")) {
  page_header.classList.remove("page-header--nojs");
};

header_nav_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (main_nav.classList.contains("main-nav--js")) {
    main_nav.classList.remove("main-nav--js");
    page_header.classList.add("page-header--js");
    header_nav_toggle.classList.add("header-nav__toggle--close");
  } else {
    main_nav.classList.add("main-nav--js");
    page_header.classList.remove("page-header--js");
    header_nav_toggle.classList.remove("header-nav__toggle--close");
  };
});
