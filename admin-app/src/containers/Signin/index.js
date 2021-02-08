import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { login } from '../../actions'
import { useDispatch } from "react-redux";


/**
* @author
* @function Signin

**/



const Signin = (props) => {

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();
  
    const user = {
      email: 'rifat01543@gmail.com',
      password: '123456'
    }
  
    dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin} >
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

export default Signin;
