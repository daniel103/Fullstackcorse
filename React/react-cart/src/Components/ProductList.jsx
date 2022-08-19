import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Product from "./Product";
import Grid from "@mui/material/Grid";

const ProductList = ({ products, addProductToCart }) => {
  return (
    <Box className="box-wrapper">
      <Paper className="paper-wrapper">
        <h3 className="product-list-header">Welcome To My Shop</h3>
        <Grid className="product-list-grid" container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={6} key={index}>
              <Product
                addProductToCart={addProductToCart}
                item={product}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductList;
