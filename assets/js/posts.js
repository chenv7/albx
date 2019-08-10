$(function(){

	var pageNum = 1;//设置一个公共页面数
	var pageSize = 10;//设置一个公共当页内容数
    //将收集数据的阿贾克斯封装
	function init(search){
        $.ajax({
            url:'/getAllPost',
            type:'get',
            // 分页查询需要参数
            data:{
                pageNum:pageNum,   
                pageSize:pageSize,  
                ...search
            },
            success:function(result){
                // console.log(result)
                // 生成动态数据结构
                // 如果数据是对象，直接传递对象，如果数据是数组，就包装为对象
                var html = template('postListTemp',result.data)
                //生成结构
                $('tbody').html(html)
                // // 生成分页结构
                setPagenation(Math.ceil(result.data.total / pageSize))
            }
        })
    }
	init()//调用ajax

	 // 实现分页功能
    function setPagenation(total){
        // 初始化
        $('.pagination').bootstrapPaginator({
            // 配置
            bootstrapMajorVersion:3,
            currentPage:pageNum, // 当前页码
            totalPages:total, // 总页数
            onPageClicked:function(event,originalEvent,type,page){
                // page就是你当前想获取数据的页码
                // 修改全局pageNum
                pageNum = page
                // 重新调用加载数据的方法
                init()
            }
        })
    }
    
    //加载分类数据
	$.ajax({
		type : 'get',
		url : '/getAllCate',
		dataType : 'json',
		success : function(res){
			// console.log(res)
			var str = '<option value="all">所有分类</option>'
			for(let i = 0; i < res.data.length; i++){
				str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            // console.log(res.data)
			$('.cateSelector').html(str)
		}
	})

    //实现筛选功能
    $('.btn-search').on('click',function(){
        //收据数据
        var obj = {
            cate : $('.cateSelector').val(),
            status : $('.statuSelector').val()
        }
        // console.log(obj)
        //调用ajax并发送数据
        init(obj);
    })
})

