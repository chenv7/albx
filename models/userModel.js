
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
			// console.log(result[0]);
			callback(null,result[0]);
		}
	})
}