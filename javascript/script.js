

$ (function() {
	$('.slider').cycle({
		
		
		pager: $('.pager'),
		pagerAnchorBuilder: function (index, DOMelement) {
			return '<a></a>';
		},
		activePagerClass:'sliderativado'
	});
});