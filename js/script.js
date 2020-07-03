var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackClose = document.querySelector(".close-feedback");
var feedbackName = document.querySelector(".feedback-name");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackForm = document.querySelector(".feedback-form");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");
var buttonSlide1 = document.querySelector(".slide-button-1");
var buttonSlide2 = document.querySelector(".slide-button-2");
var buttonSlide3 = document.querySelector(".slide-button-3");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("Name");
} catch (err) {
	isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackPopup.classList.add("popup-show");

	if (storage) {
		feedbackName.value = storage;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

feedbackClose.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackPopup.classList.remove("popup-show");
	feedbackPopup.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!feedbackName.value || !feedbackEmail.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("popup-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("popup-error");
	} else {
		if(isStorageSupport){
			localStorage.setItem("Name", feedbackName.value);
			localStorage.setItem("Email", feedbackEmail.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("popup-show")) {
			evt.preventDefault();
			feedbackPopup.classList.remove("popup-show");
			feedbackPopup.classList.remove("popup-error");
		}
	}
});

buttonSlide1.addEventListener("click", function(evt){
	evt.preventDefault();
	slide1.classList.remove("visually-hidden");
	slide2.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	buttonSlide1.classList.add("slide-button-active");
	buttonSlide2.classList.remove("slide-button-active");
	buttonSlide3.classList.remove("slide-button-active");
});

buttonSlide2.addEventListener("click", function(evt){
	evt.preventDefault();
	slide2.classList.remove("visually-hidden");
	slide1.classList.add("visually-hidden");
	slide3.classList.add("visually-hidden");
	buttonSlide2.classList.add("slide-button-active");
	buttonSlide1.classList.remove("slide-button-active");
	buttonSlide3.classList.remove("slide-button-active");
});

buttonSlide3.addEventListener("click", function(evt){
	evt.preventDefault();
	slide3.classList.remove("visually-hidden");
	slide1.classList.add("visually-hidden");
	slide2.classList.add("visually-hidden");
	buttonSlide3.classList.add("slide-button-active");
	buttonSlide1.classList.remove("slide-button-active");
	buttonSlide2.classList.remove("slide-button-active");
});