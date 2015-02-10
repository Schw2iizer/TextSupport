var app = angular.module("TextSupport");

app.service("mainService", function($http){
	
      this.newMessage = function(message, number) {
        console.log("working?");
        return $http({
        	method: 'POST', 
        	url: '/api/support/messages', 
        	data: {
          		message: message,
          		to: number
       		 }});
     	 }
   


	})
