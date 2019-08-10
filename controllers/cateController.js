
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