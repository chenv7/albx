var conn = require('../utils/myconn.js')

exports.getAllCate=(callback)=>{
	var sql = `select * from categories`
	conn.query(sql,(err,data)=>{
		if(err){
			callback(err)
		}else{
			callback(null,data)
		}
		// console.log(data);
	})
}
exports.editCate=(obj,callback)=>{
	let sql = 'update categories set ? where id = ?'
	conn.query(sql,[obj,obj.id],(err) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

exports.addCate=(obj,callback)=>{
	// console.log(4)
	let sql = 'insert into categories set ?'
	conn.query(sql,obj,(err)=>{
		// console.log(5)
		if(err){
			callback(err)
		}else{
			callback(null)
		}
	})
}

exports.delCateById=(id,callback)=>{
	let sql = `delete from categories where id in (${id})`
	conn.query(sql,(err)=>{
		if(err){
			callback(err)
		}else{
			callback(null)
		}
	})
}