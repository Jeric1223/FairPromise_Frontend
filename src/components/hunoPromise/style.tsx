import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const TextBox = styled.div`
  width: 100%;
  height: 4.25rem;
  background-color: #c4c4c436;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${fonts.NanumEB};
    font-size: 2rem;
  }
`;
