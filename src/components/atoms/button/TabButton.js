import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
      textTransform:'capitalize',
      disableElevation:true,
      fontSize: "5rem",
      fontWeight: 500,
      lineHeight: 1,
      color: "#03314b",
      padding:4

    },
    '&:hover': {
      textDecoration:"underline #22c870",
        textDecorationThickness:"3px",
        backgroundColor: '#fff',
      
    },
  }
}));



export default function TabButton({variant,color,name,onClick,menuIcon}) {
  const classes=useStyles();
  return (

        <Button  data-testid="custom-button-test" label={name} className={classes.root} onClick={onClick} endIcon={menuIcon} color={color} variant={variant} >
          <Typography variant="h6">{name}</Typography>
        </Button>
        
  );
}