import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Button, Container, Form, Row, Col } from "react-bootstrap"; // Import React-Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LuckyWheel() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="text-center">
          <h2>Lucky Wheel</h2>
          <Button
            variant="primary"
            onClick={() => setLoading(!loading)}
            className="mb-3"
            style={{ width: "100%" }}
          >
            {loading ? "Start Wheel" : "Stop Wheel"}
          </Button>
          <Form>
            <Form.Group controlId="colorInput" className="mb-3">
              <Form.Label>Choose Loader Color</Form.Label>
              <Form.Control
                type="color"
                value={color}
                onChange={(input) => setColor(input.target.value)}
              />
            </Form.Group>
          </Form>

          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LuckyWheel;
