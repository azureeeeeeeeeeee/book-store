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

const BookCard = ({ book }) => {
  return (
    <Card maxW="sm">
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
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
