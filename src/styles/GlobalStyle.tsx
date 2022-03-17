import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  body, html {
    width: 100%;
  }
`;

export default GlobalStyle;
