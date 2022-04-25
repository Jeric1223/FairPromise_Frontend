import styled from 'styled-components';
import { fonts } from 'styles/theme';

interface StyleProps {
  color: string;
}

export const TextContainer = styled.div`
  display: flex;
  width: 1250px;
  height: 106px;
  border-bottom: 2px solid black;
  font-family: ${fonts.NanumEB};
  font-size: 30px;
  justify-content: center;
  align-items: center;
`;

export const HuboListFlexContainer = styled.div`
  margin-top: 50px;
  width: 1250px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 100px;
  margin-bottom: 50px;
`;

export const HuboListContainer = styled.div<StyleProps>`
  width: 340px;
  height: 200px;
  border-radius: 6px;
  border: 5px solid ${(props) => props.color};
  display: flex;
  cursor: pointer;
`;

export const HuboImageWrapper = styled.div`
  width: 152px;
  height: 200px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HuboInfomationWrapper = styled.div`
  width: 188px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;

  & > h1 {
    font-family: ${fonts.NanumEB};
    font-size: 52px;
  }

  & > p {
    font-family: ${fonts.NanumB};
    font-size: 18px;
    padding-top: 12px;
  }

  & > h2 {
    font-family: ${fonts.NanumEB};
    font-size: 44px;
    padding-top: 18px;
  }
`;
