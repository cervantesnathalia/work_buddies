import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const styles = {
    root: {
        padding: '10px',
        borderRadius: '50px',
    },
    textField: {
        marginLeft: '10px',
        width: '90%',
    },
    formControl: {
        width:'50px',
    },
};
function SearchBar(props) {
    const { classes } = props;
    return (
        <div style={{marginTop:'25px', margin: '50px 10% 50px 10%'}}>
            <Paper className={classes.root}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <SearchIcon
                        style={{ fontSize: 25 }}
                    />
                    <TextField
                        id="standard-basic"
                        className={classes.textField}
                        label="Search by name, id, or office location"
                        margin="small"
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="drop-down">Type</InputLabel>
                        <Select
                            id="drop-down"
                            value={"Search"}
                            className={classes.drop}
                        >
                            <MenuItem value={"Individual"}>Individual</MenuItem>
                            <MenuItem value={"Team"}>Team</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Paper>
        </div>
    );
}
SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchBar);