/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import * as S from './style';
import DropBoxTitleWrapper from './DropBoxTitle';
import { useSearchParams } from 'react-router-dom';

interface Props {
  title: string;
  list: string[];
  index: number;
  promise: any;
}

const HuboPromiseDropBox: FC<Props> = ({ title, list, index, promise }) => {
  const [isOpenDropBox, setIsOpenDropBox] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  let hubo_1 = searchParams.get('hubo_1');
  let hubo_2 = searchParams.get('hubo_2');

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
              <S.LeftSidePromiseWrapper
                dangerouslySetInnerHTML={{ __html: promise[Number(hubo_1) - 1]?.promise[index] }}
              ></S.LeftSidePromiseWrapper>
              <S.FieldListBox>
                <div>
                  <span>{title}</span>
                </div>
              </S.FieldListBox>
              <S.LightSidePromiseWrapper
                dangerouslySetInnerHTML={{ __html: promise[Number(hubo_2) - 1]?.promise[index] }}
              ></S.LightSidePromiseWrapper>
            </S.PromiseWrapper>
          );
        })}
      </S.PromiseFlexBox>
    </>
  );
};

export default HuboPromiseDropBox;
