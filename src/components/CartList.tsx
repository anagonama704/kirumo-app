"use client";

import {
  Container,
  Text,
  Stack,
  Flex,
  Button,
  Image,
  Group,
  Box,
  Center,
  Modal,
  Loader,
} from "@mantine/core";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "@/lib/atoms/atom";
import { cartList } from "../../api/@types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartList = ({ isBlank }: { isBlank: boolean }) => {
  const router = useRouter();
  const data = useRecoilValue(cartState);
  const setData = useSetRecoilState(cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [carts, setCarts] = useState<cartList[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isReqCheck, setIsReqCheck] = useState(false);
  var datas: cartList[] = [];
  for (let i = 0; i < data.length; i++) {
    datas.push(data[i].default[0]);
  }
  const sendCartData = () => {
    // if (window === undefined) return;
    localStorage.setItem("CARTDATA", JSON.stringify(carts));
    setIsOpen(false);
    setIsSuccess(true);
  };
  const cartdelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCarts([
      ...carts.filter((carts, index) => {
        if (index === Number(e.currentTarget.id)) {
        } else {
          return carts;
        }
      }),
    ]);
    setData((prevCart) => [
      ...prevCart.filter((_, index) => index !== Number(e.currentTarget.id)),
    ]);
  };
  useEffect(() => {
    setCarts(datas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      console.log(typeof event);
      if (
        event.key === "REQSUCCESS" &&
        localStorage.getItem("REQSUCCESS") == "success"
      ) {
        setIsReqCheck(true);
      } else {
        setIsReqCheck(false);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Container fluid mt={"-30px"}>
      <Flex
        mih={100}
        miw={700}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ margin: "0 0 0 0" }}
      >
        <Text
          display={isSuccess ? "none" : "block"}
          mah={90}
          maw={150}
          fz="30px"
          style={{ margin: "0 0 0 0" }}
        >
          商品リスト
        </Text>
      </Flex>
      <Box h="75vh" display={isBlank ? "block" : "none"}>
        <Center mt="40%">
          <Text fz={20}>現在、選択されている商品はありません</Text>
        </Center>
      </Box>
      <Box display={isBlank ? "none" : "block"}>
        <Stack
          display={isSuccess ? "none" : "block"}
          h={"75vh"}
          miw={900}
          justify="center"
        >
          {carts.map((cart, index) => (
            <Group
              key={index}
              grow
              w={600}
              h={150}
              mt={5}
              style={{ margin: "0 auto" }}
            >
              <Box
                component={Flex}
                m={"0 0 0 0"}
                pl={25}
                pr={25}
                pb={10}
                style={{ width: "100%", borderBottom: "1px solid #000" }}
              >
                <Image h={110} w={110} src={cart.src} alt="ズボン" />
                <Box pl={10} style={{ width: "100%" }}>
                  <Stack gap="0px">
                    <Text>商品名：{cart.name}</Text>
                    <Text>サイズ：{cart.size}</Text>
                    <Text>色：{cart.color}</Text>

                    <Button
                      color="gray"
                      id={index + ""}
                      onClick={cartdelete}
                      style={{ margin: "0 0 0 auto" }}
                    >
                      カートから削除
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Group>
          ))}
          <Button
            radius={20}
            pos="absolute"
            bottom={"5%"}
            right={"5%"}
            onClick={() => setIsOpen(true)}
          >
            試着する
          </Button>
        </Stack>
        <Stack
          display={isSuccess ? "block" : "none"}
          h={"75vh"}
          miw={900}
          justify="center"
        >
          <Text
            ta="center"
            fz={23}
            pt={100}
            display={isReqCheck ? "none" : "block"}
          >
            商品を準備しています。しばらくお待ちください
          </Text>
          <Text
            ta="center"
            fz={23}
            pt={100}
            display={isReqCheck ? "block" : "none"}
          >
            商品を受け取りましたら受け取りボタンを押してください
          </Text>
          <Center pt={100}>
            <Loader size={100} display={isReqCheck ? "none" : "block"} />
            <Stack
              justify="center"
              align="center"
              display={isReqCheck ? "flex" : "none"}
            >
              <Button
                h={100}
                fz={25}
                onClick={() => {
                  localStorage.setItem("REQSUCCESS", "fail");
                  location.reload();
                }}
              >
                商品を受け取りました
              </Button>
              <Button color="red" variant="transparent" mt={100} fz={20}>
                ※商品が届いていません
              </Button>
            </Stack>
          </Center>
        </Stack>

        <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          withCloseButton={false}
          centered
          p={0}
        >
          <Text ta="center">カートの内容で確定します。よろしいですか？</Text>
          <Group pt={20} justify="space-around" m="0 auto">
            <Button color="gray" onClick={() => setIsOpen(false)}>
              キャンセル
            </Button>
            <Button color="red" onClick={sendCartData}>
              確定する
            </Button>
          </Group>
        </Modal>
      </Box>
    </Container>
  );
};

export default CartList;
