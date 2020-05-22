var listCloseButton = document.body.querySelector(".site-list__toggle");
var listMenuButton = document.body.querySelector(".logo__menu");
var listState = document.body.querySelector(".main-nav__list");

listCloseButton.classList.remove("no-js");
listMenuButton.classList.remove("no-js");
listState.classList.remove("show");

listCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  listState.classList.remove("show");
});

listMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (listState.classList.contains("show")) {
    listState.classList.remove("show");
  } else {
    listState.classList.add("show");
  }
});
