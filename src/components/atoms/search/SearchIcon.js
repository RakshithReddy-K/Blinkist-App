import { IconButton, makeStyles } from "@material-ui/core";
import Search from "@material-ui/icons/SearchSharp";
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(2)
      }
    }
  }));
  
const SearchIcon = ({onClick,title}) => {
    const classes=useStyles();
    return ( 
        <div>
             <IconButton className={classes.root} onClick={onClick} role='icon' title={title}>
                <Search data-testid='search-icon' fontSize="large"/>
            </IconButton>
        </div>
     );
};
 
export default SearchIcon;