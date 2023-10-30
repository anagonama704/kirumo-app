"use client";

import {
  Container,
  Text,
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Card,
  Group,
  Image,
} from "@mantine/core";
const StaffPage = () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <Container pt={20}>
      <Text ta="center" pb={30} fz={"1.5rem"}>
        管理画面
      </Text>
      <Container>
        <Flex>
          <Stack
            w={"50%"}
            h={500}
            bg="var(--mantine-color-blue-light)"
            gap="xs"
            pt={5}
            mr={30}
          >
            <Container
              fluid
              w={"100%"}
              h={60}
              // bg="var(--mantine-color-blue-light)"
              p={0}
              pr={5}
              style={{ border: "solid 1px #ddd", backgroundColor: "#fff" }}
            >
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                // wrap="wrap"
              >
                <Center
                  w={"10%"}
                  h={60}
                  mr={10}
                  ml={0}
                  style={{ borderRight: "solid 1px #ddd" }}
                >
                  <Text fz={"1.5em"}>1</Text>
                </Center>
                <Text ta={"center"} w={"30vh"} ml={0} mr={"10"}>
                  試着4着
                </Text>
                <Button mr={1} ml={"0"} radius={25}>
                  詳細
                </Button>
                <Button mr={2} ml={"0"} radius={25} color="red">
                  完了
                </Button>
              </Flex>
            </Container>
          </Stack>

          <Box w={"50%"} h={500}>
            {list.map((ls) => (
              <Card
                key={ls.id}
                shadow="sm"
                padding={0}
                pl={10}
                pr={10}
                radius="md"
                withBorder
              >
                <Group mt="md" mb="xs">
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={100}
                    alt="Norway"
                  />
                  <Box>
                    <Text fw={500}>服の名前</Text>
                    <Text size="sm" c="dimmed">
                      サイズ：
                    </Text>
                    <Text size="sm" c="dimmed">
                      色：
                    </Text>
                  </Box>
                </Group>
              </Card>
            ))}
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default StaffPage;
