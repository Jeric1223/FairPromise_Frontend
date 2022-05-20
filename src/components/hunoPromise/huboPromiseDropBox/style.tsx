import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const PromiseFlexBox = styled.div`
  width: 100%;
  display: flex;
`;

export const LeftSidePromiseWrapper = styled.div`
  width: 42%;
`; 

export const FieldListBox = styled.div`
  width: 16%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    height: 125px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 2rem;
      font-family: ${fonts.NanumEB};
    }
  }
`;

export const LightSidePromiseWrapper = styled.div`
  width: 42%;
`;
