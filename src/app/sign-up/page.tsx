"use client";

import {
  Container,
  Text,
  Select,
  MultiSelect,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import Link from "next/link";

const gender = ["男性", "女性", "無選択"];

const data1 = gender.map((output) => {
  return `${output}`;
});

const color = ["赤系", "青系", "緑系", "白系", "黒系"];

const data2 = color.map((output) => {
  return `${output}`;
});

const size = ["S", "M", "L"];

const data3 = size.map((output) => {
  return `${output}`;
});

const shoe = [
  "20.0cm",
  "20.5cm",
  "21.0cm",
  "21.5cm",
  "22.0cm",
  "22.5cm",
  "23.0cm",
  "23.5cm",
  "24.0cm",
  "24.5cm",
  "25.0cm",
  "25.5cm",
  "26.0cm",
  "26.5cm",
  "27.0cm",
  "27.5cm",
  "28.0cm",
];

const data4 = shoe.map((output) => {
  return `${output}`;
});

const SignUp = () => {
  return (
    <Container
      fluid
      h="100svh"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Text ta="center" pt={"50px"} fw="bold">
        新規登録
      </Text>

      <Stack align="center">
        <Select
          label="性別を選択してください"
          placeholder="性別を選択してください"
          data={data1}
          maxDropdownHeight={200}
          w={500}
          mt={"50px"}
        />

        <MultiSelect
          label="好きな色を選択してください"
          placeholder="好きな色を選択してください"
          data={data2}
          w={500}
          mt={"50px"}
          maxDropdownHeight={200}
        />

        <Select
          label="服のサイズを選択してください"
          placeholder="服のサイズを選択してください"
          data={data3}
          w={500}
          mt={"50px"}
          styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
        />

        <Select
          label="靴のサイズを選択してください"
          placeholder="靴のサイズを選択してください"
          data={data4}
          withScrollArea={false}
          w={500}
          mt={"50px"}
          mb={"50px"}
          styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
        />
        <Group w={500} justify="flex-start">
          <Button
            component={Link}
            href="/"
            w={100}
            mr={50}
            variant="outline"
            bg="#eee"
          >
            ＜戻る
          </Button>
          <Button w={200} variant="filled">
            登録
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};

export default SignUp;
