import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VS } from 'assets/index';
import * as S from './style';
import HuboVSModal from 'components/hunoPromise/huboVSModal/index';
import LeftVSContainer from '../huboVSContainer/LeftVSContainer';
import RightVSContainer from '../huboVSContainer/RightVSContainer';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let hubo_1 = searchParams.get('hubo_1');
  let hubo_2 = searchParams.get('hubo_2');

  return (
    <>
      <HuboVSModal />
      <S.BannerMainContainer>
        <LeftVSContainer giho={hubo_1} />
        <RightVSContainer giho={hubo_2} />
        <img src={VS} alt="VS_image" />
      </S.BannerMainContainer>
    </>
  );
};

export default HuboVSBanner;
