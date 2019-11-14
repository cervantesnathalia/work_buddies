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
import { IconButton } from '@material-ui/core';


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
        minWidth: 140,
        marginRight: '5px'
    },
};


function SearchBar(props) {
    const { classes, onSearch } = props;

    //Create type variable and search variable
    const [type,setType] = React.useState(''); 
    const [search,setSearch] = React.useState('');

    //Set value of type to event value
    const handleDropChange = event => {
        setType(event.target.value);
    }
    //Calls handleSearch of Dashboard.js
    const handleButtonClick = event => {
        onSearch(search,type);
    }
    //set value of search to event value
    const handleSearchChange = event => {
        setSearch(event.target.value)
    }

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
                        margin="normal"
                        value ={search}
                        onChange={handleSearchChange}
                        fullWidth
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="drop-down">Type</InputLabel>
                        <Select
                            id="drop-down"
                            value={type}
                            onChange = {handleDropChange}
                            className={classes.drop}
                        >
                            <MenuItem value={"Individual"}>Individual</MenuItem>
                            <MenuItem value={"Team"}>Team</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton
                        onClick= {handleButtonClick}
                        >
                            <SearchIcon
                            style={{ fonts:25}}
                            />
                        </IconButton>
                </div>
            </Paper>
        </div>
    );
}
SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired
};
export default withStyles(styles)(SearchBar);