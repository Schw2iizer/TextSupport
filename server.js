var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var firebase = require("firebase");
var twilio = require("twilio");
var request = require("request");
var port = 8080;

var firebaseref = "http://textsuhport.firebaseio.com/numbers";

var accountSid = 'ACafadc1cf79cfa00f6fad63ad6b11ef78';
var authToken = "a3e5d6e082d7b3b8baa45df570570af7";
var client = require('twilio')(accountSid, authToken);


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.post("/api/support/messages", function(req, res){
    client.messages.create({
    body: "Not sure what to do",
    to: "18013585542",
    from: "+13852194455"
}, function(err, message) {
console.log(err, message)})
})




app.listen(port);