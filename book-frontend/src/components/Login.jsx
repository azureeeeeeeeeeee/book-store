import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/token/", {
      username,
      password,
    });
    console.log(res.data.refresh);
    console.log(res.data.access);
    localStorage.setItem("ACCESS_TOKEN", res.data.access);
    localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
    toast.success("Login Sucessfull");
    navigate("/");
  };

  return (
    <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <Heading as="h2" size="3xl" noOfLines={1}>
        BookStore
      </Heading>
      <form onSubmit={handleLogin} action="" method="POST">
        <Input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputGroup className="my-4" size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder={show ? "Enter Password" : "********"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
