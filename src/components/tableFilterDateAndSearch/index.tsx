import { Button, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { DatePicker, SearchInput } from 'components';
import { FormEvent, useState } from 'react';

import * as S from './tableFilterDateAndSearch.styled';

interface Props {
  fromDate: Date;
  setFromDate: (date: Date) => void;
  toDate: Date;
  setToDate: (date: Date) => void;
  searchString: string;
  setSearchString: (search: string) => void;
  searchInputPlaceholder?: string;
}

export const TableFilterDateAndSearch = ({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  searchString,
  setSearchString,
  searchInputPlaceholder,
}: Props) => {
  const [search, setSearch] = useState(searchString);

  const handleFind = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchString(search);
  };
  return (
    <S.TableFilterContainer>
      <Row className={'mb-4'}>
        <Col md={4} xl={3} className={'d-flex align-items-center mb-2 mb-md-0'}>
          <S.Title>Поиск по дате</S.Title>
        </Col>
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
        <Col sm={12} md={3} className={'d-flex align-items-center'}>
          <S.DateText>До</S.DateText>
          <DatePicker
            selected={toDate}
            onChange={value => {
              setToDate(value === null ? new Date() : value);
            }}
            selectsEnd
            startDate={fromDate}
            endDate={toDate}
            minDate={fromDate}
            maxDate={new Date()}
          />
        </Col>
      </Row>
      <form onSubmit={handleFind}>
        <Row>
          <Col md={4} xl={3} className={'d-flex align-items-center  mb-2 mb-md-0'}>
            <S.Title>Поиск по названию</S.Title>
          </Col>
          <Col md={6} className={'d-flex align-items-center  mb-2 mb-md-0'}>
            <OverlayTrigger
              trigger="focus"
              overlay={
                <Tooltip id="tooltip-top">
                  Поиск возможен по: Авторам, Номеру сертификата, Номеру протокола, Регистрационному
                  номеру
                </Tooltip>
              }
            >
              <S.SearchInputContainer>
                <SearchInput
                  placeholder={searchInputPlaceholder || 'Поиск ...'}
                  value={search}
                  onChange={setSearch}
                />
              </S.SearchInputContainer>
            </OverlayTrigger>
          </Col>
          <Col md={2} className={'d-flex align-items-center'}>
            <Button type={'submit'}>Найти</Button>
          </Col>
        </Row>
      </form>
    </S.TableFilterContainer>
  );
};
