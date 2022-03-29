import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../components/main/Main';
import HuboDetail from '../components/huboDetail/HuboDetail';

const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hubo-detail" element={<HuboDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
