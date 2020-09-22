import React from "react";
import Layout from "../../components/layout";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Input from "../../components/UI/Input/input";

export default function Signup() {
  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={{ span: 6 }}>
                  <Input
                    label="First Name"
                    placeholder="Enter firstName"
                    type="text"
                  />
                </Col>

                <Col md={{ span: 6 }}>
                  <Input
                    label="Last Name"
                    placeholder="Enter lastName"
                    type="text"
                  />
                </Col>
              </Row>
              <Input
                label="Email address"
                placeholder="Enter email"
                type="email"
              />
              <Input
                label="Email password"
                placeholder="Enter password"
                type="password"
              />
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}