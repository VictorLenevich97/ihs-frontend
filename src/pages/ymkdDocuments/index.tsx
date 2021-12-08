import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { Title } from 'effects/typography';
import { Container } from 'effects/container';
import { AlertDismissible, Select } from 'components';
import { useGetDepartmentsQuery } from 'store/department';
import { useGetYmkdLinksQuery } from 'store/ymkdDocuments';
import { YmkdDocumentsTable } from 'modules';
import { useQuery } from 'hooks/useQuery';
import { toQuery } from 'lib/toQuery';
import { EYmkdDocumentQuery, EYmkdDocumentConstant } from 'types';
import { YMKD_DOCUMENTS } from 'constant/routes';

const DEFAULT_SEARCH_DEPARTMENT_VALUE = {
  value: EYmkdDocumentConstant.ROOT_ID,
  label: 'Все подразделения',
};

const YmkdDocuments = () => {
  const history = useHistory();
  const query = useQuery();

  const departmentId = Number(query.get(EYmkdDocumentQuery.DEPARTMENT));
  const disciplineId = Number(query.get(EYmkdDocumentQuery.DISCIPLINE));

  const [searchDepartmentInput, setSearchDepartmentInput] = useState('');
  const [searchDepartmentValue, setSearchDepartmentValue] = useState(
    DEFAULT_SEARCH_DEPARTMENT_VALUE,
  );

  const { data: linksData, isError: linksIsError } = useGetYmkdLinksQuery();
  const {
    data: departmentData = [],
    isFetching: isDepartmentDataFetching,
    isError: isDepartmentDataError,
  } = useGetDepartmentsQuery(searchDepartmentInput);

  useLayoutEffect(() => {
    if (departmentData.length !== 0 && departmentId) {
      const selectedDepartment = departmentData.find(({ id }) => id === departmentId);

      setSearchDepartmentValue({
        value: Number(selectedDepartment?.id),
        label: String(selectedDepartment?.title),
      });
    }
  }, [departmentData, departmentId]);

  const filterDepartmentDataAndAddDefault = useMemo(() => {
    let result = departmentData.map(({ id, title }) => ({
      value: id || EYmkdDocumentConstant.ROOT_ID,
      label: title,
    }));

    result.unshift(DEFAULT_SEARCH_DEPARTMENT_VALUE);
    return result;
  }, [departmentData]);

  const setDepartmentValueAndChangeQuery = (e: any) => {
    setSearchDepartmentValue(e);
    history.push(
      `${YMKD_DOCUMENTS}?${toQuery({
        discipline: EYmkdDocumentConstant.ROOT_ID,
        department: e.value,
      })}`,
    );
  };

  return (
    <Container fullwidth>
      <Row>
        <Col className="d-flex justify-content-end mb-3" sm={12}>
          {linksIsError ? (
            <AlertDismissible content="Ошибка загрузки ресурсов..." />
          ) : (
            <>
              {linksData?.map(({ label, url }) => (
                <Button
                  disabled={url === ''}
                  key={label}
                  className="ml-2"
                  onClick={() => window.open(url)}
                  variant="primary"
                >
                  {label}
                </Button>
              ))}
            </>
          )}
        </Col>
        <Col sm={12} md={6} className="mb-2 mb-md-0">
          <Title size={26} lineHeight={50}>
            Учебно методические комплексы:
          </Title>
        </Col>
        <Col sm={12} md={{ offset: 1, span: 5 }}>
          {isDepartmentDataError ? (
            <AlertDismissible content="Ошибка загрузки подразделений..." />
          ) : (
            <Select
              value={searchDepartmentValue}
              options={filterDepartmentDataAndAddDefault}
              minHeight={50}
              onChange={setDepartmentValueAndChangeQuery}
              onInputChange={setSearchDepartmentInput}
              isLoading={isDepartmentDataFetching}
            />
          )}
        </Col>
      </Row>
      <YmkdDocumentsTable
        departmentId={searchDepartmentValue.value || EYmkdDocumentConstant.ROOT_ID}
        disciplineId={disciplineId || EYmkdDocumentConstant.ROOT_ID}
      />
    </Container>
  );
};

export default YmkdDocuments;
