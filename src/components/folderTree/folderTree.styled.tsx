import styled from 'styled-components';
import { themeVariables } from '../../effects/variables';

export const Container = styled.div``;

export const FilterContainer = styled.div`
  margin-bottom: 25px;
  border-bottom: 2px solid #4f7752;
`;

export const Item = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${({ selected }) => (selected ? themeVariables.primaryColor : 'transparent')};
  min-height: ${themeVariables.controlsHeight};
  align-items: center;
  border-radius: ${themeVariables.borderRadius};
  user-select: none;
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Shift = styled.div`
  margin-left: 15px;
`;

export const ArrowContainer = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding-left: 5px;
  flex: 0 0 40px;
  svg {
    transition: ${themeVariables.transition};
    transform: rotate(${({ active }) => (active ? 0 : -90)}deg);
  }
`;

export const Title = styled.div`
  padding-left: 15px;
  flex: 1;
`;

export const FolderIconContainer = styled.div`
  flex: 0;
`;
