import { FC } from 'react';
import Router from './router/Router';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';

const App: FC = (): JSX.Element => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
};

export default App;
