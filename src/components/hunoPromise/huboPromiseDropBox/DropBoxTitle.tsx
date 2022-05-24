import { FC } from 'react';
import styled from 'styled-components';
import { AarowICON } from 'assets/index';
import { fonts } from 'styles/theme';

interface Props {
  setIsOpenDropBox: (value: boolean) => void;
  isOpenDropBox: boolean;
  title: string;
  index: number;
}

const DropBoxTitle: FC<Props> = ({ setIsOpenDropBox, isOpenDropBox, title, index }) => {
  return (
    <DropBoxTitleWrapper isOpenDropBox={isOpenDropBox}>
      <div className="numBox">
        <span>{index}</span>
      </div>
      <h1>{title}</h1>
      <img
        src={AarowICON}
        alt="화살표이미지"
        onClick={() => {
          if (isOpenDropBox === true) {
            setIsOpenDropBox(false);
          } else {
            setIsOpenDropBox(true);
          }
        }}
      />
    </DropBoxTitleWrapper>
  );
};

const DropBoxTitleWrapper = styled.header<{ isOpenDropBox: boolean }>`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 0 30px;
  align-items: center;

  &:nth-of-type(1) {
    border-top: solid 2px #00000065;
  }
  border-bottom: solid 2px #00000065;

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
    transition: 0.2s;
    transform: ${(props) => props.isOpenDropBox === true && 'rotate(0.5turn)'};
  }
`;

export default DropBoxTitle;
