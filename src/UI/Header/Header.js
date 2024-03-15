import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="bg-secondary">
      <Col lg={12} className="my-4 flex justify-content-center">
        <Button variant="light" className="px-5 py-2 ">
          Cart
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
