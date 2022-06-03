import styled from 'styled-components';
import { fonts } from 'styles/theme';

interface Props {
  color: string;
}

interface gihoProps {
  giho: number;
}

export const SloganBannerWrapper = styled.div<Props>`
  width: 100%;
  height: 450px;
  margin-top: 70px;
  display: flex;
  align-items: center;

  background-color: ${(props) => `${props.color}D9`};
`;

export const LeftWrapper = styled.div`
  width: 65%;
  height: 100%;
  overflow: hidden;
  p {
    font-family: ${fonts.TypoS};
    font-size: 3.875rem;
    text-align: center;
    color: white;
    margin-top: 50px;
  }
  h1 {
    font-family: ${fonts.TypoS};
    white-space: pre-wrap;
    font-size: 5.5rem;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
`;

export const RightWrapper = styled.div<gihoProps>`
  width: 35%;
  height: 100%;
  position: relative;
  & > h1 {
    font-family: ${fonts.TypoS};
    font-size: ${(props) => (props.giho >= 10 ? '22rem' : '25rem')};
    position: absolute;
    display: inline;
    bottom: -12px;
    left: ${(props) => (props.giho >= 10 ? '-161px' : '-91px')};
    color: white;
  }

  & > button {
    width: 180px;
    height: 43px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 18px;
    font-size: 22px;
    color: white;
    font-family: ${fonts.NanumEB};
    transition: 0.2s;
    z-index: 100;
    position: absolute;
    bottom: 22px;
    right: 12px;
  }

  & > button:hover {
    color: #37e8a0;
  }
`;

export const HuboImageList = styled.div<gihoProps>`
  width: ${(props) => (props.giho === 6 ? '420px' : '368px')};
  height: 510px;
  position: absolute;
  top: -60px;
  right: ${(props) => (props.giho >= 10 ? '0px' : '144px')};
  z-index: 100;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
