import { useState } from "react";
import { Button, Descriptions, Form, Image, Input, Switch } from "antd";
import Head from "next/head";
const patrn = /^(\-)?\d*(\.\d+)?$/;

function CirclePoint() {
  const [points, setPoints] = useState([[0, 0]]);
  const [sameR, setSameR] = useState(false);
  const [form] = Form.useForm();
  function compute(values: any) {
    let pointsCache = [];
    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    let r4 = 0;
    if (values.sameR) {
      r1 = r2 = r3 = r4 = Number(values.r);
    } else {
      r1 = Number(values.r1);
      r2 = Number(values.r2);
      r3 = Number(values.r3);
      r4 = Number(values.r4);
    }
    const x = Number(values.L1) / 2;
    const y = Number(values.L2) / 2;
    const circleCenterX1 = x - r1 + r1 * Math.cos((45 * Math.PI) / 180);
    const circleCenterY1 = y - r1 + r1 * Math.cos((45 * Math.PI) / 180);
    const circleCenterX2 = x - r2 + r2 * Math.cos((45 * Math.PI) / 180);
    const circleCenterY2 = y - r2 + r2 * Math.cos((45 * Math.PI) / 180);
    const circleCenterX3 = x - r3 + r3 * Math.cos((45 * Math.PI) / 180);
    const circleCenterY3 = y - r3 + r3 * Math.cos((45 * Math.PI) / 180);
    const circleCenterX4 = x - r4 + r4 * Math.cos((45 * Math.PI) / 180);
    const circleCenterY4 = y - r4 + r4 * Math.cos((45 * Math.PI) / 180);
    pointsCache.push([0, -y]); //P1
    pointsCache.push([-(x - r1), -y]); //P2
    pointsCache.push([-circleCenterX1, -circleCenterY1]); //P3
    pointsCache.push([-x, -(y - r1)]); //P4
    pointsCache.push([-x, y - r2]); //P5
    pointsCache.push([-circleCenterX2, circleCenterY2]); //P6
    pointsCache.push([-(x - r2), y]); //P7
    pointsCache.push([x - r3, y]); //P8
    pointsCache.push([circleCenterX3, circleCenterY3]); //P9
    pointsCache.push([x, y - r3]); //P10
    pointsCache.push([x, -(y - r4)]); //P11
    pointsCache.push([circleCenterX4, -circleCenterY4]); //P12
    pointsCache.push([x - r4, -y]); //P13
    setPoints(pointsCache);
    scrollToAnchor();
  }
  function scrollToAnchor() {
    const anchorele = document.getElementById("anchor");
    anchorele?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div style={{ padding: "0px 20px" }}>
      <Head>
        <title>圆角矩形点位计算-小工具</title>
        <meta
          name="keywords"
          content="机器人,工业机器人,工业机器人控制系统,控制系统,工业,工业自动化,机器人控制系统,scara控制系统,工业机器人二次开发平台,多轴运动控制系统,机器人运动控制系统"
        ></meta>
        <meta
          name="description"
          content="纳博特科技成立于 2015 年，一直致力于为多轴运动控制技术的研发及行业解决方案的应用推广。纳博特科技的运动控制技术目前已经广泛应用于中国工业机器人行业。其核心产品纳博特机器人控制系统已经累计销售超过 1 万台，服务于焊接，冲压，喷涂等多个机器人领域。"
        ></meta>
      </Head>
      <h1>圆角矩形点位计算</h1>
      <Form
        form={form}
        onFinish={compute}
        style={{ marginTop: "30px" }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="长边长度"
          name="L1"
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
          label="短边长度"
          name="L2"
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
        <Form.Item label="同半径" name="sameR">
          <Switch
            onChange={(checked) => {
              setSameR(checked);
            }}
            checked={sameR}
          />
        </Form.Item>
        {sameR ? (
          <Form.Item
            label="圆弧半径"
            name="r"
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
        ) : (
          <div>
            <Form.Item
              label="圆弧半径r1"
              name="r1"
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
              label="圆弧半径r2"
              name="r2"
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
              label="圆弧半径r3"
              name="r3"
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
              label="圆弧半径r4"
              name="r4"
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
          </div>
        )}

        <div style={{ width: "100%", textAlign: "center" }}>
          <Button
            htmlType="submit"
            style={{ width: "200px", margin: "20px 0px" }}
            type="primary"
          >
            计算
          </Button>
          <br />
          <Image src="/circle.png" alt="circle" />
        </div>
      </Form>
      <div id="anchor"></div>
      <Descriptions title="计算结果" bordered>
        {points.map((v, i) => (
          <Descriptions.Item label={`P${i + 1}`} key={i}>
            X: {v[0]}
            <br />
            Y: {v[1]}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default CirclePoint;
