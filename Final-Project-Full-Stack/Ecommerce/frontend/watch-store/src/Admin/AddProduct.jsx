import { Button, TextField } from '@mui/material'
import React from 'react'
import fireAlert from '../utils/Alert';
import { useForm } from 'react-hook-form';
import ProductsService from '../services/ProductsService';
import "./AddProduct.css";
const AddProduct = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    try {
      const result = await ProductsService.addProduct(data)
      fireAlert("Created Successfully");
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="add-product">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
    <TextField
    {...register('image', {required: "image is required"})}
  id="outlined-name"
  label="image"
/>
{errors.image && <p>{errors.image.message}</p>}
<TextField
    {...register('titleProduct', {required: "TitleProduct is required"})}
id="outlined-name"
label="titleProduct"
/>
{errors.titleProduct && <p>{errors.titleProduct.message}</p>}
<TextField
    {...register('brand', {required: "brand is required"})}
  id="outlined-name"
  label="brand"
/>
{errors.brand && <p>{errors.brand.message}</p>}
<TextField
    {...register('subModel', {required: "sub model is required"})}
  id="outlined-name"
  label="subModel"
/>
{errors.subModel && <p>{errors.subModel.message}</p>}
<TextField
    {...register('price', {required: "price is required"})}
  id="outlined-name"
  label="price"
/>
{errors.price && <p>{errors.price.message}</p>}
<Button variant="contained" type="submit">Add Product</Button>
      </form>
    </div>
  )
}

export default AddProduct