import { FC } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  dang: string;
  number: number;
  color: string;
}

const HuboList: FC<Props> = (props) => {
  const { name, dang, number, color } = props;
  const navigate = useNavigate();
  return (
    <S.HuboListContainer
      color={color}
      onClick={() => {
        navigate(`/hubo-detail?id=${number}`);
      }}
    >
      <S.HuboImageWrapper>
        <img src={require(`../../../assets/image/${name}.svg`)} alt="후보 사진" />
      </S.HuboImageWrapper>
      <S.HuboInfomationWrapper>
        <h1>{name}</h1>
        <p>{dang}</p>
        <h2>기호 {number}</h2>
      </S.HuboInfomationWrapper>
    </S.HuboListContainer>
  );
};

export default HuboList;
