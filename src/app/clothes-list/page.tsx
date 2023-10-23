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
import { useEffect, useState } from "react";
import { clotherList } from "../../../api/@types";
import Recommend from "@/components/Recommend";
import RecsList from "@/components/RecsList";

const ClothesList = () => {
  const [val, setVal] = useState("おすすめ");
  const [sort, setSort] = useState<clotherList[]>(recommend);
  const searchIcon = <MagnifyingGlass size={20} />;
  const [tabListData, setTabListData] = useState<clotherList[]>(clotheList);

  const [di, setdd] = useState<boolean>(true);
  const [listDis, setListDis] = useState<boolean>(false);
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
    fff(val);
  }, [val]);
  return (
    <Container fluid m={0} p={0}>
      <Tabs
        pos="sticky"
        top={0}
        left={0}
        variant="unstyled"
        value={val}
        classNames={classes}
        style={{ zIndex: 100000, backgroundColor: "#fff" }}
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
          w={225}
          h={"85vh"}
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
        <Box style={{ width: "100%", backgroundColor: "#fff" }}>
          {listDis ? (
            <Recommend recommend={sort} tys={di} clotheList={tabListData} />
          ) : (
            <RecsList recommend={recommend} />
          )}
        </Box>
      </Flex>
    </Container>
  );
};
export default ClothesList;
