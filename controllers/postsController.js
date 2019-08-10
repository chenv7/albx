
const postsModel = require('../models/postsModel')

module.exports.getAllPost=(req,res)=>{
	var obj = req.query
	// console.log(obj);
	postsModel.getAllPost(obj,(err,data)=>{
		// console.log(data);
		if(err){
			res.json({code : 400, msg : '查询失败'})
		}else{
			res.json({code : 200, msg : '数据查询成功',data:data})
		}
	})
}		
//文章新增
exports.addPost = (req,res)=>{
	//接收参数
	var obj = req.body
	// console.log(obj)
	obj.id = null;
	obj.views = 0;
	obj.likes = 0;
	obj.user_id = req.session.currentUser.id;
	postsModel.addPost(obj,(err)=>{
		if(err){
			// console.log(err)
			res.json({code : 400, msg : '数据新增失败'})
		}else{
			res.json({code : 200, msg : '数据新增成功'})
		}
	})
}