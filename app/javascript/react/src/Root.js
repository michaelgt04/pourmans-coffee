import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './consumer/components/App';
import AdminInterface from './admin/components/AdminInterface';
import AdminDashboardContainer from './admin/containers/AdminDashboardContainer';
import AdminEventsContainer from './admin/containers/AdminEventsContainer';
import AdminProductsContainer from './admin/containers/AdminProductsContainer';
import AdminAboutContainer from './admin/containers/AdminAboutContainer';

const Root = props => {
  return(
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App} />
        <Route path="/admin" component={AdminInterface}>
          <IndexRoute component={AdminDashboardContainer} />
          <Route path='events' component={AdminEventsContainer}/>
          <Route path='products' component={AdminProductsContainer}/>
          <Route path='about' component={AdminAboutContainer}/>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
