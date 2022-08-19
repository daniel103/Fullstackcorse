import React, { useEffect, useState } from "react";
import BookService from "../../services/BookService";
import { Grid, Box } from "@mui/material";
import BookItem from "../../components/BookItem/BookItem";
import "./BookListPage.css";

const BookListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getAllBook().then((res) => setBooks(res.data.data));
  }, []);

  return (
    <Box className="book-page-container" sx={{ flexGrow: 1 }}>
      <Grid className="book-page-grid-container" container spacing={2}>
        {books.map((book) => (
          <Grid key={book._id} item>
            <BookItem key={book._id} book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookListPage;
