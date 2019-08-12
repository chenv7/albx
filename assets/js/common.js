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
	},
	getParameter:(str) => {
        var obj = {}
        str = str.substring(1) // id=5&name=jack
        // 按&符号进行分隔
        let temp = str.split('&') // ['id=5','name=jack']
        // 遍历
        for(var i=0;i< temp.length;i++){
            let arr = temp[i].split('=') // ['id',5] 
            obj[arr[0]] = arr[1]
        }
		return obj
		// console.log(obj)
    }
}