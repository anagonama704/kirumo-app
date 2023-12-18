"use client";

import {
  Box,
  Card,
  Container,
  Flex,
  Space,
  Title,
  Image,
  Group,
  Text,
  Badge,
  LoadingOverlay,
} from "@mantine/core";
import Link from "next/link";
import { clotherList } from "../../api/@types";
import List from "./ClothesList";

const Recommend = ({
  clotheList,
  recommend,
  tys,
}: {
  clotheList: clotherList[];
  recommend: clotherList[];
  tys: boolean;
}) => {
  return (
    <Container>
      {!tys ? (
        <LoadingOverlay visible zIndex={10000000} />
      ) : (
        <>
          <Box style={{ width: "90%", margin: "25px auto 0 auto" }}>
            <Title order={2} size="h3">
              おすすめ
            </Title>
            <Space h="md" />
            <Box
              component={Flex}
              justify="space-around"
              pt={20}
              pb={20}
              style={{
                width: "100%",
                borderTop: "1px  solid #000",
                borderBottom: "1px  solid #000",
              }}
            >
              {recommend.map((recs) => {
                return (
                  <Card
                    component={Link}
                    href={"/clothes-list/clothes-detail/" + recs.id}
                    key={recs.id}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ width: "20%", height: "auto" }}
                  >
                    <Card.Section>
                      <Image src={recs.src} w="100%" h="auto" alt="商品画像" />
                    </Card.Section>
                    <Group justify="space-between" mt="md" mb="xs">
                      <Text size="15px">{recs.name}</Text>
                      <Badge color={recs.stock ? "teal" : "red"}>
                        {recs.stock ? "在庫あり" : "在庫なし"}
                      </Badge>
                    </Group>
                    <Text ta="end" size="12px">
                      価格：￥{recs.price}
                    </Text>
                  </Card>
                );
              })}
            </Box>
          </Box>
          <List clotheList={clotheList} />
        </>
      )}
    </Container>
  );
};
export default Recommend;
