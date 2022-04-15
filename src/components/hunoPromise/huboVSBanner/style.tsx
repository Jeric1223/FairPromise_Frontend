import styled from 'styled-components';

export const BannerMainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
`;

export const LeftContainer = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => `${props.color}D9`};
`;

export const RightContainer = styled.div<{ color: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => `${props.color}D9`};
`;
