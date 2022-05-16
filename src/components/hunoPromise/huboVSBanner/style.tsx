import styled from 'styled-components';

export const BannerMainContainer = styled.div<{ reverse: boolean }>`
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: ${(props) => (props.reverse === true ? 'row-reverse' : 'row')};

  & > img {
    width: 250px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-52%, -27%);
  }
`;
