var greeter = require("./Greeting.js");
var config = require("./config.json");

var css = require("./main.css");

document.getElementById('main').appendChild(greeter(config.greetText));
