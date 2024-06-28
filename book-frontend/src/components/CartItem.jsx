// import React from "react";
import { Image, Text, Heading, Card, CardBody } from "@chakra-ui/react";

const CartItem = ({ item }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      className="items-center"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        width="100px"
        height="150px"
        src={`http://127.0.0.1:8000${item.book.cover}`}
        alt="Caffe Latte"
      />

      <CardBody className="mx-auto">
        <Text py="2">
          <strong className="text-lg">{item.book.title}</strong> -{" "}
          {item.quantity} Book(s)
        </Text>
        <Heading>${item.book.price * item.quantity}</Heading>
      </CardBody>
    </Card>
  );
};

export default CartItem;
