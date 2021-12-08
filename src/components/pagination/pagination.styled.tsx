import styled from 'styled-components';

import { Pagination } from 'react-bootstrap';
import { Text } from 'effects/typography';

interface LinkProps {
  disabled?: boolean;
}

export const PaginationWrapper = Object.assign(
  styled(Pagination)`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  {
    Item: styled(Pagination.Item)`
      margin: 0 7.5px;

      a {
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50% !important;
      }
    `,

    Link: styled(Text)<LinkProps>`
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0 7.5px;
      color: ${({ disabled }) => (disabled ? '#808080' : '#000')};
      pointer-events: ${({ disabled }) => disabled && 'none'};
      &:hover {
        color: #4f7752;
        transition: 0.5s;
      }
    `,
  },
);
