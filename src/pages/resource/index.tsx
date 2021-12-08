import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Categories, Events } from 'modules';
import { RESOURCES } from 'constant/routes';
import { Container } from 'effects/container';

import * as S from './resource.styled';

const { REACT_APP_API } = process.env;

const ResourcePage = () => {
  const { resourceLink, file } = useParams<any>();
  const resultResourcePath = `${resourceLink}/${file}`;

  return (
    <Row>
      <Col xl={3}>
        <Events />
        <Categories />
      </Col>
      <Col xl={9}>
        <Container>
          <S.Iframe src={`${REACT_APP_API}${RESOURCES}/${resultResourcePath}`} frameBorder="none" />
        </Container>
      </Col>
    </Row>
  );
};

export default ResourcePage;
