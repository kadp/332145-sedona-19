var listCloseButton = document.body.querySelector(".site-list__toggle");
var listMenuButton = document.body.querySelector(".logo__menu");
var listState = document.body.querySelector(".main-nav__list");

listCloseButton.classList.remove("no-js");
listMenuButton.classList.remove("no-js");
listState.classList.remove("main-nav__list--open");

listCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.remove("main-nav__list--open");
});

listMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (listState.classList.contains("main-nav__list--open")) {
    listState.classList.remove("main-nav__list--open");
  } else {
    listState.classList.add("main-nav__list--open");
  }
});
