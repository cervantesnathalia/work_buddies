import React, { Component } from "react";
import TopNavigation from "./TopNavigation";
import SearchBar from "./SearchBar";
import SimpleCard from "./SimpleCard";
import Maps from "./Maps";
import Grid from "@material-ui/core/Grid";

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

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SimpleCard />
          </Grid>
          <Grid item>
            <Maps />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;