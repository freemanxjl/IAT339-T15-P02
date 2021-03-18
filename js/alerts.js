'use strict';

var buttonBooking = document.querySelector("#reservation-button");
var buttonContact = document.querySelector("#contact-form-submit-button");
var buttonCheckout = document.querySelector("#order-button");

if(!(buttonBooking==null)){
  buttonBooking.addEventListener("click", function(){
    alert("Your table has been reserved, see you soon!");
  });

  buttonBooking.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Your table has been reserved, see you soon!");
    }
  });
}

if(!(buttonContact==null)){
  buttonContact.addEventListener("click", function(){
    alert("Your message has been sent, thank you.");
  });

  buttonContact.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Your message has been sent, thank you.");
    }
  });
}

if(!(buttonCheckout==null)){
  buttonCheckout.addEventListener("click", function(){
    alert("Thank you for your purchase, your order has been confirmed.");
  });

  buttonCheckout.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Thank you for your purchase, your order has been confirmed.");
    }
  });
}
