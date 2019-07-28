import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Timeline,FontDownload,GraphicEq,Functions,Poll,Copyright,PieChart,NavigateNext,BarChart } from '@material-ui/icons'


import { Link } from 'react-router-dom';
import classes from './AppMenuItem.module.css';
import appClasses from '../../../App.module.css';
import Aux from '../../../containers/Auxiliary/Auxiliary';

import config from '../../../config';
let { menuItemNames } = config;

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
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

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    let icon = null;
    switch(props.item.label){
      case(menuItemNames.algebra):
        icon = <FontDownload />
      break;
      case(menuItemNames.approximations):
        icon = <GraphicEq/>
      break;
      case(menuItemNames.calculus):
        icon = <Functions/>
      break;
      case(menuItemNames.geometryAndTrig):
        icon = <PieChart />
      break;
      case(menuItemNames.probAndStats):
        icon = <BarChart />
      break;
      case(menuItemNames.unitConversion):
        icon = <Poll />
      break;
      case(menuItemNames.constants):
        icon = <Copyright/>
      break;
      default :
        icon = <Functions />;
    }

    let menu = null;
    if(props.hasSubmenu){
        menu = <Aux>
            <ListItem button key={props.item.label} 
            onClick={handleClick} 
            aria-controls="customized-menu"
            aria-haspopup="true">
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={props.item.label} />
            </ListItem>
            
    
            <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                {props.item.submenu.map((subMenuItem) => (
                    <Link to={subMenuItem.to} className={appClasses.Link} key={subMenuItem.to}>
                        <StyledMenuItem>
                        <ListItemIcon>
                            <NavigateNext />
                        </ListItemIcon>
                        <ListItemText primary={subMenuItem.label} />
                        </StyledMenuItem>
                    </Link>
                ))}
            </StyledMenu>
        </Aux>
    } else {
        menu = <Link to={props.item.to} className={classes.Link} key={props.item.to}>
        
        <ListItem button key={props.item.label}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={props.item.label} />
        </ListItem>
        </Link>
    }
  return (
    <div>
        {menu}
    </div>
  );
}
