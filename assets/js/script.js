var dateP = $("<p class=\"lead\" id=\currentDay\">");
var now = moment().format("dddd, MMMM Do");
dateP.text(now);

$(".jumbotron").append(dateP);
