var quotes = [
  "The way to get started is to quit talking and begin doing.",
  "Life is what happens to you while you’re busy making other plans.",
  "Human beings are the only creatures that allow their children to come back home.",
  "Some editors are failed writers, but so are most writers.",
  "Nothing is particularly hard if you divide it into small jobs.",
  "Hatred paralyzes life; love releases it. Hatred confuses life; love harmonizes it. Hatred darkens life; love illuminates it.",
  "Only a life lived for others is a life worthwhile.",
  "There are only two ways to live your life. One is as though nothing is a miracle. The other is as if everything is."
]

var n = Math.floor((Math.random() * 8) + 1);
console.log(n);

$("#button1").click(function() {
  $("#quote").text(quotes[n]);
  n = Math.floor((Math.random() * 8) + 1);
});
