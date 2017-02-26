$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "hello", "would-you-rather", "adventurous", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});
