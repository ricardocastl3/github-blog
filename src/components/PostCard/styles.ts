import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 2rem;
  width: 25rem;
  border: 1px solid ${(props) => props.theme["gray-800"]};
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray-900"]};
  color: white;
  transition: 0.2s;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-200"]};
    width: 70%;
    &:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 4px ${(props) => props.theme["purple-400"]};
  }
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const PostBody = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  p {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.6;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PostFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["purple-400"]};
  }
`;
