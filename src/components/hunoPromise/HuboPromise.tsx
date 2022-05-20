import { FC, useState, useMemo, useEffect } from 'react';
import Header from 'components/header/Header';
import HuboVSBanner from './huboVSBanner/HuboVSBanner';
import HuboPromiseDropBox from './huboPromiseDropBox/HuboPromiseDropBox';
import { throttle } from 'lodash';
import * as S from './style';

const HuboPromise: FC = () => {
  const [zIndex, setZIndex] = useState(10);

  const handlerScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY >= 10) {
          setZIndex(101);
        } else if (window.scrollY < 10) {
          setZIndex(10);
        }
      }, 200),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <>
      <Header theme="black" zIndex={zIndex} />
      <HuboVSBanner />
      <S.TextBox>
        <h1>공약 1:1 비교</h1>
      </S.TextBox>
      <S.PromiseFlexBox>
        <HuboPromiseDropBox />
      </S.PromiseFlexBox>
    </>
  );
};

export default HuboPromise;
