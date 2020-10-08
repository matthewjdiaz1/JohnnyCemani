import React from 'react';
import logo from '../../images/murderLogo.png';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #616161 30%, #212121 90%)',
  },
  buttonsBox: {
    justifyContent: "flex-end",
  },
}));

function HeaderBar() {
  const classes = useStyles();
  return (
    <div className="HeaderBar">
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} aria-label="menu">
            <img src={logo} style={styles.img} alt="Logo" />
          </IconButton>
          <Typography variant="h6" className={styles.title}>Johnny Cemani</Typography>
          <Button className={classes.button} color="primary" variant="contained">Available Eggs</Button>
          <Button className={classes.button} color="primary" variant="contained">Available Chickens</Button>
          <Button className={classes.button} color="primary" variant="contained">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
