import { FC } from 'react';
import styled from 'styled-components';
import { AarowICON } from 'assets/index';
import { fonts } from 'styles/theme';

interface Props {}

const DropBoxTitle: FC<Props> = () => {
  return (
    <DropBoxTitleWrapper>
      <div className="numBox">
        <span>1</span>
      </div>
      <h1>타이틀</h1>
      <img
        src={AarowICON}
        alt="화살표이미지"
        onClick={() => {
          console.log(`dropBox click`);
        }}
      />
    </DropBoxTitleWrapper>
  );
};

const DropBoxTitleWrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 0 30px;
  align-items: center;
  border-top: solid 3px #00000065;
  border-bottom: solid 3px #00000065;

  .numBox {
    width: 32px;
    height: 32px;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.NanumR};
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    font-family: ${fonts.NanumEB};
    font-size: 26px;
    color: #000000;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export default DropBoxTitle;
