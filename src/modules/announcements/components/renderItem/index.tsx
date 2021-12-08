import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Image } from 'components/image';
import { Title } from 'effects/typography';
import { IAnnouncement } from 'types';
import { parseDate } from 'lib/parseDate';
import { ANNOUNCEMENT } from 'constant/routes';

import * as S from './renderItem.styled';

const RenderItem = ({ id, imageLink, title, abbreviation, createdDate }: IAnnouncement) => {
  return (
    <S.Container>
      <Image src={imageLink} />
      <S.Content>
        <div>
          <Title>{title}</Title>
          <S.Date>{parseDate(createdDate)}</S.Date>
          <S.Text>{abbreviation}</S.Text>
        </div>
        <div>
          <Link to={`${ANNOUNCEMENT}/${id}`}>
            <Button>Показать полностью</Button>
          </Link>
        </div>
      </S.Content>
    </S.Container>
  );
};

export const MemoRenderItem = memo(RenderItem);
