// import React, { Component } from 'react';


// class Main extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 Hello {this.props.name} This is the Main Login Page
//                 Do you want to see the secret area ? <a href="/secret"> Click Here </a>
//             <div>
//                 <hr/>
//                 <button onClick={ this.props.auth.login}>Login</button>
//             </div>
//             </div>
//          );
//     }
// }
 
// export default Main;   



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(10),
  },
  

}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <div  className={"login"} >   
            <h1>Work Buddies</h1>
            <Fab variant="extended" aria-label="outlined primary button group" onClick={ props.auth.login}>
                Login
            </Fab>       
    </div>
  );
}
