// import React from "react";
import { Box, Text, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { FaRegUser, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
        <Heading as="h2" size="3xl" noOfLines={1}>
          BookStore
        </Heading>
        <SimpleGrid
          minChildWidth="200px"
          spacing={4}
          className="place-items-center mx-24 my-20"
        >
          <Box borderRadius="lg" borderWidth="1px" className="p-4 min-w-10">
            <FaRegUser className="mx-auto text-5xl" />
            <Heading as="h3" size="xl" className="mb-4">
              Customer
            </Heading>
            <Text>Are you a customer and just want to buy book ?</Text>
            <Link to="/register/customer">
              <Button colorScheme="blue">Register as a Customer</Button>
            </Link>
          </Box>
          <Text>
            <strong>OR</strong>
          </Text>
          <Box borderRadius="lg" borderWidth="1px" className="p-4">
            <FaBuilding className="mx-auto text-5xl" />
            <Heading as="h3" size="xl" className="mb-4">
              Publisher
            </Heading>
            <Text>Are you a Publisher and want to publish your book ?</Text>
            <Button colorScheme="blue">Register as a Publisher</Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Register;
