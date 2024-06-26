// import React from "react";
import {
  Input,
  Textarea,
  Button,
  Box,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);

  const token = localStorage.getItem("ACCESS_TOKEN");

  const navigate = useNavigate();

  const handleBookSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("author", author);
    data.append("description", description);
    data.append("cover", cover);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/books/add/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      toast.success(`Book "${title}" Added`);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add book");
    }
  };

  return (
    <form
      onSubmit={handleBookSubmit}
      className="flex flex-col gap-4 w-96 mx-auto my-6"
    >
      <FormControl>
        <FormLabel>Title of the book</FormLabel>
        <Input
          placeholder="Title of the book"
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Author of the book</FormLabel>
        <Input
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description of the book</FormLabel>
        <Textarea
          resize="vertical"
          placeholder="Book Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Cover of the book (image)</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setCover(e.target.files[0])}
        />
      </FormControl>
      <Box className="flex justify-center gap-2">
        <Button type="submit" colorScheme="blue">
          Publish
        </Button>
      </Box>
    </form>
  );
};

export default BookForm;
