app = angular.module('admin', ['ui.tinymce']);

app.controller('Admin', ['$scope', '$http', function($scope, $http) {
	$scope.themes = window.themes;
	$scope.tours = window.tours;

	$scope.loadDataToUpdate = function(data, type) {

		if (type == 'tour') {
			$scope.newtour = data;
			$scope.updateButtonTour = true;
		} else if (type == 'theme') {
			$scope.newtheme = data;
			$scope.updateButtonTheme = true;
		}
	}

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

	$scope.update = function (type, obj) {
		console.log('update', type , obj);
		$http.post('/admin/update/' + type, obj)
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
