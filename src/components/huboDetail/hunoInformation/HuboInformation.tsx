import { FC } from 'react';
import * as S from './style';

const HuboInformation: FC = () => {
  return (
    <>
      <S.FlexCenterWrapper>
        <S.IntroduceLine>
          <div />
          <span>상세 프로필</span>
        </S.IntroduceLine>
        <S.InfomationContainer>
          <div>
            {/*             <h3>이름</h3>
            <h3>직업</h3>
            <h3>출생</h3>
            <h3>사저</h3>
            <h3>경력</h3>
            <h3>학력</h3> */}
          </div>
          <div id="line" />
        </S.InfomationContainer>
      </S.FlexCenterWrapper>
    </>
  );
};

export default HuboInformation;
