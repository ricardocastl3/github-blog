import { Link, useParams } from "react-router-dom";
import {
  ContentContainer,
  HeroContainer,
  PostDetail,
  ReadContainer,
  SideSeparator,
} from "./styles";
import {
  AiFillCalendar,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { PiArrowLeftBold } from "react-icons/pi";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { appConfig } from "../../@variables/default";
import { useRPost } from "../../hooks/useRPost";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";

export function ReadPost() {
  const { postId } = useParams();
  const posts = useRPost(postId!);

  return (
    <ReadContainer>
      <HeroContainer>
        <Link to="/">
          <PiArrowLeftBold />
          Voltar
        </Link>
      </HeroContainer>
      {posts.map((post) => {
        return (
          <section key={post.number}>
            <PostDetail key={post.id}>
              <section>
                <div>
                  <h2>{post.title}</h2>
                  <a
                    href={`${appConfig.html_url_repo}/issues/${post.number}`}
                    target="_blank"
                  >
                    VER NO GITHUB
                    <HiMiniArrowTopRightOnSquare />
                  </a>
                </div>
                <div>
                  <label>
                    <AiOutlineMessage />
                    <span>{post.comments}</span>
                    comments
                  </label>
                  <label>
                    <AiOutlineUser />
                    Ricardo Castle
                  </label>
                  <label>
                    <AiFillCalendar />
                    {formatDistanceToNow(new Date(post.created_at), {
                      locale: ptBR,
                    })}
                  </label>
                </div>
              </section>
            </PostDetail>
            <ContentContainer>
              <SideSeparator>
                <span>1</span>
                <span>2</span>
              </SideSeparator>
              <section>
                <div>
                  <p>
                    <ReactMarkdown>{post.body}</ReactMarkdown>
                  </p>
                </div>
              </section>
            </ContentContainer>
          </section>
        );
      })}
    </ReadContainer>
  );
}
