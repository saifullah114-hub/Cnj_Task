import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";
import { Jumbotron, Container } from "react-bootstrap";
const AppLayout = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <Jumbotron>
        <h1>Events & News</h1>
        <p>Learn, Compete & Grow</p>
      </Jumbotron>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
