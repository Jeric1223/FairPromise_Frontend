import { FC, useState } from 'react';
import * as S from './style';
import DropBoxTitleWrapper from './DropBoxTitle';

interface Props {
  title: string;
  list: string[];
  index: number;
}

const HuboPromiseDropBox: FC<Props> = ({ title, list, index }) => {
  const [isOpenDropBox, setIsOpenDropBox] = useState<boolean>(false);
  return (
    <>
      <DropBoxTitleWrapper
        setIsOpenDropBox={setIsOpenDropBox}
        isOpenDropBox={isOpenDropBox}
        title={title}
        index={index}
      />
      <S.PromiseFlexBox isOpenDropBox={isOpenDropBox}>
        {list.map((title, index) => {
          return (
            <S.PromiseWrapper isOpenDropBox={isOpenDropBox} key={index}>
              <S.LeftSidePromiseWrapper></S.LeftSidePromiseWrapper>
              <S.FieldListBox>
                <div>
                  <span>{title}</span>
                </div>
              </S.FieldListBox>
              <S.LightSidePromiseWrapper></S.LightSidePromiseWrapper>
            </S.PromiseWrapper>
          );
        })}
      </S.PromiseFlexBox>
    </>
  );
};

export default HuboPromiseDropBox;
