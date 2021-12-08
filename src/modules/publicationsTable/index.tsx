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
import { useGetPublicationsQuery } from 'store/publications';
import { SubContainer } from 'effects/container';
import { parseDate } from 'lib/parseDate';
import { addYears, addDays } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { parseIdFromHash } from 'lib/categoryRouteHash';
import { ShowBySelect } from 'components/showBySelect';
import { bytesToSize } from 'lib/bytesToSize';

// Pages
const DEFAULT_PAGE_VALUE = 0;
const MIN_PAGE_VALUE = 1;

// Show by
const DEFAULT_SHOW_BY_ELEMENTS = 10;

const DATE_FORMAT = 'yyyy MMM dd HH:mm';

interface Props {
  isSubcategories?: boolean;
}

export const PublicationsTable = ({ isSubcategories = true }: Props) => {
  const [sortBy, setSortBy] = useState('title');
  const [activeDirectionAsc, setActiveDirectionAsc] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE_VALUE);
  const [showBy, setShowBy] = useState(DEFAULT_SHOW_BY_ELEMENTS);
  const [fromDate, setFromDate] = useState(addYears(new Date(), -1));
  const [toDate, setToDate] = useState(new Date());
  const [searchString, setSearchString] = useState('');
  const [showItemsDetail, setShowItemsDetail] = useState<{ [id: string]: boolean }>({});

  const location = useLocation();
  const { hash } = location;
  const documentCategoryId = parseIdFromHash(hash);

  const { data, isLoading, isError } = useGetPublicationsQuery({
    page,
    showBy,
    searchString,
    startDate: parseDate(fromDate, 'yyyy-MM-dd'),
    endDate: parseDate(addDays(toDate, 1), 'yyyy-MM-dd'),
    documentCategoryId: documentCategoryId,
    subcategories: isSubcategories,
    sortBy,
    directionAsc: activeDirectionAsc,
  });

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
      value: 'Номер издания',
      isSort: true,
      onSortClick: () => setSortBy('title'),
      directionAsc: true,
    },
    {
      id: 'createdDate',
      value: 'Год издания',
      isSort: true,
      onSortClick: () => setSortBy('createdDate'),
      directionAsc: true,
    },
    {
      id: 'documentCategory',
      value: 'Категория',
      isSort: true,
      onSortClick: () => setSortBy('documentCategory'),
      directionAsc: true,
    },
    {
      id: 'fileSize',
      value: 'Размер файла',
      isSort: false,
    },
    { id: 5, value: 'Скачать / Посмотреть', isSort: false },
  ];

  const tableBodyData =
    data?.documents.map(doc => ({
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
        { id: 1, component: doc.title },
        {
          id: 2,
          component: parseDate(doc.createdDate, DATE_FORMAT),
        },
        { id: 3, component: doc.documentCategory?.title },
        { id: 4, component: bytesToSize(doc.fileSize) },
        {
          id: 5,
          component: (
            <ActionCell downloadLink={doc.documentLink} previewLink={doc.documentViewLink} />
          ),
        },
      ],
      detail: doc.description || 'Описание отсутствует...',
      showDetail: showItemsDetail[doc.id],
    })) || [];

  return (
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
            searchInputPlaceholder={'Введите часть названия искомого документа ...'}
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
  );
};
