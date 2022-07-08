import type { NextPage } from "next";
import Link from "next/link";
import { Button, Descriptions, Form, Input } from "antd";
import { useState } from "react";
import Head from "next/head";
const patrn = /^(\-)?\d*(\.\d+)?$/;
const RMBToChinese: NextPage = () => {
  const [RMBNumber, setRMBNumber] = useState("");
  const [RMBChinese, setRMBChinese] = useState("");
  const cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const cnIntRadice = ["", "拾", "佰", "仟"];
  const cnIntUnits = ["", "万", "亿", "兆"];
  const cnDecUnits = ["角", "分", "毫", "厘"];
  const cnInteger = "整";
  const cnIntLast = "元";
  const maxNum = 999999999999999.9999;

  function changeNumber(e: any) {
    const str = convertRMB(e.target.value);
    setRMBChinese(str);
  }

  function convertRMB(money: string): string {
    let intNum;
    let decimalNum;
    let chineseStr = "";
    let parts;
    if (!money || !patrn.exec(money)) {
      return "请输入整数或浮点数";
    }
    let moneyNum = parseFloat(money);
    if (moneyNum > maxNum) {
      return "仅支持小于999999999999999.9999的金额";
    }
    if (moneyNum == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    if (money.indexOf(".") == -1) {
      intNum = money;
      decimalNum = "";
    } else {
      parts = money.split(".");
      intNum = parts[0];
      decimalNum = parts[1].substring(0, 4);
    }
    if (parseInt(intNum, 10) > 0) {
      let zeroCount = 0;
      let IntLen = intNum.length;
      for (let i = 0; i < IntLen; i++) {
        // let n = intNum.substr(i, 1);
        let n = intNum.substring(i, i + 1);
        let p = IntLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n == "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    if (decimalNum != "") {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substring(i, i + 1);
        if (n != "0") {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr == "") {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == "") {
      chineseStr += cnInteger;
    }
    return chineseStr;
  }
  return (
    <div style={{ padding: "0px 20px", textAlign: "center" }}>
      <Head>
        <title>人民币数字转大写-小工具</title>
        <meta
          name="keywords"
          content="机器人,工业机器人,工业机器人控制系统,控制系统,工业,工业自动化,机器人控制系统,scara控制系统,工业机器人二次开发平台,多轴运动控制系统,机器人运动控制系统"
        ></meta>
        <meta
          name="description"
          content="纳博特科技成立于 2015 年，一直致力于为多轴运动控制技术的研发及行业解决方案的应用推广。纳博特科技的运动控制技术目前已经广泛应用于中国工业机器人行业。其核心产品纳博特机器人控制系统已经累计销售超过 1 万台，服务于焊接，冲压，喷涂等多个机器人领域。"
        ></meta>
      </Head>
      <h1>人民币数字转大写</h1>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
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
          <Input autoComplete="off" onChange={changeNumber} value={RMBNumber} />
        </Form.Item>
        <Form.Item label="大写">
          <h2>{RMBChinese}</h2>
        </Form.Item>
      </Form>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default RMBToChinese;
