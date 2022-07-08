import type { NextPage } from "next";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import Head from "next/head";
const patrn = /^(\-)?\d*(\.\d+)?$/;
const AngleRadian: NextPage = () => {
  const [angle, setAngle] = useState("");
  const [radian, setRadian] = useState("");
  function changeAngle(e: any) {
    setAngle(e.target.value);
    if (!patrn.exec(e.target.value)) {
      setRadian("请确认输入！");
      return;
    }
    const an = Number(e.target.value);
    const ra = (an * Math.PI) / 180;
    setRadian(ra.toString());
  }
  function changeRadian(e: any) {
    setRadian(e.target.value);
    if (!patrn.exec(e.target.value)) {
      setAngle("请确认输入！");
      return;
    }
    const ra = Number(e.target.value);
    const an = (ra * 180) / Math.PI;
    setAngle(an.toString());
  }
  return (
    <div style={{ padding: "0px 20px", textAlign: "center" }}>
      <Head>
        <title>角度弧度转换-小工具</title>
        <meta
          name="keywords"
          content="机器人,工业机器人,工业机器人控制系统,控制系统,工业,工业自动化,机器人控制系统,scara控制系统,工业机器人二次开发平台,多轴运动控制系统,机器人运动控制系统"
        ></meta>
        <meta
          name="description"
          content="纳博特科技成立于 2015 年，一直致力于为多轴运动控制技术的研发及行业解决方案的应用推广。纳博特科技的运动控制技术目前已经广泛应用于中国工业机器人行业。其核心产品纳博特机器人控制系统已经累计销售超过 1 万台，服务于焊接，冲压，喷涂等多个机器人领域。"
        ></meta>
      </Head>
      <h1>角度弧度转换</h1>
      <h2>弧度=(角度*π)/180</h2>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="角度°">
          <Input
            autoComplete="off"
            value={angle}
            onChange={changeAngle}
            placeholder="数字，整数或小数"
          />
        </Form.Item>
        <Form.Item label="弧度rad">
          <Input
            autoComplete="off"
            value={radian}
            onChange={changeRadian}
            placeholder="数字，整数或小数"
          />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          setAngle("");
          setRadian("");
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

export default AngleRadian;
