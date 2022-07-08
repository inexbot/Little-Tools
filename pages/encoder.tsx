import type { NextPage } from "next";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { useState } from "react";
const patrn = /^-?[1-9]\d*$/;
const Encoder: NextPage = () => {
  const [digit, setDigit] = useState("");
  const [accuracy, setAccuracy] = useState("");
  function changeDigit(e: any) {
    setDigit(e.target.value);
    if (!patrn.exec(e.target.value)) {
      setAccuracy("请确认输入整数！");
      return;
    }
    const di = Number(e.target.value);
    const ac = Math.pow(2, di);
    setAccuracy(ac.toString());
  }
  function changeAccuracy(e: any) {
    setAccuracy(e.target.value);
    if (!patrn.exec(e.target.value)) {
      setDigit("请确认输入整数！");
      return;
    }
    const ac = Number(e.target.value);
    const di = Math.log(ac) / Math.log(2);
    setDigit(di.toString());
  }
  return (
    <div style={{ padding: "0px 20px", textAlign: "center" }}>
      <h1>编码器分辨率计算</h1>
      <h2>2^位数=脉冲数（精度）</h2>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="位数">
          <Input
            autoComplete="off"
            value={digit}
            onChange={changeDigit}
            placeholder="数字，整数"
          />
        </Form.Item>
        <Form.Item label="精度/脉冲数">
          <Input
            autoComplete="off"
            value={accuracy}
            onChange={changeAccuracy}
            placeholder="数字，整数"
          />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          setDigit("");
          setAccuracy("");
        }}
      >
        清空
      </Button>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Encoder;
