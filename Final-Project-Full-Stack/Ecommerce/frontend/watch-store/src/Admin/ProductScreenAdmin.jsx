import React, {useEffect, useReducer,} from 'react';
import {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardActionArea, Button, Card, CardContent, Typography} from '@mui/material';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox/LoadingBox';
import MessageBox from '../components/MessageBox/MessageBox';
import Header from '../components/Header/Header/Header';
import ModeIcon from '@mui/icons-material/Mode';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Store } from '../store';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST' :
      return {...state, loading: true};
    case 'FETCH_SUCCESS' :
      return {...state, product: action.payload, loading: false};
    case 'FETCH_FAIL' :
      return {...state, loading: false, error: action.payload };
      default:
        return state;
  }
};

const ProductScreenAdmin = () => {
  // const {state} = useContext(Store);
  let params = useParams();
  const {id} = params;
  let navigate = useNavigate();


  const [{ loading, error, product}, dispatch] = useReducer(reducer, {
    product: [],
    loading: false,
    error: '',
  })

const updateClick = () => {
  navigate(`/admin/product/update/${id}`);
}

const addClick = () => {
  navigate("/admin/product/addProduct");
}
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/v1/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.data});
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.massage});
      }
    }
    fetchData();
  }, [id])

  const handelDelete = async () => {
      dispatch({ type: 'FETCH_REQUEST'});
      try {
        const result = await axios.delete(`${process.env.REACT_APP_API_URL}/api/product/v1/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.data});
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.massage});
  } 
  }
const {state, dispatch: ctxDispatch} = useContext(Store);
const {cart} = state;
const addToCartHandler = async () => {
  const existItem = cart.cartItems.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/v1/${product._id}`);
  if (data.countInStock < quantity) {
    window.alert('Sorry. Product is out of stock');
    return;
  }
  ctxDispatch({
    type: 'CART_ADD_ITEM',
    payload: { ...product, quantity },
  });
  navigate('/cart');
};


  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Header />
      <div className="product">
      <KeyboardBackspaceIcon  className="back-btn" onClick={() => navigate("/")}/>
    <Card sx={{ maxWidth: 300 }} className="card">
      <CardActionArea>
        <CardContent>
        <img
          component="img"
          src={product.image}
          alt={product.brand}
          height="200"
          className="image"
        />
          <Typography gutterBottom variant="h6" component="div">
            {product.brand}
          </Typography>
          <span>{product.subModel}</span>
          <h2  className="price">
          ₪{product.price}
          </h2>
        </CardContent>
      </CardActionArea>
    <Button variant="outlined" className="button" onClick={addToCartHandler}>add to cart</Button>
    </Card>
    <div className="icons-admin">
      <Fab color="primary" aria-label="add">
  <AddIcon onClick={addClick} className="add-btn"/>
</Fab>
<Fab color="secondary" aria-label="edit" onClick={updateClick}>
        <EditIcon onClick={updateClick} className="update-btn"/>
      </Fab>
      <IconButton aria-label="delete" size="large" onClick={handelDelete}>
        <DeleteIcon fontSize="inherit" className="delete-btn"/>
      </IconButton>
    </div>
      </div>
    </div>
  )
}

export default ProductScreenAdmin