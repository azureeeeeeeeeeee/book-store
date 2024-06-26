import {
  Input,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import {
  FaShoppingCart,
  FaRegUser,
  FaSignOutAlt,
  FaBookOpen,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const checkToken = async () => {
      const validToken = await isTokenValid();
      setIsLoggedIn(validToken);
    };

    checkToken();
  }, []);

  return (
    <nav className="flex items-center justify-between px-16 py-4">
      <div className="flex-none">
        <h1>
          <Link to={"/"}>
            <strong>Bookstore</strong>
          </Link>
        </h1>
      </div>
      <div className="max-w-18">
        <Input placeholder="Search..." />
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <Menu>
            <MenuButton>
              <Avatar name="username" src="https://bit.ly/dan-abramov" />
            </MenuButton>
            <MenuList>
              <Link to="/cart">
                <MenuItem>
                  <FaShoppingCart className="mr-4" />
                  Cart
                </MenuItem>
              </Link>
              <Link to="/books/add">
                <MenuItem>
                  <FaBookOpen className="mr-4" />
                  Publish
                </MenuItem>
              </Link>
              <Link to="/profile">
                <MenuItem>
                  <FaRegUser className="mr-4" />
                  Profile
                </MenuItem>
              </Link>
              <Link>
                <MenuItem onClick={handleLogout}>
                  <FaSignOutAlt className="mr-4" />
                  Logout
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <ButtonGroup>
            <Link to="/register">
              <Button colorScheme="blue" variant="outline">
                REGISTER
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="blue">LOGIN</Button>
            </Link>
          </ButtonGroup>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
