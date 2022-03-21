import { FC } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const HuboDetail: FC = () => {
  const location = useLocation();
  const query = qs.parse(location.search);

  console.log(query);

  return <h1></h1>;
};

export default HuboDetail;
