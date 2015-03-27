app = angular.module('admin', ['ui.tinymce']);

app.controller('Admin', ['$scope', '$http', function($scope, $http) {
	$scope.themes = window.themes;
	$scope.subthemes = window.subthemes;

	$scope.add = function (type, obj) {
		console.log('add', type , obj);
		$http.post('/admin/save/' + type, obj)
			.success(function(data) {
				console.log(data);
			})
			.error(function(data) {
				console.log(data);
			})
	}
}])
