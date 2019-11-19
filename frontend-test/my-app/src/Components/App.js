import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import { Route, Switch } from 'react-router-dom';
import InfoDisplay from "./InfoDisplay";
import Main from "./Main";
import Callback from './Callback';
import NotFound from './NotFound';
import "../App.css"




class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location){
        case "":
            mainComponent = <Main {...this.props}/>;
            break;
    
        case 'callback':
            mainComponent = <Callback />;
            break;

        case "secret":
            // mainComponent = this.props.auth.isAuthenticated() ? <Dashboard/> : <NotFound/>;
            mainComponent = <Dashboard {...this.props}/> ;
            break;

        default:
            mainComponent = <NotFound /> 

    }  

    return (
        <div className= "App">
        {/* <Switch>
          <Route exact path='/teams' component={InfoDisplay}/>
          <Route path='/allusers' component={InfoDisplay}/>
          <Route path='/secret' component = {Dashboard}/>
          < Route path= '/callback' component= {Callback}/>
        </Switch> */}
        {mainComponent}
        </div>
    )
  }
}

    export default App;


