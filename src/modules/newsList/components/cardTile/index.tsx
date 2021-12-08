import { memo } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import LogoArmy from 'static/images/logo_army.png';
import { Paragraph, Text } from 'effects/typography';
import { NEWS } from 'constant/routes';
import { INews } from 'types';
import { Figure } from 'effects/figure';

import { Container } from './cardTile.styled';

const Card = ({ id, newsFileLinks, title, abbreviation }: INews) => {
  const isEmptyNews = isEmpty(title) && isEmpty(abbreviation) && isEmpty(newsFileLinks);

  return (
    <>
      {isEmptyNews ? (
        <Container>
          <Figure id="logo_army" img={LogoArmy} width={150} height={150} />
          <Text center id="title" color="#fff" size={14}>
            {title ? title : '«С чего начинается Родина?»'}
          </Text>
        </Container>
      ) : (
        <Link to={`${NEWS}/${id}`}>
          <Container img={newsFileLinks[0]}>
            <Text center id="title" color="#fff" size={14}>
              {title ? title : '«С чего начинается Родина?»'}
            </Text>
            <Paragraph id="content" size={14} color="#fff" lineClamp={7} lineHeight={20} center>
              {abbreviation ? abbreviation : 'Описание отсутствует...'}
            </Paragraph>
          </Container>
        </Link>
      )}
    </>
  );
};

export const CardTile = memo(Card);
