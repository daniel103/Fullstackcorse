import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../store';
import fireAlert from '../utils/Alert';
import "./UpdateProduct.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UpdateProduct = () => {

  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });


const [image, setImage] = useState("");
const [brand, setBrand] = useState("");
const [subModel, setSubModel] = useState("");
const [price, setPrice] = useState("");


useEffect(() => {
  const fetchData = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/api/product/v1/${productId}`);
      setPrice(data.price);
      setImage(data.image);
      setBrand(data.brand);
      setSubModel(data.subModel);
      console.log(data)
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
        payload: console.log(err),
      });
    }
  };
  fetchData();
}, [productId]);


const submitHandler = async (e) => {
  e.preventDefault();
  try {
    dispatch({ type: 'UPDATE_REQUEST' });
    await axios.put(`${process.env.REACT_APP_API_URL}/api/product/v1/${productId}`,
      {
        _id: productId,
        price,
        image,
        brand,
        subModel,
      },
    );
    dispatch({
      type: 'UPDATE_SUCCESS',
    });
    fireAlert('Product updated successfully');
  } catch (err) {
    console.log(err);
    dispatch({ type: 'UPDATE_FAIL' });
  }
};

  return (
    <div className="updateProduct-product">
    <div className="updateProduct">
<h2 className="title">Update Product</h2>
      <form onSubmit={submitHandler} className="form-update">
    <TextField
  id="outlined-name"
  label="image"
  onChange={(e) => setImage(e.target.value)} name='image' defaultValue={image}
/>
<TextField
  id="outlined-name"
  label="brand"
  defaultValue={ brand}
  onChange={(e) => setBrand(e.target.value)} name='brand'
/>
<TextField
  id="outlined-name"
  label="subModel"
  defaultValue={subModel}
  onChange={(e) => setSubModel(e.target.value)} name='subModel' 
/>
<TextField
  id="outlined-name"
  label="price"
  defaultValue={price }
  onChange={(e) => setPrice(e.target.value)} name='price' 
/>
<Button  variant="contained" color="success" className="Button-register" type="submit">save</Button>
      </form>
    </div>
    </div>
  )
}

export default UpdateProduct