import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Container, SubContainer } from 'effects/container';
import { Title, Paragraph } from 'effects/typography';
import { MAIN } from 'constant/routes';
import { NoDataIndication, HtmlParse } from 'components';
import { parseDate } from 'lib/parseDate';
import { DocumentsFolderTree, DocumentsTable, NewsList } from 'modules';
import { PAGE } from 'constant/routes';
import { themeVariables } from 'effects/variables';
import { IDepartment } from 'types';

import * as S from './itemDetailContainer.styled';

const DOCUMENT_LINK_TYPE = 'document';

interface Props {
  containerTitle?: string | undefined;
  createdDate?: number | undefined | null;
  content?: any;
  showMoreNewsModule?: boolean;
  showTabs?: boolean;
  tabsContent?: IDepartment[];
  categoryLink?: string;
  departmentLink?: string;
  activeTab?: string;
  departmentId?: number;
}

export const ItemDetailContainer = ({
  containerTitle,
  createdDate,
  content,
  showMoreNewsModule = false,
  showTabs = false,
  tabsContent = [],
  categoryLink,
  departmentLink,
  activeTab,
  departmentId = 0,
}: Props) => {
  const history = useHistory();

  const [isSubcategories, setIsSubcategories] = useState(true);

  return (
    <>
      <Container>
        {showTabs ? (
          <>
            <Paragraph
              className="mb-3"
              color={themeVariables.primaryColor}
              size={26}
              fontWeight={700}
            >
              {containerTitle}
            </Paragraph>
            <Tabs
              onSelect={eventKey => {
                history.push(
                  `${PAGE}/${categoryLink}/${departmentLink}/${eventKey}?departmentId=${departmentId}&departmentTitle=${containerTitle}`,
                );
              }}
              defaultActiveKey={activeTab}
              activeKey={activeTab}
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              {tabsContent.map(({ link, title, content, createdDate }) => (
                <Tab key={link} eventKey={link} title={title}>
                  <S.Header>
                    <Row id="row">
                      <Col md={8}>
                        <Title>{title}</Title>
                      </Col>
                      <Col id="back-link" md={4}>
                        <Link to={MAIN}>Вернуться на главную {'>'} </Link>
                      </Col>
                      <Col sm={12}>
                        <Paragraph color="#5f5f5f">{parseDate(createdDate)}</Paragraph>
                      </Col>
                    </Row>
                  </S.Header>
                  {link === DOCUMENT_LINK_TYPE ? (
                    <S.Body>
                      <Row className="mt-3">
                        <Col md={12} lg={4} xl={3}>
                          <SubContainer p={'20px'} m={'0 0 20px'}>
                            <DocumentsFolderTree
                              isSubcategories={isSubcategories}
                              setIsSubcategories={setIsSubcategories}
                              departmentValue={departmentId}
                            />
                          </SubContainer>
                        </Col>
                        <Col md={12} lg={8} xl={9}>
                          <DocumentsTable
                            isSubcategories={isSubcategories}
                            departmentId={departmentId}
                          />
                        </Col>
                      </Row>
                    </S.Body>
                  ) : (
                    <S.Body>
                      {isEmpty(content) ? (
                        <NoDataIndication content="Информация отсутствует..." />
                      ) : (
                        <HtmlParse content={content} />
                      )}
                    </S.Body>
                  )}
                </Tab>
              ))}
            </Tabs>
          </>
        ) : (
          <>
            <S.Header>
              <Row id="row">
                <Col md={10} lg={9}>
                  <Paragraph color={themeVariables.primaryColor} size={26} fontWeight={700}>
                    {containerTitle}
                  </Paragraph>
                </Col>
                <Col id="back-link" md={2} lg={3}>
                  <Link to={MAIN}>Вернуться на главную {'>'} </Link>
                </Col>
                <Col sm={12}>
                  <Paragraph color="#5f5f5f">{parseDate(createdDate)}</Paragraph>
                </Col>
              </Row>
            </S.Header>
            <S.Body>
              {isEmpty(content) ? (
                <NoDataIndication content="Информация отсутствует..." />
              ) : (
                <HtmlParse content={content} />
              )}
            </S.Body>
          </>
        )}
      </Container>
      {showMoreNewsModule && <NewsList title="Читайте также" viewActionButtons={false} />}
    </>
  );
};
