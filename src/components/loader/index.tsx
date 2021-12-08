import { Spinner } from 'react-bootstrap';

import { Container } from './loader.styled';

interface Props {
  minHeight?: number;
}
export const Loader = ({ minHeight }: Props) => (
  <Container minHeight={minHeight}>
    <Spinner animation="border" variant="primary" />
  </Container>
);
