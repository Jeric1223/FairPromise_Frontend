import { FC } from 'react';
import Header from 'components/header/Header';
import HuboVSBanner from './huboVSBanner/HuboVSBanner';

const HuboPromise: FC = () => {
  return (
    <>
      <Header theme="black" zIndex={100} />
      <HuboVSBanner />
    </>
  );
};

export default HuboPromise;
