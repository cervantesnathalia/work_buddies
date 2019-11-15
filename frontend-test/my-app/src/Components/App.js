import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import { Route, Switch } from 'react-router-dom';
import InfoDisplay from "./InfoDisplay";



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/teams' component={InfoDisplay}/>
          <Route path='/allusers' component={InfoDisplay}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Dashboard/>
      </Switch>
    );
  }
}

export default App;