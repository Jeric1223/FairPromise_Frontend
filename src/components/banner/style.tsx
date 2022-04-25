import styled from 'styled-components';
import { Banner, Slide_Type_1 } from '../../assets/index';
import { fonts } from 'styles/theme';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1300;

export const BannerMainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-width: 768px;
`;

export const SlideContainer = styled.div`
  width: 1250px;
  height: 323px;
  background-image: url(${Slide_Type_1});
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  margin-top: 127px;
  position: relative;
  min-width: 768px;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 768px;
    height: 199px;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 993px;
    height: 256px;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 1250px;
    height: 323px;
  }

  & > a > button {
    width: 207px;
    bottom: 10%;
    right: 42%;
    position: absolute;
    height: 40px;
    background-color: #272727;
    border-radius: 7px;
    font-size: 19px;
    font-family: ${fonts.NanumEB};
    color: #ffffff;
    text-align: center;

    @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
      width: 170px;
      height: 30px;
      font-size: 15px;
    }
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      width: 172px;
      height: 34px;
      font-size: 17px;
    }
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      width: 207px;
      height: 40px;
      font-size: 19px;
    }
  }
`;
