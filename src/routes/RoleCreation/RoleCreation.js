import * as React from 'react';
import { Button, List, InputItem } from 'antd-mobile';
import FooterButton from '../../components/FooterButton/FooterButton';
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

  renderGender () {
    return (
      <div className="">
        <h3>性别选择提示语</h3>
        <Button>王子</Button>
        <Button>公主</Button>
      </div>
    );
  }

  renderNickname () {
    return (
      <div className="">
        <h3>昵称输入提示语</h3>
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
      <div className="">
        <h3>家境选择提示语</h3>
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
        nextStep = RenderSteps.renderGender;
        break;
      default:
        break;
    }
    this.setState({ step: nextStep }, () => {
      $('#box').animateCss('animated fadeInUp');
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
      <div className="role-creation-container pb">
        <div id={'box'}>
          {this.renderBySteps(step)}
        </div>
        <FooterButton text={'hello'}
                      onClick={() => this.nextStep()}/>
      </div>
    );
  }

}