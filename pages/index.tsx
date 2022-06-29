import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div
      style={{
        padding: "0px 20px",
        textAlign: "center",
      }}
    >
      <h1>⚒️小工具ver 0.1</h1>
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
            角度弧度换算🖥️
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
