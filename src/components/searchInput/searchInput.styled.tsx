import styled from 'styled-components';
import { themeVariables } from '../../effects/variables';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: ${themeVariables.borderRadius};
  border: 2px solid ${themeVariables.primaryColor};
  padding: 10px 20px 10px 55px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  width: 100%;
  height: ${themeVariables.controlsHeight};
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(105 139 108 / 50%);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Icon = styled.div`
  position: absolute;
  display: flex;
  left: 20px;
  top: 12px;
  pointer-events: none;
`;
