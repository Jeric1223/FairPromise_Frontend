import styled from 'styled-components';

interface Props {
  theme: 'string';
}

export const HeaderParentContainer = styled.div<{ zIndex: number }>`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
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

  background-color: ${(props) => (props.theme === 'white' ? 'transparent' : 'white')};
  border-bottom: 2px solid ${(props) => (props.theme === 'black' ? '#272727' : '#ffffff')};

  & > a {
    text-decoration: none;
  }

  & > a > img[alt='공정한 공약 로고'] {
    width: 190px;
    height: 34px;
    margin-left: 150px;
  }

  & > a > p {
    font-family: 'NanumSquare EB';
    font-size: 20px;
    color: ${(props) => (props.theme === 'white' ? 'white' : 'black')};
  }
`;
