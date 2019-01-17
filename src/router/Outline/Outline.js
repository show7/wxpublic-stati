import * as React from 'react'
import { Row, Col, Card, Select, Tabs, Table, Pagination, Spin, Button } from 'antd'
import { observer, inject } from 'mobx-react'
import QRCodeModal from '../components/QRCodeModel/QRCodeModal'

const Option = Select.Option
const TabPane = Tabs.TabPane

import './Outline.less'
import { isMobileWidth } from '../../utils/utils'
import LineChart from '../../components/ECharts/LineChart/LineChart'

@inject('outlineModel')
@observer
export default class Outline extends React.Component {

  componentDidMount () {
    const { outlineModel } = this.props
    outlineModel.loadOutlineInitData()
  }

  render () {
    const { outlineModel } = this.props

    // 加载 loading
    if (outlineModel.isShowLoading) {
      return <Spin className="outline-spin"
                   size="large"/>
    }

    return (
      <div className="outline-container">
        {/* 公众号选择 */}
        <Card title="公众号">
          {
            outlineModel.currentWeChat ?
              <Row style={{ height: 40 }}>
                <Col xs={24}
                     sm={6}>
                  <Select style={{ width: "80%" }}
                          defaultValue={outlineModel.currentWeChat.weChatName}
                          onChange={(val) => outlineModel.changeWeChat(val)}>
                    {
                      outlineModel.weChatList.map((weChatItem, index) => (
                        <Option key={index}
                                value={weChatItem.id}>{weChatItem.weChatName}</Option>
                      ))
                    }
                  </Select>
                </Col>
                <Col xs={24}
                     sm={6}>
                  <Button type="primary"
                          style={isMobileWidth() ? { marginTop: 16 } : {}}
                          onClick={() => outlineModel.showCurrentQRCodeUrl()}>查看专属二维码</Button>
                </Col>
              </Row> :
              <div style={{ height: 40 }}></div>
          }
        </Card>

        {/* 关键指标数据 */}
        <Card className="key-value-card"
              style={{ marginTop: 20 }}
              title="关键指标">
          <div className="key-value-calc">
            <div className="key-value-title">历史累积数据</div>
            <Row type="flex"
                 align="middle">
              <Col xs={12}
                   sm={12}>
                <div className="key-value-item">
                  <span className="key-value-desc">订阅人数</span>
                  <span className="key-value-value">{outlineModel.totalSubscribe}</span>
                  <em></em>
                </div>
              </Col>
              <Col xs={12}
                   sm={12}>
                <div className="key-value-item">
                  <span className="key-value-desc">文章打开率</span>
                  <span className="key-value-value">{outlineModel.totalOpenRate}</span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="key-value-yesterday"
               style={{ marginTop: 20 }}>
            <div className="key-value-title">昨日新增数据</div>
            <Row type="flex"
                 align="middle">
              <Col xs={12}
                   sm={6}>
                <div className="key-value-item">
                  <span className="key-value-desc">昨日新增订阅人数</span>
                  <span className="key-value-value">{outlineModel.newSubscribe}</span>
                </div>
              </Col>
              <Col xs={12}
                   sm={6}>
                <div className="key-value-item">
                  <span className="key-value-desc">昨日文章推送人数</span>
                  <span className="key-value-value">{outlineModel.newPushNum}</span>
                </div>
              </Col>
              <Col xs={12}
                   sm={6}>
                <div className="key-value-item">
                  <span className="key-value-desc">昨日文章阅读次数</span>
                  <span className="key-value-value">{outlineModel.newReadNum}</span>
                </div>
              </Col>
              <Col xs={12}
                   sm={6}>
                <div className="key-value-item">
                  <span className="key-value-desc">昨日文章打开率</span>
                  <span className="key-value-value">{outlineModel.newOpenRate}</span>
                </div>
              </Col>
            </Row>
          </div>
        </Card>

        {/* 趋势图 */}
        <Card className=""
              style={{ marginTop: 20 }}
              title="趋势图">
          <Row type="flex"
               align="middle">
            <div className="">选择时间区间：</div>
            <Select defaultValue="最近7天"
                    onChange={(val) => outlineModel.changeTimeDuration(val)}
                    style={{ width: 120 }}>
              {
                outlineModel.timelineDuration.map((durationItem, index) => (
                  <Option key={index}
                          value={durationItem.id}>{durationItem.name}</Option>
                ))
              }
            </Select>
          </Row>
          <Tabs style={{ marginTop: 10 }}>
            {
              outlineModel.timelineChartsData.map((chartData, index) => (
                <TabPane key={chartData.id}
                         tab={chartData.category}>
                  <LineChart title={chartData.dateDuration}
                             xAxisCategory={chartData.dateList}
                             seriesData={chartData.seriesData}/>
                </TabPane>
              ))
            }
          </Tabs>
        </Card>

        {/* 文章列表信息 */}
        <Card title="文章列表信息"
              style={{ marginTop: 20 }}>
          <Table className="article-table"
                 columns={outlineModel.articleColumns}
                 dataSource={outlineModel.articleData}
                 bordered={true}
                 pagination={false}/>

          {
            outlineModel.articlePagination &&
            <Pagination style={{ marginTop: 20 }}
                        defaultCurrent={1}
                        current={outlineModel.articlePagination.page}
                        total={outlineModel.articlePagination.total}
                        pageSize={outlineModel.articlePagination.pageSize}
                        size={isMobileWidth() ? 'small' : ''}
                        onChange={(val) => outlineModel.changePagination(val)}/>
          }
        </Card>

        {/* 二维码弹框 */}
        <QRCodeModal isVisible={outlineModel.isShowQRCode}
                     qrCode={outlineModel.qrCode}
                     closeCallback={() => outlineModel.hideCurrentQRCodeUrl()}/>
      </div>
    )
  }

}