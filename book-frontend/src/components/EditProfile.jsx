import { useState, useEffect } from "react";
import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  // const [username, setUsername]
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const res = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
        setFullname(res.data.profile.fullname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("ACCESS_TOKEN");
      await axios.put(
        "http://localhost:8000/api/profile/edit/",
        { fullname: fullname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile edit successfully");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Failed");
    }
  };
  return (
    <Box borderRadius="l" className="flex flex-col gap-4 w-96 mx-auto my-6">
      <Heading as="h2" size="3xl" noOfLines={1}>
        BookStore
      </Heading>

      <Box className="mt-4">
        <form onSubmit={handleEdit} method="PUT">
          <Heading className="mb-4" as="h2" size="lg">
            Edit Profile
          </Heading>

          <Box className="text-left mb-4">
            <Text>* You Cannot Change username</Text>
            <Text className="mt-2">
              <span>Your username</span> :
              <span className="font-bold"> @{user.username}</span>
            </Text>
          </Box>

          <Box className="text-left">
            <Text>Fullname</Text>
            <Input
              placeholder="Enter Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Box>

          <Button type="submit" className="mt-4" colorScheme="blue">
            Edit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfile;
