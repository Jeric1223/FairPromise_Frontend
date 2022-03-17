import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}; 

  @font-face {
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 100;
  src: url("styles/fonts/NanumSquare_acL.ttf")
}

@font-face {
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: normal;
  src: url("styles/fonts/NanumSquare_acR.ttf")
}

@font-face {
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 500;
  src: url("styles/fonts/NanumSquare_acB")
}

@font-face {
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: bold;
  src: url("styles/fonts/NanumSquare_acEB.ttf")
}
`;

export default GlobalStyle;
