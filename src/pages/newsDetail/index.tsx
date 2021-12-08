import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Categories, Events, NewsDetail } from 'modules';

const NewsDetailPage = () => {
  const { newsId } = useParams<any>();

  return (
    <Row>
      <Col xl={3}>
        <Events />
        <Categories />
      </Col>
      <Col xl={9}>
        <NewsDetail newsId={newsId} />
      </Col>
    </Row>
  );
};

export default NewsDetailPage;
