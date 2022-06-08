import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const FlexCenterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  a > button {
    width: 228px;
    height: 47px;
    background-color: black;
    border-radius: 18px;
    font-size: 22px;
    color: white;
    font-family: ${fonts.NanumEB};
    transition: 0.2s;
    position: absolute;
  }
`;

export const ReportBox = styled.div`
  width: 150px;
  height: 154px;
  border-radius: 17px;
  background-color: #f4f5fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 90px;
  top: 24%;
  transition: transform 0.3s ease 0s;

  &:hover {
    transform: scale(1.025);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }
  a:hover {
    color: #a00;
  }

  a > img {
    width: 70px;
    height: 70px;
  }

  a > p {
    font-family: ${fonts.NanumEB};
    font-size: 20px;
    color: #000000;
    margin-top: 10px;
  }
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
    font-family: ${fonts.NanumEB};
    font-size: 25px;
  }
`;

export const InfomationContainer = styled.article`
  width: 1250px;
  height: 380px;
  background-color: #f4f5fa;
  margin: 30px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > #line {
    width: 900px;
    height: 2px;
    background-color: #dbdce1;
  }
`;

export const TextFlexBox = styled.div`
  padding-left: 220px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 55px 0;
  margin: 20px 0 45px 0;
`;

export const TextDetail = styled.div`
  width: 450px;
  display: flex;
  align-items: center;

  & > h1 {
    font-family: ${fonts.NanumB};
    font-size: 22px;
  }

  & > p {
    font-family: ${fonts.NanumR};
    font-size: 22px;
    color: rgba(00, 00, 00, 70%);
    margin-left: 20px;
    white-space: pre-wrap;
    line-height: 30px;
  }
`;
