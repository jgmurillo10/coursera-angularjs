( function (){
'use strict';

 angular.module('myFirstApp', [])


.controller('MyFirstController', function($scope){

	$scope.name="juan";
	$scope.sayHello = function(){
		return 'hello coursera'
	};	
});



})();
