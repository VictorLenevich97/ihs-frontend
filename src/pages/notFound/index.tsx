import { Title } from 'effects/typography';

import * as S from './notFound.styled';

const NotFound = () => {
  return (
    <S.Container>
      <Title center>Упс :( Страница не существует или в разработке!</Title>
    </S.Container>
  );
};

export default NotFound;
