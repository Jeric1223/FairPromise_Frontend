import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  background-color: #000000;
  position: fixed;
  top: 0;
  background-color: transparent;
  cursor: pointer;

  & > img[alt='공정한 공약 로고'] {
    width: 190px;
    height: 34px;
    margin-left: 150px;
  }
`;
