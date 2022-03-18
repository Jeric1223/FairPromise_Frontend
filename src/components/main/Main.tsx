import { FC } from 'react';
import * as S from './style';
import Banner from '../banner/Banner';
import HuboInfomation from './huboInfomation/HuboInfomation';
import HuboListContainer from './huboInfomation/HuboListContainer';

const Main: FC = () => {
  return (
    <>
      <Banner />
      <S.MainArticleContainer>
        <HuboInfomation />
        <HuboListContainer />
      </S.MainArticleContainer>
    </>
  );
};

export default Main;
