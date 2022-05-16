import { FC, useEffect, useState } from 'react';
import * as S from './style';
import { useSearchParams } from 'react-router-dom';
import { HuboVSModalIsOpen } from 'module/atom/huboDetail/huboDetail';
import { useSetRecoilState } from 'recoil';

interface Props {
  data: any;
  isHubo1Hubo2: number;
}

const HuboItem: FC<Props> = (props) => {
  const { data, isHubo1Hubo2 } = props;
  const [opacity, setOpacity] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const setIsOpen = useSetRecoilState(HuboVSModalIsOpen);

  const hubo_1 = searchParams.get('hubo_1');
  const hubo_2 = searchParams.get('hubo_2');

  useEffect(() => {
    if (isHubo1Hubo2 === 1) {
      if (hubo_1 === String(data.giho)) {
        setOpacity(true);
      } else {
        setOpacity(false);
      }
    } else if (isHubo1Hubo2 === 2) {
      if (hubo_2 === String(data.giho)) {
        setOpacity(true);
      } else {
        setOpacity(false);
      }
    }
  }, [data.giho, hubo_1, hubo_2, isHubo1Hubo2]);

  return (
    <S.HuboItemWrapper
      onClick={() => {
        if (String(data.giho) === hubo_1 || String(data.giho) === hubo_2) {
          alert(`다른 후보를 골라주세요`);
        } else {
          isHubo1Hubo2 === 1
            ? setSearchParams({ hubo_2: `${hubo_2}`, hubo_1: `${data.giho}` })
            : setSearchParams({ hubo_2: `${data.giho}`, hubo_1: `${hubo_1}` });
          setIsOpen(false);
        }
      }}
      opacity={opacity ? 1 : 0}
      color={data.color}
    >
      <S.HuboImageWrapper color={data.color}>
        <img src={require(`assets/image/${data.name}.svg`)} alt="후보자 이미지" />
      </S.HuboImageWrapper>
      <span>{data.jd_name}</span>
      <p>{data.name}</p>
    </S.HuboItemWrapper>
  );
};

export default HuboItem;
