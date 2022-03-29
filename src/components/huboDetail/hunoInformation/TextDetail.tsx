import { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
  text: string;
}

const TextDetail: FC<Props> = (props) => {
  const { title, text } = props;
  return (
    <S.TextDetail>
      <h1>{title}</h1>
      <p>{text}</p>
    </S.TextDetail>
  );
};

export default TextDetail;
