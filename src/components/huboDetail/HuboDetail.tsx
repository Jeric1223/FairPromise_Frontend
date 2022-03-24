import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import SloganBanner from './sloganBanner/SloganBanner';
import { huboList } from '../../constance/data';
import QueryString from 'qs';

const HuboDetail: FC = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  console.log(queryData);

  return (
    <>
      <Header theme={'black'}></Header>
      {huboList.map((value, index) => {
        if (String(value.giho) === queryData.id) {
          return <SloganBanner key={index} huboinfo={value} />;
        }
      })}
    </>
  );
};

export default HuboDetail;
