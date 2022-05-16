import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const HuboItemWrapper = styled.div<{ opacity: number; color: string }>`
  width: 142px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  transition: 0.3s;
  align-items: center;

  opacity: ${(props) => (props.opacity === 1 ? '1' : '0.6')};

  &:hover {
    opacity: 1;
  }

  & > span {
    font-family: ${fonts.NanumB};
    font-size: 18px;
    margin-top: 10px;

    color: ${(props) => `${props.color}D9`};
  }

  & > p {
    font-family: ${fonts.NanumEB};
    font-size: 20px;
    margin-top: 4px;
  }
`;

export const HuboImageWrapper = styled.div<{ color: string }>`
  width: 100%;
  height: 167px;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

  background-color: ${(props) => `${props.color}D9`};

  img {
    object-fit: cover;
    width: 115px;
    height: 160px;
    border-radius: 10px;
  }
`;
