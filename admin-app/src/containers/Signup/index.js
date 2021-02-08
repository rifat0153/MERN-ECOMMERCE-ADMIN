import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    vlaue=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    vlaue=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email Address"
                vlaue=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                vlaue=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
