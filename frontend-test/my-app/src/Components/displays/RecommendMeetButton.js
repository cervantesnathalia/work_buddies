import React, {Component} from 'react';
import MeetTimeChart from "./MeetTimeChart";
import RestoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


class RecommendMeetButton extends Component {

    timeMessage(time) {
        if (time === 12) {
            return `${time} PM`
        }
        if (time > 12) {
            if (time % 12 > 9) return `${time % 12} PM`;
            return `${time % 12} PM`;
        } else {
            if (time > 9) return ` ${time}  AM`;
            return ` ${time}  AM`
        }
    }


    from24to12(range) {
        let size = range.length;
        for (let i = 0; i < size ; i++) {
            range[i] = this.timeMessage(range[i]);
        }
        return range;
    }

    render() {
        console.log(this.props);
        let userRange;
        let otherRange;
        if (this.props.userTimeRange != undefined && this.props.otherTimeRange != undefined) {
            userRange = this.from24to12(this.props.userTimeRange);
            otherRange = this.from24to12(this.props.otherTimeRange);
        }
        console.log(userRange, otherRange, this.props.showMeet)
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <Button variant="outlined" size="medium" color="primary" onClick={this.props.button}>
                        <RestoreIcon /> Get Recommended Meet time
                    </Button>

                    {this.props.buttonLoading ?
                        <React.Fragment>
                            <CircularProgress />
                        </React.Fragment> : ""
                    }
                </div>
                {this.props.showMeet ?
                    <MeetTimeChart
                        key={new Date()}
                        name={this.props.searchResult[0].name}
                        otherTimeZone={this.props.otherTimeZone}
                        user={userRange}
                        otherTimeRange={otherRange}
                        timeDiff={this.props.timeDiff}
                    />
                    : ""

                }
            </div>

        );
    }
}

export default RecommendMeetButton;