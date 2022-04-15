import { FC } from 'react';
import * as S from './style';
import { huboList } from 'constance/data';

interface Props {
  color: string;
  giho: string | null;
  direction: string;
}
{
  /* <button
style={{ width: '100px', height: '100px' }}
onClick={() => {
  setSearchParams({ hubo_2: '100', hubo_1: `${hubo_1}` });
}}
></button> */
}

const HuboVSContainer: FC<Props> = ({ color, giho, direction }) => {
  return (
    <>
      {direction === 'left' ? (
        <S.HuboBannerContainer direction="left" color={color}>
          {huboList.map((item, index) => {
            if (String(item.giho) === giho) {
              return;
            } else {
              return;
            }
          })}
        </S.HuboBannerContainer>
      ) : (
        <S.HuboBannerContainer direction="right" color={color}>
          {huboList.map((item, index) => {
            if (String(item.giho) === giho) {
              return;
            } else {
              return;
            }
          })}
        </S.HuboBannerContainer>
      )}
    </>
  );
};

export default HuboVSContainer;
