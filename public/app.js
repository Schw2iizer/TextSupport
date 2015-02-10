
var app = angular.module("TextSupport", ["ngRoute", "firebase"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "home.html",
		controller: "mainController"
	})
	.when("/support", {
		templateUrl: "support.html",
		controller: "supportController"
	})
	.otherwise({ redirectTo: "/" })




})