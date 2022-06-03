import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  body, html {
    width: 100%;
    min-width: 768px;
    font-size: 15px;

    @media screen and (max-width: 900px){
      font-size: 13px;
    }
  } 
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }  
`;

export default GlobalStyle;
