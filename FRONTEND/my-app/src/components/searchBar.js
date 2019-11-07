import React, { Component } from 'react';
import { Input, Layout } from "antd";
const { Content} = Layout;
const { Search } = Input;

class searchBar extends Component {
    state = {  }
    render() { 
      return ( 
        <Content style={{ padding: "0 50px", marginTop: 50 }}>
   <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              
              enterButton
            
            />
            <br />
            <br />

          </Content>
  
       );
    }
  }
   
  export default searchBar;

