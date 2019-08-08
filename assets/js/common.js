var itcast = {
	getRouterName : (str) => {
		let routerName = '';
		let  index = str.indexOf('?');
		if(index == -1){
			routerName += str.substring(str.lastIndexOf('/')+1)
		}else{
			routerName += str.substring(str.lastIndexOf('/')+1,str.indexOf('?'))
		}
		return routerName;
	}
}