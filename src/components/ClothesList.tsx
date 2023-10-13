"use client";

import {
  Box,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Space,
  Title,
  Text,
  Badge,
} from "@mantine/core";
import { clotherList } from "../../api/@types";

type clothesData = {
  clotheList: clotherList[];
  recommend: clotherList[];
};

const List = ({ clotheList, recommend }: clothesData) => {
  return (
    <Container>
      <Box style={{ width: "100%", backgroundColor: "#fff" }}>
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
                  <Text size="12px">{recs.des}</Text>
                </Card>
              );
            })}
          </Box>
        </Box>
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
              <Text size="12px">{clothes.des}</Text>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default List;
