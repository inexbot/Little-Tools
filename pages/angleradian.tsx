import type { NextPage } from "next";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { useState } from "react";
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
