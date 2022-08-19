import React, { useState } from "react";
import { postsData } from "../../dammyData";
import Post from "../Post/Post";
import "./Feed.css";
import Modal from "../Modal/Modal";
import Fab from "@mui/material/Fab";

const Feed = ({ openModal, username, setOpenModal }) => {
  const [posts, setPosts] = useState(postsData);

  function addNewPost(image, desc) {
    let newPost = {
      id: posts[posts.length - 1].id + 1,
      postBy: username,
      image: image,
      description: desc,
      like: true,
    };

    setPosts([...posts, newPost]);
    setOpenModal(false);
  }

  return (
    <div className="feed-wrapper">
      {openModal && <Modal addNewPost={addNewPost} />}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
