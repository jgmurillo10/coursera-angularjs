(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope){
	$scope.name="";
	$scope.value=0;
	$scope.displayNumeric =function(){
		var totalNameValue = calculateNumericForString($scope.name);
		$scope.value=totalNameValue;
	};

	function calculateNumericForString(string){
		var totalValue=0;
		for (var i = 0; i < string.length; i++) {
			totalValue+=string.charCode At(i);
		}
		return totalValue;
	}
	


});



})();
