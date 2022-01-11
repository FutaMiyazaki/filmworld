import styles from "src/styles/Home.module.css";

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

export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.description} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
