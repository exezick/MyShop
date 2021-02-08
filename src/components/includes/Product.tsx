import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import '../../App.css'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 240,
      overflow: 'none',
    },
    card: {
      display: 'block',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 6,
    },
    bgArea: {
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomLeftRadius: '100%',
      borderBottomRightRadius: '100%',
      width: 300,
      marginLeft: -30,
    },
    imgArea: {
      maxHeight: 180,
    },
    title: {
      color: '#515C6F',
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 0
    },
    price: {
      color: '#F84040',
      padding: 0,
      margin: 0,
      fontWeight: 'bold',
      fontSize: 16,
    },
    btnpurchase: {
      width: '70%',
      borderRadius: 100,
      fontSize: 13,
      paddingTop: 5,
      paddingBottom: 5,
      marginBottom: 10,
      background: 'linear-gradient(45deg, #FF6969 30%, #FF6969 90%)',
      border: 0,
      color: 'white',
    },
    cardcontent: {
      textAlign: 'center'
    },
    rating: {
      marginTop: 7,
    },
    cardaction: {
      textAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
      marginBottom: 10,
      marginTop: 0,
    },
  }),
);

interface ProductListItemProps{
  productsList: ProductLists;
}

function importAll(r: any) {
  let images: any = {};
  r.keys().map((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/img/products', false, /.png$/));

const Product: React.FC<ProductListItemProps> = ({ productsList }) => {
  const classes = useStyles();
  const bgColors = [
    "#ffcdd2",
    "#f8bbd0",
    "#e1bee7",
    "#bbdefb",
    "#b2dfdb",
    "#c8e6c9",
    "#f0f4c3",
    "#ffe0b2",
    "#ff9e80",
    "#ef5350",
    "#ec407a",
    "#ab47bc",
    "#9575cd",
    "#7986cb",
    "#64b5f6"
  ];
  const randomBgColor = { backgroundColor: bgColors[Math.floor(Math.random()*bgColors.length)] }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.bgArea} style={randomBgColor}>
          <img className={classes.imgArea} alt={productsList.productimage} src={images[productsList.productimage].default} />
        </div>
        <CardContent className={classes.cardcontent}>
          <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
            {productsList.producttitle}
          </Typography>
          <Typography className={classes.price} variant="h6" component="h6" gutterBottom>
            {`$${productsList.productprice}`}
          </Typography>
          <Rating name="read-only" value={productsList.productrating} readOnly className={classes.rating} />
        </CardContent>
        <CardActions className={classes.cardaction}>
          <Button variant="contained" disableElevation className={classes.btnpurchase}>Add to cart</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product
