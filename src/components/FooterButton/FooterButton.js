import * as React from 'react';
import './FooterButton.less'
import { Button, List } from 'antd-mobile';

export default class FooterButton extends React.Component {

  constructor () {
    super();
    this.state = {};
    this.props = {
      text: 'hello world',
      onClick: () => alert('hey you clicked me'),
    };
  }

  render () {
    const {
      text,
      onClick,
    } = this.props;
    return (
      <div className="footer-button-component">
        <List>
          <Button onClick={() => onClick()}>{text}</Button>
        </List>
      </div>
    );
  }

}

