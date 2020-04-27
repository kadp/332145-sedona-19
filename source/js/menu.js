var listCloseButton = document.querySelector(".site-list__toggle");
var listMenuButton = document.querySelector(".logo__menu");
var listState = document.querySelector(".main-nav__list");

listCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.add("hide");
});

listMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (listState.classList.contains("hide")) {
    listState.classList.remove("hide");
  } else {
    listState.classList.add("hide");
  }
});
