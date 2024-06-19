import Cart from "../components/Cart";
import { Button } from "@chakra-ui/react";

const CartPage = () => {
  return (
    <>
      <section className="flex flex-col gap-4 w-96 mx-auto my-6">
        <Cart />
      </section>
      <Button colorScheme="blue">Checkout</Button>
    </>
  );
};

export default CartPage;
