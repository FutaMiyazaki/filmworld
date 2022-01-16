import Link from "next/link";
import { Loading } from "src/components/Layout/Loading";
import { usePosts } from "src/hooks/usePosts";

export function Posts() {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>データの取得に失敗しました</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
