import styled from 'styled-components';
import { themeVariables } from '../variables';

interface ContainerProps {
  fullwidth?: boolean;
}
interface SubContainerProps {
  p?: string;
  m?: string;
  filled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: ${props => (props.fullwidth ? '20px 30px' : '15px')};
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: ${themeVariables.borderRadius};
`;

export const SubContainer = styled.div<SubContainerProps>`
  border-radius: ${themeVariables.borderRadius};
  border: 1px solid ${({ filled }) => (!filled ? themeVariables.borderColor : 'transparent')};
  background-color: ${({ filled }) => filled && 'rgba(0, 0, 0, 0.05)'};
  padding: ${({ p }) => p || 0};
  margin: ${({ m }) => m || 0};
`;
