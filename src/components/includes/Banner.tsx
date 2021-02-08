import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import shopgirl from '../assets/svg/banner-shoppinggirl.svg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: 'transparent'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '45%',
      paddingTop: 120,
      paddingLeft: 70,
      textAlign: 'left',
    },
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#E11785'
    },
    subtitle: {
      fontSize: 22,
      color: '#575454',
      width: '85%',
      paddingLeft: 10,
      marginTop: 30,
    },
    svgbanner: {
      width: '45%',
      float: 'right',
      marginTop: 60,
      marginRight: 40
    },
    btnshop: {
      width: 300,
      marginTop: 60,
      paddingLeft: 10,
      borderRadius: 100,
      fontSize: 20,
      paddingTop: 15,
      paddingBottom: 15,
      background: 'linear-gradient(45deg, #ED5199 30%, #ED5199 90%)',
      border: 0,
      color: 'white',
    }
  }),
);

function Banner() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <div className={classes.details}>
        <Typography variant="h3" gutterBottom className={classes.title}>
          ONLINE SHOPPING
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus
        </Typography>
        <Button variant="contained" disableElevation className={classes.btnshop}>SHOP NOW</Button>
      </div>
      <img src={shopgirl} className={classes.svgbanner} alt={shopgirl} />
    </Card>
  );
}

export default Banner
