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
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    console.log("deleting access token");
    localStorage.removeItem("ACCESS_TOKEN");
    console.log("deleting refresh token");
    localStorage.removeItem("REFRESH_TOKEN");
    console.log("user logout");
  };
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
        {/* If not logged in */}
        {/* <ButtonGroup>
          <Link>
            <Button colorScheme="blue" variant="outline">
              REGISTER
            </Button>
          </Link>
          <Link>
            <Button colorScheme="blue">LOGIN</Button>
          </Link>
        </ButtonGroup> */}
        {/* If logged in */}
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
      </div>
    </nav>
  );
};

export default NavBar;
