import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import headerSlice, { HeaderState } from '../lib/slices/headerSlice';
import DrawerMenuList from '../components/drawerMenuList';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth,
      borderRight: 'none',
      boxShadow: `0 10px 30px -12px rgba(0, 0, 0, 0.42),
         0 4px 25px 0px rgba(0, 0, 0, 0.12),
         0 8px 10px -5px rgba(0, 0, 0, 0.2)`
    }
  })
);

interface Props {}

function DrawerMenu(props: Props) {
  const classes = useStyles();

  const useCounterState = () => {
    return useSelector((state: { header: HeaderState }) => state);
  };

  const state = useCounterState().header;

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(headerSlice.actions.setMobileOpen(!state.mobileOpen));
  };

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={state.mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}>
          <DrawerMenuList />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open={true}>
          <DrawerMenuList />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default DrawerMenu;
