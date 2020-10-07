import React from 'react';
import logo from '../../murderLogo.png';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function HeaderBar() {
  const classes = useStyles();
  return (
    <div className="HeaderBar">
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton edge="start" className={styles.menuButton} aria-label="menu">
            <img src={logo} style={styles.img} alt="Logo" />
          </IconButton>
          <Typography variant="h6" className={styles.title}>Johnny Cemani</Typography>
          <Button className={classes.button} color="primary" variant="contained">Main</Button>
          <Button className={classes.button} color="primary" variant="contained">About</Button>
          <Button className={classes.button} color="secondary" variant="contained">Available Eggs</Button>
          <Button className={classes.button} color="secondary" variant="contained">Available Chickens</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;

