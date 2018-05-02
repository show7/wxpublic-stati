import * as React from 'react';
import TabBarLayout from '../../layouts/TabBarLayout/TabBarLayout';

export default class About extends React.Component {

  constructor () {
    super();
  }

  render () {
    return (
      <TabBarLayout>
        <div>
          <h1>about page</h1>
        </div>
      </TabBarLayout>
    );
  }

}