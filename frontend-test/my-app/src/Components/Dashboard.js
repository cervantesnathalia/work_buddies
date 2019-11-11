import React, { Component } from "react";
import TopNavigation from "./TopNavigation";
import SearchBar from "./SearchBar";
import SimpleCard from "./SimpleCard"
// import Maps from "./Maps";

class Dashboard extends Component {
  //to hold the state and allows another function permission to use this method
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      //here going to import all the components and this tag </> says nothing going there
      // this allow the dashboard looks clean
      <div>
        <TopNavigation />
        <SearchBar />
        <SimpleCard />
        {/* <Maps /> */}
      </div>
    );
  }
}

export default Dashboard;


