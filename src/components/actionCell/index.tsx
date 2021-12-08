import { ReactComponent as TableDownload } from '../../static/icons/table-download.svg';
import { ReactComponent as TablePrev } from '../../static/icons/table-prev.svg';
import * as S from './actionCell.styled';

const downloadFile = (documentLink: string) => {
  window.open(documentLink);
};

const previewFile = (documentLink: string) => {
  window.open(documentLink, '_blank');
};

export const ActionCell = ({
  downloadLink,
  previewLink,
}: {
  downloadLink?: string | null;
  previewLink?: string | null;
}) => {
  return (
    <S.ActionColumn>
      {downloadLink && (
        <TableDownload id="action-icon" onClick={() => downloadFile(String(downloadLink))} />
      )}
      {previewLink && (
        <TablePrev
          className={downloadLink ? `ml-3` : ''}
          id="action-icon"
          onClick={() => previewFile(String(previewLink))}
        />
      )}
      {!downloadLink && !previewLink && <span>Нет</span>}
    </S.ActionColumn>
  );
};
