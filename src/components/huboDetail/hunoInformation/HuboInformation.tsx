import { FC } from 'react';
import * as S from './style';
import TextDetail from './TextDetail';

interface Props {
  huboinfo: any;
}

const HuboInformation: FC<Props> = (props) => {
  const { huboinfo } = props;
  console.log(huboinfo);
  return (
    <>
      <S.FlexCenterWrapper>
        <S.IntroduceLine>
          <div />
          <span>상세 프로필</span>
        </S.IntroduceLine>
        <S.InfomationContainer>
          <S.TextFlexBox>
            <TextDetail title={'이름'} text={`${huboinfo.NAME}(${huboinfo.HANJA_NAME})`} />
            <TextDetail title={'사저'} text={`${huboinfo.ADDR}`} />
            <TextDetail title={'이름'} text="윤석열" />
            <TextDetail title={'이름'} text="윤석열" />
            <TextDetail title={'이름'} text="윤석열" />
            <TextDetail title={'이름'} text="윤석열" />
          </S.TextFlexBox>
          <div id="line" />
        </S.InfomationContainer>
      </S.FlexCenterWrapper>
    </>
  );
};

export default HuboInformation;
