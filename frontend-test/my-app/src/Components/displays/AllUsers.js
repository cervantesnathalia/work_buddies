import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import util from "../../DataService/util";

class AllUsers extends Component {
    render() {
        let { data } = this.props;

        return (
            <Typography>
                {data.map((value, index) => {
                    return (
                        <div key={index}>
                            <h1>
                                <a
                                    onClick={() => this.props.search(value.name, "Individual")}
                                >
                                    {util.capital_letter(value.name)}
                                </a>
                            </h1>
                        </div>
                    );
                })}
            </Typography>
        );
    }
}

export default AllUsers;