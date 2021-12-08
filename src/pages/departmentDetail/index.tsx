import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { DepartmentDetail, Categories, Events } from 'modules';
import { useQuery } from 'hooks/useQuery';
import { EDepartmentConstant } from 'types';

const DepartmentDetailPage = () => {
  const [activeTab, setActiveTab] = useState<string>();

  let query = useQuery();

  const { categoryLink, departmentLink, pageLink } =
    useParams<{ categoryLink: string; departmentLink: string; pageLink: string }>();

  return (
    <Row>
      {activeTab !== EDepartmentConstant.DOCUMENT && (
        <Col xl={3}>
          <Events />
          <Categories />
        </Col>
      )}

      <Col sm={activeTab === 'document' ? 12 : 9}>
        <DepartmentDetail
          categoryLink={categoryLink}
          departmentLink={departmentLink}
          pageLink={pageLink}
          departmentId={Number(query.get('departmentId'))}
          departmentTitle={query.get('departmentTitle') || ''}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Col>
    </Row>
  );
};

export default DepartmentDetailPage;
