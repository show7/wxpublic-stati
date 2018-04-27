import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home/Home';
import About from './Home/components/About/About';

const lazyLoader = (importComponent) => (
  class AsyncComponent extends React.Component {
    constructor () {
      super();
      this.state = { C: null };
    }

    async componentDidMount () {
      const { default: C } = await importComponent();
      this.setState({ C });
    }

    render () {
      const { C } = this.state;
      return C ? <C {...this.props} /> : null;
    }
  }
);

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
               path={'/'}
               component={Home()}/>
        <Route path={'/about'}
               component={About}/>
      </Switch>
    </BrowserRouter>
  );
}