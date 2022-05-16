/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from 'components/header/Header';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';

const Banner: FC = () => {
  const [themeState, setThemeState] = useState('white');

  const handlerScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY >= 30) {
          setThemeState('black');
        } else if (window.scrollY < 30) {
          setThemeState('white');
        }
      }, 200),
    [themeState],
  );

  useEffect(() => {
    handlerScroll();
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <S.BannerMainWrapper>
      <Header theme={themeState} zIndex={10} />
      <S.SlideContainer>
        <Link to="/hubo-promise?hubo_1=1&hubo_2=2">
          <button>후보자들 공약 비교하기</button>
        </Link>
      </S.SlideContainer>
    </S.BannerMainWrapper>
  );
};

export default Banner;
