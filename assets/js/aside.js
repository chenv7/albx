//实现做菜单栏单项的展开和合并
$(function(){
	//获取元素
	let menuPosts = $('#menu-posts');
	let menuSettings = $('#menu-settings');
	//获得当前的路由名称
	let routerName = itcast.getRouterName(location.href);
	//当路由名称是 文章内的三个地址时
	if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
		//展开文章列表
		menuPosts.addClass('in').attr('aria-expanded',true);
		//文章列表的箭头文字图标变化
		menuPosts.parent().find('.collapsed').removeClass('collapsed')
	}
	//当路由名称为设置内三个地址时
	if(routerName == 'nav-menus' || routerName == 'slides' || routerName =='settings'){
		//展开设置的列表
		menuSettings.addClass('in').attr('aria-expanded',true)
	} 
	//给类名添加个属性
	$('#'+routerName).addClass('active')
})