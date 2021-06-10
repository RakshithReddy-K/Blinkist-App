import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
 
    root: {
          background: '#22c870',
          border: 0,
          color: 'black',
          paddingTop:10,
          paddingBottom:10,

        },
        label: {
          textTransform: 'capitalize',
        },
      }));

export default function SimpleButton({name,onClick,fullWidth}) {
  const classes = useStyles();
  
  return (
      <Button data-testid="simple-button" fullWidth={fullWidth} classes={{root:classes.root,label:classes.label}} variant="contained"  onClick={onClick}>
        {name}
      </Button>
  );
}
