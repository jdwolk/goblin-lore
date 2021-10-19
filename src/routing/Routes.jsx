import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { TheLore, FourOhFour } from '../components/pages';
import ScrollToTop from '../utils/ScrollToTop';
import { paths } from './paths';

export const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Redirect from={paths.home()} to={paths.lore()} exact />
        <Route exact path={paths.lore()} component={TheLore} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
};

export default Routes;
