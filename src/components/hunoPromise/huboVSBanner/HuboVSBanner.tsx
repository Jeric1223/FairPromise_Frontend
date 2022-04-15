import { FC } from 'react';
import * as S from './style';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  return (
    <S.BannerMainContainer>
      <S.LeftContainer color={'#3F69FF'}></S.LeftContainer>
      <S.RightContainer color={'#E61E2B'}></S.RightContainer>
    </S.BannerMainContainer>
  );
};

export default HuboVSBanner;
