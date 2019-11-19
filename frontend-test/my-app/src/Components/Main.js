import React, { Component } from 'react';


class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Hello {this.props.name} This is the Main Login Page
                Do you want to see the secret area ? <a href="/secret"> Click Here </a>
            <div>
                <hr/>
                <button onClick={ this.props.auth.login}>Login</button>
            </div>
            </div>
         );
    }
}
 
export default Main;   