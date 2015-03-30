app = angular.module('admin', ['ui.tinymce']);

app.controller('Admin', ['$scope', '$http', function($scope, $http) {
	$scope.themes = window.themes;
	$scope.tours = window.tours;

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

	for (var i in $scope.tours) {
		var t = $scope.tours[i];
		for (var j in $scope.themes) {
			var st = $scope.themes[j];
			if (t.theme == st.userlabel) {
				st.tours = st.tours = [];
				st.tours.push(t);
			}
		}
	}
}])
