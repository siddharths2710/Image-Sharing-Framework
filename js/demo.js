$(function () {
	'use strict'

	var linksContainer = $('#links')
	for (var i = 1; i <= 12; i++) {
		//$.ajax({url:"http://fiddle.jshell.net/favicon.png"})
		//.done(function(r) {
		//console.log(r);
			
		$('<div/>')
			.attr('class', 'panel panel-default mypanel')
			.append($('<div/>')
				.attr('class', 'panel-heading')
				.append($('<h3/>').attr('class', 'panel-title')
					.text('Image ' + i))
			)
			.append($('<div/>')
				.attr('class', 'panel-body')
				.append($('<a/>')
					.append($('<img>')
						.prop('src', "images/" + i + ".jpg")
						.attr('class', 'thumb'))
					.prop('href', 'images/'+i+'.jpg')
					.prop('title', 'Image ' + i)
					//.attr('class', 'col-sm-6 col-md-3')
					.attr('data-gallery', '')
				)
				.append($('<div/>')
					.attr('class', 'myfooter')
					.append(
						//$('<button/>')
						//.attr('type', 'button')
						//.attr('class', 'btn btn-default pull-left like')
						'<div class="btn btn-default pull-left like">\
							<i class="glyphicon glyphicon-thumbs-up"></i>Like</div>\
						<div class="btn btn-default pull-right share">\
							<i class="glyphicon glyphicon-share"></i>Share</div>')
					)
			)
			.appendTo(linksContainer)
			
		$(".btn.btn-default.pull-left.like").on("click", function() {
			$(this).attr('class', 'btn btn-primary pull-left like');
		})
		//})
	};
})
