var gulp = require('gulp')
var exec = require('child_process').exec

//  上传文件
gulp.task('ftp_rise', function () {
  exec(`scp dist/* ftpuser@101.132.188.185:/data/static/script/spiderman-static`)
  exec('exit')
})