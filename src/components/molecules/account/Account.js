import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemText from '@material-ui/core/ListItemText';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useAuth0 } from '@auth0/auth0-react';
import TabButton from '../../atoms/button/TabButton';

const StyledMenu = withStyles({

  paper: {
    border: '1px solid #d3d4d5',
    width:150
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
      backgroundColor: '#22c870',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Account({onProfile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expand,setExpand] = useState(0);
  const { user, isAuthenticated, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  
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
  var tabName;
  if(isAuthenticated)
  {
   tabName=user.given_name.slice(0,3)
  }
  else
  {
    tabName="Account"
  }

  return (
    <div >
     <TabButton
        name={tabName}
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

      { isAuthenticated &&  <StyledMenuItem onClick={onProfile}>
          <ListItemText  primary="Profile" />
        </StyledMenuItem >}

        { !isAuthenticated && <StyledMenuItem onClick={()=>{loginWithRedirect()}}>
          <ListItemText  primary="Login" />
        </StyledMenuItem >}

        { isAuthenticated && <StyledMenuItem onClick={() => logout({ returnTo: window.location.origin })}>
          <ListItemText primary="Logout" />
        </StyledMenuItem>}
        
      </StyledMenu>
    </div>
  );
}