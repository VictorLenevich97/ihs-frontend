import * as S from './pagination.styled';

interface Props {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  viewPrevNextLinks?: boolean;
}

export const Pagination = ({ page, setPage, totalPages = 1, viewPrevNextLinks = false }: Props) => {
  return (
    <S.PaginationWrapper>
      {viewPrevNextLinks && (
        <S.PaginationWrapper.Link onClick={() => setPage(page - 1)} disabled={page < 1}>
          Предыдущая
        </S.PaginationWrapper.Link>
      )}

      {[...new Array(totalPages)].map((_, index) => (
        <S.PaginationWrapper.Item
          onClick={() => setPage(index)}
          key={index}
          active={index === page}
        >
          {index + 1}
        </S.PaginationWrapper.Item>
      ))}

      {viewPrevNextLinks && (
        <S.PaginationWrapper.Link
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages - 1}
        >
          Следующая
        </S.PaginationWrapper.Link>
      )}
    </S.PaginationWrapper>
  );
};
