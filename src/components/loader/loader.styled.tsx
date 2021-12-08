import styled from 'styled-components';

interface ContainerProps {
  minHeight?: number;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: ${({ minHeight }) => (minHeight !== undefined ? minHeight : 250)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
