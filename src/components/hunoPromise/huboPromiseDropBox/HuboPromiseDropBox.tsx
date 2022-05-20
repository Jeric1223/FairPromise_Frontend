import { FC } from 'react';
import * as S from './style';
import DropBoxTitleWrapper from './DropBoxTitle';

interface Props {}

const HuboPromiseDropBox: FC<Props> = () => {
  return (
    <>
      <DropBoxTitleWrapper />
      <S.PromiseFlexBox>
        <S.LeftSidePromiseWrapper>
          
        </S.LeftSidePromiseWrapper>
        <S.FieldListBox>
          <div><span>사드 배치</span></div>
        </S.FieldListBox>
        <S.LightSidePromiseWrapper>

        </S.LightSidePromiseWrapper>
      </S.PromiseFlexBox>
    </>
  );
};

export default HuboPromiseDropBox;
