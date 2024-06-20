import {
  Box,
  Text,
  Button,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const BookProfile = () => {
  return (
    <Box className="flex justify-center px-10 mt-6">
      <SimpleGrid minChildWidth="200px" className="place-items-center">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          width="200px"
          height="300px"
          borderRadius="lg"
          src="./cover/cover-1.webp"
          alt="Caffe Latte"
        />
        <Box className="w-96">
          <Heading size="xl">Judul Buku</Heading>
          <Heading size="lg">by Author</Heading>
          <Text className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at
            maxime alias. Blanditiis quos ducimus veritatis dolores nobis
            impedit porro perspiciatis ratione sequi nisi? Necessitatibus
            inventore quisquam asperiores. Nobis, excepturi corporis. Modi sint
            quod omnis autem, quaerat nemo cumque totam tempora vero facilis
            quasi reprehenderit magni aut, perferendis qui ullam maiores, iusto
            architecto dignissimos necessitatibus non ipsum ea nihil officiis.
            Molestias eum eveniet, voluptates consectetur pariatur amet nam
            nesciunt perferendis accusantium, accusamus, fuga numquam sapiente
            cumque? Odit, laboriosam fugit et perferendis aspernatur aut
            dignissimos magni tempora reprehenderit minima, voluptatem
            consequatur provident, harum exercitationem facere molestiae
            cupiditate repudiandae error officiis iusto.
          </Text>
          <Box className="flex justify-center gap-4 mt-4">
            <Button colorScheme="blue">Buy Now</Button>
            <Button>Add To Cart</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BookProfile;
