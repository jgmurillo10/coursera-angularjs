(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {


  $scope.onceCounter=0;
  $scope.counter=0;
  $scope.value=0;
  $scope.showNumberOfWatchers = function () {
  	console.log( '# of Watchers: ', $scope.$$watchersCount);
  };
  $scope.countOnce = function () {
  	$scope.onceCounter=1;
  };
  $scope.upCounter= function () {
  	$scope.counter=$scope.counter+1;
  }
  $scope.getValue= function () {
  	/* body... */
  	return $scope.value;
  }

  $scope.$watch(function () {
  	console.log('Digest Loop Fired!!')
  })
  // $scope.$watch('counter', function (newValue, oldValue) {
  // 	console.log('Old value: ', oldValue );
  // 	console.log('New value: ', newValue);
  // })
  //  $scope.$watch('onceCounter', function (newValue, oldValue) {
  // 	console.log('Once counter Old value: ', oldValue );
  // 	console.log('Once counter New value: ', newValue);
  // })
}

})();
