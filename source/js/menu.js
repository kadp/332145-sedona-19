var listClose = document.querySelector(".site-list__toggle");
var listOpen = document.querySelector(".logo__menu");
var listState = document.querySelector(".main-nav__list");

listClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.add("hide");
});

listOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.remove("hide");
});