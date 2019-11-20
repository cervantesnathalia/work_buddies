import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import util from "../../DataService/util";

class AllTeams extends Component {
    render() {
        let { data } = this.props;
        return (
            <div>
                {data.map((value, index) => {
                    return (
                        <div key={index}>
                            <h1>
                                <a
                                    onClick={() => this.props.search(value.team_name, "Team")}
                                >
                                    {util.capital_letter(value.team_name)}
                                </a>
                            </h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AllTeams;



