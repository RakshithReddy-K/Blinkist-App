import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {  Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket ,faLandmark,faFlask,faGraduationCap,faLightbulb,faComment,faHeartbeat, faHeart, faGlobeAsia}  from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../atoms/button/MenuButton';
import TabButton from '../../atoms/button/TabButton';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width:'100%',
    background:'#f1f6f4'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ExploreMenu({onClick}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expand,setExpand] = useState(0);
 

  const toggle=()=>{
    if(expand===0)
    {
    setExpand(1);
    }
    else
    {
    setExpand(0);
    }
  };
  const handleClick = (event) => {
    
    setAnchorEl(event.currentTarget);
    toggle();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggle();
  };

  return (
    <div >
      <TabButton
        name='Explore'
        onClick={handleClick}
        menuIcon={(expand===0 && <ExpandMoreIcon />)||(expand===1 && <ExpandLessIcon />)}
      />
       
  
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Grid container direction={"row"}>
          <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faFlask} /></ListItemIcon>
                            <Button name="Science" onClick={()=>onClick("Science")}></Button>
                          
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faHeartbeat} /></ListItemIcon>
                              <Button name="Health" onClick={()=>onClick("Health")}></Button>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLandmark} /></ListItemIcon>
                            <Button name="Politics" onClick={()=>onClick("Politics")}></Button>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                   
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} /></ListItemIcon>
                            <Button name="Education" onClick={()=>onClick("Education")}></Button>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGlobeAsia} /></ListItemIcon>
                            <Button name="Economics" onClick={()=>onClick("Economics")}></Button>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLightbulb} /></ListItemIcon>
                            <Button name="Motivation"  onClick={()=>onClick("Motivation")}></Button>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                              <Button name="Communcation skills" onClick={()=>onClick("Communcation skills")}></Button>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                          <ListItemIcon><FontAwesomeIcon icon={faRocket} /></ListItemIcon>
                          <Button name="Entrepreneurship" onClick={()=>onClick("Entrepreneurship")}></Button>
                        </ListItem>
                    </StyledMenuItem>
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                          <ListItemIcon><FontAwesomeIcon icon={faRocket} /></ListItemIcon>
                          <Button name="All Books" onClick={()=>onClick("all")}></Button>
                        </ListItem>
                    </StyledMenuItem>
            </Grid> 
        </Grid>
      </StyledMenu>
    </div>
  );
}