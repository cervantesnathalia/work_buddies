import React, {Component} from 'react';
import TopNavigation from "./TopNavigation";
import SearchBar from "./SearchBar"
import { Grid } from "@material-ui/core";
import InfoDisplay from './InfoDisplay';
import API from "../DataService/DataService"
import { inflate } from 'zlib';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: '',
            searchResult: [],
        };
        this.handleSearch= this.handleSearch.bind(this);
        this.setApiData = this.setApiData.bind(this);
    }

   
    setApiData(response){
        if (response.data.length !== 0) {
            this.setState({searchResult: response.data});
        }
        console.log(response)
    }

    handleSearch(search, type) {
        this.setState({search: search, type: type});
        if(type === "Individual") {
            if(search === "") {
                API.getAllUsers(this.setApiData);
            } else {

                console.log("Calling name route point ...")
                API.getUserByName(search, this.setApiData);

                console.log("Calling office locarion route point ...")
                API.getUserByLocation(search, this.setApiData);

            }
        } else if(type === "Team") {
            API.getAllTeams(this.setApiData);
        } else {
            // TODO: Add warning to user to specify type search
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
                            stype={this.state.type}
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