$(function() {

	var data = window.data_;
	var container = {
		element : $('*[class*=-list-items]'),
		height : $(window).height() - $('header').height(),
		width: $(window).width()
	}

	for (var i in data) {
		var t = data[i];
		var url = window.theme ? 
			'<a href="' + window.theme.userlabel + '/{{ t.userlabel }}">' : 
			'<a href="/{{ t.userlabel }}">';
		var html = url + 
			'<div class="bg" style="background-image: url({{ t.image }})">' +
				'<div class="fader">' +
					'<span>' +
						'<p>{{ t.name }}</p>' +
					'</span>' +
				'</div>' +
			'</div>' +
		'</a>';

		for (var j in t) {
		    var value = t[j];
		    var str = '{{ t.' + j + ' }}';
		    html = html.replace(str, value)
		}

		el_in_row = null;
		el_in_col = null;
		dl = data.length;

		if (dl == 1) {
			el_in_col = el_in_row = 1;
		} else if (dl == 2) {
			el_in_row = 1;
			el_in_col = 2;
		} else if (dl >= 3) {
			el_in_row = 2;
			if (dl % 2 == 1) {
				el_in_col = Math.ceil(dl/2);
			} else {
				el_in_col = Math.floor(dl/2);
			}
		}
		if (dl == 6) {
			el_in_row = 3;
			el_in_col = 2;
		}
		if (dl > 6) {
			el_in_row = Math.ceil(dl/3);
			el_in_col = 3;
		}

		i = parseInt(i);
		
		if ( (i == dl - 1) && (i % 2 == 0) && (dl != 1 ) ) {
			el_in_row = 1;
		}
		
		var tour_element = $('<div>')
			.addClass('each-theme')
			.css({
				'width' : container.width/el_in_row,
				'height' : container.height/el_in_col,
				'line-height' : container.height/el_in_col + 'px'
			})
			.html(html)
			.appendTo(container.element);

		(function(i, tour_element) {
			setTimeout(function() {
				tour_element.css({
					opacity : 1
				});
			}, (i + 1) * 100)
		})(i, tour_element)
	}

})










