"use client";

import {
  Box,
  Container,
  Flex,
  Tabs,
  Input,
  TextInput,
  NativeSelect,
  ActionIcon,
  Modal,
  Indicator,
  Text,
  SegmentedControl,
  Button,
  Loader,
} from "@mantine/core";
import {
  BellRinging,
  Hoodie,
  MagnifyingGlass,
  Pants,
  ShoppingCart,
  Sneaker,
  TShirt,
  ThumbsUp,
} from "@phosphor-icons/react";
import classes from "../Demo.module.css";
import { clotheList, recommend } from "@/mock/mockdata";
import { useEffect, useState } from "react";
import { clotherList } from "../../../api/@types";
import Recommend from "@/components/Recommend";
import RecsList from "@/components/RecsList";
import { useDisclosure } from "@mantine/hooks";
import CartList from "@/components/CartList";
import { useRecoilValue } from "recoil";
import { cartState } from "@/lib/atoms/atom";
const ClothesList = () => {
  const category_man = [
    { label: "カジュアル", value: "カジュアル" },
    { label: "きれいめ系", value: "きれいめ系" },
    { label: "アメカジ系", value: "アメカジ系" },
    { label: "アウトドア系", value: "アウトドア系" },
  ];
  const category_woman = [
    { label: "カジュアル", value: "カジュアル" },
    { label: "きれいめ系", value: "きれいめ系" },
    { label: "コンサバ系", value: "コンサバ系" },
    { label: "フェミニン系", value: "フェミニン系" },
  ];
  const genders = [
    { label: "メンズ", value: "men" },
    { label: "ウィメンズ", value: "women" },
  ];
  const [val, setVal] = useState("おすすめ");
  const [gender, setGender] = useState(true);
  const [sort, setSort] = useState<clotherList[]>(recommend);
  const searchIcon = <MagnifyingGlass size={20} />;
  const [tabListData, setTabListData] = useState<clotherList[]>(clotheList);
  const [cartList, setCartList] = useState(false);
  const [staffCall, setStaffCall] = useState(false);
  const [reqStaffCall, setReqStaffCall] = useState(false);

  const [di, setdd] = useState<boolean>(true);
  const [listDis, setListDis] = useState<boolean>(false);
  const cartData = useRecoilValue(cartState);
  const [dataCount, setDataCount] = useState(4);
  const tabChangeData = (e: string | null) => {
    setVal(e ? e : "");
  };
  const fff = (val: string) => {
    if (val === "おすすめ") {
      setListDis(false);
      setTimeout(() => {
        setdd(true);
      }, 1000);
    } else {
      setdd(false);
      setListDis(true);
      setTimeout(() => {
        setdd(true);
      }, 1000);
      setSort(
        recommend.filter((sortData) => {
          return sortData.sort.includes(val);
        })
      );
      setTabListData(
        clotheList.filter((tabData) => {
          return tabData.sort.includes(val);
        })
      );
    }
  };
  useEffect(() => {
    setDataCount(cartData.length);
  }, [cartData]);
  useEffect(() => {
    fff(val);
  }, [val]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key !== null &&
        event.key === "STAFFCALL" &&
        localStorage.getItem("STAFFCALL") === "none"
      ) {
        setReqStaffCall(false);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("REQSUCCESS", "fail");
    localStorage.setItem("STAFFCALL", "none");
  }, []);

  return (
    <Container fluid m={0} p={0}>
      <Tabs
        pos="sticky"
        top={0}
        left={0}
        variant="unstyled"
        value={val}
        classNames={classes}
        style={{
          zIndex: 100,
          backgroundColor: "#fff",
          boxShadow: "1px 5px 5px #eee",
        }}
        onChange={tabChangeData}
        ml={200}
      >
        <Tabs.List grow>
          <Tabs.Tab value="おすすめ" leftSection={<ThumbsUp size={32} />}>
            おすすめ
          </Tabs.Tab>
          <Tabs.Tab value="アウター" leftSection={<Hoodie size={32} />}>
            アウター
          </Tabs.Tab>
          <Tabs.Tab value="トップス" leftSection={<TShirt size={32} />}>
            トップス
          </Tabs.Tab>
          <Tabs.Tab value="ボトムス" leftSection={<Pants size={32} />}>
            ボトムス
          </Tabs.Tab>
          <Tabs.Tab value="シューズ" leftSection={<Sneaker size={32} />}>
            シューズ
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Flex>
        <Box
          pos="sticky"
          w={225}
          h={"80vh"}
          top={53}
          p={10}
          style={{ backgroundColor: "#ddd", boxShadow: "5px 5px 5px #eee" }}
        >
          <Input.Wrapper mt={25} mb={50}>
            <SegmentedControl
              data={genders}
              mb={50}
              radius="xl"
              fullWidth
              color={gender ? "blue" : "pink"}
              onChange={(e) => {
                if (e == "men") setGender(true);
                else setGender(false);
              }}
            />
            <TextInput
              placeholder="商品名"
              leftSection={searchIcon}
              radius={20}
              w={180}
              mb={20}
            />
            <NativeSelect
              label="カテゴリー"
              radius={20}
              w={180}
              mb={20}
              data={gender ? category_man : category_woman}
            />
            <NativeSelect
              label="価格"
              radius={20}
              w={180}
              mb={20}
              data={["1000円〜2000円", "2000円〜5000円", "5000円以上"]}
            />
            <NativeSelect
              label="在庫状況"
              radius={20}
              w={180}
              mb={20}
              data={["指定しない", "在庫あり", "在庫なし"]}
            />
            <NativeSelect
              label="サイズ"
              radius={20}
              w={180}
              mb={20}
              data={["S", "M", "L"]}
            />
          </Input.Wrapper>
        </Box>
        <Box style={{ width: "100%", backgroundColor: "#fff" }}>
          <Button
            pos="sticky"
            top={80}
            left="85%"
            color="red"
            radius={90}
            style={{ zIndex: 100 }}
            onClick={() => setStaffCall(true)}
          >
            <BellRinging size={30} />
            店員呼び出し
          </Button>
          <Modal
            size={"auto"}
            opened={staffCall}
            onClose={() => setStaffCall(false)}
            withCloseButton={false}
            centered
            p={0}
          >
            <Text>スタッフを呼びます。よろしいですか？</Text>
            <Flex mt={20} p={"20 0"} justify="space-between">
              <Button color="gray" onClick={() => setStaffCall(false)}>
                キャンセル
              </Button>
              <Button
                color="red"
                onClick={() => {
                  setStaffCall(false);
                  setReqStaffCall(true);
                  localStorage.setItem("STAFFCALL", "call");
                }}
              >
                <BellRinging size={30} />
                呼ぶ
              </Button>
            </Flex>
          </Modal>
          {listDis ? (
            <Recommend recommend={sort} tys={di} clotheList={tabListData} />
          ) : (
            <RecsList recommend={recommend} />
          )}
        </Box>
      </Flex>
      <Indicator
        label={<Text fz={17}>{dataCount}</Text>}
        processing
        disabled={dataCount == 0 ? true : false}
        offset={7}
        inline
        size={28}
        pos="sticky"
        left={"85%"}
        bottom={30}
        color="red"
      >
        <ActionIcon w={80} h={80} radius={90} onClick={() => setCartList(true)}>
          <ShoppingCart size={30} />
        </ActionIcon>
      </Indicator>
      <Modal
        size={"auto"}
        opened={cartList}
        onClose={() => setCartList(false)}
        withCloseButton={false}
        centered
        p={0}
      >
        {/* Modal content */}
        <CartList isBlank={dataCount == 0 ? true : false} />
      </Modal>
      <Modal
        size={"auto"}
        p={20}
        centered
        withCloseButton={false}
        opened={reqStaffCall}
        onClose={() => setReqStaffCall(false)}
      >
        <Text ta="center" size="20px">
          スタッフを呼んでいます。しばらくお待ちください
        </Text>
        <Loader display="block" m="20px auto" size={50} />
      </Modal>
    </Container>
  );
};
export default ClothesList;
