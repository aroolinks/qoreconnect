import { Paper, ThemeProvider, Typography } from '@material-ui/core';
import { Container, CssBaseline, Grid, Box } from '@mui/material';

import React from 'react';
import useStyles from './styles';

function Gorila() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <CssBaseline />

      <main className={classes.main}>
        <Container fixed className={classes.containerLeft}>
          {' '}
          lorem fkjd;lfjadls;kj l;ksadjf ;lsdkajf; ;asdlkfj
        </Container>
        <Container maxWidth='sm' className={classes.containerRight}>
          <Paper className={classes.box}> this is folder </Paper> lorem
          fkjd;lfjadls;kj l;ksadjf ;lsdkajf; ;asdlkfj
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Gorila;
