import styled from 'styled-components';

export const BannerMainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  position: relative;

  & > img {
    width: 250px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-52%, -27%);
  }
`;
