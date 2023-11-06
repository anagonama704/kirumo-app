"use client";

import { useState } from 'react';
import { Container, Text, Select, MultiSelect, Group} from "@mantine/core";

  const gender = ["男性","女性","無選択"];

  const data1 = gender.map((output) =>{
    return `${output}`;
  })

  const color = ["赤系","青系","緑系","白系","黒系"];

  const data2 = color.map((output) =>{
    return `${output}`;
  })

  const size =["S","M","L"];

  const data3 = size.map((output) =>{
    return `${output}`;
  })

  const shoe =["20.0cm","20.5cm","21.0cm","21.5cm","22.0cm","22.5cm","23.0cm","23.5cm","24.0cm","24.5cm","25.0cm","25.5cm","26.0cm","26.5cm","27.0cm","27.5cm","28.0cm"];

  const data4 = shoe.map((output) =>{
    return `${output}`;
  })

const SignUp = () => {

  return (
    <Container style={{backgroundColor: "#FFFAF0", justifyContent:'center', alignItems:'center'}}>
      

      <Text style={{textAlign: 'center', paddingTop: '50px', fontWeight: 'bold'}}>新規登録</Text>

      <Group style={{justifyContent:'center'}}>  
      <Select
        label="性別を選択してください"
        placeholder="性別を選択してください"
        data={data1}
        maxDropdownHeight={200}
        style={{width: 500, marginTop: '50px'}}
      />
    
      <MultiSelect
        label="好きな色を選択してください"
        placeholder="好きな色を選択してください"
        data={data2}
        maxDropdownHeight={200}
        style={{width:500, marginTop: '50px'}}
      />

      <Select
        label="服のサイズを選択してください"
        placeholder="服のサイズを選択してください"
        data={data3}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        style={{width:500, marginTop: '50px'}}
      />

      <Select
        label="靴のサイズを選択してください"
        placeholder="靴のサイズを選択してください"
        data={data4}
        withScrollArea={false}
        styles={{dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        style={{width:500, marginTop: '50px', paddingBottom: '100px'}}
      />

    </Group>
    </Container>
  );
};



export default SignUp;
