const { exec } = require('child_process')

exec('ls -a', (err, stdout, stderr) => {
  // console.log(err)
  // console.log(stdout)
  // console.log(stderr)
})