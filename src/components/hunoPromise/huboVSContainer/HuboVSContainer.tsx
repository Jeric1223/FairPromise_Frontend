import { FC } from 'react';
import React from 'react';
import * as S from './style';
import { strongHubo } from 'constance/strongCandidate';
import { useSetRecoilState } from 'recoil';
import { HuboVSHubo1Hubo2, HuboVSModalIsOpen, IsChangeHubo } from 'module/atom/huboDetail/huboDetail';

interface Props {
  color: string;
  giho: string | null;
  direction: string;
}

const HuboVSContainer: FC<Props> = ({ color, giho, direction }) => {
  const setIsOpen = useSetRecoilState(HuboVSModalIsOpen);
  const setHubo1Hubo2 = useSetRecoilState(HuboVSHubo1Hubo2);
  const setIsChangeHubo = useSetRecoilState(IsChangeHubo);

  return (
    <>
      {direction === 'left' ? (
        <S.HuboBannerContainer direction="left" color={color}>
          {strongHubo.map((item, index) => {
            if (String(item.giho) === giho) {
              return (
                <React.Fragment key={index}>
                  <S.ImageWrapper direction="left">
                    <img src={require(`assets/image/${item.name}.svg`)} alt="후보자사진" />
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setHubo1Hubo2(1);
                        const rand1 = Math.random();
                        setIsChangeHubo(rand1);
                      }}
                    >
                      후보 변경하기
                    </button>
                  </S.ImageWrapper>
                  <S.TextContainer>
                    <h1>{item.giho}</h1>
                    <div>
                      <h3>{item.jd_name}</h3>
                      <h2>{item.name}</h2>
                    </div>
                  </S.TextContainer>
                </React.Fragment>
              );
            } else {
              return <></>;
            }
          })}
        </S.HuboBannerContainer>
      ) : (
        <S.HuboBannerContainer direction="right" color={color}>
          {strongHubo.map((item, index) => {
            if (String(item.giho) === giho) {
              return (
                <React.Fragment key={index}>
                  <S.TextContainer>
                    <h1>{item.giho}</h1>
                    <div>
                      <h3>{item.jd_name}</h3>
                      <h2>{item.name}</h2>
                    </div>
                  </S.TextContainer>
                  <S.ImageWrapper direction="right">
                    <img src={require(`assets/image/${item.name}.svg`)} alt="후보자사진" />
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setHubo1Hubo2(2);
                        const rand1 = Math.random();
                        setIsChangeHubo(rand1);
                      }}
                    >
                      후보 변경하기
                    </button>
                  </S.ImageWrapper>
                </React.Fragment>
              );
            } else {
              return <></>;
            }
          })}
        </S.HuboBannerContainer>
      )}
    </>
  );
};

export default HuboVSContainer;
