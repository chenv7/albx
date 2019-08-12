$(function () {

	//读取页面上数据
	function init() {
		$.ajax({
			url: '/getAllCate',
			dataType: 'json',
			success: function (res) {
				$('tbody').html(template('cateListTemp', res))

			}
		})
	}
	init()

	//添加编辑
	$('tbody').on('click', '.btnedit', function () {
		var obj = $(this).data()
		// console.log(obj)
		$('#id').val(obj.id)
		$('#name').val(obj.name)
		$('#slug').val(obj.slug)
		$('.optinfo').text('编辑分类数据')
		$('.btnAdd').hide()
		$('.btnEdit').show()
	})

	//为编辑按钮添加事件
	$('.btnEdit').on('click', function () {
		$.ajax({
			url: '/editCate',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			success: function (res) {
				if (res.code == 200) {
					$('.alert-danger > span').text(res.msg)
					$('.alert-danger').fadeIn(500).delay(3000).fadeOut(500)
					$('.optinfo').text('添加分类数据')
					$('.btnAdd').show()
					$('.btnEdit').hide()
					$('[name="id"]').val('')
					$('[name="name"]').val('')
					$('[name="slug"]').val('')
					init()
				}
			}
		})
	})
	$('.btnAdd').on('click', function () {
		$.ajax({
			url: '/addCate',
			type: 'post',
			dataType: 'json',
			data: $('form').serialize(),
			success: function (res) {
				if (res.code == 200) {
					$('.alert-danger > span').text(res.msg)
					$('.alert-danger').fadeIn(500).delay(3000).fadeOut(500)
					$('[name="name"]').val('')
					$('[name="slug"]').val('')
					init()
				}
			}
		})
	})
	//用委托实现单项删除
	$('tbody').on('click', '.btndel', function () {
		if (confirm('是否删除?')) {
			let id = $(this).data('id')
			$.ajax({
				url: '/delCateById?id='+id,
				dataType: 'json',
				success: function (res) {
					if (res.code == 200) {
						$('.alert-danger > span').text(res.msg)
						$('.alert-danger').fadeIn(500).delay(3000).fadeOut(500)
						init()
					}
				}
			})
		}
	})
	$('.chkAll').on('click', function () {
		let status = $('.chkAll').prop('checked')
		$('tbody .chkSingle').prop('checked', status)
		if ($('tbody .chkSingle:checked').length > 1) {
			$('.btnDel').fadeIn(500)
		} else {
			$('.btnDel').fadeOut(500)
		}
	})
	$('tbody').on('click', '.chkSingle', function () {
		//获取复选框的数量
		let cnt = $('tbody .chkSingle:checked').length
		//当前tbody中的所有复选框的数量
		let cont = $('tbody .chkSingle').length
		//判断数量---弹出批量删除按钮
		if (cnt > 1) {
			$('.btnDel').fadeIn(500)
		} else {
			$('.btnDel').fadeOut(500)
		}
		// 判断s是否让全选复选框也被选中
		if (cnt == cont) {
			$('.chkAll').prop('checked', true)
		} else {
			$('.chkAll').prop('checked', false)
		}
	})

	//实现批量删除
	$('.btnDel').on('click', function () {
		if (confirm('是否删除?')) {
			//获取所有被选中的复选框
			var chnks = $('tbody .chkSingle:checked')
			//设置一个空数组
			let ids = []  
			//遍历每一个被选中的复选框
			for (let i = 0; i < chnks.length; i++) {
				//将每个复选框内的自定义id的值插入到ids空数组里面去
				ids.push(chnks[i].dataset['id'])
			}
			console.log(ids)   //["1""2""3"]
			$.ajax({
				url: '/delCateById?id=' + ids.join(','), //["1","2","3"]
				dataType: 'json',
				success: function (res) {
					if (res.code == 200) {
						$('.alert-danger > span').text(res.msg)
						$('.alert-danger').fadeIn(500).delay(3000).fadeOut(500)
						init()
					}
				}
			})
		}
	})

})