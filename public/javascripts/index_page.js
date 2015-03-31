app = angular.module('index', [])

app.controller('Index', [ '$scope', '$http', function($scope, $http) {
	$scope.themes = window.themes;	
}])










