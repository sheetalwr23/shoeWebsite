import React, { Fragment, useState, useContext } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const AddItems = () => {
  const [shoeName, setShoeName] = useState("");
  const [shoeDesc, setShoeDesc] = useState("");
  const [shoePrice, setShoePrice] = useState("");
  const [shoeSSize, setSShoe] = useState("");
  const [shoeMSize, setMShoe] = useState("");
  const [shoeLSize, setLShoe] = useState("");

  //it is calling structure from cart context
  const cartCtx = useContext(CartContext);
  console.log("this is my cart context is coming", cartCtx);

  const displayShoeName = (event) => {
    event.preventDefault();
    setShoeName(event.target.value);
  };
  const displayDescription = (event) => {
    event.preventDefault();
    setShoeDesc(event.target.value);
  };
  const displayPrice = (event) => {
    event.preventDefault();
    setShoePrice(event.target.value);
  };
  const displaySsize = (event) => {
    event.preventDefault();
    setSShoe(event.target.value);
  };
  const displayMsize = (event) => {
    event.preventDefault();
    setMShoe(event.target.value);
  };
  const displayLsize = (event) => {
    event.preventDefault();
    setLShoe(event.target.value);
  };
  const addItemHandler = (event) => {
    event.preventDefault();
    console.log(
      "add item handler checking",
      shoeName,
      shoeDesc,
      shoePrice,
      shoeSSize,
      shoeMSize,
      shoeLSize
    );
    let obj = {
      shoeName,
      shoeDesc,
      shoePrice,
      shoeSSize,
      shoeMSize,
      shoeLSize,
    };
    cartCtx.addItem(obj);
    setShoeName("");
    setShoeDesc("");
    setShoePrice("");
    setSShoe("");
    setMShoe("");
    setLShoe("");
  };
  return (
    <Fragment>
      <Row className="flex justify-content-center mt-4">
        <Col lg={11} className="border border-3 border-secondary py-5 ">
          <Form onSubmit={addItemHandler}>
            <Row className="border border-3 border-secondary">
              <Col lg={2} className="mx-1">
                <label>Shoe Name</label>
                <input
                  type="text"
                  onChange={displayShoeName}
                  value={shoeName}
                />
              </Col>
              <Col lg={2} className="mx-1">
                <label>Description</label>
                <input
                  type="text"
                  onChange={displayDescription}
                  value={shoeDesc}
                />
              </Col>
              <Col lg={1} className="mx-1">
                <label>Price</label>
                <input type="text" onChange={displayPrice} value={shoePrice} />
              </Col>
              <Col lg={1} className="mx-1">
                <label>S</label>
                <input type="text" onChange={displaySsize} value={shoeSSize} />
              </Col>
              <Col lg={1} className="mx-1">
                <label>M</label>
                <input type="text" onChange={displayMsize} value={shoeMSize} />
              </Col>
              <Col lg={1} className="mx-1">
                <label>L</label>
                <input type="text" onChange={displayLsize} value={shoeLSize} />
              </Col>
              <Col lg={2} className="d-flex align-items-end">
                <Button type="submit" style={{ marginTop: "10px" }}>
                  Add Item
                </Button>
                {/* Added inline style for margin-top */}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddItems;
