import { FC } from 'react';
import * as S from './style';
import { LogoSvg, LogoBlackSvg } from 'assets/index';
import { Link } from 'react-router-dom';

interface Props {
  theme: string;
  zIndex: number;
}

const Header: FC<Props> = (props) => {
  const { theme, zIndex } = props;

  return (
    <S.HeaderParentContainer zIndex={zIndex}>
      <S.Header theme={theme}>
        {theme === 'white' ? (
          <Link to="/">
            <img src={LogoSvg} alt="공정한 공약 로고" />
          </Link>
        ) : (
          <Link to="/">
            <img src={LogoBlackSvg} alt="공정한 공약 로고" />
          </Link>
        )}
        <Link to="/hubo-detail?id=1">
          <p>후보자 정보보기</p>
        </Link>
        <Link to="/hubo-promise?hubo_1=1&hubo_2=2">
          <p>후보자들 공약 비교하기</p>
        </Link>
      </S.Header>
    </S.HeaderParentContainer>
  );
};

export default Header;
