import { FC, useEffect, useState } from 'react';
import * as S from './style';
import TextDetail from 'components/huboDetail/huboInformation/TextDetail';
import { DocumentIcon } from 'assets/index';

interface Props {
  huboinfo: any;
  huboReport: string;
}

const HuboInformation: FC<Props> = (props) => {
  const { huboinfo, huboReport } = props;
  const [birthday, setBirthday] = useState<string>('');

  const birthdaySlice = (string: string) => {
    let year = string.substring(0, 4);
    let month = string.substring(4, 6);
    let day = string.substring(6, 8);
    return `${year}.${month}.${day}.`;
  };

  useEffect(() => {
    setBirthday(birthdaySlice(huboinfo.BIRTHDAY));
  }, [huboinfo.BIRTHDAY]);

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
            <TextDetail title={'직업'} text={`${huboinfo.JOB}`} />
            <TextDetail title={'학력'} text={`${huboinfo.EDU}`} />
            <TextDetail title={'출생'} text={`${birthday} (${huboinfo.AGE}세)`} />
            <TextDetail title={'경력'} text={`${huboinfo.CAREER1}\n${huboinfo.CAREER2}`} />
          </S.TextFlexBox>
          <div id="line" />
        </S.InfomationContainer>
        <S.ReportBox>
          <a rel="noopener noreferrer" target="_blank" href={huboReport}>
            <img src={DocumentIcon} alt="책자형 공보 보러가기" />
            <p>책자형 선거공보</p>
          </a>
        </S.ReportBox>
      </S.FlexCenterWrapper>
    </>
  );
};

export default HuboInformation;
