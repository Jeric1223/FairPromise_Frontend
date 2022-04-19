import { FC, useEffect } from 'react';
import Header from 'components/header/Header';
import HuboVSBanner from './huboVSBanner/HuboVSBanner';
import { Request } from 'util/api/huboPromiseApi';

const HuboPromise: FC = () => {
  useEffect(() => {
    Request('/hubolist')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header theme="black" zIndex={100} />
      <HuboVSBanner />
    </>
  );
};

export default HuboPromise;
