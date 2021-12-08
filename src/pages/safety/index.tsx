import { Row, Col } from 'react-bootstrap';
import { Title } from 'effects/typography';
import { Container, SubContainer } from 'effects/container';
import { SafetyFolderTree, SafetyTable } from 'modules';

const Safety = () => {
  return (
    <Container fullwidth>
      <Title size={26} mb={20} lineHeight={50}>
        Безопасность военной службы:
      </Title>
      <Row>
        <Col md={12} lg={4} xl={3}>
          <SubContainer p={'20px'} m={'0 0 20px'}>
            <SafetyFolderTree />
          </SubContainer>
        </Col>
        <Col md={12} lg={8} xl={9}>
          <SafetyTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Safety;
