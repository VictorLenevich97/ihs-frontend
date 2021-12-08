import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Categories, Events, AnnouncementDetail } from 'modules';

const AnnouncementPage = () => {
  const { announcementId } = useParams<any>();

  return (
    <Row>
      <Col xl={3}>
        <Events />
        <Categories />
      </Col>
      <Col xl={9}>
        <AnnouncementDetail announcementId={announcementId} />
      </Col>
    </Row>
  );
};

export default AnnouncementPage;
