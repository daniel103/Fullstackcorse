import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookService from "../../services/BookService";
import BookItem from "../../components/BookItem/BookItem";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./BookPage.css";

const BookPage = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  let { bookId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    BookService.getOneBook(bookId)
      .then((res) => setBook(res.data.data))
      .catch((err) => setError("Book not found"));
  }, [bookId]);

  return error ? (
    <div>HO NO!!!</div>
  ) : (
    <div className="single-book-wrapper">
      {book === null ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <IconButton onClick={() => navigate("/book")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography className="single-book-title">
            Your Picked Book:
          </Typography>
          <BookItem book={book} />
        </>
      )}
    </div>
  );
};

export default BookPage;
