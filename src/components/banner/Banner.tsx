/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';

const Banner: FC = () => {
  const [themeState, setThemeState] = useState('white');

  const handlerScroll = useMemo(
    () =>
      throttle(() => {
        console.log(window.scrollY);
        if (window.scrollY >= 58) {
          setThemeState('black');
        } else if (window.scrollY < 58) {
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
      <S.SlideContainer>
        <Link to="/">
          <button>후보자들 공약 비교하기</button>
        </Link>
      </S.SlideContainer>
    </S.BannerMainWrapper>
  );
};

export default Banner;
