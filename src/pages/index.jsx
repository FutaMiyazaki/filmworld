import React from "react";
import Head from "next/head";
import { Header } from "src/components/Layout/Header";
import Button from "@mui/material/Button";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />
      <h1>Next.js学習</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみる</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
