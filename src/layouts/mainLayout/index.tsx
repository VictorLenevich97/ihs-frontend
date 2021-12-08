import { Header } from 'modules/header';
import { Footer } from 'components/footer';
import { Container } from 'react-bootstrap';

import { Body } from './mainLayout.styled';
interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Body>
      <Header />
      <Container style={{ flex: 1 }}>{children}</Container>
      <Footer />
    </Body>
  );
};
