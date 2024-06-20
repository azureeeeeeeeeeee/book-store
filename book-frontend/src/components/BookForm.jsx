// import React from "react";
import {
  Input,
  Textarea,
  Button,
  Box,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const BookForm = () => {
  return (
    <form action="" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <FormControl>
        <FormLabel>Title of the book</FormLabel>
        <Input placeholder="Title of the book" />
      </FormControl>
      <FormControl>
        <FormLabel>Author of the book</FormLabel>
        <Input placeholder="Author" />
      </FormControl>
      <FormControl>
        <FormLabel>Description of the book</FormLabel>
        <Textarea resize="vertical" placeholder="Book Description" />
      </FormControl>
      <FormControl>
        <FormLabel>Cover of the book (image)</FormLabel>
        <Input type="file" accept="image/*" />
      </FormControl>
      <Box className="flex justify-center gap-2">
        <Button colorScheme="blue">Publish</Button>
      </Box>
    </form>
  );
};

export default BookForm;
