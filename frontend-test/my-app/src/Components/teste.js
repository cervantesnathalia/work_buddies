import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const images = [
  {
    url: '',
    title: 'Login',
    width: '1000%',
    color:  '#1B1F22'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 1000,
    width: '100%',
  },
  image: {
    position: 'center',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



function Main(props) {
    const classes = props
    return  (
            <div className={classes.root}>
              {images.map(image => (
                <ButtonBase
                  className={classes.image}
                  style={{
                    width: image.width,
                   
                  }}
                >
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      className={classes.imageTitle}
                    >
                      {image.title}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </ButtonBase>
              ))}
            </div>
          );
}
Main.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Main);