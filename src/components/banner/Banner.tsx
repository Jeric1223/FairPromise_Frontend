import { FC } from 'react';
import * as S from './style';
import Header from '../header/Header';

const Banner: FC = () => {
  return (
    <S.BannerMainWrapper>
      <Header />
    </S.BannerMainWrapper>
  );
};

export default Banner;
