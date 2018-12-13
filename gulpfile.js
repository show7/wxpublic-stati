var gulp = require('gulp')
var exec = require('child_process').exec

//  上传文件
gulp.task('ftp_rise', function () {
  exec(`scp build/*.js ftpuser@101.132.188.185:/data/static/aristotle_js/mobile`)
  exec('exit')
})