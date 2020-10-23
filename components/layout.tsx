import React, { ReactNode } from 'react';
import Header from '../components/header';
import DrawerMenu from '../components/drawerMenu';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

interface Props {
  children?: ReactNode;
}

export default function Layout(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <DrawerMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
