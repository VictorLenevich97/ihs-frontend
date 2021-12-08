import { useMemo, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Title } from 'effects/typography';
import { Container, SubContainer } from 'effects/container';
import { AlertDismissible, Select } from 'components';
import { useGetCategoriesQuery } from 'store/categories';
import { DOCUMENTS_ALL } from 'constant/routes';
import { toQuery } from 'lib/toQuery';
import { useQuery } from 'hooks/useQuery';
import { EDepartmentConstant } from 'types';
import { DocumentsFolderTree, DocumentsTable } from 'modules';

const DEFAULT_SEARCH_DEPARTMENT_VALUE = { value: 0, label: 'Все подразделения' };

const Documents = () => {
  const history = useHistory();
  const query = useQuery();

  const [isSubcategories, setIsSubcategories] = useState(true);
  const [searchDepartmentValue, setSearchDepartmentValue] = useState(
    DEFAULT_SEARCH_DEPARTMENT_VALUE,
  );
  const { data = [], isFetching, isError } = useGetCategoriesQuery();

  const departmentId = Number(query.get(EDepartmentConstant.DEPARTMENT_ID));
  const departmentTitle = query.get(EDepartmentConstant.DEPARTMENT_TITLE);

  useLayoutEffect(() => {
    if (departmentId && departmentTitle) {
      setSearchDepartmentValue({
        value: departmentId,
        label: departmentTitle,
      });
    }
  }, []);

  const transformDepartmentData = useMemo(() => {
    let result: any = [];
    result = data.map(({ title, departments }) => ({
      label: title,
      options: departments.map(department => ({ label: department.title, value: department.id })),
    }));

    result.unshift(DEFAULT_SEARCH_DEPARTMENT_VALUE);
    return result;
  }, [data]);

  const setDepartmentValueAndChangeQuery = (e: any) => {
    setSearchDepartmentValue(e);

    if (e.value === Number(EDepartmentConstant.DEPARTMENT_ROOT_ID)) {
      history.push(DOCUMENTS_ALL);
    } else {
      history.push(
        `${DOCUMENTS_ALL}?${toQuery({
          departmentId: e.value,
          departmentTitle: e.label,
        })}`,
      );
    }
  };

  return (
    <Container fullwidth>
      <Row>
        <Col sm={12} md={6} className="mb-2 mb-md-0">
          <Title size={26} lineHeight={50}>
            Архив документов:
          </Title>
        </Col>
        <Col sm={12} md={{ offset: 1, span: 5 }}>
          {isError ? (
            <AlertDismissible content="Ошибка загрузки категорий..." />
          ) : (
            <Select
              value={searchDepartmentValue}
              options={transformDepartmentData}
              minHeight={50}
              onChange={setDepartmentValueAndChangeQuery}
              isLoading={isFetching}
            />
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} lg={4} xl={3}>
          <SubContainer p={'20px'} m={'0 0 20px'}>
            <DocumentsFolderTree
              isSubcategories={isSubcategories}
              setIsSubcategories={setIsSubcategories}
              departmentValue={searchDepartmentValue.value}
            />
          </SubContainer>
        </Col>
        <Col md={12} lg={8} xl={9}>
          <DocumentsTable
            isSubcategories={isSubcategories}
            departmentId={searchDepartmentValue.value}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Documents;
