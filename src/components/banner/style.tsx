import styled from 'styled-components';
import { Banner } from '../../assets/index';

export const BannerMainWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
`;
