
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'albx'
})

exports.login = (email,callback)=>{
	var sql = `select * from users where email = '${email}'`
	connection.query(sql,(err,result)=>{
		if(err){
			callback(err);
		}else{
			callback(null,result[0]);
		}
	})
}