import { memo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import LogoArmy from 'static/images/logo_army.png';
import { Paragraph, Text } from 'effects/typography';
import { Figure } from 'effects/figure';
import { Title } from 'effects/typography';
import { NEWS } from 'constant/routes';
import { parseDate } from 'lib/parseDate';
import { INews } from 'types';

import * as S from './cardList.styled';

const Card = ({ id, newsFileLinks, title, abbreviation, createdDate }: INews) => {
  const isEmptyNews = isEmpty(title) && isEmpty(abbreviation) && isEmpty(newsFileLinks);

  return (
    <>
      {isEmptyNews ? (
        <S.Container>
          <S.DefaultLogoWrapper>
            <Figure img={LogoArmy} width={150} height={150} />
          </S.DefaultLogoWrapper>
          <S.Content>
            <Title color="#fff" size={14} mb={20}>
              «С чего начинается Родина?» <Text size={14}>-</Text>
            </Title>
            <Paragraph color="#fff" size={12} lineHeight={20} lineClamp={5}>
              Любовь к Родине – одно из самых прекрасных и благородных чувств человека. Она не
              зависит от богатств или благополучия Отечества, ведь человек, истинно любящий свою
              страну, гордится ее достижениями, переживает за неудачи, стремится к ее процветанию. И
              зарождается это чувство патриотизма, безусловно, в школьные годы: на уроках языка и
              литературы, истории и географии, труда и допризывной подготовки. Немалую роль в
              формировании в детской душе любви к родине, играют и учебно-полевые сборы, которые
              нередко проводятся с участием военнослужащих, либо на территории воинских частей и
              соединений.
            </Paragraph>
          </S.Content>
        </S.Container>
      ) : (
        <Link to={`${NEWS}/${id}`}>
          <S.Container>
            {isEmpty(newsFileLinks) ? (
              <S.DefaultLogoWrapper>
                <Figure img={LogoArmy} width={150} height={150} />
              </S.DefaultLogoWrapper>
            ) : (
              <Figure img={newsFileLinks[0]} width={330} height={160} />
            )}
            <S.Content>
              <div id="card-header">
                <Title color="#fff" size={14}>
                  {title}
                </Title>
                <Text size={14}>{parseDate(createdDate)}</Text>
              </div>
              <Paragraph color="#fff" size={12} lineHeight={20} lineClamp={5}>
                {abbreviation ? abbreviation : 'Описание отсутствует...'}
              </Paragraph>
            </S.Content>
          </S.Container>
        </Link>
      )}
    </>
  );
};

export const CardList = memo(Card);
