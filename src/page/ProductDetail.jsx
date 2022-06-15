import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProudctDetail = async () => {
    let url = `https://my-json-server.typicode.com/S-MunSoo/ToyProject-H-M-App/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("디테일data?", data);
    setProduct(data);
  };

  useEffect(() => {
    getProudctDetail();
  }, []);

  return (
    <Container className="ProductDetailList">
      <Row>
        <Col className="product-img">
          <img src={product && product.img} alt="" />
        </Col>
        <Col>
          <div>{product && product.title}</div>
          <div>￦ {product && product.price}</div>
          <div>{product && product.choice === true ? "MD Pick" : ""}</div>
        </Col>
        <Dropdown className="drop-down">
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            사이즈 선택
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {product?.size.length > 0 &&
              product.size.map((item) => (
                <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="dark" className="add-button">
          추가
        </Button>
      </Row>
    </Container>
  );
};

export default ProductDetail;
