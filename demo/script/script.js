$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".voornaam").filter(function() {
        $(this).parentsUntil(".row").toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });