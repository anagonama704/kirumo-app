"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Text,
  Button,
  Stack,
  Flex,
  NativeSelect,
  Box,
  SegmentedControl,
  Center,
  Image,
  List,
  ActionIcon,
} from "@mantine/core";
import { CaretLeft, CaretRight, ShoppingCart } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { EmblaCarouselType } from "embla-carousel-react";
import Link from "next/link";

const ClothesDetail = () => {
  const [segV, setSegV] = useState("black");
  const [nowSlide, setNowSlide] = useState(0);
  const [fembla, setFemble] = useState<EmblaCarouselType>();
  const [eembla, setEemble] = useState<EmblaCarouselType>();

  const detail = {
    margin: "0 0 5px 0",
    color: "#000",
    fontSize: "16px",
  };
  const selectData = [
    {
      color: "#000000",
      value: "black",
      label: (
        <Center>
          <Box style={{ borderRadius: "50%" }} bg={"#000000"} w={20} h={20} />
        </Center>
      ),
    },
    {
      color: "#6D4B40",
      value: "brown",
      label: (
        <Center>
          <Box style={{ borderRadius: "50%" }} bg={"#6D4B40"} w={20} h={20} />
        </Center>
      ),
    },
    {
      color: "#bbbbbb",
      value: "gray",
      label: (
        <Center>
          <Box style={{ borderRadius: "50%" }} bg={"#bbbbbb"} w={20} h={20} />
        </Center>
      ),
    },
    {
      color: "#ffffff",
      value: "white",
      label: (
        <Center>
          <Box
            style={{ borderRadius: "50%", border: "0.1px solid #000" }}
            bg={"#ffffff"}
            w={20}
            h={20}
          />
        </Center>
      ),
    },
  ];
  const Images = [
    {
      id: 1,
      src: "https://placehold.jp/640x480.png",
    },
    {
      id: 2,
      src: "https://placehold.jp/640x480.png",
    },
    {
      id: 3,
      src: "https://placehold.jp/640x480.png",
    },
    {
      id: 4,
      src: "https://placehold.jp/640x480.png",
    },
  ];
  const slideCenters = (e: number) => {
    fembla?.scrollTo(e);
    eembla?.scrollTo(e);
    console.log(e);
  };
  useEffect(() => {
    slideCenters(nowSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowSlide]);

  return (
    <Container fluid>
      <ActionIcon
        pos="absolute"
        top={30}
        left={30}
        w={90}
        h={35}
        component={Link}
        href="/clothes-list"
        variant="white"
        radius="50px"
        bg=""
      >
        <CaretLeft size={40} />
        <Text fz={20}>戻る</Text>
      </ActionIcon>
      <Flex w="90%" m="75px auto 0 auto" justify="space-around" align="center">
        <Stack w="40%" gap="sm" align="center">
          <Carousel
            withControls={false}
            loop
            w="100%"
            slideGap="xs"
            getEmblaApi={setFemble}
            initialSlide={0}
            slidesToScroll={1}
            align="center"
            onSlideChange={(e) => {
              setNowSlide(e);
            }}
          >
            {Images.map((image) => (
              <Carousel.Slide key={image.id} id={image.id + ""}>
                <Image src={image.src} alt="" style={{ zIndex: 100 }} />
              </Carousel.Slide>
            ))}
          </Carousel>
          <Carousel
            h={"auto"}
            slideSize="33.333333%"
            slideGap="md"
            loop
            w="100%"
            align="center"
            initialSlide={0}
            slidesToScroll={1}
            withControls={false}
            getEmblaApi={setEemble}
            onSlideChange={(e) => {
              setNowSlide(e);
            }}
          >
            {Images.map((image) => (
              <Carousel.Slide
                key={image.id}
                id={image.id + ""}
                onClick={(e) => {
                  setNowSlide(Number(e.currentTarget.id) - 1);
                }}
              >
                <Image src={image.src} alt="" />
              </Carousel.Slide>
            ))}
          </Carousel>

          <ActionIcon
            w={50}
            variant="transparent"
            pos="relative"
            bottom={70}
            right={230}
            onClick={() => {
              eembla?.scrollPrev();
            }}
          >
            <CaretLeft size={90} />
          </ActionIcon>
          <ActionIcon
            w={50}
            variant="transparent"
            pos="relative"
            bottom={110}
            left={230}
            onClick={() => {
              eembla?.scrollNext();
            }}
          >
            <CaretRight size={90} />
          </ActionIcon>
        </Stack>

        {/* 商品詳細 */}
        <Stack gap="sm" w="30%" justify="flex-start">
          <Text style={detail} fz="20px">
            黒Tシャツ
          </Text>
          <Flex style={detail} align="flex-end">
            <Text>¥1,000</Text>
            <Text pl="2px" pb="1px" size="xs">
              (税込み)
            </Text>
          </Flex>
          <Text style={detail}>使用している素材</Text>
          <List pl="10px">
            <List.Item>ウール</List.Item>
          </List>
          <Text>サイズ</Text>
          <SegmentedControl w={200} data={["S", "M", "L"]} />
          <Text>カラー</Text>
          <SegmentedControl
            w={200}
            data={selectData}
            value={segV}
            onChange={setSegV}
          />

          {/* ドロップダウンメニュー */}
          <NativeSelect
            mt="md"
            label="個数"
            placeholder="数量"
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            style={{ maxWidth: "30%" }}
          />
          {/* カートに入れる */}
          <Button
            variant="filled"
            color="red"
            w="80%"
            p={10}
            fz={"16px"}
            leftSection={<ShoppingCart size={25} />}
          >
            試着リストに入れる
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};
export default ClothesDetail;
