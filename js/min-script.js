var feedbackButton=document.querySelector(".feedback-button"),feedbackPopup=document.querySelector(".feedback-popup"),feedbackClose=document.querySelector(".close-feedback"),feedbackName=document.querySelector(".feedback-name"),feedbackEmail=document.querySelector(".feedback-email"),feedbackForm=document.querySelector(".feedback-form"),slide1=document.querySelector(".slide-1"),slide2=document.querySelector(".slide-2"),slide3=document.querySelector(".slide-3"),buttonSlide1=document.querySelector(".slide-button-1"),buttonSlide2=document.querySelector(".slide-button-2"),buttonSlide3=document.querySelector(".slide-button-3"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("Name")}catch(e){isStorageSupport=!1}feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.add("popup-show"),storage?(feedbackName.value=storage,feedbackEmail.focus()):feedbackName.focus()}),feedbackClose.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.remove("popup-show"),feedbackPopup.classList.remove("popup-error")}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackEmail.value?isStorageSupport&&(localStorage.setItem("Name",feedbackName.value),localStorage.setItem("Email",feedbackEmail.value)):(e.preventDefault(),feedbackPopup.classList.remove("popup-error"),feedbackPopup.offsetWidth,feedbackPopup.classList.add("popup-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackPopup.classList.contains("popup-show")&&(e.preventDefault(),feedbackPopup.classList.remove("popup-show"),feedbackPopup.classList.remove("popup-error"))}),buttonSlide1.addEventListener("click",function(e){e.preventDefault(),slide1.classList.remove("visually-hidden"),slide2.classList.add("visually-hidden"),slide3.classList.add("visually-hidden"),buttonSlide1.classList.add("slide-button-active"),buttonSlide2.classList.remove("slide-button-active"),buttonSlide3.classList.remove("slide-button-active")}),buttonSlide2.addEventListener("click",function(e){e.preventDefault(),slide2.classList.remove("visually-hidden"),slide1.classList.add("visually-hidden"),slide3.classList.add("visually-hidden"),buttonSlide2.classList.add("slide-button-active"),buttonSlide1.classList.remove("slide-button-active"),buttonSlide3.classList.remove("slide-button-active")}),buttonSlide3.addEventListener("click",function(e){e.preventDefault(),slide3.classList.remove("visually-hidden"),slide1.classList.add("visually-hidden"),slide2.classList.add("visually-hidden"),buttonSlide3.classList.add("slide-button-active"),buttonSlide1.classList.remove("slide-button-active"),buttonSlide2.classList.remove("slide-button-active")});