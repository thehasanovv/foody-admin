import Header from "../Header";
import Sidebar from "../Sidebar";
import Login from "../../pages/Login";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ModalContent } from "../Modal";

const Layout = ({ children }) => {
  let { pathname } = useLocation();
  return (
    <>
      <ModalContent />
      {pathname !== "/logout" ? (
        <Container>
          <Row>
            <Col md={12}>
              <Header />
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col md={0} lg={3}>
              <Sidebar />
            </Col>
            <Col md={12} lg={9}>
              {children}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col md={12}>
              <Login />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Layout;
