import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Container, Row, Col } from "react-bootstrap";

const AppLayout = () => {
  return (
    <Container
      fluid
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Row style={{ flex: "0 0 10%" }}>
        {/* Header */}
        <Col style={{ height: "100%" }}>
          <Header />
        </Col>
      </Row>
      <Row style={{ flex: "1 1 80%" }}>
        {/* Main Content */}
        <Col style={{ height: "100%" }}>
          <Outlet />
        </Col>
      </Row>
      <Row style={{ flex: "0 0 10%" }}>
        {/* Footer */}
        <Col style={{ height: "100%" }}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
