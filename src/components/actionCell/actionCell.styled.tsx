import styled from 'styled-components';
import { themeVariables } from 'effects/variables';

export const ActionColumn = styled.div`
  #action-icon {
    cursor: pointer;
    transition: ${themeVariables.transition};

    &:hover {
      opacity: 0.7;
    }
  }
`;
