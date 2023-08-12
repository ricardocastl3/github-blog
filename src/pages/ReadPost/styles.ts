import styled from "styled-components";

export const ReadContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const HeroContainer = styled.header`
  background-image: url("https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding: 3rem;
  padding-top: 8rem;
  height: 20rem;

  & a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0rem 2rem;
    color: ${(props) => props.theme["gray-200"]};
  }
`;

export const PostDetail = styled.div`
  margin: 0rem 15rem;
  margin-top: -10rem;
  padding: 3rem 4rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["gray-800"]};

  background-color: ${(props) => props.theme["gray-900"]};

  & section {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 1.5rem;
  }
  & section > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.white};
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.9rem;

      text-decoration: none;
      color: ${(props) => props.theme["blue-500"]};

      &:hover{
        opacity: 0.7;
      }
    }
  }

  & section div + div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;

export const ContentContainer = styled.div`
  margin: 5rem 15rem;

  padding: 6rem 1rem;
  padding-right: 4rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-900"]};

  display: flex;

  & section > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.white};
      font-size: 1.5rem;
    }
    span {
      color: ${(props) => props.theme["purple-400"]};
    }
  }

  & section div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      color: ${(props) => props.theme["gray-200"]};
      line-height: 1.6;
    }
  }
`;

export const SideSeparator = styled.div`
  margin: 0rem 2rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  color: white;

  span {
    color: ${(props) => props.theme["purple-400"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &::after {
      content: "";
      min-height: 10rem;
      height: 20rem;
      border: 1px solid ${(props) => props.theme["gray-700"]};
    }
  }
`;
