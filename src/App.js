import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';

import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';
import WarehousePage from './pages/WarehousePage';

// some comment

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin" component={AdminPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={OrdersPage}/>
          <Route path="/warehouse" component={WarehousePage}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
