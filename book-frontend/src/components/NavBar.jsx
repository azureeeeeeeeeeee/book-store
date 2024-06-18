import React from "react";
import {
  Input,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaShoppingCart, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <Menu>
          <MenuButton>
            <Avatar name="username" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <Link>
              <MenuItem>
                <FaShoppingCart className="mr-4" />
                Cart
              </MenuItem>
            </Link>
            <Link>
              <MenuItem>
                <FaRegUser className="mr-4" />
                Profile
              </MenuItem>
            </Link>
            <Link>
              <MenuItem>
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