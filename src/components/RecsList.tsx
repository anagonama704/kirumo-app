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
import { useEffect, useState } from "react";

type recSort = {
  outer: clotherList[];
  tops: clotherList[];
  bottoms: clotherList[];
  shose: clotherList[];
};

const RecsList = ({ recommend }: { recommend: clotherList[] }) => {
  const [rec, setRec] = useState<recSort[]>([]);
  const [recs, setRecs] = useState(false);
  const outer = recommend.filter((recs) => {
    return recs.sort.includes("アウター");
  });
  const tops = recommend.filter((recs) => {
    return recs.sort.includes("トップス");
  });
  const bottoms = recommend.filter((recs) => {
    return recs.sort.includes("ボトムス");
  });
  const shose = recommend.filter((recs) => {
    return recs.sort.includes("シューズ");
  });
  const recSortfnc = () => {
    setRec([
      ...rec,
      { outer: outer, tops: tops, bottoms: bottoms, shose: shose },
    ]);
    setRecs(!recs);
  };
  useEffect(() => {
    setTimeout(() => {
      recSortfnc();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      {!recs ? (
        <LoadingOverlay visible zIndex={10000000} />
      ) : (
        <>
          <Box style={{ width: "90%", margin: "25px auto 0 auto" }}>
            <Title order={2} size="h3">
              おすすめ
            </Title>
            <Space h="md" />
            <Box
              pt={20}
              style={{
                width: "100%",
                borderTop: "1px  solid #000",
              }}
            >
              <Title order={3} size="h4">
                アウター
              </Title>
              <Flex
                pt={20}
                pb={30}
                justify="space-around"
                style={{
                  borderBottom: "1px  dotted #000",
                }}
              >
                {rec[0].outer.map((recs) => {
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
                        <Image
                          src={recs.src}
                          w="100%"
                          h="auto"
                          alt="商品画像"
                        />
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
              </Flex>
            </Box>
          </Box>
          <Box style={{ width: "90%", margin: "25px auto 0 auto" }}>
            <Title order={3} size="h4">
              トップス
            </Title>
            <Box
              style={{
                width: "100%",
              }}
            >
              <Flex
                pt={20}
                pb={30}
                justify="space-around"
                style={{
                  borderBottom: "1px  dotted #000",
                }}
              >
                {rec[0].tops.map((recs) => {
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
                        <Image
                          src={recs.src}
                          w="100%"
                          h="auto"
                          alt="商品画像"
                        />
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
              </Flex>
            </Box>
          </Box>
          <Box style={{ width: "90%", margin: "25px auto 0 auto" }}>
            <Title order={3} size="h4">
              ボトムス
            </Title>
            <Box
              style={{
                width: "100%",
              }}
            >
              <Flex
                pt={20}
                pb={30}
                justify="space-around"
                style={{
                  borderBottom: "1px  dotted #000",
                }}
              >
                {rec[0].bottoms.map((recs) => {
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
                        <Image
                          src={recs.src}
                          w="100%"
                          h="auto"
                          alt="商品画像"
                        />
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
              </Flex>
            </Box>
          </Box>
          <Box style={{ width: "90%", margin: "25px auto 0 auto" }}>
            <Title order={3} size="h4">
              シューズ
            </Title>
            <Space h="md" />
            <Box
              component={Flex}
              justify="space-around"
              pt={20}
              pb={20}
              mb={50}
              style={{
                width: "100%",
                borderBottom: "1px  solid #000",
              }}
            >
              {rec[0].shose.map((recs) => {
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
                    <Text size="12px" ta="end">
                      価格：￥{recs.price}
                    </Text>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};
export default RecsList;
