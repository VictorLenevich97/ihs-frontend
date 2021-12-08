import styled from 'styled-components';

import { DatePicker } from '../../../../components';

export const DateRange = styled.div`
  display: flex;
  margin: 20px auto;
  width: fit-content;

  * {
    width: auto;
  }
`;

export const RadioToolbar = styled.div`
  margin-right: 0.5rem;
  border: 1px solid #dee2e6;
  border-right: 0;
  border-radius: 0.25rem;
`;

export const Label = styled.label`
  padding: 0.65rem;
  cursor: pointer;
  border-right: 1px solid #dee2e6;
  margin-bottom: 0;
`;

export const Radio = styled.input.attrs(props => ({
  type: 'radio',
  name: 'radioDate',
}))`
  opacity: 0;
  position: fixed;
  width: 0;
  &:checked + label {
    background-color: #e9ecef;
  }
`;

export const DatePickerGroup = styled.div`
  display: flex;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const DatePickerText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #e9ecef;
  border-right: 1px solid #ced4da;
`;

export const CustomDatePicker = styled(DatePicker)`
  border: none !important;
`;
