import { FC, useEffect, useState } from 'react';
import * as S from './style';
import QueryString from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { HuboChangeModalIsOpen } from 'module/atom/huboDetail/huboDetail';
import { useSetRecoilState } from 'recoil';

interface Props {
  data: {
    huboid: string;
    giho: number;
    name: string;
    jd_name: string;
    color: string;
    slogan: string;
    report: string;
  };
}

const HuboItem: FC<Props> = (props) => {
  const { data } = props;
  const [opacity, setOpacity] = useState(false);
  const setIsOpen = useSetRecoilState(HuboChangeModalIsOpen);

  const location = useLocation();
  const navigate = useNavigate();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (String(data.giho) === queryData.id) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  }, [data.giho, queryData.id]);

  return (
    <S.HuboItemWrapper
      onClick={() => {
        navigate(`/hubo-detail?id=${data.giho}`);
        setIsOpen(false);
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

  {
    /* <button
  style={{ width: '100px', height: '100px' }}
  onClick={() => {
    setSearchParams({ hubo_2: '100', hubo_1: `${hubo_1}` });
  }}
  ></button> */
  }
};

export default HuboItem;
