import * as React from 'react';
import { Input } from 'antd';
import * as _ from 'lodash';

export default class DataModal extends React.Component {

  constructor () {
    super();
    this.state = {};
    this.DataType = {
      STRING: 'string',
      BOOLEAN: 'boolean',
    };
  }

  renderStringEdit (configs, key, value) {
    console.log(_);
    const config = _.findLast(configs, { dataIndex: key });
    return (
      <Input placeholder={value}/>
    );
  }

  render () {
    const configs = [
      {
        'title': '名称',
        'dataIndex': 'name',
        'editable': false,
        'maxLength': 25,
        'type': 'string',
      },
      {
        'title': ' 举办放',
        'dataIndex': 'holder',
        'editable': false,
        'maxLength': null,
        'type': 'string',
      },
      {
        'title': '举办地点',
        'dataIndex': 'location',
        'editable': false,
        'maxLength': null,
        'type': 'string',
      },
      {
        'title': '是否删除',
        'dataIndex': 'del',
        'editable': false,
        'type': 'boolean',
        'render': (text) => {
          return text ? '是' : '否';
        },
      },
    ];
    const dataSource = {
      // 'authority': null,
      // 'permission': null,
      // 'visibility': null,
      // 'id': 5,
      'name': '深圳年度大趴',
      'holder': '深圳校友会',
      'location': '深圳市',
      // 'thumbnail': 'http://static.iqycamp.com/shenzhen-rs0x1yf4.jpg',
      // 'startTime': 1513396800000,
      // 'endTime': 1513418400000,
      // 'status': 3,
      // 'vipSaleLinkUrl': 'https://www.google.com',
      // 'guestSaleLinkUrl': 'https://www.baidu.com',
      // 'linkUrl': 'http://mp.weixin.qq.com/s/cdZMBQ_FMJnVKT9eLWMYdg',
      // 'targetUrl': null,
      // 'linkParam': null,
      // 'startTimeStr': null,
      // 'del': false,
    };

    const renderA = () => {
      let doms = [];
      for (let x in dataSource) {
        doms.push(this.renderStringEdit(configs, x, dataSource.x));
      }
      return doms
    };

    return (
      <div className="data-modal-container">
        {/*{this.renderStringEdit(configs,)}*/}
        {renderA()}
      </div>
    );
  }

}