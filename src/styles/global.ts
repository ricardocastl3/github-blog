import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :focus{
        outline: 0;
        box-shadow:  0 0 2px ${props => props.theme["purple-700"]};
    }

    ul{
        list-style: none;
    }

    body{
        background-color: ${(props) => props.theme["gray-950"]};
    }

`;
