import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import auth0 from "auth0-js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    
  },
  menuButton: {
    marginRight: theme.spacing(1),

  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNavigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Work Buddies
          </Typography>
          <Button variant = "outlined" color="inherit" onClick={props.auth.logout} >Sign out</Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}