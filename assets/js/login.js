$(function(){
	$('.btn_login').on('click',function(){
		$.ajax({
			url : '/Login',
			type : 'post',
			dataType : 'json',
			data : $('form').serialize(),
			sunccess : function(res){
				if(res.code == 400){
					$('.alert-danger>span').text(res.msg);
					$('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
				}else{
					location.href = '/admin';
				}
			}
		})
	})
})