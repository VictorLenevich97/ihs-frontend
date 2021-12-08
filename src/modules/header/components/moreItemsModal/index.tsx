import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, sortBy } from 'lodash';
import { Modal, Row, Col } from 'react-bootstrap';
import { INavigation, LinkType, LinkTypeEnum } from 'types';
import { Title, Paragraph } from 'effects/typography';

import * as S from '../../header.styled';

interface Props {
  showMoreItems: boolean;
  setShowMoreItems: (value: boolean) => void;
  items: INavigation[];
  makeLink: (link: string, linkType: LinkType) => string;
}

export const MoreItemsModal = ({ showMoreItems, setShowMoreItems, items, makeLink }: Props) => {
  const handleClose = () => setShowMoreItems(false);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showMoreItems}
      onHide={handleClose}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Title>Список разделов</Title>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {items.map(({ id, title, children, link, linkType }) => {
            if (isEmpty(children)) {
              return (
                <Col className="mb-3" key={id} sm={6}>
                  {linkType === LinkTypeEnum.EXTERNAL ? (
                    <S.LinkAsDiv
                      key={id}
                      onClick={() => {
                        window.open(link);
                        handleClose();
                      }}
                    >
                      <Title>{title}</Title>
                    </S.LinkAsDiv>
                  ) : (
                    <Link target="_blank" onClick={handleClose} to={makeLink(link, linkType)}>
                      <Title>{title}</Title>
                    </Link>
                  )}
                </Col>
              );
            }
            return (
              <Col className="mb-3" key={id} sm={6}>
                <Title className="mb-1">{title}</Title>
                {sortBy(children, [({ position }) => position]).map(child => (
                  <React.Fragment key={child.id}>
                    {child.linkType === LinkTypeEnum.EXTERNAL ? (
                      <S.LinkAsDiv
                        onClick={() => {
                          window.open(child.link);
                          handleClose();
                        }}
                      >
                        <Paragraph>{child.title}</Paragraph>
                      </S.LinkAsDiv>
                    ) : (
                      <Link onClick={handleClose} to={makeLink(child.link, child.linkType)}>
                        <Paragraph>{child.title}</Paragraph>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Col>
            );
          })}
        </Row>
      </Modal.Body>
    </Modal>
  );
};
