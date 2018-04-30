import * as React from 'react';
import FooterTab from '../../components/FooterTab/FooterTab';

export default class TabBarLayout extends React.Component {

  constructor () {
    super();
    this.state = {
      selectedTab: '',
    };
  }

  render () {
    return (
      <section>
        {this.props.children}
        <FooterTab/>
      </section>
    );
  }

}