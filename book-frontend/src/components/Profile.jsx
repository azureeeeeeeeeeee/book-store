import { Avatar, Box, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

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
          console.log(newToken.data.access);
          localStorage.setItem("ACCESS_TOKEN", newToken.data.access);
        }
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Spinner className="mt-12" />;
  }

  console.log(profile);

  return (
    <Box className="mt-6">
      <Avatar size="2xl" src={imgSrc} />
      <Heading>
        {profile.profile.fullname} - @{profile.username}
      </Heading>
      {profile.profile.role === "publisher" ? (
        <Box className="mt-4">
          <Heading size="base mx-auto">Recently Published :</Heading>
          <SimpleGrid
            minChildWidth="300px"
            spacing={10}
            className="place-items-center mt-24 my-20"
          >
            {/* Display last 3 books published */}
            {profile.recent_books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </SimpleGrid>
          <Link to="/profile/edit"></Link>
        </Box>
      ) : (
        <Heading size="base mx-auto" className="mt-4">
          Total Spending : ${profile.total_spending}
        </Heading>
      )}
      <Button colorScheme="blue" className="mt-6">
        Edit Profile
      </Button>
    </Box>
  );
};

export default Profile;
