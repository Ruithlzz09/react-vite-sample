import { Button, Container, Row, Col } from 'react-bootstrap';
import NotFoundImg from '../../assets/oops.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

function NotFound() {
  const navigate = useNavigate();
  const goto = (route) => {
    navigate(route);
  };

  return (
    <Container fluid className="main">
      <Row className="m-0">
        <Col md={10} className="right-sidebar">
          <div className="common-heading center-404">
            <div className="not-found-404">
              <div className="no-found">
                <img className="no-img" src={NotFoundImg} alt="Oops" />
                <div className="no-des">
                  <h3>Oops!</h3>
                  <p>We can’t seem to find the page you’re looking for.</p>
                  <Button variant="primary" className="mr-t-15 mr-b-30 sign-btn-320" onClick={() => { goto(ROUTES.HOME) }}>
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
