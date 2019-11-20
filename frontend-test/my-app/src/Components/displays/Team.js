import React, {Component} from 'react';
import util from "../../DataService/util";



class Team extends Component {
    render() {
        let { data } = this.props;
        return (
            <React.Fragment>
                    {data.map((value, index) => {
                        return (
                            <div key={index}>
                                <h1>{util.capital_letter(value.team_name)}</h1>
                                <h4><b>Slack Channel: </b>{(value.slack_channel)}</h4>
                                <h4><b>Team email: </b> {(value.team_email)}</h4>
                                <h4><b>Manager: </b> {util.capital_letter(value.manager_name)}</h4>
                                <h4><b>Product Owner: </b> {util.capital_letter(value.product_owner_name)}</h4>
                            </div>
                        );
                    })}
            </React.Fragment>


        );
    }
}

export default Team;