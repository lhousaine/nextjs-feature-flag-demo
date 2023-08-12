import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import { GdpChart, TreasuryChart } from "../components/Charts";
import { useFeatureToggle } from "../hooks/useFeatureToggle";

const { Header, Content } = Layout;

export default function Home() {
  const [isEnabled] = useFeatureToggle();
  return (
    <Layout className="layout">
      <Head>
        <title> Feature Toggle in Next.js</title>
      </Head>
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <GdpChart />
        {isEnabled("treasury_chart") && <TreasuryChart />}
      </Content>
    </Layout>
  );
}
