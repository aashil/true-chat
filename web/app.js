	var app = angular.module("chat", ["ngCookies"]);

	app.directive("ngEnter", function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
	
	app.controller("MainCtl", ["$scope", "$window", function($scope, $window){
		
		$scope.messages = [];
		$scope.username = $window.prompt("Please enter your name:", "");
		console.log($scope.username);
		var conn = new WebSocket("ws://localhost:12000/ws");
		
		conn.onclose = function(e){
			$scope.$apply(function(){
				//$scope.messages.push(message);
				conn.send($scope.username + ":" + "Disconnected");
			})
		}
		
		conn.onopen = function(e){
			$scope.$apply(function(){
				conn.send($scope.username + ":" + "Connected");
			})
		}
		
		conn.onmessage = function(e){
			$scope.$apply(function(){
			
				var data = e.data;
				
				var i = data.indexOf(':');
				var message = [];
				message.username = data.slice(0, i).trim();
				message.message = data.slice(i + 1, data.length).trim();
				
				$scope.messages.push(message);
			})
		}
		
		$scope.send = function(){
			conn.send($scope.username + ":" +$scope.msg);
			$scope.msg = '';
		}
	}]);