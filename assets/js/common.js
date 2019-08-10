var itcast = {
	getRouterName : (str) => {
		//设置一个空字符串
		let routerName = '';
		//求出？的索引
		let  index = str.indexOf('?');
		//当没有问号的时候，代表后面是没有参数的
		if(index == -1){
			//求出/后面的地址
			routerName += str.substring(str.lastIndexOf('/')+1)
		}else{
			//截取到斜杠后面的地址，一共截取到？索引这个数量
			routerName += str.substring(str.lastIndexOf('/')+1,str.indexOf('?'))
		}
		//返回所求得名字
		return routerName;
	}
}