/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import * as S from './style';
import { HuboChangeModalIsOpen } from 'module/atom/huboDetail/huboDetail';
import { useRecoilState } from 'recoil';
import { X_icon } from 'assets/index';
import { huboList } from 'constance/data';
import HuboItem from 'components/huboDetail/huboItem/HuboItem';

const HuboChangeModal: FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(HuboChangeModalIsOpen);

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
      <S.Background
        onClick={() => {
          setIsOpen(false);
        }}
      />
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
          {huboList.map((value, index) => {
            return <HuboItem data={value} key={index} />;
          })}
        </S.HuboListWrapper>
      </S.ModalContainer>
    </S.Container>
  ) : (
    <></>
  );
};

export default HuboChangeModal;
