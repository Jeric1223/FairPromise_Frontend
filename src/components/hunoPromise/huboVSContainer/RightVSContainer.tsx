import { FC } from 'react';
import * as S from './style';
import { strongHubo } from 'constance/strongCandidate';
import { useSetRecoilState } from 'recoil';
import { HuboVSHubo1Hubo2, HuboVSModalIsOpen } from 'module/atom/huboDetail/huboDetail';

interface Props {
  giho: string | null;
}

const RightVSContainer: FC<Props> = ({ giho }) => {
  const setIsOpen = useSetRecoilState(HuboVSModalIsOpen);
  const { name, jd_name, color } = strongHubo[Number(giho) - 1];
  const setHubo1Hubo2 = useSetRecoilState(HuboVSHubo1Hubo2);
  return (
    <>
      <S.HuboBannerRightContainer color={color}>
        <S.ImageWrapper direction="right">
          <img src={require(`assets/image/${name}.svg`)} alt="후보자사진" />
          <button
            onClick={() => {
              setIsOpen(true);
              setHubo1Hubo2(2);
            }}
          >
            후보 변경하기
          </button>
        </S.ImageWrapper>
        <S.TextContainer>
          <h1>{giho}</h1>
          <div>
            <h3>{jd_name}</h3>
            <h2>{name}</h2>
          </div>
        </S.TextContainer>
      </S.HuboBannerRightContainer>
    </>
  );
};

export default RightVSContainer;
