import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <Heading as="h2" size="3xl" noOfLines={1}>
        BookStore
      </Heading>
      <form action="" method="POST">
        <Input placeholder="Enter Username" />
        <InputGroup className="my-4" size="md">
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
        <Button colorScheme="blue">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
