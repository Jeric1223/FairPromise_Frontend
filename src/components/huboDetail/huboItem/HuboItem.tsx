import { FC, useEffect, useState } from 'react';
import * as S from './style';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (String(data.giho) === queryData.id) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  }, [data.giho, queryData.id]);

  return (
    <S.HuboItemWrapper opacity={opacity ? 1 : 0}>
      <S.HuboImageWrapper color={data.color}>
        <img src={require(`assets/image/${data.name}.svg`)} alt="후보자 이미지" />
      </S.HuboImageWrapper>
    </S.HuboItemWrapper>
  );
};

export default HuboItem;
