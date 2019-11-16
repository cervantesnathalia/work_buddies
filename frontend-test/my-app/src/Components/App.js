import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import { Route, Switch } from 'react-router-dom';
import InfoDisplay from "./InfoDisplay";
import Main from "./Main";



class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location){
        case "":
            mainComponent = <Main />;
            break;
        case "secret":
            mainComponent = <Dashboard />;
            break;
        default:
            mainComponent = <Main /> 

    }  

    return (
        <div className= "App">
    
   
        <Switch>
          <Route exact path='/teams' component={InfoDisplay}/>
          <Route path='/allusers' component={InfoDisplay}/>
          <Route path='/secret' component = {Dashboard}/>
          <Route path='' component = {Main}/>
        </Switch>
        </div>
    )
  }
}

    export default App;


