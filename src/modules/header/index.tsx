import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, sortBy } from 'lodash';
import { Navbar, Nav, Col, NavDropdown, Container } from 'react-bootstrap';
import { MAIN, RESOURCES } from 'constant/routes';
import { Paragraph, Text } from 'effects/typography';
import { Figure } from 'effects/figure';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetNavigationQuery } from 'store/navigation';
import { MoreItemsModal } from './components/moreItemsModal';
import { AlertDismissible } from 'components';
import { themeVariables } from 'effects/variables';
import { LinkType, LinkTypeEnum } from 'types';

import { ReactComponent as Arrow } from 'static/icons/arrow.svg';

import Logo from 'static/images/logo_varb.png';
import { ReactComponent as MenuIcon } from 'static/icons/menu.svg';

import * as S from './header.styled';

export const Header = () => {
  const [showMoreItems, setShowMoreItems] = useState<boolean>(false);
  const { data = [], isError } = useGetNavigationQuery();

  const makeLink = (link: string, linkType: LinkType): string =>
    linkType === LinkTypeEnum.RESOURCE ? `${RESOURCES}/${link}` : `/${link}`;

  // Selecting FIXED itrems
  const transformData = useMemo(
    () =>
      isEmpty(data)
        ? []
        : sortBy(
            data.filter(({ fixed }) => fixed),
            [({ position }) => position],
          ),
    [data],
  );

  // Selecting don`t FIXED items
  const transformModalData = useMemo(
    () =>
      isEmpty(data)
        ? []
        : sortBy(
            data.filter(({ fixed }) => !fixed),
            [({ position }) => position],
          ),
    [data],
  );

  if (isError) {
    return <AlertDismissible content="Ошибка загрузки меню..." />;
  }

  return (
    <S.ContainerNavbar bg="white" expand="xl" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to={MAIN}>
            <S.LogoWrapper>
              <Col>
                <Figure img={Logo} width={80} height={80} />
              </Col>
              <Col>
                <Paragraph>Учреждение образования</Paragraph>
                <Paragraph>"Военная академия Республики Беларусь"</Paragraph>
              </Col>
            </S.LogoWrapper>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navbar" className="ml-auto">
            {transformData.map(({ id, children, title, link, linkType }) => {
              return isEmpty(children) ? (
                <React.Fragment key={id}>
                  {linkType === LinkTypeEnum.EXTERNAL ? (
                    <div onClick={() => window.open(link)}>
                      <Nav.Link key={id}>{title}</Nav.Link>
                    </div>
                  ) : (
                    <LinkContainer to={makeLink(link, linkType)}>
                      <Nav.Link key={id}>{title}</Nav.Link>
                    </LinkContainer>
                  )}
                </React.Fragment>
              ) : (
                <NavDropdown
                  key={id}
                  title={
                    <>
                      {' '}
                      {title} <Arrow />
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  {sortBy(children, [({ position }) => position]).map(childrenItem => (
                    <React.Fragment key={childrenItem.id}>
                      {childrenItem.linkType === LinkTypeEnum.EXTERNAL ? (
                        <div onClick={() => window.open(childrenItem.link)}>
                          <NavDropdown.Item>{childrenItem.title}</NavDropdown.Item>
                        </div>
                      ) : (
                        <LinkContainer to={makeLink(childrenItem.link, childrenItem.linkType)}>
                          <NavDropdown.Item>{childrenItem.title}</NavDropdown.Item>
                        </LinkContainer>
                      )}
                    </React.Fragment>
                  ))}
                </NavDropdown>
              );
            })}
            <Nav>
              <S.ListDepartmentsItem onClick={() => setShowMoreItems(true)}>
                <Text color={themeVariables.primaryColor}>Список разделов</Text>
                <MenuIcon id="menu-icon" />
              </S.ListDepartmentsItem>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <MoreItemsModal
          showMoreItems={showMoreItems}
          setShowMoreItems={setShowMoreItems}
          items={transformModalData}
          makeLink={makeLink}
        />
      </Container>
    </S.ContainerNavbar>
  );
};
