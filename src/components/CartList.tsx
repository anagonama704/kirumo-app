"use client";

import {
  Container,
  Text,
  Stack,
  Flex,
  Button,
  Image,
  Group,
  Box,
} from "@mantine/core";

import { testCart } from "@/mock/mockdata";

const CartList = () => {
  return (
    <Container fluid mt={"-30px"}>
      <Flex
        mih={100}
        miw={700}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ margin: "0 0 0 0" }}
      >
        <Text mah={90} maw={150} fz="30px" style={{ margin: "0 0 0 0" }}>
          商品リスト
        </Text>
      </Flex>

      <Stack h={"75vh"} miw={900} justify="center">
        {testCart.map((cart) => (
          <Group
            key={cart.id}
            grow
            w={600}
            h={110}
            style={{ margin: "0 auto" }}
          >
            <Box
              component={Flex}
              m={"0 0 0 0"}
              pl={25}
              pr={25}
              pb={10}
              style={{ width: "100%", borderBottom: "1px solid #000" }}
            >
              <Image h={110} w={110} src={cart.src} alt="ズボン" />
              <Box pl={10} style={{ width: "100%" }}>
                <Stack gap="0px">
                  <Text>{cart.name}</Text>
                  <Text>{cart.size}</Text>
                  <Text>{cart.color}</Text>
                  <Button color="gray" style={{ margin: "0 0 0 auto" }}>
                    カートから削除
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Group>
        ))}
      </Stack>

      <Button radius={20} pos="absolute" bottom={"5%"} right={"5%"}>
        試着する
      </Button>
      <Button radius={20} color="red" pos="absolute" top={"10%"} right={30}>
        店員を呼ぶ
      </Button>
    </Container>
  );
};

export default CartList;
