import { FC, useEffect, useState } from 'react';
import HuboVSContainer from '../huboVSContainer/HuboVSContainer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { VS } from 'assets/index';
import { strongHubo } from 'constance/strongCandidate';
import * as S from './style';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [reverse, setReverse] = useState(false);

  const hubo_1 = searchParams.get('hubo_1');
  const hubo_2 = searchParams.get('hubo_2');

  useEffect(() => {
    console.log(hubo_1, hubo_2);
    if (hubo_1 > hubo_2) {
      setReverse(true);
    }
  }, [hubo_1, hubo_2, navigate]);

  return (
    <S.BannerMainContainer reverse={reverse}>
      {strongHubo.map((item, index) => {
        if (String(item.giho) === hubo_1) {
          return <HuboVSContainer color={item.color} giho={hubo_1} direction={'left'} />;
        } else if (String(item.giho) === hubo_2) {
          return <HuboVSContainer color={item.color} giho={hubo_2} direction={'right'} />;
        }
      })}
      <img src={VS} alt="VS_image" />
    </S.BannerMainContainer>
  );
};

export default HuboVSBanner;
