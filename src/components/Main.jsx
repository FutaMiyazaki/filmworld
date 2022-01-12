import styles from "src/styles/Home.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { useState, useCallback } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Documentation →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://nextjs.org/docs",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page} />
      <h1>item数：{items.length}</h1>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
