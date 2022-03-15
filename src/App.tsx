import { FC } from "react";
import Router from "./router/Router";
import { RecoilRoot } from "recoil";

const App: FC = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
