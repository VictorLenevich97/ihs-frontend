import styled from 'styled-components';

import { components } from 'react-select';

interface SelectContainerProps {
  width?: number;
}

export const SelectContainer = styled.div<SelectContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: inline-block;
`;

export const CustomControl = styled(components.Control)`
  border-radius: 10px !important;
  border: 2px solid #4f7752 !important;
`;
