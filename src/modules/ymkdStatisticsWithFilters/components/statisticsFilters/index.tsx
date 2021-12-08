import { useState, useMemo } from 'react';
import { head } from 'lodash';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useGetDepartmentsAllFacultyQuery } from 'store/department';
import { DatePicker, Select, AlertDismissible } from 'components';
import { EnumReportType, EnumShowReport, EnumSelectBy } from 'types';
import { addYears } from 'date-fns';

import * as S from './statisticsFilters.styled';

const DEFAULT_SEARCH_DEPARTMENT_VALUE = { value: 0, label: 'Все подразделения' };

const REPORT_TYPES = [
  { value: EnumReportType.SIMPLE, label: 'Простой' },
  { value: EnumReportType.DETAILS, label: 'Подробный' },
];

const SHOW_REPORT = [
  { value: EnumShowReport.ACADEMY, label: 'За академию' },
  { value: EnumShowReport.DEPARTMENT, label: 'За кафедру' },
];

const SELECT_BY = [
  { value: EnumSelectBy.REGISTRATION, label: 'Дату регистрации' },
  { value: EnumSelectBy.UPDATION, label: 'Дату обновления' },
];

interface Props {
  submitFiltersForm: (values: any) => void;
}

export const StatisticsFilters = ({ submitFiltersForm }: Props) => {
  const [fromDate, setFromDate] = useState(addYears(new Date(), -1));
  const [toDate, setToDate] = useState(new Date());
  const [reportType, setReportType] = useState<any>(head(REPORT_TYPES));
  const [showReport, setShowReport] = useState<any>(head(SHOW_REPORT));
  const [selectBy, setSelectBy] = useState<any>(head(SELECT_BY));
  const [departmentId, setDepartmentId] = useState<any>({
    label: '',
    value: null,
  });

  const {
    data = [],
    isLoading,
    isError,
  } = useGetDepartmentsAllFacultyQuery(undefined, {
    skip: showReport.value !== EnumShowReport.DEPARTMENT,
  });

  const transformDepartmentData = useMemo(() => {
    const result = data.map(({ id, title }) => ({ value: id, label: title }));
    result.unshift(DEFAULT_SEARCH_DEPARTMENT_VALUE);
    return result;
  }, [data]);

  return (
    <div>
      <S.FormFilters>
        <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
          <Form.Label column sm="12" md="2">
            <S.LabelText>Вид отчета</S.LabelText>
          </Form.Label>
          <Col sm="12" md="4">
            <Select
              minHeight={50}
              value={reportType}
              options={REPORT_TYPES}
              onChange={(value: any) => {
                setReportType(value);
              }}
            />
          </Col>
          <Form.Label column sm="12" md="2">
            <S.LabelText>Показать отчет</S.LabelText>
          </Form.Label>
          <Col sm="12" md="4">
            <Select
              minHeight={50}
              value={showReport}
              options={SHOW_REPORT}
              onChange={(val: any) => {
                setShowReport(val);
                val.value === EnumShowReport.ACADEMY && setDepartmentId(null);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
          <Form.Label column sm="12" md="2">
            <S.LabelText> Использовать</S.LabelText>
          </Form.Label>
          <Col sm="12" md="4">
            <Select
              minHeight={50}
              value={selectBy}
              options={SELECT_BY}
              onChange={(value: any) => {
                setSelectBy(value);
              }}
            />
          </Col>
          <Form.Label column sm="12" md="2" />
          {showReport.value === EnumShowReport.DEPARTMENT && (
            <Col sm="12" md="4">
              <Select
                isLoading={isLoading}
                minHeight={50}
                options={transformDepartmentData}
                onChange={(val: any) => {
                  setDepartmentId(val);
                }}
                placeholder="Подразделение не выбрано"
              />
            </Col>
          )}
          {isError && <AlertDismissible content="Ошибка загрузки отделов..." />}
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
          <Col md={3} className={'d-flex align-items-center mb-2 mb-md-0'}>
            <S.DateText>От</S.DateText>
            <DatePicker
              selected={fromDate}
              onChange={setFromDate}
              selectsStart
              startDate={fromDate}
              endDate={toDate}
              maxDate={toDate}
            />
          </Col>
          <Col md={3} className={'d-flex align-items-center'}>
            <S.DateText>До</S.DateText>
            <DatePicker
              selected={toDate}
              onChange={setToDate}
              selectsEnd
              startDate={fromDate}
              endDate={toDate}
              minDate={fromDate}
              maxDate={new Date()}
            />
          </Col>
          <Col md={4}>
            <Button
              variant="primary"
              onClick={() =>
                submitFiltersForm({
                  fromDate,
                  toDate,
                  reportType: reportType?.value,
                  selectBy: selectBy?.value,
                  departmentId: departmentId?.value === 0 ? null : departmentId?.value,
                })
              }
            >
              Сформировать отчет
            </Button>
          </Col>
        </Form.Group>
      </S.FormFilters>
    </div>
  );
};
