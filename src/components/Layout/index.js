import { Col, Container, Row } from "reactstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Login from "../../pages/Login";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  let { pathname } = useLocation();

  return (
    <>
      {pathname !== "/logout" ? (
        <Container>
          <Row>
            <Col md={12}>
              <Header />
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>{children}</Col>
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
