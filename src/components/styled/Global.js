import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: '#fff';
    color: #2a2a2a;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    margin: 0;
  }
  p {
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
`
