var rates_open = document.querySelector(".rates__button");
var rates_modal = document.querySelector(".rates-modal");
var rates_close = document.querySelector(".rates-modal__button-close");

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
