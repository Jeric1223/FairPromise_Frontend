import styled from 'styled-components';

export const HuboItemWrapper = styled.div<{ opacity: number }>`
  width: 142px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.opacity === 1 ? '1' : '0.5')};
  flex-wrap: wrap;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const HuboImageWrapper = styled.div<{ color: string }>`
  width: 100%;
  height: 167px;
  border-radius: 27px;
  background-color: ${(props) => `${props.color}D9`};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 115px;
    height: 160px;
    border-radius: 10px;
  }
`;
