//实现做菜单栏单项的展开和合并
$(function(){
	//获取元素
	let menuPosts = $('#menu-posts');
	let menuSettings = $('#menu-settings');
	//获得当前的路由名称
	let routerName = itcast.getRouterName(location.href);
	if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
		menuPosts.addClass('in').attr('aria-expanded',true);
		menuPosts.parent().find('.collapsed').removeClass('collapsed')
	}
	if(routerName == 'nav-menus' || routerName == 'slides' || routerName =='settings'){
		menuSettings.addClass('in').attr('aria-expanded',true)
	}
	$('#'+routerName).addClass('active')
})