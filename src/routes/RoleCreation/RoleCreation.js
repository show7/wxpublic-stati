import * as React from 'react';
import './RoleCreation.less';
import { Button, List, InputItem } from 'antd-mobile';
import FooterButton from '../../components/FooterButton/FooterButton';
import Swiper from 'swiper/dist/js/swiper.min';
import Typed from 'typed.js';
import $ from 'jquery';

const RenderSteps = {
  renderGender: Symbol('gender'),
  renderNickname: Symbol('nickname'),
  renderFamilyCircumstances: Symbol('family'),
};

const GenderTypes = {
  PRINCE: 1,
  PRINCESS: 2,
};

const FamilyCircumstances = {
  AAAA: 1,
  BBBB: 2,
  CCCC: 3,
};

export default class RoleCreation extends React.Component {

  constructor () {
    super();
    this.state = {
      // 用户创建 progress
      step: RenderSteps.renderGender,
      // 性别
      gender: GenderTypes.PRINCE,
      // 昵称
      nickname: '无名浪人',
    };
  }

  componentDidMount () {
    // new Swiper('#role-creation-container', {
    //   direction: 'vertical',
    //   loop: false,
    // });
    // let type = new Typed('.text', {
    //   strings: ['i want be a hero', 'how about you'],
    //   typeSpeed: 40,
    // });
  }

  renderGender () {
    return (
      <div>
        <h2>性别选择提示语</h2>
        <Button>王子</Button>
        <Button>公主</Button>
      </div>
    );
  }

  renderNickname () {
    return (
      <div>
        <h2>昵称输入提示语</h2>
        <List>
          <InputItem placeholder={'输入您的江湖大名'}
                     maxLength={8}
                     onChange={(v) => console.log(v)}/>
        </List>
      </div>
    );
  }

  renderFamilyCircumstances () {
    return (
      <div>
        <h2>家境选择提示语</h2>
        <Button>土豪</Button>
        <Button>弱鸡</Button>
        <Button>贫民</Button>
      </div>
    );
  }

  renderBySteps (step) {
    switch (step) {
      case RenderSteps.renderGender:
        return this.renderGender();
      case RenderSteps.renderNickname:
        return this.renderNickname();
      case RenderSteps.renderFamilyCircumstances:
        return this.renderFamilyCircumstances();
      default:
        return null;
    }
  }

  nextStep () {
    const { step } = this.state;
    let nextStep;
    switch (step) {
      case RenderSteps.renderGender:
        nextStep = RenderSteps.renderNickname;
        break;
      case RenderSteps.renderNickname:
        nextStep = RenderSteps.renderFamilyCircumstances;
        break;
      case RenderSteps.renderFamilyCircumstances:
        this.props.history.push({
          pathname: '/hello/1',
          state: {
            id: 1,
          },
        });
        break;
      default:
        break;
    }
    this.setState({ step: nextStep }, () => {
      $('#box').animateCss('animated fadeInRight');
    });
  }

  render () {
    const {
      step,
      files,
      headImgUrl,
      nickname,
    } = this.state;

    return (
      <div id="role-creation-container"
           className="role-creation-container pd-container">
        <div id="box"
             className="content-box">
          {this.renderBySteps(step)}
        </div>
        <FooterButton text={'hello'}
                      onClick={() => this.nextStep()}/>
      </div>
    );
  }

}