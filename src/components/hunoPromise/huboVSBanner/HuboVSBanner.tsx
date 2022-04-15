import { FC, useEffect } from 'react';
import * as S from './style';
import HuboVSContainer from '../huboVSContainer/HuboVSContainer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { VS } from 'assets/index';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const hubo_1 = searchParams.get('hubo_1');
  const hubo_2 = searchParams.get('hubo_2');

  useEffect(() => {
    navigate('/hubo-promise?hubo_1=1&hubo_2=2');
    console.log(hubo_1, hubo_2);
  }, [navigate]);

  return (
    <S.BannerMainContainer>
      <HuboVSContainer color={'#3F69FF'} giho={hubo_1} direction={'left'} />
      <HuboVSContainer color={'#E61E2B'} giho={hubo_2} direction={'right'} />
      <img src={VS} alt="VS_image" />
    </S.BannerMainContainer>
  );
};

export default HuboVSBanner;
