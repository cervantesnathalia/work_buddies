import React, {Component} from 'react';
import moment from 'moment';
import timezone from 'moment-timezone'

class MeetTimeChart extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>{`Time Difference is: ${this.props.timeDiff} hours`}</h4>
                <h4>{`${this.props.name}'s Time - Time Zone: ${this.props.otherTimeZone}`}</h4>
                <div className={"wrapper"}>
                    {this.props.otherTimeRange.map((value, index) => {
                        return <div key={`searched${index}`} className={"box"}>{value}</div>
                    })}
                </div>
                <br/>
                <div className={"wrapper"}>
                    {this.props.user.map((value, index) => {
                        return <div key={`user${index}`} className={"box"}>{value}</div>
                    })}
                </div>
                <h4>{`Your Time - Time Zone: ${moment.tz.guess()}`}</h4>
            </React.Fragment>

        );
    }
}

export default MeetTimeChart;