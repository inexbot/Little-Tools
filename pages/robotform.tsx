import type { NextPage } from "next";
import Link from "next/link";
import { Button, Descriptions, Form, Input } from "antd";
import { useState } from "react";
const patrn = /^(\-)?\d*(\.\d+)?$/;
const RobotForm: NextPage = () => {
  const [robotForm, setRobotForm] = useState(0);
  const [robotFormString, setRobotFormString] = useState("");
  const [form] = Form.useForm();
  function compute(values: any) {
    const a1Binary = -90 < values.a1 && values.a1 < 90 ? 1 : 0;
    const a3Binary = -90 < values.a3 && values.a3 < 90 ? 1 : 0;
    const a5Binary = -90 < values.a5 && values.a5 < 90 ? 1 : 0;
    const a1Form = a1Binary == 1 ? "正面" : "背面";
    const a3Form = a3Binary == 1 ? "正肘" : "反肘";
    const a5Form = a5Binary == 1 ? "仰姿" : "俯姿";
    const computeValue = a1Binary * 4 + a3Binary * 2 + a5Binary * 1 + 1;
    setRobotForm(computeValue);
    setRobotFormString(`${a1Form} ${a3Form} ${a5Form}`);
  }
  return (
    <div style={{ padding: "0px 20px", textAlign: "center" }}>
      <h1>形态参数计算</h1>
      <Form form={form} onFinish={compute}>
        <Form.Item
          label="关节1轴坐标值"
          name="a1"
          rules={[
            {
              required: true,
              pattern: patrn,
              message: "请输入数字，整数或浮点数。",
            },
          ]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="关节3轴坐标值"
          name="a3"
          rules={[
            {
              required: true,
              pattern: patrn,
              message: "请输入数字，整数或浮点数。",
            },
          ]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="关节5轴坐标值"
          name="a5"
          rules={[
            {
              required: true,
              pattern: patrn,
              message: "请输入数字，整数或浮点数。",
            },
          ]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{ width: "200px", margin: "20px 0px" }}
        >
          计算
        </Button>
      </Form>
      <Descriptions bordered>
        <Descriptions.Item label="参数值">{robotForm}</Descriptions.Item>
        <Descriptions.Item label="形态">{robotFormString}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default RobotForm;
