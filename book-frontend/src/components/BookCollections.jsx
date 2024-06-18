// import React from "react";
import BookCard from "./BookCard";

const BookCollections = () => {
  return (
    <section className="grid grid-cols-2 mx-24 my-20 place-items-center">
      <BookCard coverUrl={"./cover/cover-1.webp"} />
      <BookCard coverUrl={"./cover/cover-2.jpg"} />
    </section>
  );
};

export default BookCollections;
