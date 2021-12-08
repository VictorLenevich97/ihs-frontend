import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const LoaderWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

export const PlanCalendarDownloadButton = styled(Button)`
  width: 100%;
  margin: 20px 0 30px;
`;

export const EventsHeader = styled.div`
  padding: 30px 30px 20px;
`;
