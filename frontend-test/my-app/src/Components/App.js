import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import { Route, Switch } from 'react-router-dom';
import SimpleCard from "./InfoDisplay";
import InfoDisplay from './InfoDisplay';

// import TopNavigation from "./TopNavigation";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// export default App;



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