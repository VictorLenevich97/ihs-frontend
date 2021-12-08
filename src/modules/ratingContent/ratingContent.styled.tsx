import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { themeVariables } from 'effects/variables';

export const Content = styled.div``;

export const TableTitle = styled.div`
  margin: 40px 0 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  text-indent: 16px;
`;

export const SelectContainer = styled(Row)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const StudentInfoBlock = styled.div`
  line-height: 40px;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
  margin-bottom: 30px;
  color: ${themeVariables.primaryColor};
`;
