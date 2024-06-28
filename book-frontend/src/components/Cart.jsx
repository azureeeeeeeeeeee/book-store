import CartItem from "./CartItem";
import { Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const Cart = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/cart/view/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.items);
        setItems(res.data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchItem();
  }, [token]);

  return loading ? (
    <Spinner />
  ) : items ? (
    <>
      <Heading>Your items</Heading>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </>
  ) : (
    <Text>No items yet</Text>
  );
};

export default Cart;
