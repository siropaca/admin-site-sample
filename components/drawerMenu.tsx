import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import headerSlice, { HeaderState } from '../lib/slices/headerSlice';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles';

export const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: '75%',
      cursor: 'pointer'
    },
    drawerPaper: {
      width: drawerWidth,
      borderRight: 'none',
      boxShadow: `0 10px 30px -12px rgba(0, 0, 0, 0.42),
         0 4px 25px 0px rgba(0, 0, 0, 0.12),
         0 8px 10px -5px rgba(0, 0, 0, 0.2)`
    },
    drawerBody: {
      zIndex: 4,
      color: '#fff'
    },
    background: {
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%',
      'display': 'block',
      'zIndex': 1,
      'position': 'absolute',
      'backgroundSize': 'cover',
      'backgroundPosition': 'center center',
      'backgroundRepeat': 'no-repeat',
      'backgroundImage': 'url(/images/dolphin.jpg)',
      '&:after': {
        content: '""',
        width: '100%',
        height: '100%',
        display: 'block',
        opacity: 0.8,
        zIndex: 3,
        position: 'absolute',
        background: '#000'
      }
    },
    icon: {
      color: '#fff'
    },
    divider: {
      backgroundColor: 'rgba(180, 180, 180, 0.3)'
    }
  })
);

interface Props {}

function DrawerMenu(props: Props) {
  const classes = useStyles();
  const theme = useTheme();

  const useCounterState = () => {
    return useSelector((state: { header: HeaderState }) => state);
  };

  const state = useCounterState().header;

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(headerSlice.actions.setMobileOpen(!state.mobileOpen));
  };

  const drawer = (
    <>
      <div className={classes.drawerBody}>
        <div className={classes.toolbar}>
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className={classes.logo} />
          </Link>
        </div>
        <Divider className={classes.divider} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.icon}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.divider} />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.icon}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.background}></div>
    </>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={state.mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default DrawerMenu;
