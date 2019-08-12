const conn = require('../utils/myconn.js')

exports.getAllPost = (obj,callback)=>{
	// console.log(obj)
	var sql = `select posts.*,users.nickname,categories.name
		from posts
		join users on posts.user_id = users.id
		join categories on posts.category_id = categories.id
		where 1=1  `
	if(obj.cate && obj.cate != 'all'){
		sql += `  and category_id = ${obj.cate}`
	}
	if(obj.status && obj.status != 'all'){
		sql += `  and posts.status = ${obj.status}`
	}
	sql += `  order by id desc
			limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`

	conn.query(sql,(err,result)=>{
		if(err){
			callback(err)
		}else{
			sql = `select count(*) as cnt
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id
                    where 2=2  `
            if( obj.cate && obj.cate != 'all'){ // 有没有传递分类数据
                sql += ` and category_id = ${obj.cate}`
            }
            if(obj.status && obj.status != 'all'){
                sql += ` and posts.status ='${obj.status}'`
            }
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

exports.addPost = (obj,callback)=>{
	let sql = `insert into posts set ?`;
	conn.query(sql,obj,(err,results)=>{
		if(err){
			callback(err)
		}else{
			callback(null)
		}
	})
}

//获取postId
exports.getPostById = (id,callback)=>{
	let sql = `select * from posts where id =`+id
	conn.query(sql,(err,results)=>{
		if(err){
			callback(err)
		}else{
			//查询到了数据之后，还要返回数据
			callback(null,results[0]);
		}
	})
}

exports.editPostById = (obj,callback)=>{
	let sql = `updata posts set ? where id = ?`
	conn.query(sql,[obj,obj.id],(err,results)=>{
		if(err){
			callback(err)
		}else{
			callback(null)
		}
	})
}

exports.deleteById = (id,callback)=>{
	let sql = 'delete from posts where id = ?'
	conn.query(sql,[id],(err)=>{
		if(err){
			callback(err)
		}else{
			callback(null)
		}
	})
}