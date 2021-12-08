import styled from 'styled-components';

export const Container = styled.div`
  tbody > tr:last-child {
    font-weight: ${({ activeSummaryRow }: { activeSummaryRow: boolean }) =>
      activeSummaryRow && 700};
  }
`;
