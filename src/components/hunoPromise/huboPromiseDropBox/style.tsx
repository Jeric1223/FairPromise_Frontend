import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const PromiseFlexBox = styled.div<{ isOpenDropBox: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: ${(props) => props.isOpenDropBox === false && 'hidden'};
  transition: 0.3s;
`;

export const PromiseWrapper = styled.div<{ isOpenDropBox: boolean }>`
  display: flex;
  height: ${(props) => (props.isOpenDropBox === true ? '160px' : '0')};
  transition: 0.5s;
`;

export const FieldListBox = styled.div`
  width: 16%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    span {
      font-size: 2rem;
      font-family: ${fonts.NanumEB};
    }
  }
`;

const SidePromiseWrapper = styled.div`
  width: 42%;
  height: 100%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`;

export const LightSidePromiseWrapper = styled(SidePromiseWrapper)``;

export const LeftSidePromiseWrapper = styled(SidePromiseWrapper)``;
