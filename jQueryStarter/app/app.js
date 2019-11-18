

function buttonPressed(btnId) {
  console.log("pressed " + btnId);
}

function addListener() {
  var sectionShowing = "homeSection";
  var sectionToHide = "";
  $('#' = sectionShowing).html(homeContent);


function addListener(firstName, lastName) {
  $("nav a").click(function(e) {
    var buttonId = e.currentTarget.id;
    var sectionId = buttonId + "Section";
    var currentContent = buttonId + 'Content';



    $("#" + sectionShowing).css("display", "none");
    sectionShowing = sectionId;
    $('#' = sectionShowing).html(currentContent);
    $("#" + sectionShowing).css("display", "block");

    //$("section").html(buttonId);
    //buttonPressed(buttonId);
  });
  //console.log("Hello there " + firstName + " " + lastName);
}

}

$(document).ready(function() {
  addListener();
  //alert("document is ready!");
  //addListener("Vladimir", "Borislav");
});
