import React from 'react'
import MdcsButton from './components/Button'
import './Main.css'

import {Button, Container} from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useAppBarStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const drawerWidth = 200;

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
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(7) + 1,
    // },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

function Main() {
  const appBarClasses = useAppBarStyles();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);  // TODO @fox: set default state based on screen width

  function handleDrawerOpen() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={appBarClasses.root}>
        <Toolbar>
          <IconButton edge="start" className={appBarClasses.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={appBarClasses.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        // className={classes.drawer}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        variant="permanent"
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className="Main">
        {/* variant="text" */}
        <MdcsButton variant="text" color="success">
          Mdcs success
        </MdcsButton>
        <MdcsButton variant="text" color="info">
          Mdcs info
        </MdcsButton>
        <MdcsButton variant="text" color="warning">
          Mdcs warning
        </MdcsButton>
        <MdcsButton variant="text" color="danger">
          Mdcs danger
        </MdcsButton>

        {/* variant="outlined" */}
        <MdcsButton variant="outlined" color="success">
          Mdcs success
        </MdcsButton>
        <MdcsButton variant="outlined" color="info">
          Mdcs info
        </MdcsButton>
        <MdcsButton variant="outlined" color="warning">
          Mdcs warning
        </MdcsButton>
        <MdcsButton variant="outlined" color="danger">
          Mdcs danger
        </MdcsButton>

        {/* variant="contained" */}
        <MdcsButton variant="contained" color="success">
          Mdcs success
        </MdcsButton>
        <MdcsButton variant="contained" color="info">
          Mdcs info
        </MdcsButton>
        <MdcsButton variant="contained" color="warning">
          Mdcs warning
        </MdcsButton>
        <MdcsButton variant="contained" color="danger">
          Mdcs danger
        </MdcsButton>

        <MdcsButton variant="text" color="primary">
          Mdcs primary
        </MdcsButton>

        <Button variant="text" color="primary">
          mui primary
        </Button>
        <Button variant="text" color="secondary">
          mui secondary
        </Button>
        <Button variant="text" color="info">
          mui info
        </Button>
      </div>
      </main>
    </div>
  )
}

export default Main
