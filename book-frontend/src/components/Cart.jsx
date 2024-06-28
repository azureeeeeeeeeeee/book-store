import CartItem from "./CartItem";
import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const Cart = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [item, setItem] = useState(null);
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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, [token]);

  return loading ? <Spinner /> : <div>Data Fetched</div>;
};

export default Cart;
