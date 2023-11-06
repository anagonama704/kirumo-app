"use client";
import { useState } from "react";
import {
  Container,
  Text,
  Radio,
  Group,
  Button,
  Stack,
  Flex,
  NativeSelect,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { useForm } from "@mantine/form";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ClothesDetail = () => {
  const [value, setValue] = useState("react");
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const images = [
    {
      original: "https://placehold.jp/350x500.png",
      thumbnail: "https://placehold.jp/350x500.png",
    },
    {
      original: "https://placehold.jp/350x500.png",
      thumbnail: "https://placehold.jp/350x500.png",
    },
    {
      original: "https://placehold.jp/350x500.png",
      thumbnail: "https://placehold.jp/350x500.png",
    },
    {
      original: "https://placehold.jp/350x500.png",
      thumbnail: "https://placehold.jp/350x500.png",
    },
    {
      original: "https://placehold.jp/350x500.png",
      thumbnail: "https://placehold.jp/350x500.png",
    },
  ];
  const detail = {
    margin: "0 0 50px 0",
    fontWeight: "900",
    color: "#000",
    fontSize: "16px",
  };
  const stk = {
    width: "450px",
    alignItems: "center",
  };
  const bclr = {
    border: "solid 1px #000",
    borderRadius: "50px",
  };
  return (
    <Container>
      <Flex
        gap="sm"
        direction="row"
        style={{
          margin: "10% 0 0 0",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Stack gap="xl" style={stk}>
          <div style={{ width: "450px", margin: "10px 0" }}>
            <ImageGallery
              items={images}
              showNav={true}
              autoPlay={false}
              showFullscreenButton={false}
              useBrowserFullscreen={true}
              showPlayButton={false}
              showBullets={true}
            />
          </div>
        </Stack>

        {/* 商品詳細 */}
        <Stack gap="xl" style={stk}>
          <Box mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Text style={detail}>商品名 : 黒Tシャツ</Text>
              <Text style={detail}>値段 : 1,000円{"(税込み)"}</Text>
              <Text style={detail}>使用している素材 : ウール</Text>
              <Group style={{ margin: "0 0 50px 0", fontWeight: "900" }}>
                サイズ :
                <Button variant="filled" color="rgba(0, 0, 0, 1)">
                  XS
                </Button>
                <Button variant="filled" color="rgba(0, 0, 0, 1)">
                  S
                </Button>
                <Button variant="filled" color="rgba(0, 0, 0, 1)">
                  M
                </Button>
                <Button variant="filled" color="rgba(0, 0, 0, 1)">
                  L
                </Button>
                <Button variant="filled" color="rgba(0, 0, 0, 1)">
                  XL
                </Button>
              </Group>
              <Radio.Group
                name="favoriteFramework"
                label=""
                value={value}
                onChange={setValue}
                style={{ margin: "0 0 20px 0" }}
              >
                <Group mt="xs" fw={900}>
                  カラー :{/**black */}
                  <Button
                    variant="filled"
                    bg={"rgba(0, 0, 0, 1)"}
                    style={bclr}
                  ></Button>
                  {/** brown*/}
                  <Button
                    variant="filled"
                    bg={"rgba(116, 80, 48, 1)"}
                    style={bclr}
                  ></Button>
                  {/**gray */}
                  <Button variant="filled" bg={"gray"} style={bclr}></Button>
                  {/** white*/}
                  <Button
                    variant="filled"
                    bg={"rgba(255, 255, 255, 1)"}
                    style={bclr}
                  ></Button>
                </Group>
              </Radio.Group>
              {/* ドロップダウンメニュー */}
              <NativeSelect
                mt="md"
                label=" "
                placeholder="数量"
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                style={{ margin: "0 0 20px 0", maxWidth: "20%" }}
              />
              {/* カートに入れる */}
              <Button
                variant="filled"
                color="yellow"
                style={{ padding: "10px 5px 10px 0" }}
              >
                <Link href="" style={{ fontSize: "16px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    style={{ fill: "#ffffff", margin: "0 10px" }}
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  カートに入れる
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                </Link>
              </Button>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};
export default ClothesDetail;
