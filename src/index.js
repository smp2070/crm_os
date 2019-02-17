import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProtectedRoute from './components/protectedRoute';
import './sass/root.sass';

import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';
import WarehousePage from './pages/WarehousePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <ProtectedRoute path="/admin" component={UsersPage}/>
          <ProtectedRoute path="/warehouse" component={WarehousePage}/>
          <ProtectedRoute path="/" exact component={OrdersPage}/>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
