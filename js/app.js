
	
$(document).ready(function() {
	function addItem() {
		var itemdesc = $('.input').find('input').val();
		var listelement = "<div class='item'> \
					<div class='checkitem'> \
						<i class='icon-checkmark'></i> \
					</div> \
					<div class='itemtext'> \
						<p>" + itemdesc + "</p> \
					</div> \
					<div class='delitem'> \
						<i class='icon-close'></i> \
					</div> \
				</div>";
		$('.items').prepend(listelement);
		$('.input').find('input').val('');
	}
	$('.additem').click(function () {
		addItem();
	});
	$('.input').find('input').keydown(function (event) {
		if(event.which == 13) {
			addItem();
		}
	});
	$('.items').on('click', '.checkitem', function () {
		$(this).toggleClass('checked');
		$(this).closest('.item').find('.itemtext p').toggleClass('crossed-off');
	})	
	.on('click', '.delitem', function () {
		$(this).closest('.item').remove();
	});
});
