import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const HuboBannerContainer = styled.div<{ color: string; direction: string }>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  background-color: ${(props) => `${props.color}D9`};
  justify-content: ${(props) => (props.direction === 'left' ? 'flex-start' : 'flex-end')};
`;

export const ImageWrapper = styled.div<{ direction: string }>`
  width: 302px;
  height: 419px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 50;
    bottom: -30px;
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
    z-index: 60;
    bottom: -17px;

    left: ${(props) => (props.direction === 'left' ? '8px' : '114px')};
  }

  & > button:hover {
    color: #37e8a0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: 143px;
  color: #ffffff;

  & > h1 {
    font-family: ${fonts.TypoS};
    width: 200px;
    font-family: Typo_S;
    font-size: 245px;
    margin-top: 19px;
  }

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h3 {
      font-family: ${fonts.TypoS};
      font-size: 48px;
      margin-top: 28px;
    }

    & > h2 {
      font-family: ${fonts.NanumEB};
      font-size: 125px;
      margin-top: 30px;
    }
  }
`;
