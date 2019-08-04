const express = require('express');
const app = express();
const router = require('./router');
// const fs = require('fs');

app.listen(8000,()=>{
	console.log('http://127.0.0.1:8000');
});

app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

// app.get('',(req,res)=>{
// 	fs.readFile('./views/index.ejs',(err,data)=>{
// 		if(err) console.log(err);
// 		res.end(data);
// 	});
// });

app.use(router);