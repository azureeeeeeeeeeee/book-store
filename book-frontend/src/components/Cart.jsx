import CartItem from "./CartItem";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/checkout/",
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res);
      toast.success("Checkout Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Checkout Failed");
    }
  };

  return loading ? (
    <Spinner />
  ) : items ? (
    <>
      <Heading>Your items</Heading>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <form onSubmit={handleCheckout} method="post">
        <Button colorScheme="blue" type="submit">
          Checkout
        </Button>
      </form>
    </>
  ) : (
    <Text>No items yet</Text>
  );
};

export default Cart;
