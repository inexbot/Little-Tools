import type { NextPage } from "next";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>编码器分辨率计算-小工具</title>
        <meta
          name="keywords"
          content="机器人,工业机器人,工业机器人控制系统,控制系统,工业,工业自动化,机器人控制系统,scara控制系统,工业机器人二次开发平台,多轴运动控制系统,机器人运动控制系统"
        ></meta>
        <meta
          name="description"
          content="纳博特科技成立于 2015 年，一直致力于为多轴运动控制技术的研发及行业解决方案的应用推广。纳博特科技的运动控制技术目前已经广泛应用于中国工业机器人行业。其核心产品纳博特机器人控制系统已经累计销售超过 1 万台，服务于焊接，冲压，喷涂等多个机器人领域。"
        ></meta>
      </Head>
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
