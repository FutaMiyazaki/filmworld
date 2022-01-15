import React from "react";
import Head from "next/head";
import Button from "@mui/material/Button";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <p>JSONPlaceholderのAPIを色々叩いてみる</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
