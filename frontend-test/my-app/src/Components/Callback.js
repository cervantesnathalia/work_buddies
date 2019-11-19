import React, { Component } from 'react';
import Auth from '../Auth';



class Callback extends Component {

    componentWillMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }
    state = {  }
    render() { 
        return ( 
            <div>
                Loading....
            </div>
         );
    }
}
 
export default Callback;