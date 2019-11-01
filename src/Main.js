import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import ButtonsPage from './pages/Buttons'
import CheckboxesPage from './pages/Checkboxes';
import RadioButtonsPage from './pages/RadioButtons'
import ECommerce from './pages/ECommerce';

const useAppBarStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    boxShadow: '0 0.5rem 1rem 0 rgba(44,51,73,.1)',
    backgroundColor: 'white',
    color: 'black',
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
}))

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
    backgroundColor: theme.palette.background.main
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}))

function Main() {
  const appBarClasses = useAppBarStyles()
  const classes = useStyles()
  const [open, setOpen] = useState(true)  // TODO @fox: set default state based on screen width
  const [currentPage, setCurrentPage] = useState('Buttons')

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
        // anchor="right"
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
          {['E-commerce', 'IoT Dashboard'].map((text, index) => (
            <ListItem button key={text} onClick={() => setCurrentPage(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Buttons', 'Checkboxes', 'Radio Buttons'].map((text, index) => (
            <ListItem button key={text} onClick={() => setCurrentPage(text)}>
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

        {/* TODO @fox: we need a better alternative than this empty element */}
        <div className={classes.toolbar} />

        <div className="Main">
          { currentPage === 'Buttons' && <ButtonsPage />}
          { currentPage === 'Checkboxes' && <CheckboxesPage />}
          { currentPage === 'Radio Buttons' && <RadioButtonsPage />}
          { currentPage === 'E-commerce' && <ECommerce />}
        </div>
      </main>
    </div>
  )
}

export default Main
