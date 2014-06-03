
	
$(document).ready(function() {
	$('.additem').click(function () {
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
	});
	$('.checkitem').click(function () {
		alert('Checked!');
		$(this).toggleClass('checked');
		$(this).closest('.item').find('.itemtext p').toggleClass('crossed-off');
	});	
	$('.delitem').click(function () {
		$(this).closest('.item').remove();
	});
});