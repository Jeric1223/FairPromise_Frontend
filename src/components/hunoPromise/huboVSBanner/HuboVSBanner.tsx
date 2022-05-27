import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VS } from 'assets/index';
import * as S from './style';
import HuboVSModal from 'components/hunoPromise/huboVSModal/index';
import { useRecoilValue } from 'recoil';
import { IsChangeHubo } from 'module/atom/huboDetail/huboDetail';
import LeftVSContainer from '../huboVSContainer/LeftVSContainer';
import RightVSContainer from '../huboVSContainer/RightVSContainer';

interface Props {}

const HuboVSBanner: FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reverse, setReverse] = useState(false);
  const isChangeHubo = useRecoilValue(IsChangeHubo);

  let hubo_1 = searchParams.get('hubo_1');
  let hubo_2 = searchParams.get('hubo_2');

  useEffect(() => {
    if (hubo_1 > hubo_2) {
      setReverse(true);
    }
  }, [hubo_1, hubo_2, searchParams, isChangeHubo]);

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
