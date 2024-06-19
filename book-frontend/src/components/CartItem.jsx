// import React from "react";
import { Image, Text, Heading, Card, CardBody } from "@chakra-ui/react";

const CartItem = ({ coverUrl }) => {
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
        src={coverUrl}
        alt="Caffe Latte"
      />

      <CardBody className="mx-auto">
        <Text py="2">
          <strong className="text-lg">Judul Buku</strong> - 3 Buku
        </Text>
        <Heading>$10</Heading>
      </CardBody>
    </Card>
  );
};

export default CartItem;
