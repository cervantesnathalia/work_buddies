import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NoData from "./displays/NoData";
import AllUsers from "./displays/AllUsers";
import User from "./displays/User";
import AllTeams from "./displays/AllTeams";

class InfoDisplay extends Component {
    pickDisplay(data, type, props=undefined) {
        switch (type) {
            case "Individual":
                if (data.length > 1) return (<AllUsers data={data} search={this.props.search}/>);
                return (<User {...props}/>);
            case "Team":
                return (<AllTeams data={data}/>);
            default:
                return (<NoData/>);
        }
    }

    render() {
        console.log(this.props);
        const { searchResult, type } = this.props;
        return (
                <Card
                    syle={{
                        padding: "10px",
                        borderRadius: "15px",
                        minHeight: "auto",
                        height: "100%",
                        width: "100%",
                        backgroundColor:"#333a42"
                    }}
                >
                    <CardContent style={{height: "580px", backgroundColor:"#333a42", color:"#fff"}}>
                        {this.pickDisplay(searchResult, type, this.props)}
                    </CardContent>
                </Card>
        );
    }
}

export default InfoDisplay;
