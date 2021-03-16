'use strict';

//Used IAT339 Week 8 JavaScript Basics file for reference
var width = window.innerWidth;
console.log("Window width: "+width+"px");
var navDesktop = document.querySelector("#nav-desktop");
var navMobile = document.querySelector("#nav-mobile");
var buttonHamburger = document.querySelector("#hamburger-button");
var mobileNavItems = document.querySelector("#dropdown-menu");

if(width < 1100){
  navMobile.classList.remove("hidden");
  navMobile.classList.add("mobile-navbar");
  navMobile.setAttribute("aria-hidden", "false");
  buttonHamburger.classList.remove("hidden");
  buttonHamburger.classList.add("hamburger-button")
  buttonHamburger.setAttribute("aria-hidden", "false");
  navDesktop.classList.add("hidden");
  navDesktop.setAttribute("aria-hidden", "true");
}
else{
  navMobile.classList.add("hidden");
  navMobile.classList.remove("mobile-navbar");
  navMobile.setAttribute("aria-hidden", "true");
  buttonHamburger.classList.add("hidden");
  buttonHamburger.classList.remove("hamburger-button")
  buttonHamburger.setAttribute("aria-hidden", "true");
  navDesktop.classList.remove("hidden");
  navDesktop.setAttribute("aria-hidden", "false");
}

window.addEventListener("resize", function(){
  width = window.innerWidth;
  if(width < 1100){
    navMobile.classList.remove("hidden");
    navMobile.classList.add("mobile-navbar");
    navMobile.setAttribute("aria-hidden", "false");
    buttonHamburger.classList.remove("hidden");
    buttonHamburger.classList.add("hamburger-button")
    buttonHamburger.setAttribute("aria-hidden", "false");
    navDesktop.classList.add("hidden");
    navDesktop.setAttribute("aria-hidden", "true");
  }
  else{
    navMobile.classList.add("hidden");
    navMobile.classList.remove("mobile-navbar");
    navMobile.setAttribute("aria-hidden", "true");
    buttonHamburger.classList.add("hidden");
    buttonHamburger.classList.remove("hamburger-button")
    buttonHamburger.setAttribute("aria-hidden", "true");
    navDesktop.classList.remove("hidden");
    navDesktop.setAttribute("aria-hidden", "false");
  }
});

buttonHamburger.addEventListener("click", function(){
  if(mobileNavItems.classList.contains("hidden")){
    mobileNavItems.classList.remove("hidden");
    mobileNavItems.classList.add("dropdown-wrapper");
    mobileNavItems.setAttribute("aria-hidden", "false");
  }
  else{
    mobileNavItems.classList.add("hidden");
    mobileNavItems.classList.remove("dropdown-wrapper");
    mobileNavItems.setAttribute("aria-hidden", "true");
  }
});

//keypress event listener referred from https://stackoverflow.com/questions/14542062/eventlistener-enter-key/50993410
buttonHamburger.addEventListener("keypress", function(e){
  if(e.key == 'Enter'){
    if(mobileNavItems.classList.contains("hidden")){
      mobileNavItems.classList.remove("hidden");
      mobileNavItems.classList.add("dropdown-wrapper");
      mobileNavItems.setAttribute("aria-hidden", "false");
    }
    else{
      mobileNavItems.classList.add("hidden");
      mobileNavItems.classList.remove("dropdown-wrapper");
      mobileNavItems.setAttribute("aria-hidden", "true");
    }
  }
});
