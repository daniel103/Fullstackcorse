import { useState, useEffect, useReducer } from 'react';
import './HomePage.css';
import { TextField } from '@mui/material';
import Header from '../../components/Header/Header/Header';
import "./HomePage.css"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ProductItem from '../ProductItem/ProductItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

const HomePage = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST'});
        try {
          const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/v1/`);
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data.data});
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err.massage});
        }
      }
      fetchData();
    }, [])
    
  
  return (
    <div>
      <Header />
      <div className="search">
        <TextField
          id="standard-size-normal"
          variant="standard"
          placeholder="search watch..."
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon id="icon-search" />
      </IconButton>
            </div>
        <div className="Products">
            {products.filter(val => val.subModel.toLowerCase().includes(searchTerm)).map((item ,key) => (
        <div key={key} className="Products-item" >
          <ProductItem item={item} />
          <div>
          </div>
              </div>
            ))}
            </div>
    </div>
  )
}

export default HomePage