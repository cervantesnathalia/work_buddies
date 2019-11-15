import React, {Component} from 'react';
import TopNavigation from "./TopNavigation";
import SearchBar from "./SearchBar"
import { Grid } from "@material-ui/core";
import axios from "axios";
import InfoDisplay from './InfoDisplay';
import API from "../DataService/DataService"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: '',
            searchResult: []
        }   ;
        this.handleSearch= this.handleSearch.bind(this);
        this.setApiData = this.setApiData.bind(this);
    }

    componentDidUpdate(prevProp, prevState){

    }
   
    setApiData(response){
      this.setState({searchResult: response.data})
      console.log(response)
    }

    handleSearch(search, type) {
        this.setState({search: search, type: type});
        if(search === '' && type === "Individual") {
          API.getAllUsers(this.setApiData)
        }
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <SearchBar
                    onSearch={this.handleSearch}
                />
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <InfoDisplay
                            data={this.state.searchResult}
                        />
                    </Grid>
                    <Grid item>
                        <InfoDisplay
                          key = {Date.now()}
                            data={undefined}
                        />
                    </Grid>
                </Grid>
                {this.state.search ?
                    <p style={{textColor:'#fff'}}>
                        {`I searched ${this.state.search} of type ${this.state.type}`}
                    </p> : "I searched nothing"
                }
            </div>
        );
    }
}
export default Dashboard;