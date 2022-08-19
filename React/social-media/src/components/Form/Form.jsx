import React, { useState } from 'react'
import { Box, TextField, Button, Paper } from '@mui/material'
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { postsData } from "../../dammyData";
import './Form.css'
import Post from '../../components/Post/Post';

const Form = () => {

const [click, setClick ]  = useState(false);
const [ newPost, setNewPost ] = useState(postsData);
const [addFormData, setAddFormData] = useState({
  image: "",
  description: "",
});
const [contacts, setContacts] = useState(postsData)



function handle () {
    setClick(!click)
}

const handleAddFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData };
  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
};


const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newContact = {
    id: newPost.length + 1,
    postBy: newPost.postBy,
    image: addFormData.image,
    description: addFormData.description,
    like: addFormData.like = false
  };

  const newContacts = [...contacts, newContact];
  setContacts(newContacts);
  console.log(newContacts)
};

  return (
    <div>
          <div className="feed-wrapper">
      {contacts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
      <button onClick={handle}>New Post</button>
    <div style={{display: click ? 'block' : 'none' }} className="form">
        <form onSubmit={handleAddFormSubmit}>
        <Box className='login-box' elevation={10}>

        <TextField
          onChange={handleAddFormChange}
         name="image"
            label="image url"
            required
        />
        <TextField
          onChange={handleAddFormChange}
                name="description"
            label="post description"
            required
        />
         <Button type="submit" variant="contained">
            Create New Post
          </Button>
        </Box>
        </form>
    </div>
    </div>
  )
}

export default Form