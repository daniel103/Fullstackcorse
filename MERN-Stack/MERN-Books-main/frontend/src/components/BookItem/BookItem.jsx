import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookItem.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material/";

const DIFFICULTY_STYLE = {
  easy: "#4cd137",
  medium: "#fbc531",
  hard: "#e84118",
};

const BookItem = ({ book }) => {
  let navigate = useNavigate();

  const handleCardClick = () => {
    navigate(book._id, { replace: true });
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 345, minHeight: 340 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="180"
          image={`http://localhost:8000/${book.image}`}
          alt="book image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Author:</b> {`${book.author.firstName} ${book.author.lastName}`}
            <br />
            <br />
            Difficulty:
            <span style={{ color: DIFFICULTY_STYLE[book.difficulty] }}>
              {book.difficulty}
            </span>
            <br />
            Pages: {book.pages}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookItem;
