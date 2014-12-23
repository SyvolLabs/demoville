angular.module('TweetMe', ['ngRoute'])

.config( ['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'template/home.html'
	})
	.when('/tweetme', {
		templateUrl: 'template/tweetme.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}])

.controller('tweetCtrl', ['$scope', function($scope){
	console.log('in the controller...');
	
	$scope.user_input = "";
	$scope.tweets = [];
	
	$scope.tweetMe = function() {
		$scope.tweets.push($scope.user_input);
	};
	
	$scope.cancel = function(){
		$scope.user_input = "";
		$scope.tweets = [];
	};
}])

.directive('tweetMe', function(){
	
	return function(scope, element, attrs){
		
		element.on('click', function(event){
			event.preventDefault();
			
			if ( scope.tweets.length < 3 ){
				scope.tweets.push(scope.user_input);
				
				scope.$apply();
			}
			
			var targetElement = $(element).siblings('.tweet');
			
			
			if ( scope.tweets.length < 3 ) {
				targetElement.hasClass('red') ?
					targetElement.removeClass('red').addClass('blue')
					:
					targetElement.addClass('blue')
					;
			} else {
				targetElement.hasClass('blue') ?
					targetElement.removeClass('blue').addClass('red')
					:
					targetElement.addClass('red')
					;
			}
			
		});
	};
})
;
