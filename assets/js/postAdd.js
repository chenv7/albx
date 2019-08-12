//文件上传
$(function () {

	//选择文件就实现文件上传操作
	$('#feature').on('change', function () {
		//获取文档流中的对象
		let myfile = document.querySelector('#feature').files[0];
		//创建formdate对象
		var formdata = new FormData();
		//把文档流中的对象追加到formdata中
		formdata.append('img', myfile);
		// console.log(formadata)
		//创建ajax
		$.ajax({
			url: '/uploadFile',
			type: 'post',
			data: formdata,
			contentType: false, //让ajax不要进行数据编码处理，因为formdata已经处理过了
			dataType: 'json',
			processData: false, //让ajax 不要进行数据的处理，formdata已经处理好了
			success: function (res) {
				// console.log(res)
				if (res.code == 200) {
					$('.thumbnail').attr('src','/uploads/'+ res.img).show();
					$('[name="feature"]').val(res.img)
					// console.log(res)s
				} else {
					$('.alert-danger > span').text(res.msg).fadeIn(500).delay(2000).fadeOut(500);
				}
			}
		})
	});

	//动态加载分类数据
	$.ajax({
		type: 'get',
		url: '/getAllCate',
		dataType: 'json',
		success: function (res) {
			var str = '<option value="all">所有分类</option>' //固定结构
			for (var i = 0; i < res.data.length; i++) { //遍历出数据里的参数
				str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
			}
			//把内容填到html结构之中
			$('#category').html(str);
		}
	})


	//创建ckeditor富文本框控件替换页面中的textarea
	CKEDITOR.replace('content');
	var id = itcast.getParameter(location.search).id
	// console.log(id)

	$('.btnSave').on('click', function () {
		CKEDITOR.instances.content.updateElement();
		if(id){
			opt('/editPostById')
		}else{
			opt('/addPost')
		}	
	});

	function opt(url){
		$.ajax({
			type: 'post',
			url: url,
			data: $('form').serialize(),
			dataType: 'json',
			success: function (res) {
				if (res.code == 200) {
					location.href = '/admin/posts'
				} else {
					console.log(res.msg);
				}
			}
		});
	}
	if(id){
		$.ajax({
			url : '/getPostById',
			data : {id},
			dataType : 'json',
			success : function(res){
				//实现数据默认展示
				$('#title').val(res.data.title)
				$('#content').val(res.data.content)
				$('#slug').val(res.data.slug)
				$('.thumbnail').attr('src','/uploads/'+res.data.feature).show()
				$('#category').val(res.data.category_id)
				$('#status').val(res.data.status)
				//图片隐藏域
				$('[name=feature]').val(res.data.feature)
				$('[name="id"]').val(res.data.id)
				//时间处理
				$('#created').val(res.data.created)
			}
		})
	}
});