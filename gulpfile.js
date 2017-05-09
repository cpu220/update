const gulp = require('gulp');
const sftp = require('gulp-sftp');



gulp.task('default',()=>{
	 // 将什么目录下的所有文件上传到指定服务器的指定目录
	 return gulp.src('test/**/*.*').pipe(sftp({
		 host:'192.168.0.1',// 服务器地址
		 remotePath: '/xxx', // 上传服务器的目录
		 user:'root', // 服务器用户名
		 pass:'1234567890' // 服务器密码
	 }));
});
