// import React from "react";
import BookCard from "./BookCard";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BookCollections = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/books/");
        setBooks(res.data.books);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  return loading ? (
    <Spinner className="mt-20" />
  ) : (
    <SimpleGrid
      minChildWidth="300px"
      spacing={10}
      className="place-items-center mx-24 my-20"
    >
      {books.map((book) => (
        <Link key={book.id} to={`books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default BookCollections;
