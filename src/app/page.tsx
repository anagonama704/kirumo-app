"use client";

import {
  Box,
  Container,
  Flex,
  Text,
} from "@mantine/core";
import topimg4 from "/public/images/topimg4.png";
const Home = () => {
  return (
    <Container fluid m={0} p={0}>
      <Box
        component={Flex}
        justify="center"
        align="center"
        w={"100%"}
        h={"100vh"}
        style={{
          backgroundImage: "url(" + topimg4.src + ")",
          backgroundPosition: "0% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Text fz={"2.5em"}>カードをかざしてください</Text>
      </Box>
    </Container>
  );
};
export default Home;
