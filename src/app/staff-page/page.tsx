"use client";

import { cartState } from "@/lib/atoms/atom";
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
import { useRecoilValue } from "recoil";
import { cartList } from "../../../api/@types";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { BellRinging, CheckCircle } from "@phosphor-icons/react";
interface StorageEvent extends Event {
  readonly key: string | null;
  readonly oldValue: string | null;
  readonly newValue: string | null;
  readonly url: string;
  readonly storageArea: Storage | null;
}
const StaffPage = () => {
  const [requestCarts, setRequestCarts] = useState<cartList[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const list = [
    { id: 1 },
    // , { id: 2 }, { id: 3 }, { id: 4 }
  ];
  const cartData = useRecoilValue(cartState);
  useEffect(() => {
    console.log(cartData);
  }, [cartData]);
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== null && event.key === "CARTDATA") {
        const newCartData = JSON.parse(event.newValue || "[]") as cartList[];
        setRequestCarts(newCartData);
      }
      if (
        event.key !== null &&
        event.key === "STAFFCALL" &&
        localStorage.getItem("STAFFCALL") === "call"
      ) {
        notifications.show({
          icon: <BellRinging size={25} />,
          title: "１番のお客様が呼び出し中",
          message: (
            <Button
              leftSection={<CheckCircle size={30} />}
              onClick={() => {
                localStorage.setItem("STAFFCALL", "none");
                notifications.clean();
              }}
              variant="transparent"
            >
              対応済み
            </Button>
          ),
          color: "red",
          pos: "absolute",
          bottom: 100,
          right: 50,
          fz: 30,
          autoClose: false,
          withCloseButton: false,
        });
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  var datas: cartList[] = [];
  for (let i = 0; i < cartData.length; i++) {
    datas.push(cartData[i].default[0]);
  }
  const reqSuccess = () => {
    localStorage.setItem("CARTDATA", JSON.stringify([]));
    localStorage.setItem("REQSUCCESS", "success");
    setIsSuccess(!isSuccess);
  };
  useEffect(() => {
    setRequestCarts([]);
  }, [isSuccess]);
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
            {list.map((listData) => (
              <Container
                key={listData.id}
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
                    <Text fz={"1.5em"}>{listData.id}</Text>
                  </Center>
                  <Text ta={"center"} w={"30vh"} ml={0} mr={"10"}>
                    試着4着
                  </Text>
                  <Button mr={1} ml={"0"} radius={25}>
                    詳細
                  </Button>
                  <Button
                    mr={2}
                    ml={"0"}
                    radius={25}
                    color="red"
                    onClick={reqSuccess}
                  >
                    完了
                  </Button>
                </Flex>
              </Container>
            ))}
          </Stack>

          <Box w={"50%"} h={500}>
            {requestCarts.map((reqsCart, index) => (
              <Card
                key={index}
                shadow="sm"
                padding={0}
                pl={10}
                pr={10}
                radius="md"
                withBorder
              >
                <Group mt="md" mb="xs">
                  <Image src={reqsCart.src} height={100} alt="Norway" />
                  <Box>
                    <Text fw={500}>{reqsCart.name}</Text>
                    <Text size="sm" c="dimmed">
                      サイズ：{reqsCart.size}
                    </Text>
                    <Text size="sm" c="dimmed">
                      色：{reqsCart.color}
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
