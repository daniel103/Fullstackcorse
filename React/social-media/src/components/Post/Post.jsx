import React, { useState } from "react";
import { Paper } from "@mui/material";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import "./Post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Paper className="post-wrapper">
      <div className="post-title">
        Post By: <b>{post.postBy}</b>
      </div>
      <div className="post-image">
        <img src={post.image} alt="img" />
      </div>
      <div className="post-like-wrapper">
        {like ? (
          <FaHeart onClick={handleLike} className="like-icon" fontSize={30} />
        ) : (
          <FaHeartBroken onClick={handleLike} className="like-icon" fontSize={30} />
        )}
      </div>
      <div className="post-description">{post.description}</div>
    </Paper>
  );
};

export default Post;
