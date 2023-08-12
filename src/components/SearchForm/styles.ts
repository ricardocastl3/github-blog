import styled from "styled-components";

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme.white};
  }
  form {
    display: flex;
    gap: 1rem;

    input {
      background-color: transparent;
      font-size: 1rem;

      width: 80%;
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme["gray-700"]};
      color: ${(props) => props.theme.white};
      padding: 1rem;
    }

    button {
      color: ${(props) => props.theme.white};
      font-size: 0.8rem;
      font-weight: bold;

      cursor: pointer;

      border: none;
      border-radius: 6px;
      background-color: ${(props) => props.theme["purple-700"]};

      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0rem 1rem;

      &:not(:disabled):hover {
        opacity: 0.7;
        transition: 0.2s;
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      img{
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
