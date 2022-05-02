import styled from 'styled-components';
import { fonts } from 'styles/theme';

interface Props {
  theme: 'string';
}

export const HeaderParentContainer = styled.div<{ zIndex: number }>`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${(props) => props.zIndex};
`;

export const Header = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: 0.234s;
  cursor: pointer;
  gap: 75px;

  -webkit-box-shadow: 0px 3px 5px -2px rgba(122, 122, 122, 0.5);
  -moz-box-shadow: 0px 3px 5px -2px rgba(122, 122, 122, 0.5);
  box-shadow: 0px 3px 5px -2px rgba(122, 122, 122, 0.5);

  background-color: ${(props) => (props.theme === 'white' ? 'transparent' : 'white')};
  border-bottom: 2px solid ${(props) => (props.theme === 'black' ? '#272727' : '#ffffff')};

  & > a {
    text-decoration: none;
  }

  & > a > img[alt='공정한 공약 로고'] {
    width: 190px;
    height: 34px;
    margin-left: 9.375rem;

    @media screen and (max-width: 810px) {
      margin-left: 4rem;
    }
  }

  & > a > p {
    font-family: ${fonts.NanumEB};
    font-size: 1.3rem;
    color: ${(props) => (props.theme === 'white' ? 'white' : 'black')};
  }
`;
