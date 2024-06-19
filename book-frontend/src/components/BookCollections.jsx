// import React from "react";
import BookCard from "./BookCard";
import { SimpleGrid } from "@chakra-ui/react";

const BookCollections = () => {
  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing={10}
      className="place-items-center mx-24 my-20"
    >
      <BookCard coverUrl={"./cover/cover-1.webp"} />
      <BookCard coverUrl={"./cover/cover-2.jpg"} />
      <BookCard coverUrl={"./cover/cover-1.webp"} />
      <BookCard coverUrl={"./cover/cover-2.jpg"} />
      <BookCard coverUrl={"./cover/cover-1.webp"} />
      <BookCard coverUrl={"./cover/cover-2.jpg"} />
      <BookCard coverUrl={"./cover/cover-1.webp"} />
      <BookCard coverUrl={"./cover/cover-2.jpg"} />
    </SimpleGrid>
  );
};

export default BookCollections;
