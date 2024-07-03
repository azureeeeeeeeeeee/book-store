import BookCard from "./BookCard";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

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
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner className="mt-20" />
      ) : (
        <SimpleGrid
          minChildWidth="300px"
          spacing={10}
          className="place-items-center mx-24 my-20"
        >
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <div>No Books Yet...</div>
          )}
        </SimpleGrid>
      )}
    </div>
  );
};

export default BookCollections;
