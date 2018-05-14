import * as React from 'react';
import './RoleCreation.less';
import { Button, List, InputItem } from 'antd-mobile';
import FooterButton from '../../components/FooterButton/FooterButton';
import Swiper from 'swiper/dist/js/swiper.min';
import Typed from 'typed.js';
import $ from 'jquery';

/**
 * 流程
 */
const RenderSteps = {
  renderGender: Symbol('gender'),
  renderNickname: Symbol('nickname'),
  renderFamilyCircumstances: Symbol('family'),
};

/**
 * 性别
 */
const GenderTypes = {
  PRINCE: 1,
  PRINCESS: 2,
};

/**
 * 家境
 */
const Family = {
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
      family: Family.AAAA,
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
    $('#box').animateCss('animated fadeInRight');
  }

  handleClickChooseGender (gender) {
    this.setState({
      gender: gender,
    }, () => {
      this.nextStep();
    });
  }

  handleClickInsertNickname (nickname) {
    this.setState({
      nickname: nickname,
    });
  }

  handleClickChooseFamily (family) {
    this.setState({ family: family }, () => {
      this.nextStep();
    });
  }

  /**
   * 性别页面渲染
   */
  renderGender () {
    return (
      <div>
        <p>某年某日，</p>
        <p>一个宁静的小镇，</p>
        <p>有一位</p>
        <h2>选择您的性别</h2>
        <Button onClick={() => this.handleClickChooseGender(GenderTypes.PRINCE)}>王子</Button>
        <Button onClick={() => this.handleClickChooseGender(GenderTypes.PRINCESS)}>公主</Button>
        <p>诞生了。</p>
      </div>
    );
  }

  /**
   * 昵称页面渲染
   */
  renderNickname () {
    return (
      <div>
        <p>父母为他取名为</p>
        <h2>输入您的昵称</h2>
        <List>
          <InputItem placeholder={'输入您的江湖大名'}
                     maxLength={8}
                     onChange={(v) => this.handleClickInsertNickname(v)}/>
        </List>
        <br/>
        <Button onClick={() => this.nextStep()}>确认</Button>
      </div>
    );
  }

  /**
   * 家境情况页面渲染
   */
  renderFamilyCircumstances () {
    return (
      <div>
        <p>江湖风雨从未刮到过这里，</p>
        <p>但为这个人的未来扑下了一条布满荆棘的未知道路。</p>
        <h2>选择您的家境</h2>
        <Button onClick={() => this.handleClickChooseFamily(Family.AAAA)}>土豪</Button>
        <Button onClick={() => this.handleClickChooseFamily(Family.BBBB)}>弱鸡</Button>
        <Button onClick={() => this.handleClickChooseFamily(Family.CCCC)}>贫民</Button>
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

  /**
   * 触发下一步
   */
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
        // this.props.history.push({
        //   pathname: '/hello/1',
        //   state: {
        //     id: 1,
        //   },
        // });
        console.log(this.state);
        break;
      default:
        break;
    }
    this.setState({ step: nextStep });
    $('#box').animateCss('animated fadeInRight');
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
      </div>
    );
  }

}