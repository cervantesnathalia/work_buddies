import React, {Component} from 'react';
import TopNavigation from "./TopNavigation";
import SearchBar from "./SearchBar"
import { Grid } from "@material-ui/core";
import InfoDisplay from './InfoDisplay';
import API from "../DataService/DataService"
import { inflate } from 'zlib';
import GoogleMap from "./GoogleMap";
import moment from "moment"
import "../App.css"
import axios from "axios";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: '',
            searchResult: [],
            buttonLoading: false,
            userTimeRange: [],
            otherTimeRange:[],
            otherTimeZone: "",
            showMeet: false,
            timeDiff: 0
        };
        this.handleSearch= this.handleSearch.bind(this);
        this.setApiData = this.setApiData.bind(this);
        this.meetButtonClick=this.meetButtonClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchResult != this.state.searchResult) {
            this.setState({userTimeRange: [], otherTimeZone: "", otherTimeRange:[], showMeet: false});
        }
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

    meetButtonClick() {
        let lat = this.state.searchResult[0].lat;
        let lng = this.state.searchResult[0].lng;
        this.setState({buttonLoading: true});
        axios.get(`https://api.timezonedb.com/v2.1/get-time-zone?key=Z5R5TNS6X9F9&format=json&by=position&lat=${lat}&lng=${lng}`)
            .then(
            (response) => {
                let userRange = [];
                let otherRange = [];
                let diff;
                if(response.status === 200) {
                    let now = moment().utcOffset();
                    let other = moment().tz(`${response.data.zoneName}`).utcOffset();
                    diff = (other - now)/ 60;
                    for (let i = 1; i <= 24; i++) {
                        let offset = i - diff;
                        if (offset < 0) offset = 24 + offset;
                        if (offset > 24) offset = offset % 24;
                        if (i >= 7 && offset >= 7 && i <= 21 && offset <= 21) {
                            userRange.push(i);
                            otherRange.push(offset)
                        }
                    }
                    if (diff < 6) {
                        userRange = userRange.slice(2, userRange.length - 4);
                        otherRange = otherRange.slice(2, otherRange.length - 4);
                    }
                } else {
                    console.log(`Error retrieving timezone for ${this.state.results.name}`)
                }

                this.setState({showMeet: true, buttonLoading: false, userTimeRange: userRange, otherTimeRange: otherRange, otherTimeZone: response.data.zoneName, timeDiff: diff});
            }
        )
    }

     
    render() {
        return (
            <div>
                <TopNavigation {...this.props}/>
                <SearchBar
                    onSearch={this.handleSearch}
                />
                <Grid container spacing={3} alignItems="flex-end">
                    <Grid item xs={4} sm={4}>
                        <InfoDisplay
                            {...this.state}
                            data={this.state.searchResult}
                            stype={this.state.type}
                            search={this.handleSearch}
                            button={this.meetButtonClick}
                        />
                    </Grid>
                    <Grid item xs={8} sm={8}>
                    <GoogleMap
                                key={this.state.searchResult}
                                markersData={this.state.searchResult}
                                search={this.handleSearch}
                            />
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