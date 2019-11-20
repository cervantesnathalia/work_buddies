import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import util from "../../DataService/util";

class AllTeams extends Component {
    render() {
        let { data } = this.props;
        return (
           
            <h1>
                {data.map((value, index) => {
                    
                    return <p key={index}>{util.capital_letter(value.team_name)}</p>;
                })}
            </h1>
        );
    }
}

export default AllTeams;



