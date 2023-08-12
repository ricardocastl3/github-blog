import { styled } from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 1.5rem 3rem;
  display: flex;

  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-900"]};

  & > div {
    strong {
      font-weight: bold;
      font-size: 1.5rem;
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;

export const ListItems = styled(NavigationMenu.List)`
  position: relative;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const NavContent = styled(NavigationMenu.Content)`
  position: absolute;
  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-200"]};
  border: 1px solid ${(props) => props.theme["gray-800"]};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  top: 5rem;
  right: 0.5rem;
  width: 35rem;

  border-radius: 6px;
  padding: 1.5rem;

  animation: enterFrame 100ms ease;

  & > div {
    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @keyframes enterFrame {
    from {
      transform: scale(0.5);
      opacity: 0;
      transition: 0.2s;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const NavTrigger = styled(NavigationMenu.Trigger)`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.5rem 1rem;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;

  border-radius: 8px;
  border: none;

  color: ${(props) => props.theme.white};
  background-color: transparent;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const NavMostRecentProject = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["gray-700"]};
  }
`;

export const NavItemProject = styled.a`
  text-decoration: none;

  cursor: pointer;
  gap: 2rem;

  padding: 1rem 0.5rem;
  border-radius: 6px;

  border-bottom: 1px solid ${(props) => props.theme["gray-700"]};
  transition: 0.2s;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      padding: 0.2rem;
      border-radius: 6px;
      color: ${(props) => props.theme["gray-200"]};
      background-color: ${(props) => props.theme["purple-800"]};
      font-size: 0.6rem;
      font-weight: bold;
    }
  }
  h3 {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-200"]};
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: ${(props) => props.theme["gray-400"]};
  }
  &:hover {
    background-color: ${(props) => props.theme["gray-700"]};
  }
`;
