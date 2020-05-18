var popupError = document.querySelector(".message");
var popupSend = document.querySelector(".message--send");
var form = document.querySelector("form");
var firstName = form.querySelector("[name=firstName]");
var lastName = form.querySelector("[name=lastName]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");
var buttonMessage = document.querySelector(".message__button")

form.addEventListener("submit", function (evt) {
  if (!firstName || !lastName || !tel.value || !email.value) {
    evt.preventDefault();
    popupError.classList.add("show");
  } else {
    evt.preventDefault();
    popupSend.classList.add("show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupError.classList.contains("show")) {
      evt.preventDefault();
      popupError.classList.remove("show");
    } else {
      popupSend.classList.remove("show");
    }
  }
});

buttonMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSend.classList.remove("show");
});
