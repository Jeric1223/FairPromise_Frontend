import styled from 'styled-components';
import { fonts } from 'styles/theme';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  width: 900px;
  height: 570px;
  border-radius: 20px;
  background-color: #f1f1f1;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  & > header {
    box-sizing: border-box;
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 70px;

    h3 {
      font-size: 24px;
      font-family: ${fonts.NanumR};
    }

    img {
      cursor: pointer;
    }
  }
`;

export const HuboListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 60px;
  overflow-y: scroll;
  justify-content: center;
  margin-bottom: 20px;
`;
