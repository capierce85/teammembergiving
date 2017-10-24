
$(function(){

	$('.menu').click(function(){
		$('nav').toggle();
	});
	
	// Add Active State to Amount Buttons /
	$('.amount li').click(function(){
		var num = $(this).find('span').text();
		$('.other-field input').val(num);
		$('.amount li').removeClass('active');
		$(this).toggleClass('active');
	});

	$('.other').click(function(){
		$('.other-field').slideToggle();
		$('.other-field input').val('25');
	});
	
	$('input[name="send"]').change(function(){
        if ($(this).is(':checked') && $(this).val() == 'Mail') {
            $('.send-email').hide();
            $('.notif').show();
        }
        if ($(this).is(':checked') && $(this).val() == 'Email') {
            $('.notif').hide();
            $('.send-email').show();
        }
    });
    $('input[name="tribute"]').click(function(){
        if ($(this).is(':checked') && $(this).val() == 'Yes') {
            $('.send-by').show();
            $('.send-email').show();
        }
        if (!$(this).is(':checked')) {
            $('.send-by').hide();
            $('.send-email').hide();
            $('.notif').hide();
            $('input[name="send"]:nth(0)').attr('checked',true);
        }
    });
	

});