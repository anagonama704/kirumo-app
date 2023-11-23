"use client";

import { Box, Container, Flex, Text } from "@mantine/core";
import topimg4 from "/public/images/topimg4.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//テスト：ページ遷移(5s)
const Home = () => {
  const router = useRouter();
  const changePage = () => {
    router.push("./clothes-list/");
  };

  useEffect(() => {
    setTimeout(() => {
      changePage();
    }, 5000);
  });
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
