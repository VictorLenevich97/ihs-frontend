import { useEffect, useMemo } from 'react';
import { isEmpty, head, isObject } from 'lodash';
import { useGetDepartmentDetailQuery } from 'store/department';
import { AlertDismissible } from 'components';
import { Loader } from 'components';
import { ItemDetailContainer } from 'components/itemDetailContainer';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { IRouteDepartmentsParams, EDepartmentConstant } from 'types';
import { NoDataIndication } from 'components';
import { Container } from 'effects/container';

interface IProps {
  activeTab: string | undefined;
  setActiveTab: (value?: string) => void;
}

export const DepartmentDetail = ({
  categoryLink,
  departmentLink,
  pageLink,
  departmentId,
  departmentTitle,
  activeTab,
  setActiveTab,
}: IRouteDepartmentsParams & IProps) => {
  const {
    data = [],
    isError,
    isLoading,
  } = useGetDepartmentDetailQuery({ categoryLink, departmentLink });

  const tabsContent = useMemo(() => {
    const result = data;
    return result.concat({
      title: 'Документы',
      link: EDepartmentConstant.DOCUMENT,
      department: { id: departmentId, title: departmentTitle || '', link: '' },
    });
  }, [data]);

  useEffect(() => {
    if (!isEmpty(pageLink)) {
      return setActiveTab(pageLink);
    } else if (!isEmpty(tabsContent)) {
      return setActiveTab(head(tabsContent)?.link);
    }

    return () => setActiveTab('');
  }, [tabsContent, pageLink]);

  useScrollToTop(activeTab);

  if (isError) {
    return <AlertDismissible content="Ошибка загрузки отдела..." />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {departmentId ? (
        <ItemDetailContainer
          containerTitle={data[0]?.department?.title || departmentTitle}
          showTabs
          tabsContent={tabsContent}
          categoryLink={categoryLink}
          departmentLink={departmentLink}
          activeTab={activeTab}
          departmentId={
            isObject(tabsContent[0].department)
              ? tabsContent[0].department.id
              : tabsContent[0].department
          }
        />
      ) : (
        <Container>
          <NoDataIndication content="Информация на странице отсутствует..." />
        </Container>
      )}
    </>
  );
};
