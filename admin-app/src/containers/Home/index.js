import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout sidebar>
      {/* <Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to admin Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere
          faucibus euismod. Nunc aliquam ut ligula et viverra. Ut ac consequat
          purus. Aliquam erat volutpat. Pellentesque erat nunc, cursus quis
          mollis at, tristique eget enim. Quisque eu ultricies nisi. Mauris
          interdum purus nisl, sit amet tristique elit pulvinar sit amet. Nunc a
          ante pellentesque, ullamcorper massa vel, lobortis dui. Pellentesque
          in libero ullamcorper, condimentum risus eget, blandit erat. Cras quam
          dui, consequat eget libero et, pulvinar accumsan lectus.v
        </p>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
