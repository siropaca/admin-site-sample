import React, { ReactNode } from 'react';
import Header from '../components/header';
import DrawerMenu from '../components/drawerMenu';
import Footer from '../components/footer';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1
    },
    main: {
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
      <div className={classes.content}>
        <main className={classes.main}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
