// import React from "react";
import BookCard from "./BookCard";
import { SimpleGrid } from "@chakra-ui/react";

const BookCollections = () => {
  return (
    // <section className="grid gap-4 grid-cols-2 mx-24 my-20 place-items-center">
    //   <BookCard coverUrl={"./cover/cover-1.webp"} />
    //   <BookCard coverUrl={"./cover/cover-2.jpg"} />
    //   <BookCard coverUrl={"./cover/cover-1.webp"} />
    //   <BookCard coverUrl={"./cover/cover-2.jpg"} />
    // </section>
    <SimpleGrid
      //   columns={2}
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
