import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import util from "../../DataService/util";

class AllTeams extends Component {
    render() {
        let { data } = this.props;
        return (
            <Typography>
                {data.map((value, index) => {
                    return <p key={index}>{util.capital_letter(value.team_name)}</p>;
                })}
            </Typography>
        );
    }
}

export default AllTeams;