import styled from 'styled-components';

export const FlexCenterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroduceLine = styled.header`
  width: 1250px;
  margin-top: 70px;

  & > div {
    width: 100%;
    height: 6px;
    background-color: black;
    margin-bottom: 15px;
  }

  & > span {
    font-family: NanumSquare EB;
    font-size: 25px;
  }
`;

export const InfomationContainer = styled.article`
  width: 1250px;
  height: 380px;
  background-color: #f4f5fa;
  margin: 30px 0 100px 0;

  & > #line {
    width: 1000px;
    height: 2px;
    background-color: #dbdce1;
  }
`;
