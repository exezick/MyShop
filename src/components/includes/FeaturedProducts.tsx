import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import '../../App.css';
import Product from './Product'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 100,
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

const productList: Array<ProductLists> = [
  { productimage: 'product-1.png', producttitle: 'Yellow Tshirt', productprice: '20.00', productrating: 4 },
  { productimage: 'product-2.png', producttitle: 'Snowy Long Sleeve', productprice: '30.40', productrating: 3 },
  { productimage: 'product-3.png', producttitle: 'Bag Pack - Black', productprice: '20.00', productrating: 3 },
  { productimage: 'product-4.png', producttitle: 'Fendi-Gloria Bag', productprice: '200.50', productrating: 5 },
];

const FeaturedProducts: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" gutterBottom className={classes.title}>
          FEATURED PRODUCTS
        </Typography>
        <hr className="borderTitle" />
        <div className={classes.productwrap}>
          <div className={classes.product}>
            <Grid container spacing={7}>
              {productList.map((step, index) => (
                <Grid item xs={3}>
                  <Product key={index} productsList={productList[index]} />
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.continuer} />
        </div>
      </Container>
    </div>
  )
}

export default  FeaturedProducts;
