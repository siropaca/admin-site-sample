import React from 'react';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

function DrawerMenuList(props: Props) {
  const classes = useStyles();

  return (
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
}

export default DrawerMenuList;
