'use strict';

var buttonBooking = document.querySelector("#reservation-button");
var buttonContact = document.querySelector("#contact-form-submit-button");
var buttonCheckout = document.querySelector("#order-button");

if(!(buttonBooking==null)){
  buttonBooking.addEventListener("click", function(){
    alert("Table reserved");
  });

  buttonBooking.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Table reserved");
    }
  });
}

if(!(buttonContact==null)){
  buttonContact.addEventListener("click", function(){
    alert("Contact form sent");
  });

  buttonContact.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Contact form sent");
    }
  });
}

if(!(buttonCheckout==null)){
  buttonCheckout.addEventListener("click", function(){
    alert("Order sent");
  });

  buttonCheckout.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
      alert("Order sent");
    }
  });
}
