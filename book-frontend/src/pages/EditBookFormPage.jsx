import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Text,
} from "@chakra-ui/react";
import Spinner from "../components/Spinner";

const EditBookFormPage = () => {
  const { id } = useParams();
  //   const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [newCover, setNewCover] = useState(null);
  const [cover, setCover] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/books/${id}`);
        const book = res.data.books;
        // setBook(fetchedBook);
        setTitle(book.title);
        setAuthor(book.author);
        setCover(book.cover);
        setDescription(book.description);

        setPrice(book.price);
      } catch (error) {
        console.error("Failed to fetch book:", error);
        toast.error("Failed to fetch book data");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const token = localStorage.getItem("ACCESS_TOKEN");

  const navigate = useNavigate();

  const handleBookSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", id);
    data.append("title", title);
    data.append("author", author);
    data.append("description", description);
    data.append("price", price);
    if (newCover) {
      data.append("cover", newCover);
    }

    try {
      const res = await axios.put(
        `http://localhost:8000/api/books/edit/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      toast.success(`Book "${title}" Updated`);
      navigate(`/books/${id}`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update book");
      navigate("/");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <form
      onSubmit={handleBookSubmit}
      className="flex flex-col gap-4 w-96 mx-auto my-6"
    >
      <FormControl>
        <FormLabel>Title of the book</FormLabel>
        <Input
          placeholder="Title of the book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Author of the book</FormLabel>
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Price of the book</FormLabel>
        <Input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description of the book</FormLabel>
        <Textarea
          resize="vertical"
          placeholder="Book Description"
          type="number"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Cover of the book (image)</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setNewCover(e.target.files[0])}
        />
        <Box>
          <Text>Current Cover</Text>
          <Image
            className="mx-auto"
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            width="150px"
            height="200px"
            src={`http://127.0.0.1:8000${cover}`}
            alt={title}
          />
        </Box>
      </FormControl>
      <Box className="flex justify-center gap-2">
        <Button type="submit" colorScheme="blue">
          Update Book
        </Button>
      </Box>
    </form>
  );
};

export default EditBookFormPage;
