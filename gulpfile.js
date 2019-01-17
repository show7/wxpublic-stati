const gulp = require('gulp')
const { exec } = require('child_process')

//  上传文件
gulp.task('ftp', done => {
  let fileName = ''
  exec(`ls dist | grep app.bundle`, (err, stdout, stderr) => {
    fileName = stdout
    console.log(`发现目标文件：${fileName}`)
  })
  exec(`scp dist/*.js ftpuser@101.132.188.185:/data/static/script/wxpublic-static`, (err, stdout, stderr) => {
    console.log(`文件上传成功：https://www.confucius.mobi/script/wxpublic-static/${fileName}`)
  })
  done()
})
