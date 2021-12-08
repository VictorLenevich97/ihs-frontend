import { Row, Button } from 'react-bootstrap';
import { Container } from 'effects/container';

import styled from 'styled-components';
import { themeVariables } from '../../effects/variables';

export const NewsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ListRow = styled(Row)`
  width: 100%;
  margin: 0 auto;
`;

interface RadionButtonProps {
  active: boolean;
}

export const RadionButton = styled(Button)`
  height: 34px;
  width: 34px;
  border: 2px solid #4f7752;
  padding: 0 0 2px 0;
  border-radius: 50%;
  background-color: ${(props: RadionButtonProps) => (props.active ? '#4F7752' : '#fff')};

  svg > path {
    fill: ${(props: RadionButtonProps) => (props.active ? '#fff' : '#4F7752')};
  }

  &:last-child {
    margin-left: 15px;
  }

  &:hover {
    background-color: #fff;
  }
`;

export const MoreNews = styled.span`
  padding: 20px 20px 0 20px;
  color: #4f7752;
  font-weight: 600;
  cursor: pointer;
`;

export const LoaderWrapper = styled.div`
  height: 656px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: ${themeVariables.borderRadius};
`;
