import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../contexts/UserContext";

export function Posts() {
  const posts = useContextSelector(UserContext, (context) => context.posts);

  return (
    <>
      <h1>Todos os posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}
