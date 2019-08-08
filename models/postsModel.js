const conn = require('../utils/myconn.js')

exports.getAllpost = (obj,callback)=>{
	var sql =`select posts.*,users.nickname,categories.name
	from posts
	join users on posts.user_id = users.id
	join categories on posts.category_id = categories.id
	order by id desc
	limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
	
	conn.query(sql,(err,result)=>{
		if(err){
			callback(err)
		}else{
			sql =`select count(*) as cnt
				from posts
				join users on posts.user_id = users.id
				join categories on posts.category_id = categories.id
			`
			conn.query(sql,(err,res2)=>{
				if(err){
					callback(err);
				}else{
					callback(null,{data:result,total:res2[0].cnt})
				}
			})
		}
	})
}