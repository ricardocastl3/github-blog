import styled from "styled-components";

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 20rem 1fr;
  padding-top: 5rem;
  gap: 5rem;

  article {
    padding-top: 5rem;
  }
`;

export const ContentContainer = styled.div`
  padding-bottom: 5rem;
`;

export const PostContainer = styled.article`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;

  p{
    color: white;
  }
`;
