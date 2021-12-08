import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NewsList, Categories, Announcements, Events } from 'modules';

import { Container } from './main.styled';

const Main = () => {
  const [viewMoreNews, setViewMoreNews] = useState<boolean>(true);

  return (
    <Container>
      <Row>
        <Col xl={3}>
          <Events />
          <Categories />
        </Col>
        <Col xl={9}>
          {viewMoreNews && <Announcements />}
          <NewsList setViewMoreNews={setViewMoreNews} viewMoreNews={viewMoreNews} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
