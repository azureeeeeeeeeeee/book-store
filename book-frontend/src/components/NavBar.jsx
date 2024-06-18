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

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-8">
      <div className="flex-none">
        <h1>
          <strong>Bookstore</strong>
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
            <MenuItem>
              <FaShoppingCart className="mr-4" />
              Cart
            </MenuItem>
            <MenuItem>
              <FaRegUser className="mr-4" />
              Profile
            </MenuItem>
            <MenuItem>
              <FaSignOutAlt className="mr-4" />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
