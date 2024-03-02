import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="bg-body-tertiary">
      <Container>
        <Navbar.Text className="text-muted">
          ©{new Date().getFullYear()} INTP-42
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
