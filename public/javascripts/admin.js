app = angular.module('admin', ['ui.tinymce']);

app.controller('Admin', ['$scope', '$http', function($scope, $http) {
	$scope.themes = window.themes;
	$scope.tours = window.tours;

	$scope.tinymce_opts = {
		selector: "textarea",
		height: '500px',
        plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
        ],

        toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
        toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",

        menubar: false,
        toolbar_items_size: 'small',

        style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],

        templates: [
                {title: 'Test template 1', content: 'Test 1'},
                {title: 'Test template 2', content: 'Test 2'}
        ]
	}

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
				st.tours = st.tours || [];
				st.tours.push(t);
			}
		}
	}
}])
