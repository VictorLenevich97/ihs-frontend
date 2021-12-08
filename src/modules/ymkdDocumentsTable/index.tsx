import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Table,
  Pagination,
  ArrowCell,
  ActionCell,
  TableFilterDateAndSearch,
  TableArrowsShowDetail,
} from 'components';
import { useGetYmkdDocumentsQuery } from 'store/ymkdDocuments';
import { SubContainer } from 'effects/container';
import { parseDate } from 'lib/parseDate';
import { addYears, addDays } from 'date-fns';
import { ShowBySelect } from 'components/showBySelect';
import { TableRowRetail } from './components/tableRowDetail';
import { DisciplinewList } from './components/disciplinesList';
import { YMKD_FILES } from 'constant/routes';
import { IYmkdDocument, EYmkdDocumentConstant } from 'types';

// Pages
const DEFAULT_PAGE_VALUE = 0;
const MIN_PAGE_VALUE = 1;

// Show by
const DEFAULT_SHOW_BY_ELEMENTS = 10;

// Date format
const SHORT_DATE_FORMAT = 'yyyy-MM-dd';
const FULL_DATE_FORMAT = 'yyyy MMM dd HH:mm';

const { REACT_APP_API } = process.env;

interface Props {
  departmentId: number;
  disciplineId: number;
}

export const YmkdDocumentsTable = ({ departmentId, disciplineId }: Props) => {
  const [sortBy, setSortBy] = useState('title');
  const [activeDirectionAsc, setActiveDirectionAsc] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE_VALUE);
  const [showBy, setShowBy] = useState(DEFAULT_SHOW_BY_ELEMENTS);
  const [fromDate, setFromDate] = useState(addYears(new Date(), -1));
  const [toDate, setToDate] = useState(new Date());
  const [searchString, setSearchString] = useState('');
  const [showItemsDetail, setShowItemsDetail] = useState<{ [id: string]: boolean }>({});

  const getQueryParams = () => {
    if (disciplineId !== EYmkdDocumentConstant.ROOT_ID && disciplineId !== null) {
      return {
        page,
        showBy,
        searchString,
        startDate: parseDate(fromDate, SHORT_DATE_FORMAT),
        endDate: parseDate(addDays(toDate, 1), SHORT_DATE_FORMAT),
        disciplineId,
        sortBy,
        directionAsc: activeDirectionAsc,
      };
    } else {
      return {
        page,
        showBy,
        searchString,
        startDate: parseDate(fromDate, SHORT_DATE_FORMAT),
        endDate: parseDate(addDays(toDate, 1), SHORT_DATE_FORMAT),
        sortBy,
        directionAsc: activeDirectionAsc,
      };
    }
  };

  const { data, isLoading, isError } = useGetYmkdDocumentsQuery(getQueryParams());

  // This page reset sends an extra request to the server:
  useEffect(() => {
    setPage(DEFAULT_PAGE_VALUE);
  }, [showBy, fromDate, toDate, searchString]);

  // Change `showItemsDetail` if page is mutation
  useEffect(() => {
    const DEFAULT_STATE = {};
    setShowItemsDetail(DEFAULT_STATE);
  }, [page]);

  const tableHeadTitles = [
    {
      id: 'action',
      value: (
        <TableArrowsShowDetail
          showItemsDetail={showItemsDetail}
          setShowItemsDetail={setShowItemsDetail}
          data={data?.documents || []}
        />
      ),
      isSort: false,
    },
    {
      id: 'title',
      value: 'Название',
      isSort: true,
      onSortClick: () => setSortBy('title'),
      directionAsc: true,
    },
    {
      id: 'forSpecialty',
      value: 'Специальность',
      isSort: true,
      onSortClick: () => setSortBy('forSpecialty'),
      directionAsc: true,
    },
    {
      id: 'registrationDate',
      value: 'Дата регистрации',
      isSort: true,
      onSortClick: () => setSortBy('registrationDate'),
      directionAsc: true,
    },
    { id: 5, value: 'Ведомость', isSort: false },
    { id: 6, value: 'УМКД', isSort: false },
  ];

  const tableBodyData =
    data?.documents.map((doc: IYmkdDocument) => ({
      id: doc.id,
      cells: [
        {
          id: 0,
          component: (
            <ArrowCell
              active={showItemsDetail[doc.id]}
              onClick={() => setShowItemsDetail(old => ({ ...old, [doc.id]: !old[doc.id] }))}
            />
          ),
        },
        { id: 1, component: doc.ymkdNumber + ' ' + doc.title },
        {
          id: 2,
          component: doc.forSpecialty,
        },
        { id: 3, component: parseDate(new Date(doc.registrationDate), FULL_DATE_FORMAT) },
        {
          id: 4,
          component: <ActionCell downloadLink={doc.fillingFileLink} />,
        },
        {
          id: 5,
          component: (
            <ActionCell
              previewLink={
                doc.linkForYMKD
                  ? `${REACT_APP_API}${YMKD_FILES}/${doc.linkForYMKD}`
                  : doc.linkForYMKD
              }
            />
          ),
        },
      ],
      detail: <TableRowRetail {...doc} />,
      showDetail: showItemsDetail[doc.id],
    })) || [];

  return (
    <Row className="mt-3">
      <Col md={12} lg={4} xl={3}>
        <SubContainer p={'20px'} m={'0 0 20px'}>
          <DisciplinewList departmentId={departmentId} disciplineId={disciplineId} />
        </SubContainer>
      </Col>
      <Col md={12} lg={8} xl={9}>
        <Row>
          <Col md={12}>
            <SubContainer p={'15px 20px'} filled>
              <TableFilterDateAndSearch
                fromDate={fromDate}
                setFromDate={setFromDate}
                toDate={toDate}
                setToDate={setToDate}
                searchString={searchString}
                setSearchString={setSearchString}
                searchInputPlaceholder={'Введите часть названия искомого УМКД ...'}
              />
            </SubContainer>
          </Col>
          <Col className="mt-3" md={12}>
            <ShowBySelect value={showBy} onChange={setShowBy} />
            <Table
              headTitles={tableHeadTitles}
              data={tableBodyData}
              isLoading={isLoading}
              error={isError}
              setActiveDirectionAsc={setActiveDirectionAsc}
              activeDirectionAsc={activeDirectionAsc}
              sortBy={sortBy}
            />
            {data && data.totalPages > MIN_PAGE_VALUE && (
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={data.totalPages}
                viewPrevNextLinks
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
