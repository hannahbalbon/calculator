$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var US = $("select#hello").val();
    var Latin America = $("select#hola").val();
    var Italy = $("select#ciao").val();
    var China = $("select#nihao").val();
    var Japan = $("select#konnichiwa").val();
    var Philippines = $("select#kamusta").val();
    var final-vacation = $("#final-vacation").val();

    var final-vacation;
    if (hello === hello)  {
      $("how-hello").show(explore the U.S.);
    } else if (hello === hola)  {
      $("#how-hello").show("You are ready to branch out in Latin America");
    } else if (hello === ciao)  {
      $("#how-hello").show("Nel Blu di pinto di blu in Italy!");
    } else if (hello === nihao)  {
      $("#how-hello").show("The great wall of CHINA is calling you!");
    } else if (hello === konnichiwa)  {
      $("#how-hello").show("Try sushi, ramen, and play with Super Mario in Japan!");
    } else (hello === kamusta)  {
      $("#how-hello").show("Find out why heaven is a place on earth in the Philippines!");
    }

    $("#how-hello").append(final-vacation);
    $("#final-vacation").show();

  });
});
