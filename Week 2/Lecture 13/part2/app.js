(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('vowels', CustomFilterFactory)
.filter('loves', LovesFilter);

MsgController.$inject = ['$scope', 'vowelsFilter', 'lovesFilter'];
function MsgController($scope, vowelsFilter) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    
    return vowelsFilter(msg);
  };
    $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    
    return lovesFilter(msg);
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}
function CustomFilterFactory (){
	return function (input){
		//change input


		var array = input.split('');
		var output = '';
		for (var i = 0; i < array.length; i++) {
			if(array[i]!=='a'&&
				array[i]!=='e'&&
				array[i]!=='i'&&
				array[i]!=='o'&&
				array[i]!=='u'){
				output+=array[i];
			}
		}
		// for (var i = array.length-1; i >= 0; i--) {
		// 	output+=array[i];
		// 	console.log(array[i])
		// }
		return output;
	}
}
function LovesFilter () {
	return function (input) {
		input = input || "";
		input = input.replace('likes', 'loves');
		return input;
	};
}

})();
