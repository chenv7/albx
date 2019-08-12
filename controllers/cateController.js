
var cateModel = require('../models/cateModel.js')


//分类
exports.getAllCate=(req,res)=>{
	cateModel.getAllCate((err,data)=>{
		if(err){
			console.log(err)
			res.json({code:400,msg:'数据查询失败'})
		}else{
			res.json({code:200,msg:'查询成功',data:data})
		}
	})
}


//编辑文章分类
exports.editCate=(req,res)=>{
	var obj = req.body;
	// console.log(obj)
	cateModel.editCate(obj,(err)=>{
		if(err){
			res.json({code : 400, msg : '文章修改失败'})
		}else{
			res.json({code : 200, msg : '文章修改成功'})
		}
	})
}
//分类文章增加
exports.addCate=(req,res)=>{
	var obj = req.body;
	obj.id = null;
	cateModel.addCate(obj,(err)=>{
		if(err){
			res.json({code : 400, msg : '文章添加失败'})
		}else{
			res.json({code : 200, msg : '文章添加成功'})
		}
	})
}

//分类文章删除
exports.delCateById=(req,res)=>{
	//获取id
	var id = req.query.id
	cateModel.delCateById(id,(err)=>{
		if(err){
			res.json({code : 400, msg : '文章删除失败'})
		}else{
			res.json({code : 200, msg : '文章删除成功'})
		}
	})
}