const userModel = require('../models/userModel');

exports.login = (req,res)=>{
	//通过中间件获得ajax收集、发送过来的数据
	var obj = req.body;
	// console.log(obj);
	userModel.login(obj.email,(err,data)=>{
		//可能是sql的语法错误导致出错
		if(err){
			//res.json 可以直接将js对象转换位json格式字符串并返回
			res.json({code : 400 , msg : '服务器异常'})
		}else{
			//判断有没有收集到数据集
			if(data){
				//再判断密码是否正确
				if(data.password == obj.password){
					
					req.session.isLogin = 'true'
					// console.log(123)

					req.session.currentUser = data
					
					res.end(JSON.stringify({code:200,msg:'登录成功'}))
				}else{
					res.json({code : 400, msg : '密码输入错误'})
				}
			//如果没有收集倒数据集，说明未查询到数据库有该数据
			}else{
				res.json({code : 400 , msg : '邮箱输入错误'})
			}
		}
	})
}