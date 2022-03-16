import { FC } from 'react';
import * as S from './style';
import { LogoSvg } from '../../assets';

const Header: FC = () => {
  return (
    <S.Header>
      <img src={LogoSvg} alt="공정한 공약 로고" />
    </S.Header>
  );
};

export default Header;
