import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

import "bootstrap/dist/css/bootstrap.min.css";

const Journal = () => {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <Card className="mb-3">
            <Card.Header>Dream Date</Card.Header>
            <Card.Body>
              <Card.Title>Dream Title</Card.Title>
              <Card.Text>
                Dream Text.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header>Dream Date</Card.Header>
            <Card.Body>
              <Card.Title>Dream Title</Card.Title>
              <Card.Text>
                Dream Text.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Journal;
