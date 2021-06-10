
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '../../atoms/search/Search';
import TabButton from '../../atoms/button/TabButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const handleLibrary=()=>
{
    
}
function CustomAppBar(props)
{
    return(
            <AppBar position={props.position} color={props.color} elevation={0}> 
            <Toolbar>
    <Typography
     variant="h3" >
      Blinkist
    </Typography>
    <SearchIcon></SearchIcon>
    <TabButton menuIcon={<ExpandMoreIcon />} name="Explore"/>
    <TabButton name="My Library" onClick={handleLibrary}/>
  </Toolbar>
  </AppBar>
        
    )
}

export default CustomAppBar