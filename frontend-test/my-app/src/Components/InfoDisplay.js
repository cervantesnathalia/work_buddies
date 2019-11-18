import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    card: {
        minWidth: "550px",
        minHeight: "400px",
        padding: "10px",
        borderRadius: "15px",
        height: "auto",
        width: "100%"
    }
});
export default function InfoDisplay(props) {
    const classes = useStyles();
    const { data, stype } = props;
    console.log(data);
    if (data !== undefined) {
        console.log(stype)
        if (stype === "Individual") {   
            if (data.length > 1) {
                return (
                    <div style={{ margin: "20px 25px 20px 25px" }}>
                        <Card className={classes.card}>
                            <CardContent>
                                {data.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <h1>{value.name}</h1>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </div>
                );
            } else {
                return (
                <div style={{ margin: "20px 25px 20px 25px" }}>
                    <Card className={classes.card}>
                        <CardContent>
                            {data.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <h1>{value.name}</h1>
                                        <p><b>Office Location: </b>{value.office_location}</p>
                                        <p><b>Business title: </b> {value.business_title}</p>
                                        <p><b>Slack Name: </b> {value.slack_name}</p>
                                        <p><b>Email: </b> {value.work_email}</p>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>
            );
            }   
            
                        // }
        } else {
            return (
                <div style={{ margin: "20px 25px 20px 25px" }}>
                <Card className={classes.card}>
                    <CardContent>
                        {data.map((value, index) => {
                            return <p key={index}>{value.team_name}</p>;
                        })}
                    </CardContent>
                </Card>
            </div>
            ); 
        }
        
    } else {
        return (
            <div style={{ margin: "20px 25px 20px 25px" }}>
                <Card className={classes.card}>
                    <CardContent>{"No Data"}</CardContent>
                </Card>
            </div>
        );
    }
}
