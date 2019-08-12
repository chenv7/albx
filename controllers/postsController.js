
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
//实现修改之前
//先获取id
exports.getPostById=(req,res)=>{
	//获取id
	var id = req.query.id
	postsModel.getPostById(id,(err,data)=>{
		if(err){
			// 将日期数据格式化
            data.created = moment(data.created).format('YYYY-MM-DDTHH:mm')
			res.json({code : 400, msg : '获取id失败'})
		}else{
			res.json({code : 200, msg : '获取id成功',data:data})
		}
	})
}

exports.editPostById=(req,res)=>{
	//获取请求体中的参数
	var obj = req.body
	postsModel.editPostById(obj,(err)=>{
		if(err){
			res.json({code : 400, msg : '修改失败'})
		}else{
			res.json({code : 200, msg : '修改成功'})
		}
	})
}
exports.deleteById=(req,res)=>{
	var id = req.query.id
	postsModel.deleteById(id,(err)=>{
		if(err){
			res.json({code : 400, mgs : '删除失败'})
		}else{
			res.json({code : 200, msg : '删除成功'})
		}
	})
}
