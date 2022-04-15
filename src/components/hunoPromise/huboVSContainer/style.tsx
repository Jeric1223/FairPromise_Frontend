import styled from 'styled-components';

export const HuboBannerContainer = styled.div<{ color: string; direction: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => `${props.color}D9`};
`;
