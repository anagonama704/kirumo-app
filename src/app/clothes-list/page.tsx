"use client";

import {
  Box,
  Container,
  Flex,
  Tabs,
  Input,
  TextInput,
  NativeSelect,
} from "@mantine/core";
import {
  Hoodie,
  MagnifyingGlass,
  Pants,
  Sneaker,
  TShirt,
  ThumbsUp,
} from "@phosphor-icons/react";
import classes from "../Demo.module.css";
import { clotheList, recommend } from "@/mock/mockdata";
import List from "@/components/ClothesList";

const ClothesList = () => {
  const searchIcon = <MagnifyingGlass size={20} />;
  return (
    <Container fluid>
      <Tabs
        top={0}
        pos="sticky"
        variant="unstyled"
        defaultValue="rec"
        classNames={classes}
        style={{ zIndex: 100000, backgroundColor: "#fff" }}
      >
        <Tabs.List grow>
          <Tabs.Tab value="1" disabled w={142}></Tabs.Tab>
          <Tabs.Tab value="rec" leftSection={<ThumbsUp size={32} />}>
            おすすめ
          </Tabs.Tab>
          <Tabs.Tab value="out" leftSection={<Hoodie size={32} />}>
            アウター
          </Tabs.Tab>
          <Tabs.Tab value="top" leftSection={<TShirt size={32} />}>
            トップス
          </Tabs.Tab>
          <Tabs.Tab value="bot" leftSection={<Pants size={32} />}>
            ボトムス
          </Tabs.Tab>
          <Tabs.Tab value="sho" leftSection={<Sneaker size={32} />}>
            シューズ
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Flex>
        <Box
          w={220}
          h={"90vh"}
          top={53}
          pos="sticky"
          p={10}
          style={{ backgroundColor: "#ddd" }}
        >
          <Input.Wrapper mt={50} mb={50}>
            <TextInput
              placeholder="商品名"
              leftSection={searchIcon}
              radius={20}
              w={180}
              mb={20}
            />
            <NativeSelect
              label="価格"
              radius={20}
              w={180}
              mb={20}
              data={["1000円〜2000円", "2000円〜5000円", "5000円以上"]}
            />
            <NativeSelect
              label="サイズ"
              radius={20}
              w={180}
              mb={20}
              data={["XS", "S", "M", "L", "XL"]}
            />
          </Input.Wrapper>
        </Box>
        <List clotheList={clotheList} recommend={recommend} />
      </Flex>
    </Container>
  );
};
export default ClothesList;
