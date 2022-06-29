import { useState } from "react";
import { Button, Descriptions, Form, Image, Input, Switch } from "antd";

const patrn = /^\d*(\.\d+)?$/;

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
  }
  return (
    <div style={{ padding: "0px 20px" }}>
      <h1>圆角矩形点位计算</h1>
      <Form form={form} onFinish={compute} style={{ marginTop: "30px" }}>
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
