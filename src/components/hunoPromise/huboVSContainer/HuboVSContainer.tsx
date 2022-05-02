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
              return (
                <>
                  <S.ImageWrapper direction="left">
                    <img src={require(`assets/image/${item.name}.svg`)} alt="후보자사진" />
                    <button>후보 변경하기</button>
                  </S.ImageWrapper>
                  <S.TextContainer>
                    <h1>{item.giho}</h1>
                    <div>
                      <h3>{item.jd_name}</h3>
                      <h2>{item.name}</h2>
                    </div>
                  </S.TextContainer>
                </>
              );
            } else {
              return;
            }
          })}
        </S.HuboBannerContainer>
      ) : (
        <S.HuboBannerContainer direction="right" color={color}>
          {huboList.map((item, index) => {
            if (String(item.giho) === giho) {
              return (
                <>
                  <S.TextContainer>
                    <h1>{item.giho}</h1>
                    <div>
                      <h3>{item.jd_name}</h3>
                      <h2>{item.name}</h2>
                    </div>
                  </S.TextContainer>
                  <S.ImageWrapper direction="right">
                    <img src={require(`assets/image/${item.name}.svg`)} alt="후보자사진" />
                    <button>후보 변경하기</button>
                  </S.ImageWrapper>
                </>
              );
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
