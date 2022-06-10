import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const PromiseFlexBox = styled.div<{ isOpenDropBox: boolean }>`
  width: 100%;
  height: ${({ isOpenDropBox }) => (isOpenDropBox ? 'auto' : 0)};
  display: flex;
  flex-direction: column;
  overflow: ${(props) => props.isOpenDropBox === false && 'hidden'};
`;

export const PromiseWrapper = styled.div<{ isOpenDropBox: boolean }>`
  display: flex;
  transition: 0.5s;
  border-bottom: 1px solid;
  min-height: 160px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    padding: 30px 0;

    span {
      font-size: 2rem;
      font-family: ${fonts.NanumEB};
    }
  }
`;

const SidePromiseWrapper = styled.div`
  width: 42%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 30px 0;

  & > p {
    font-family: ${fonts.NanumEB};
    font-size: 20px;
    padding: 0 0 5px 20px;
  }
`;

export const LightSidePromiseWrapper = styled(SidePromiseWrapper)``;

export const LeftSidePromiseWrapper = styled(SidePromiseWrapper)``;
