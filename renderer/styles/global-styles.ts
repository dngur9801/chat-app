import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing : border-box;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
