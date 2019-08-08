
const postsModel = require('../models/postsModel')

module.exports.getAllpost=(req,res)=>{
	var obj = req.query
	postsModel.getAllpost(obj,(err,data)=>{
		// console.log(data);
		if(err){
			res.json({code : 400, msg : '查询失败'})
		}else{
			res.json({code : 200, msg : '数据查询成功',data:data})
		}
	})
}