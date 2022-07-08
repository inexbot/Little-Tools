import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div
      style={{
        padding: "0px 20px",
        textAlign: "center",
      }}
    >
      <Head>
        <title>⚒️小工具</title>
        <meta
          name="keywords"
          content="机器人,工业机器人,工业机器人控制系统,控制系统,工业,工业自动化,机器人控制系统,scara控制系统,工业机器人二次开发平台,多轴运动控制系统,机器人运动控制系统"
        ></meta>
        <meta
          name="description"
          content="纳博特科技成立于 2015 年，一直致力于为多轴运动控制技术的研发及行业解决方案的应用推广。纳博特科技的运动控制技术目前已经广泛应用于中国工业机器人行业。其核心产品纳博特机器人控制系统已经累计销售超过 1 万台，服务于焊接，冲压，喷涂等多个机器人领域。"
        ></meta>
      </Head>
      <h1>⚒️小工具ver 1.4</h1>
      <div style={{ marginTop: "20px" }}>
        <Link href="/circlepoint">
          <Button
            type="primary"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
          >
            圆弧矩形点计算🖥️
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/angleradian">
          <Button
            type="primary"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
          >
            角度弧度换算📐
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/encoder">
          <Button
            type="primary"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
          >
            编码器分辨率转换🧻
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/robotform">
          <Button
            type="primary"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
          >
            形态计算🤖
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/rmbtochinese">
          <Button
            type="primary"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
          >
            人民币大写💸
          </Button>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
