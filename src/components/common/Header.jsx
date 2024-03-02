import { Container, Navbar } from "react-bootstrap";
import BrandLogo from "../../assets/react.svg"

const Header = (props) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={BrandLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Sample
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
