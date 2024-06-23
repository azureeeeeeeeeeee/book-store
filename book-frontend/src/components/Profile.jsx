import { Avatar, Box, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ imgSrc }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      let token = localStorage.getItem("ACCESS_TOKEN");

      try {
        const response = await axios.get("http://localhost:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        if (error.response.status === 401) {
          const newToken = await axios.post(
            "http://localhost:8000/api/token/refresh/",
            {
              refresh: localStorage.getItem("REFRESH_TOKEN"),
            }
          );
          console.log(newToken);
          localStorage.setItem("ACCESS_ToKEN", newToken);
        }
      }
    };

    fetchProfile();
  }, []);
  if (!profile) {
    return <p>Loading...</p>;
  }

  console.log(profile);

  return (
    <Box className="mt-6">
      <Avatar size="2xl" src={imgSrc} />
      <Heading>
        {profile.profile.fullname} - @{profile.username}
      </Heading>
      <Box className="mt-4">
        <Heading size="base mx-auto">Recently Purchased :</Heading>
        <SimpleGrid
          minChildWidth="300px"
          spacing={10}
          className="place-items-center mt-24 my-20"
        >
          <BookCard coverUrl={"./cover/cover-1.webp"} />
          <BookCard coverUrl={"./cover/cover-2.jpg"} />
          <BookCard coverUrl={"./cover/cover-1.webp"} />
        </SimpleGrid>
        <Button colorScheme="blue" className="mb-6">
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
