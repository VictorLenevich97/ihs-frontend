import { useGetAnnouncementDetailQuery } from 'store/announcement';
import { AlertDismissible } from 'components';
import { Loader } from 'components';
import { ItemDetailContainer } from 'components/itemDetailContainer';
import { useScrollToTop } from 'hooks/useScrollToTop';

interface Props {
  announcementId: number;
}

export const AnnouncementDetail = ({ announcementId }: Props) => {
  const { data, isError, isLoading } = useGetAnnouncementDetailQuery(announcementId);

  useScrollToTop(data);

  if (isError) {
    return <AlertDismissible content="Ошибка загрузки деталей анонса..." />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ItemDetailContainer
      containerTitle={data?.title}
      createdDate={data?.createdDate}
      content={data?.content}
    />
  );
};
