import styled from 'styled-components';
import { themeVariables } from '../../effects/variables';

interface Props {
  activeRow: boolean;
}

export const ArrowContainer = styled.div<Props>`
  width: 56px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  #table-arrow {
    transform: ${props => !props.activeRow && 'rotate(-90deg)'};
    transition: ${themeVariables.transition};
  }
`;
