/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import { throttle } from 'lodash';

const Banner: FC = () => {
  const [themeState, setThemeState] = useState('white');

  const handlerScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY >= 500) {
          setThemeState('black');
        } else if (window.scrollY < 500) {
          setThemeState('white');
        }
      }, 300),
    [themeState],
  );

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <S.BannerMainWrapper>
      <Header theme={themeState} />
    </S.BannerMainWrapper>
  );
};

export default Banner;
