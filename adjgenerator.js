//Create an array of adjectives or adverbs
var adjAdv =
["dope",
 "swiggity swag",
 "righteous brother",
 "swagalicious dude"];
//Ask the person for his or her name
var askName = prompt("What is your name?");
//Let the user know what kind of person you are. For example,
//user name followed or preceeded by the array item
var x = Math.floor(Math.random() * adjAdv.length);
window.alert(adjAdv[x]);