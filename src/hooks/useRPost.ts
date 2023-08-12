import { useContextSelector } from "use-context-selector";
import { UserContext } from "../contexts/UserContext";

export function useRPost(postNumber: string) {
  const posts = useContextSelector(UserContext, (context) => context.posts);

  const mapPost = posts.filter((post) => {
    return post.number.toString() == postNumber;
  });

  return mapPost;
}
