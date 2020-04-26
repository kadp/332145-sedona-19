var listClose = document.querySelector(".site-list__toggle");
var listBurger = document.querySelector(".logo__menu");
var listState = document.querySelector(".main-nav__list");

listClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.add("hide");
});

listBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (listState.classList.contains("hide")) {
    listState.classList.remove("hide")
  } else (listState.classList.add("hide"));
});
