import styled from 'styled-components';
import { themeVariables } from 'effects/variables';

export const CellContainer = styled.tr`
  background-color: ${({ active }: { active: boolean }) => active && themeVariables.stripedGray};
`;

export const DetailContainer = styled.div`
  padding: 0 20px;
`;
