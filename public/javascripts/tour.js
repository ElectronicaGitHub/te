app = angular.module('index', ['ngSanitize'])

app.controller('Tour', [ '$scope', '$http', '$sce', function($scope, $http, $sce) {
	$scope.tour = window.tour;
}])


