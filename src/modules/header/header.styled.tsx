import styled from 'styled-components';
import { Navbar, Row } from 'react-bootstrap';

export const ContainerNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  margin-bottom: 40px;

  #navbar {
    align-items: center;
  }
`;

export const LogoWrapper = styled(Row)`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #000;
`;

export const ListDepartmentsItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;

  #menu-icon {
    margin-left: 15px;
  }

  @media (max-width: 1200px) {
    margin: 20px 0;
  }
`;

export const LinkAsDiv = styled.div`
  cursor: pointer;
`;
