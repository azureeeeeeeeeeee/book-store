// import React from "react";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  Button,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

const RegisterCustomer = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);
  return (
    <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <Heading as="h2" size="3xl" noOfLines={1}>
        BookStore
      </Heading>

      <Box className="mt-4">
        <form action="" method="POST">
          <Heading className="mb-4" as="h2" size="lg">
            Register as Customer
          </Heading>

          <Box className="text-left mb-4">
            <Text>* You Cannot Change username</Text>
            <Input placeholder="Enter Username" />
          </Box>

          <Box className="text-left">
            <Text>Full Name</Text>
            <Input placeholder="Enter Full Name" />
          </Box>

          <Box className="text-left my-4">
            <Text>Password</Text>
            <InputGroup className="" size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder={show ? "Enter Password" : "********"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box className="text-left">
            <Text>Confirm Password</Text>
            <InputGroup className="" size="md">
              <Input
                pr="4.5rem"
                type={show2 ? "text" : "password"}
                placeholder={show2 ? "Confirm Password" : "********"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick2}>
                  {show2 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button className="mt-4" colorScheme="blue">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterCustomer;
