var modal = document.getElementById("openModal");
var modalReport = document.getElementById("openModalReport");
// Get the button that opens the modal
var btn = document.getElementById("apply_button");
var cancel = document.getElementById("cancelReport");

// Get the <span> element that closes the modal
var img = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
cancel.onclick = function() {
  modalReport.style.display = "none";
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



function addReport() {
  // get values
  var date_from = $("#date_from").val();
  var date_until = $("#date_until").val();

  var client = $("#client").val();
  var IIN = $("#IIN").val();
  var dosc = $("#dosc").val();
  var date_of_report = $("#date_of_report").val();
  var number_of_report = $("#number_of_report").val();
  var client_data = $("#client_data").val();
  var model = $("#model").val();
  var serial_number = $("#serial_number").val();
  var IMEI = $("#IMEI").val();
  var manager = $("#manager").val();
  var repair_cost = $("#repair_cost").val();



  // Add report
  $.post("ajax/addReport.php", {
    date_from:date_from,
    date_until: date_until,

    client: client,
    IIN: IIN,
    dosc: dosc,
    date_of_report: date_of_report,
    number_of_report: number_of_report,
    client_data: client_data,
    model: model,
    serial_number: serial_number,
    IMEI: IMEI,
    manager: manager,
    repair_cost: repair_cost
  }, function (data, status) {
      // close the popup
      modalReport.style.display = "none";

      // read records again
      // readRecords();

      // clear fields from the popup
      var date_from = $("#date_from").val("");
      var date_until = $("#date_until").val("");
    
      var client = $("#client").val("");
      var IIN = $("#IIN").val("");
      var dosc = $("#dosc").val("");
      var date_of_report = $("#date_of_report").val("");
      var number_of_report = $("#number_of_report").val("");
      var client_data = $("#client_data").val("");
      var model = $("#model").val("");
      var serial_number = $("#serial_number").val("");
      var IMEI = $("#IMEI").val("");
      var manager = $("#manager").val("");
      var repair_cost = $("#repair_cost").val("");
     
  });
}