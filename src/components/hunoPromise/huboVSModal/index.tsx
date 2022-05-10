import { FC, useEffect } from 'react';
import * as S from './style';
import { HuboVSModalIsOpen, HuboVSHubo1Hubo2 } from 'module/atom/huboDetail/huboDetail';
import { useRecoilState, useRecoilValue } from 'recoil';
import { X_icon } from 'assets/index';
import { strongHubo } from 'constance/strongCandidate';
import HuboItem from 'components/hunoPromise/huboItem/index';

const HuboVSModal: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(HuboVSModalIsOpen);
  const isHubo1Hubo2 = useRecoilValue(HuboVSHubo1Hubo2);

  useEffect(() => {
    onScollBlock();
  }, [isOpen]);

  //모달창이 뜨면 스크롤을 막는 함수
  const onScollBlock = () => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return isOpen ? (
    <S.Container>
      <S.Background />
      <S.ModalContainer>
        <header>
          <h3>후보자 목록</h3>
          <img
            onClick={() => {
              setIsOpen(false);
            }}
            src={X_icon}
            alt="닫기 아이콘"
          />
        </header>
        <S.HuboListWrapper>
          {strongHubo.map((value, index) => {
            return <HuboItem data={value} isHubo1Hubo2={isHubo1Hubo2} key={index} />;
          })}
        </S.HuboListWrapper>
      </S.ModalContainer>
    </S.Container>
  ) : (
    <></>
  );
};

export default HuboVSModal;
