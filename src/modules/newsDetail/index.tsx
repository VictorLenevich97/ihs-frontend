import { useLayoutEffect, useEffect } from 'react';
import { useGetNewsDetailQuery } from 'store/news';
import { AlertDismissible } from 'components';
import { Loader } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { ItemDetailContainer } from 'components/itemDetailContainer';

interface Props {
  newsId: number;
}

export const NewsDetail = ({ newsId }: Props) => {
  const { data, isError, isLoading } = useGetNewsDetailQuery(newsId);

  useScrollToTop(data);

  if (isError) {
    return <AlertDismissible content="Ошибка загрузки деталей новости..." />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ItemDetailContainer
      containerTitle={data?.title}
      createdDate={data?.createdDate}
      content={data?.content}
      showMoreNewsModule
    />
  );
};
