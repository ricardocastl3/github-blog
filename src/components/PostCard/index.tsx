import { Link } from "react-router-dom";
import { PostBody, PostContainer, PostFooter, PostTitle } from "./styles";
import { AiOutlineMessage } from "react-icons/ai";
import { IPost } from "../../contexts/UserContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps{
  post: IPost
}
export function PostCard({post}:PostCardProps) {

  const createdDateFormatted = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR
  })

  return (
    <PostContainer>
      <PostTitle>
        <Link to={`/posts/${post.number}`} >{post.title}</Link>
        <span>{createdDateFormatted}</span>
      </PostTitle>

      <PostBody>
        <p>
          {post.body}
        </p>
      </PostBody>

      <PostFooter>
        <label>
          <AiOutlineMessage />
          <span>{post.comments}</span>
          comments
        </label>
      </PostFooter>
    </PostContainer>
  );
}
