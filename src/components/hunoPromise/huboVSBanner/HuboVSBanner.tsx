import { FC, useEffect, useState } from 'react';
import HuboVSContainer from '../huboVSContainer/HuboVSContainer';
import { useSearchParams } from 'react-router-dom';
import { VS } from 'assets/index';
import { strongHubo } from 'constance/strongCandidate';
import * as S from './style';
import HuboVSModal from 'components/hunoPromise/huboVSModal/index';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reverse, setReverse] = useState(false);

  const hubo_1 = searchParams.get('hubo_1');
  const hubo_2 = searchParams.get('hubo_2');

  useEffect(() => {
    console.log(hubo_1, hubo_2);
    if (hubo_1 > hubo_2) {
      console.log('reverse');
      setReverse(true);
    }
  }, [hubo_1, hubo_2, searchParams]);

  return (
    <>
      <HuboVSModal />
      <S.BannerMainContainer reverse={reverse}>
        {strongHubo.map((item, index) => {
          if (String(item.giho) === hubo_1) {
            return <HuboVSContainer color={item.color} giho={hubo_1} direction={'left'} key={index} />;
          } else if (String(item.giho) === hubo_2) {
            return <HuboVSContainer color={item.color} giho={hubo_2} direction={'right'} key={index} />;
          } else {
            return <></>;
          }
        })}
        <img src={VS} alt="VS_image" />
      </S.BannerMainContainer>
    </>
  );
};

export default HuboVSBanner;
