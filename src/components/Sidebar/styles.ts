import styled from "styled-components";

export const SidebarContainer = styled.main`
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;

  margin: 1rem;
  border-radius: 6px;
 
  background-color: ${props => props.theme["gray-900"]};


  & > div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    color: ${(props) => props.theme["gray-200"]};

    div {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 1rem;
        color: ${(props) => props.theme["gray-400"]};
        margin-bottom: 1rem;
        font-weight: lighter;
      }
      small {
        text-align: center;
        font-size: 0.8rem;
        color: ${(props) => props.theme["gray-400"]};
        line-height: 1.6;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;

        &::after {
          content: "";
          border: 1px solid ${(props) => props.theme["gray-800"]};
          margin: 1rem 0rem;
        }
      }
      section {
        display: flex;
        gap: 0.5rem;
        label {
          font-size: 0.8rem;
          color: ${(props) => props.theme["gray-400"]};
          display: flex;
          gap: 0.3rem;
          span {
            color: ${(props) => props.theme.white};
          }
        }
      }
    }
  }
`;

export const SideAvatar = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  & div {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    strong {
      font-size: 1.3rem;
      line-height: 1.6;
    }
  }
`;
