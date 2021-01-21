var modal = document.getElementById("openModal");
var modalReport = document.getElementById("openModalReport");
// Get the button that opens the modal
var btn = document.getElementById("apply_button");

// Get the <span> element that closes the modal
var img = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <div > (x), close the modal
img.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalReport) {
    modalReport.style.display = "none";
  }
}




// Get the button that opens the modal
var btnReport = document.getElementById("createReport");

// Get the <span> element that closes the modal
var imgReport = document.getElementById("closeReport");

// When the user clicks on the button, open the modal
btnReport.onclick = function() {
    modalReport.style.display = "block";
}

// When the user clicks on <div > (x), close the modal
imgReport.onclick = function() {
    modalReport.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
