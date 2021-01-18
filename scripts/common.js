// Get the modals
var modal = document.getElementById("SignUpModal");
var signin_modal = document.getElementById("SignInModal");

// Get the button that opens the modal
var signup_btn = document.getElementById("sign-up-button");
var signin_btn = document.getElementById("sign-in-button");
var signup_link = document.getElementById("sign-up-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var signin_span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
signup_btn.onclick = function() {
  var modal_content = document.getElementsByClassName("modal-content")[0];
  modal_content.style.width = "25%";
  modal_content.style.display="flex";
  modal_content.style.flexDirection ="row";
  modal_content.style.flexWrap ="wrap";
  modal_content.style.margin ="10% 30% 20% 40%";
  modal.style.display = "block";
}
signin_btn.onclick = function() {
    var modal_content = document.getElementsByClassName("modal-content")[1];
    modal_content.style.width = "25%";
    modal_content.style.display="flex";
    modal_content.style.flexDirection ="row";
    modal_content.style.flexWrap ="wrap";
    modal_content.style.margin ="10% 30% 20% 40%";
    signin_modal.style.display = "block";
  }

  signup_link.onclick = function() {
    signin_modal.style.display = "none";
    var modal_content = document.getElementsByClassName("modal-content")[0];
    modal_content.style.width = "25%";
    modal_content.style.display="flex";
    modal_content.style.flexDirection ="row";
    modal_content.style.flexWrap ="wrap";
    modal_content.style.margin ="10% 30% 20% 40%";
    modal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; 
}

// When the user clicks on <span> (x), close the modal
signin_span.onclick = function() {    
    signin_modal.style.display = "none";
  }
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == signin_modal) {
    modal.style.display = "none";
    signin_modal.style.display = "none";
  }
}