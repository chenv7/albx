$(function(){
	$('.btn_login').on('click',function(){
		$.ajax({
			url : '/Login',
			type : 'post',
			data : $('form').serialize(),
			success : function(res){
				console.log(res)
				if(res.code == 400){
					// console.log(res)
					$('.alert-danger>span').text(res.msg);
					$('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
				}else{
					location.href = '/admin';
				}
			}
		})
	})
})