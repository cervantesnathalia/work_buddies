import React, {Component} from 'react';
import util from "../../DataService/util";
import RecommendMeetButton from "./RecommendMeetButton";


class User extends Component {
    render() {
        let { searchResult } = this.props;
        return (
            <React.Fragment>
                    {searchResult.map((value, index) => {
                        return (
                            <div key={index}>
                                <h1>{util.capital_letter(value.name)}</h1>
                                <h4><b>Office Location: </b>{util.capital_letter(value.office_location)}</h4>
                                <h4><b>Business title: </b> {util.capital_letter(value.business_title)}</h4>
                                <h4><b>Slack Name: </b> {util.capital_letter(value.slack_name)}</h4>
                                <h4><b>Email: </b> {value.work_email}</h4>
                            </div>
                        );
                    })}
                <RecommendMeetButton
                    {...this.props}
                />
            </React.Fragment>


        );
    }
}

export default User;