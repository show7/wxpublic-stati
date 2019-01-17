let express = require('express')
let router = express.Router()

// 公号列表
router.get('/api/kol/wechat/list', (req, res) => {
  res.status(200).json({
    'msg': [
      {
        'id': 4,
        'point': 0,
        'hidden': true,
        'qrCode': 'https://static.iqycamp.com/public_subscribe_4_km9yx1kl.jpg',
        'weChatCompanyId': 1,
        'ownerName': '临公子',
        'weChatName': '临公子的后花园',
        'avatar': 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM5y7dYeYjRQVyHDvCo7A0hM3GESRO5tTug4KSicBib0OQuw/0',
        'del': false
      }
    ],
    'code': 200
  })
})

// 首页数据
router.get('/api/kol/home/show', (req, res) => {
  const { publicId } = req.param
  res.status(200).json({
    'msg': {
      'totalSubscribe': 124, // 总订阅人数
      'totalOpenRate': '15.16%', // 总打开率
      'newSubscribe': 0, // 昨日新增订阅人数
      'newPushNum': 125, // 昨日文章推送人数
      'newReadNum': 7,  // 昨日文章阅读次数
      'newOpenRate': '5.60%', // 昨日文章打开率
      'qrCode': 'https://static.iqycamp.com/public_subscribe_4_km9yx1kl.jpg'
    }, 'code': 200
  })
})

// 文章记录分页列表
router.get('/api/kol/article/table', (req, res) => {
  const { page, publicId } = req.param
  res.status(200).json({
    'msg': {
      'page': {
        'page': 1,
        'pageSize': 5,
        'total': 14,
        'prevPage': 1,
        'limit': 5,
        'firstPage': true,
        'pageCount': 3,
        'lastPage': false,
        'nextPage': 2,
        'offset': 0
      },
      'content': [
        {
          'articleId': 28,
          'articleName': '“工作1年怎么了？我就是来管理你们的！”',
          'time': '2018-12-27',
          'pushNum': 94,
          'openNum': 30,
          'openRate': '31.91%'
        }, {
          'articleId': 81,
          'articleName': '日子不好过？分享几个实用的赚钱思路…',
          'time': '2018-12-29',
          'pushNum': 110,
          'openNum': 31,
          'openRate': '28.18%'
        }]
    }, 'code': 200
  })
})

// 条形图时间参数选项
router.get('/api/kol/time/list', (req, res) => {
  res.status(200).json({
    'msg': [{ 'id': 7, 'name': '最近7天' }, { 'id': 30, 'name': '最近30天' }],
    'code': 200
  })
})

// 条形图维度参数选项
router.get('/api/kol/select/list', (req, res) => {
  res.status(200).json({
    'msg': [
      { 'id': 1, 'name': '累计订阅人数' },
      { 'id': 2, 'name': '文章推送次数' },
      { 'id': 3, 'name': '文章阅读次数' },
      { 'id': 4, 'name': '文章阅读人数' }
    ],
    'code': 200
  })
})

// 条形图显示数据
router.get('/api/kol/public/datas', (req, res) => {
  const { publicId, time } = req.param
  res.status(200).json({
    'msg': [
      {
        id: 1,
        category: '累计订阅人数',
        dateDuration: '2019年01月08日-2019年01月14日', // 日期标题
        seriesData: [118, 125, 127, 127, 126, 125, 124], // y轴数据
        dateList: ['20190108', '20190109', '20190110', '20190111', '20190112', '20190113', '20190114'] // x轴数据
      }
    ],
    'code': 200
  })
})

module.exports = router