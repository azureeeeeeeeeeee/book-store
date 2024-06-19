import { Avatar, Box, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import BookCard from "./BookCard";

const Profile = ({ imgSrc }) => {
  return (
    <Box className="mt-6">
      <Avatar size="2xl" src={imgSrc} />
      <Heading>Nama Lengkap - @username</Heading>
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
