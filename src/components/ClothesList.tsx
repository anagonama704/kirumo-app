"use client";

import {
  Box,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Badge,
} from "@mantine/core";
import { clotherList } from "../../api/@types";
import Link from "next/link";

type ListType = {
  clotheList: clotherList[];
};

const List = ({ clotheList }: ListType) => {
  return (
    <Container>
      <Box
        component={Flex}
        justify="space-around"
        wrap="wrap"
        pt={20}
        pb={20}
        style={{
          width: "90%",
          margin: "50px auto 0 auto",
        }}
      >
        {clotheList.map((clothes) => (
          <Card
            key={clothes.id}
            component={Link}
            href={"/clothes-list/clothes-detail/" + clothes.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            ml={10}
            mr={10}
            mb={50}
            style={{ width: "20%", height: "auto" }}
          >
            <Card.Section>
              <Image src={clothes.src} w="100%" h="auto" alt="商品画像" />
            </Card.Section>
            <Group justify="space-between" mt="xs" mb="xs">
              <Text size="15px">{clothes.name}</Text>
              <br />
              <Badge color={clothes.stock ? "teal" : "red"}>
                {clothes.stock ? "在庫あり" : "在庫なし"}
              </Badge>
            </Group>
            <Text ta="end" size="12px">
              価格：￥{clothes.price}
            </Text>
          </Card>
        ))}
      </Box>
    </Container>
  );
};
export default List;
