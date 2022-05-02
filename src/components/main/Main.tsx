import { FC } from 'react';
import * as S from './style';
import Banner from '../banner/Banner';
import HuboInfomation from './huboInfomation/HuboInfomation';
import HuboListContainer from './huboInfomation/HuboListContainer';

const Main: FC = () => {
  return (
    <S.Main>
      <Banner />
      <S.MainArticleContainer>
        <HuboInfomation />
        <HuboListContainer />
      </S.MainArticleContainer>
    </S.Main>
  );
};

export default Main;
