import { useState } from 'react';
import { useGetNewsQuery } from 'store/news';
import { Col } from 'react-bootstrap';
import { Title } from 'effects/typography';
import { CardList } from './components/cardList';
import { CardTile } from './components/cardTile';
import { Loader, AlertDismissible, NoDataIndication } from 'components';
import { isEmpty } from 'lodash';

import { ReactComponent as IconTile } from 'static/icons/tile.svg';
import { ReactComponent as IconList } from 'static/icons/list.svg';

import * as S from './newsList.styled';

const SHOW_MORE_NEWS_LINK = 6;

enum ListPosition {
  TILE = 'TILE',
  LIST = 'LIST',
}

const tileColumns = {
  xl: 3,
  lg: 2,
  md: 2,
  sm: 1,
};

const listColumns = {
  xl: 1,
  lg: 1,
  md: 1,
  sm: 1,
};

interface Props {
  viewMoreNews?: boolean;
  setViewMoreNews?: (value: boolean) => void;
  title?: string;
  viewActionButtons?: boolean;
}

export const NewsList = ({
  viewMoreNews = false,
  setViewMoreNews = () => {},
  title = 'Последние новости',
  viewActionButtons = true,
}: Props) => {
  const { data = [], isError, isLoading } = useGetNewsQuery();

  const [listPosition, setListPosition] = useState<string>(ListPosition.TILE);

  if (isLoading) {
    return (
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    );
  }

  return (
    <>
      {isError ? (
        <AlertDismissible content="Ошибка загрузки новостей..." />
      ) : (
        <S.NewsContainer>
          <S.TitleRow>
            <Title>{title}</Title>
            {viewActionButtons && (
              <div>
                <S.RadionButton
                  active={listPosition === ListPosition.TILE}
                  onClick={() => setListPosition(ListPosition.TILE)}
                >
                  <IconTile />
                </S.RadionButton>
                <S.RadionButton
                  active={listPosition === ListPosition.LIST}
                  onClick={() => setListPosition(ListPosition.LIST)}
                >
                  <IconList />
                </S.RadionButton>
              </div>
            )}
          </S.TitleRow>

          {isEmpty(data) ? (
            <NoDataIndication content="Список новостей пуст..." />
          ) : (
            <S.ListRow
              {...(listPosition === ListPosition.TILE ? { ...tileColumns } : { ...listColumns })}
            >
              {data.map(({ id, title, newsFileLinks, abbreviation, createdDate }) => (
                <Col key={id}>
                  {listPosition === ListPosition.TILE ? (
                    <CardTile
                      id={id}
                      newsFileLinks={newsFileLinks}
                      title={title}
                      abbreviation={abbreviation}
                    />
                  ) : (
                    <CardList
                      id={id}
                      title={title}
                      newsFileLinks={newsFileLinks}
                      abbreviation={abbreviation}
                      createdDate={createdDate}
                    />
                  )}
                </Col>
              ))}
            </S.ListRow>
          )}

          {/* {data.length > SHOW_MORE_NEWS_LINK && (
            <S.MoreNews onClick={() => setViewMoreNews(!viewMoreNews)}>
              {viewMoreNews ? 'Больше новостей >' : 'Меньше новостей >'}
            </S.MoreNews>
          )} */}
        </S.NewsContainer>
      )}
    </>
  );
};
