// electron 入口文件
const path = require('path')
const { app, BrowserWindow } = require('electron')

console.log('当前所在开发环境为：', process.env.mode)
let isDevMode = process.env.mode === 'dev'

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  // 加载应用 react 打包
  if (isDevMode) {
    mainWindow.loadURL('http://localhost:2000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  }

  // 主窗口关闭同时，释放资源
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// 程序启动，创建窗口
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})