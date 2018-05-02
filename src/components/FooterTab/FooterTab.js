import * as React from 'react';
import './FooterTab.less';
import { TabBar } from 'antd-mobile';

export default class FooterTab extends React.Component {

  constructor () {
    super();
    this.state = {
      selectedTab: '',
    };
  }

  render () {
    return (
      <div className="footer-tab-component">
        <TabBar>
          <TabBar.Item title="first"
                       key="first"
                       icon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selectedIcon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selected={this.state.selectedTab === 'blueTab'}
                       onPress={() => {
                         this.setState({
                           selectedTab: 'first',
                         });
                       }}/>
          <TabBar.Item title="second"
                       key="second"
                       icon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selectedIcon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selected={this.state.selectedTab === 'blueTab'}
                       onPress={() => {
                         this.setState({
                           selectedTab: 'second',
                         });
                       }}/>
          <TabBar.Item title="third"
                       key="third"
                       icon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selectedIcon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                       }}/>
                       }
                       selected={this.state.selectedTab === 'blueTab'}
                       onPress={() => {
                         this.setState({
                           selectedTab: 'third',
                         });
                       }}/>
        </TabBar>
      </div>
    );
  }

}