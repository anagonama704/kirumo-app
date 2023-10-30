"use client";

import {
  Container,
  Text,
  Stack,
  AspectRatio,
  Flex,
  Button,
  Image,
  Center,
  Box,
  Group
} from "@mantine/core";
import classes from "../Demo.module.css";
import jacket from "../../../public/images/daunjake.png";
import huku from "../../../public/images/Tsyatu.png";
import zipan from "../../../public/images/zipan.png";
import kutu from "../../../public/images/kutu.png";






const ClothesCart = () => {




  return (
    <Container
      h={"100vh"}
    >
      <Flex
        mih={100}
        miw={700}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ margin: "0 0 10px 0" }}
      >
        <Text mah={90} maw={150} fz="30px" style={{ margin: "0 0 0 0" }}>商品カート</Text>
      </Flex>


      <Stack
        h={"75vh"}
        miw={900}
        justify="center"
        mb={30}
      // bg="var(--mantine-color-blue-light)"
      >
        <Group grow miw={700} h={120}>
          <Container w={200}>
            <Image h={110} w={110} m={"0 0 0 190px"}
              src={jacket.src}
              alt="ジャケット"
            />
          </Container>
          <Container maw={700} w={500} m={"0 0 0 0"}>
            <Text w={400}>商品名：ダウンジャケット</Text>
            <Text>サイズ：L</Text>
            <Text>色：ブルー</Text>
            <Button w={140} color="gray" m={"0 0 0 280px"}>カートから削除</Button>
          </Container>
        </Group>
        <hr style={{width:"600px", margin:"0 auto 0 auto"}}></hr>


        <Group grow miw={900} h={120}>
          <Container w={200}>
            <Image h={110} w={110} m={"0 0 0 190px"}
              src={huku.src}
              alt="服"
            />
          </Container>
          <Container maw={700} w={500} m={"0 0 0 0"}>
            <Text>商品名：シンプル Tシャツ</Text>
            <Text>サイズ：M</Text>
            <Text>色：ホワイト</Text>
            <Button color="gray" m={"0 0 0 280px"}>カートから削除</Button>
          </Container>
        </Group>
        <hr style={{width:"600px", margin:"0 auto 0 auto"}}></hr>



        <Group grow miw={900} h={120}>
          <Container w={200}>
            <Image h={110} w={110} m={"0 0 0 190px"}
              src={zipan.src}
              alt="ズボン"
            />
          </Container>
          <Container maw={700} w={500} m={"0 0 0 0"}>
            <Text>商品名：ジーンズパンツ</Text>
            <Text>サイズ：L</Text>
            <Text>色：ブルー</Text>
            <Button color="gray" m={"0 0 0 280px"}>カートから削除</Button>
          </Container>
        </Group>
        <hr style={{width:"600px", margin:"0 auto 0 auto"}}></hr>



        <Group grow miw={900} h={120}>
          <Container w={200}>
            <Image h={110} w={110} m={"0 0 0 190px"}
              src={kutu.src}
              alt="靴"
            />
          </Container>
          <Container maw={700} w={500} m={"0 0 0 0"}>
            <Text>商品名：ブラウンシューズ</Text>
            <Text>サイズ：28.0cm</Text>
            <Text>色：ブラウン</Text>
            <Button color="gray" m={"0 0 0 280px"}>カートから削除</Button>
          </Container>
        </Group>
        <hr style={{width:"600px", margin:"0 auto 0 auto"}}></hr>

      </Stack>

      <Flex
        mih={50}
        // bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="flex-end"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Button radius={20}>試着する</Button>
        <Button radius={20} color="red">店員を呼ぶ</Button>
      </Flex>



    </Container>
  );

};

export default ClothesCart;
