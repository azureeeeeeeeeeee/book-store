// import React from 'react'
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Image,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("ACCESS_TOKEN");
  const handleAdd = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/cart/add/",
        {
          book_id: book.id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Item added to cart");
      navigate("/");
    } catch (error) {
      console.log("error\n", error);
      toast.error("Error has occured");
    }
  };
  return (
    <Card maxW="sm">
      <Link key={book.id} to={`books/${book.id}`}>
        <CardBody>
          <Image
            //   boxSize="200px"
            src={`http://127.0.0.1:8000${book.cover}`}
            alt={`Cover of the book ${book.title}`}
            borderRadius="lg"
            width="200px"
            height="300px"
            objectFit="cover"
            className="mx-auto"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{book.title}</Heading>
            <Text>{book.description.substring(0, 100)}...</Text>
            <Text color="blue.600" fontSize="2xl">
              ${book.price}
            </Text>
          </Stack>
        </CardBody>
      </Link>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button onClick={handleAdd} variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
