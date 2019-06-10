import React from 'react';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import Home from '../scenes/Home';
import RouteOne from '../scenes/RouteOne';
import RouteTwo from '../scenes/RouteTwo';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const DrawerRouter = () => {
  const classes = useStyles();

  return (

    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Router>
        <div className={classes.toolbar} />

        <List>
          <NavLink to="/">
            <ListItem button key="home">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>

          <NavLink to="/route-one">
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Route One" />
            </ListItem>
          </NavLink>

          <NavLink to="/route-two">
            <ListItem button key="route-two">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Route Two" />
            </ListItem>
          </NavLink>
        </List>

        <Route path="/" exact component={Home} />
        <Route path="/route-one/" component={RouteOne} />
        <Route path="/route-two/" component={RouteTwo} />
      </Router>
    </Drawer>
  );
};

export default DrawerRouter;
