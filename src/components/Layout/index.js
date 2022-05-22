import { Col, Container, Row } from 'reactstrap';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      <Row style={{marginTop:'2rem'}}>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
