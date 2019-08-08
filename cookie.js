 const http = reuqire('http');
 const app = http.createServer();
 app.listen(8080,()=>{
	 console.log('htp:127.0.0.1:8080');
 })
 app.on('request',(req,res)=>{
	 if(req.url == '/'){
		 //把cookie写入响应体
		 res.writeHead(200,{
			 "Content-Type" : "text/thml;charset=utf-8",
			 "Set-Cookie" :["name = li ","age : 12"]
		 })
		 res.end('ok')
	 }
 })