import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">Index</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
