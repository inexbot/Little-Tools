import type { NextPage } from "next";
import Link from "next/link";
import { Button, Descriptions, Form, Input } from "antd";
import { useState } from "react";
const patrn = /^(\-)?\d*(\.\d+)?$/;
const RobotForm: NextPage = () => {
  //blog.csdn.net/qq_45494634/article/details/120160622
  const cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const cnIntRadice = ["", "拾", "佰", "仟"];
  const cnIntUnits = ["", "万", "亿", "兆"];
  const cnDecUnits = ["角", "分", "毫", "厘"];
  const cnInteger = "整";
  const cnIntLast = "元";
  const maxNum = 999999999999999.9999;
  return (
    <div style={{ padding: "0px 20px", textAlign: "center" }}>
      <h1>人民币数字转大写</h1>
      <Form>
        <Form.Item
          label="数字"
          name="num"
          rules={[
            {
              required: true,
              pattern: patrn,
              message: "请输入数字，整数或浮点数。",
            },
          ]}
          validateTrigger="onChange"
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item label="大写">aas</Form.Item>
      </Form>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default RobotForm;
