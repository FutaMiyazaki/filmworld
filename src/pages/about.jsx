import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Layout/Footer";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function About(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button href="/about" onClick={props.handleClick}>
        ボタン
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={props.item}>{props.item}</li>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
}
