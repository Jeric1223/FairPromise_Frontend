/* eslint-disable array-callback-return */
import { FC } from 'react';
import * as S from './style';
import HuboList from './HuboList';
import { huboList } from '../../../constance/data';

const HuboListContainer: FC = () => {
  return (
    <S.HuboListFlexContainer>
      {huboList.map((item) => {
        if (item.color === '사퇴') return;
        else {
          return <HuboList name={item.name} dang={item.jd_name} number={item.giho} color={item.color} />;
        }
      })}
    </S.HuboListFlexContainer>
  );
};

export default HuboListContainer;
