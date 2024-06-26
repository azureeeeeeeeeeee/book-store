import {
  Box,
  Text,
  Button,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const BookProfile = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/books/${id}/`);
      setBook(res.data);
      setLoading(false);
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return <Spinner className="mt-20" />;
  }

  return (
    <Box className="flex justify-center px-10 mt-6">
      <SimpleGrid minChildWidth="200px" className="place-items-center">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          width="200px"
          height="300px"
          borderRadius="lg"
          src={`http://127.0.0.1:8000${book.books.cover}`}
          alt="Caffe Latte"
        />
        <Box className="w-96">
          <Heading size="xl">{book.books.title}</Heading>
          <Heading size="lg">Written by {book.books.author}</Heading>
          <Heading size="m">Published by {book.name}</Heading>
          <Text className="mt-4">{book.books.description}</Text>
          <Box className="flex justify-center gap-4 mt-4">
            <Button colorScheme="blue">Buy Now</Button>
            <Button>Add To Cart</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BookProfile;
