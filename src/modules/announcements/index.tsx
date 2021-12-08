import { useState } from 'react';
import { isEmpty } from 'lodash';
import { useGetAnnouncementsQuery } from 'store/announcement';
import { takeRight } from 'lodash';
import { Carousel } from 'react-responsive-carousel';
import { MemoRenderItem } from './components/renderItem';
import { AlertDismissible } from 'components';
import { Container } from 'effects/container';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './announcements.styled';

const MAX_ANNOUNCEMENTS_DOTS = 5; // Take 5 last value in the array
const DEFAULT_CAROUSEL_TIMEOUT = 3000; // Milliseconds
const CONVERT_CONSTANT = 1000; // Convert to milliseconds constant

export const Announcements = () => {
  const [carouselTimeout, setCarouselTimeout] = useState(DEFAULT_CAROUSEL_TIMEOUT);
  const { data = [], isError } = useGetAnnouncementsQuery();

  const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string,
  ): React.ReactNode => {
    return isSelected ? (
      <S.SelectedListItem
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    ) : (
      <S.ListItem
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
      />
    );
  };

  return (
    <>
      {isError ? (
        <AlertDismissible content="Ошибка загрузки анонсов..." />
      ) : (
        <>
          {!isEmpty(data) && (
            <Container>
              <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                renderIndicator={renderIndicator}
                centerMode={false}
                dynamicHeight={false}
                preventMovementUntilSwipeScrollTolerance={false}
                autoFocus
                autoPlay
                infiniteLoop
                useKeyboardArrows
                interval={carouselTimeout}
                transitionTime={CONVERT_CONSTANT}
                onChange={(_, item: any) =>
                  setCarouselTimeout(
                    item.props.showTime
                      ? Number(item.props.showTime) * CONVERT_CONSTANT
                      : DEFAULT_CAROUSEL_TIMEOUT,
                  )
                }
              >
                {[...takeRight(data, MAX_ANNOUNCEMENTS_DOTS)].map(
                  ({ id, imageLink, title, abbreviation, createdDate, showTime }) => (
                    <MemoRenderItem
                      key={id}
                      id={id}
                      imageLink={imageLink}
                      title={title}
                      abbreviation={abbreviation}
                      createdDate={createdDate}
                      showTime={showTime}
                    />
                  ),
                )}
              </Carousel>
            </Container>
          )}
        </>
      )}
    </>
  );
};
