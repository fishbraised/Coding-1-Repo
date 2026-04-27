import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    
  html {
    color-scheme: dark light;
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }
`;
