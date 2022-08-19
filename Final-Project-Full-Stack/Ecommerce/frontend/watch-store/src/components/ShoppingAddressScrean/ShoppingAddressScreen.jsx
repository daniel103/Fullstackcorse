import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { TextField } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { Store } from '../../store';
import "./ShoppingAddressScreen.css";

const ShoppingAddressScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shoppingAddress },
  } = state;
  const [fullName, setFullName] = useState(shoppingAddress.fullName || '');
  const [address, setAddress] = useState(shoppingAddress.address || '');
  const [city, setCity] = useState(shoppingAddress.city || '');
  const [postalCode, setPostalCode] = useState(shoppingAddress.postalCode || '');
  const [creditCard, setCreditCard] = useState(shoppingAddress.creditCard || '');

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shoppingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        creditCard,
      },
    });
    localStorage.setItem(
      'shoppingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        creditCard,
      })
    );    
      navigate('/placeholder');
  };

  useEffect(() => {
    ctxDispatch({ type: 'SET_FULLBOX_OFF' });
  }, [ctxDispatch, fullBox]);

  
  return (
<div>
<form onSubmit={submitHandler}>
    <div className="shoppingAddress">
    <h1>Shopping Address</h1>
  <TextField
       value={fullName}
       onChange={(e) => setFullName(e.target.value)}
  className="input"
  label="fullName"
  type="text"
  required
  />
  <TextField
       value={address}
       onChange={(e) => setAddress(e.target.value)}
  className="input"
  label="address"
  type="text"
  required
  />
  <TextField
       value={city}
       onChange={(e) => setCity(e.target.value)}
  className="input"
  label="city"
  type="text"
  required
  />
  <TextField
       value={postalCode}
       onChange={(e) => setPostalCode(e.target.value)}
  className="input"
  label="postalCode"
  type="number"
  required
  />
  <TextField
       value={country}
       onChange={(e) => setCountry(e.target.value)}
  className="input"
  label="country"
  type="text"
  required
  />
  <TextField
      value={creditCard}
      onChange={(e) => setCreditCard(e.target.value)}
  className="input"
  label="creditCard"
  type="number"
  required
  />
    <Button variant="primary" type="submit" className="btn-form">
      Continue
    </Button>
    </div>
    </form>
    </div>
  )
}

export default ShoppingAddressScreen;