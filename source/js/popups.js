/*popup map*/
var main_nav_toggle = document.querySelector(".main-nav__toggle");
var main_nav = document.querySelector(".main-nav__wrapper");
var top_menu = document.querySelector(".top-menu");
var site_list = document.querySelector(".site-list");
var top_contacts_list = document.querySelector(".top-contacts-list");
var social_list = document.querySelector(".social-list");
var page_header = document.querySelector(".page-header");


if (top_menu.classList.contains("top-menu--scroll")) {
  top_menu.classList.remove("top-menu--scroll");
  main_nav.classList.add("nav-hide");
  main_nav.classList.remove("nav-show");
  site_list.classList.add("site-list--tablet");
  top_contacts_list.classList.add("top-contacts-list--tablet");
  social_list.classList.add("social-list--tablet");
};

main_nav_toggle.addEventListener("click", function (evt) {
	evt.preventDefault();
  if (main_nav.classList.contains("nav-show")) {
    main_nav_toggle.classList.remove("main-nav__toggle--close");
    main_nav.classList.remove("nav-show");
    top_menu.classList.remove("top-menu--scroll");
    main_nav.classList.add("nav-hide");
    site_list.classList.add("site-list--tablet");
    top_contacts_list.classList.add("top-contacts-list--tablet");
    social_list.classList.add("social-list--tablet");
  } else 	{
    main_nav.classList.add("nav-show");
    main_nav_toggle.classList.add("main-nav__toggle--close");
    top_menu.classList.add("top-menu--scroll");
    main_nav.classList.remove("nav-hide");
    site_list.classList.remove("site-list--tablet");
    top_contacts_list.classList.remove("top-contacts-list--tablet");
    social_list.classList.remove("social-list--tablet");
  };
});
