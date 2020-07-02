import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

const home = () => {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <Jumbotron>
            <h1>This is a Dream Journal App</h1>
            <p>
              Simply write down your dream, select from the several different
              options provided, and never stop dreaming!
            </p>
          </Jumbotron>
        </Col>
        <Col xl={12}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Label>Title of your dream</Form.Label>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Enter a title you want to use"
                      />
                      <Form.Label>
                        What date did you wake up from the dream?
                      </Form.Label>
                      <Form.Control as="select" className="mb-3">
                        <option>
                          This can be used as a placeholder until I add a
                          calendar component
                        </option>
                      </Form.Control>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe the dream</Form.Label>
                        <Form.Control as="textarea" rows="5" className="mb-3" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>What additives did you take before sleeping?</Form.Label>
                        <Form.Control as="select" className="mb-3" multiple>
                          <option>Melatonin</option>
                          <option>Lavender Spray</option>
                          <option>Other</option>
                          <option>None</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default home;
