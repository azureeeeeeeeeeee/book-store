import CartItem from "./CartItem";
import { Heading } from "@chakra-ui/react";

const Cart = () => {
  return (
    <>
      <CartItem coverUrl={"./cover/cover-1.webp"} />
      <CartItem coverUrl={"./cover/cover-2.jpg"} />
      <Heading>Total : $20</Heading>
    </>
  );
};

export default Cart;
