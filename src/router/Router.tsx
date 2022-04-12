import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../components/main/Main';
import HuboDetail from '../components/huboDetail/HuboDetail';
import HuboPromise from 'components/hunoPromise/HuboPromise';

const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hubo-detail" element={<HuboDetail />} />
        <Route path="/hubo-promise" element={<HuboPromise />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
