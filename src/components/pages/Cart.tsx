import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import '../../App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 40,
      paddingBottom: 50,
      backgroundColor: "#F9F9F9",
    },
    container: {
      backgroundColor: 'none'
    },
    title: {
      fontWeight: 'bold',
      color: '#515C6F',
      textAlign: 'center'
    },
    productwrap: {
      flexGrow: 1,
      marginTop: 80,
    },
    product: {
      float: 'left',
      display: 'block',
      marginLeft: theme.spacing(4.5),
      marginRight: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    continuer: {
      clear: 'both'
    }
  })
);

const Cart: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" gutterBottom className={classes.title}>
          CART
        </Typography>
        <hr className="borderTitle" />
        <div className={classes.productwrap}>
          <div className={classes.continuer} />
        </div>
      </Container>
    </div>
  )
}

export default  Cart;
