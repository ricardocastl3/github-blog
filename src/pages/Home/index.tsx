import { useContextSelector } from "use-context-selector";
import { Sidebar } from "../../components/Sidebar";
import { ContentContainer, HomeContainer, PostContainer } from "./styles";
import { SearchForm } from "../../components/SearchForm";
import { PostCard } from "../../components/PostCard";
import { UserContext } from "../../contexts/UserContext";

export function Home() {
  const posts = useContextSelector(UserContext, (context) => context.posts);
  return (
    <HomeContainer>
      <Sidebar />
      <ContentContainer>
        <article>
          <SearchForm />
        </article>
        <PostContainer>
          {posts.length > 0 ? (
            posts.map((post) => {
              return <PostCard post={post} key={post.id} />;
            })
          ) : (
            <p>Nenhuma postagem encontrada!</p>
          )}
        </PostContainer>
      </ContentContainer>
    </HomeContainer>
  );
}
