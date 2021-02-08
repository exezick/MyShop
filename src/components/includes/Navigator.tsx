import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 500,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      color: '#3C4658',
      float: 'left',
      marginLeft: theme.spacing(1),
    },
    links: {
      textDecoration: 'none',
      color: '#3C4658',
      marginLeft: theme.spacing(3),
    },
    btnlink: {
      color: '#3C4658',
    },
    noradius: {
      borderRadius: 0
    },
    btnorange: {
      background: 'linear-gradient(45deg, #FF6969 30%, #FF6969 90%)',
      border: 0,
      color: 'white',
    },
    badge: {
      background: 'linear-gradient(45deg, #FF6969 30%, #FF6969 90%)',
    },
    appBarBg: {
      background: '#AA2864',
      color: 'white'
    },
  }),
);

function Navigator() {
  const classes = useStyles();
  const [bgcolor, setBgcolor] = useState("rgba(0,0,0,0)");
  const [color, setColor] = useState("#3C4658");

  const appBarBgChangerDeafult = () => {
    setBgcolor("rgba(0,0,0,0)");
    setColor("#3C4658");
  };

  const appBarBgChanger = () => {
    setBgcolor("linear-gradient(45deg, #FA5098 30%, #AA2864 90%)");
    setColor("#FFF");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarBg} style={{ background: bgcolor}} elevation={0}>
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title} style={{ color: color}}>
            MyShop
          </Typography>
          <Link to="/" className={classes.links} onClick={appBarBgChangerDeafult}>
            <Button className={`${classes.btnlink} ${classes.noradius}`} style={{ color: color}}>Home</Button>
          </Link>
          <Link to="/shop" className={classes.links} onClick={appBarBgChanger}>
            <Button className={`${classes.btnlink} ${classes.noradius}`} style={{ color: color}}>Shop</Button>
          </Link>
          <Link to="/cart" className={classes.links} onClick={appBarBgChanger}>
            <IconButton className={classes.btnlink} style={{ color: color}}>
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/signin" className={classes.links} onClick={appBarBgChanger}>
            <Button variant="contained" disableElevation className={classes.btnorange}>Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigator
