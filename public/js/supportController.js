var app = angular.module("TextSupport");

app.controller("supportController", function($scope, $firebase, mainService){

	 var sync = $firebase(new Firebase("http://textsuhport.firebaseio.com/numbers"));
	$scope.numbers = sync.$asArray();
		 	console.log($scope.numbers);

	$scope.sendMessage = function(message, number){
		mainService.newMessage(message, number).then(function(){
			$scope.newMessage = "";
		});
	}


})
