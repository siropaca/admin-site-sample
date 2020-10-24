import React, { ReactNode } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      opacity: 0.5
    }
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      Copyright © KAGOSHIMA CITY BLUE MARINE CAB All Rights Reserved.
    </footer>
  );
}
