
const formidable = require('formidable')
var path = require('path')

exports.uploadFile=(req,res)=>{
	//创建文件上传对象------------用formadable来实现文件上传
	var form = new formidable.IncomingForm()
	//设置编码：这个编码的设置与文件上传没有本质的关系，formable可以传递普通的键值对，所以需要设置这些参数的编码
	form.encoding = 'utf-8'
	//设置文件的目录
	form.uploadDir = __dirname + '/../uploads'
	//设置保留文件的拓展名
	form.keepExtensions = true
	//调用方法实现文件上传
	//req：请求报文，传递的文件数据就是在请求报文的请求体中
	//回调函数的三个参数	1.err  错误信息   2. fields：普通键值对  3.files：文件上传完成之后的相关信息，用来存储上传完成之后的相关信息
	form.parse(req,(err,fields,files)=>{
		if(err){
			// console.log(err)
			res.json({code : 400, msg : '文件上传失败'})
		}else{
			var imgname = path.basename(files.img.path)
			res.json({code : 200, msg : '文件上传成功',img : imgname})
		}
	})
}