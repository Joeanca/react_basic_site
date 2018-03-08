import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  './App.css';

import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';
import SingleStock from './components/SingleStock.js';
import Stocks from './components/Stocks';
import NotFound from './components/NotFound.js';
import AboutUs from './components/AboutUs.js';

class App extends Component {
  render() {
    return (
        <div>
        <HeaderApp />
        <main >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/users" exact component={UserBrowser} />
            <Route path="/stocks" exact component={Stocks} />
            <Route path="/users/user/:id" exact component={SingleUser} />
            <Route path="/stocks/:id" exact component={SingleStock} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route component={NotFound}/>
          </Switch>
        </main>
        </div>
    );
  }
}

export default App;
