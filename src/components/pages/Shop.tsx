import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../../App.css';
import Product from '../includes/Product'

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
      marginTop: 40,
    },
    product: {
      float: 'left',
      display: 'block',
      marginLeft: theme.spacing(4.5),
      marginRight: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    searcharea: {
      marginTop: 50,
    },
    input: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1),
      flex: 1,
      background: '#ECEDEE',
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 15,
      paddingRight: 10,
      maxHeight: 48,
      width: 300,
    },
    select: {
      flex: 1,
      background: '#ECEDEE',
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 15,
      paddingRight: 10,
      maxHeight: 48,
      color: '#43425D'
    },
    searchbtn: {
      paddingTop: 7,
      paddingBottom: 7,
      maxHeight: 40,
      background: 'linear-gradient(45deg, #F54395 30%, #F54395 90%)',
      borderRadius: 0,
    },
    continuer: {
      clear: 'both'
    }
  })
);

const productList: Array<ProductLists> = [
  { productimage: 'product-1.png', producttitle: 'Yellow Tshirt', productprice: '20.00', productrating: 4 },
  { productimage: 'product-2.png', producttitle: 'Snowy Long Sleeve', productprice: '30.40', productrating: 3 },
  { productimage: 'product-3.png', producttitle: 'Bag Pack-Black', productprice: '20.00', productrating: 3 },
  { productimage: 'product-4.png', producttitle: 'Fendi-Gloria Bag', productprice: '200.50', productrating: 5 },
  { productimage: 'product-5.png', producttitle: 'Moschino-Backpack', productprice: '100.33', productrating: 3 },
  { productimage: 'product-6.png', producttitle: 'Top-Handle Bag ', productprice: '200.50', productrating: 4 },
  { productimage: 'product-7.png', producttitle: 'TShirt Red', productprice: '20.00', productrating: 3 },
  { productimage: 'product-8.png', producttitle: 'Sweat shirt - blue', productprice: '25.00', productrating: 3 },
];

const categories = [
  {
    label: "Bags",
    value: 1,
  },
  {
    label: "Clothes",
    value: 2,
  },
];

const Shop: React.FC = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState('0');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5" gutterBottom className={classes.title}>
          SHOP HERE
        </Typography>
        <hr className="borderTitle" />

        <div className={classes.searcharea}>
          <Button className={classes.searchbtn} variant="contained" color="primary" disableElevation>
            <SearchIcon />
          </Button>
          <InputBase
            className={classes.input}
            placeholder="Search products"
          />
          <Select
            labelId="category-label"
            id="category"
            className={classes.select}
            value={category}
            onChange={handleChange}
            disableUnderline
          >
            <MenuItem value="0">
              Category
            </MenuItem>
            {categories.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </div>

        <div className={classes.productwrap}>
          <div className={classes.product}>
            <Grid container spacing={5}>
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

export default  Shop;
