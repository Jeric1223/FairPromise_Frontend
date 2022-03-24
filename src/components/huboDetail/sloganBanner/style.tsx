import styled from 'styled-components';

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
  background-color: ${(props) => `${props.color}D9`};
  display: flex;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  width: 65%;
  height: 100%;
  overflow: hidden;
  p {
    font-family: Typo_S;
    font-size: 3.875rem;
    text-align: center;
    color: white;
    margin-top: 50px;
  }
  h1 {
    font-family: Typo_S;
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
  h1 {
    font-family: Typo_S;
    font-size: ${(props) => (props.giho >= 10 ? '22rem' : '25rem')};
    position: absolute;
    display: inline;
    bottom: -12px;
    left: ${(props) => (props.giho >= 10 ? '-161px' : '-91px')};
    color: white;
  }
`;

export const HuboImageList = styled.div<gihoProps>`
  width: ${(props) => (props.giho == 6 ? '420px' : '368px')} 368px;
  height: 510px;
  position: absolute;
  top: -60px;
  right: ${(props) => (props.giho >= 10 ? '0px' : '144px')};
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
  }
`;
