import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
  } from "@mui/material/";
  import Button from '@mui/material/Button'
import { Store } from '../../store';
import axios from 'axios';


const ProductItem = ({item}) => {
    let navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const handleOneProduct = () => {
      if(userInfo.isAdmin){
        navigate(`/admin/product/${item._id}`)
      }else {
        navigate(`/product/${item._id}`);
      }   
    }

    const addToCartHandler = async (item) => {
      const existItem = cart.cartItems.find((x) => x._id === item._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/v1/${item._id}`);
      if (data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
        ctxDispatch({
          type: 'CART_ADD_ITEM',
          payload: { ...item, quantity },
        });
    }

  return (
    <div className="Products">
<div className="Products-item" >
      <Card sx={{ maxWidth: 300 }} className="card">
<CardActionArea onClick={handleOneProduct}>
<CardContent>
<img
  component="img"
  src={item.image}
  alt={item.brand}
  height="200"
  className="image"
/>
  <Typography gutterBottom variant="h6" component="div">
    {item.brand}
  </Typography>
  <span>{item.subModel}</span>
  <h2  className="price">
  ₪{item.price}
  </h2>
</CardContent>
</CardActionArea>
<Button variant="outlined" className="button" onClick={() => addToCartHandler(item)}>add to cart</Button>
</Card>
      </div>
    </div>
  )
}

export default ProductItem;