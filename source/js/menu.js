var buttonClose = document.querySelector(".main-nav__toggle");
var findList = document.querySelector(".main-nav__list");

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (findList.classList.contains("hide")) {
    findList.classList.remove("hide");
  } else
    findList.classList.add("hide");
});
