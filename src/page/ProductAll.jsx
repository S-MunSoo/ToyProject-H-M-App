import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom"; // useSearchParams API URL 쿼리값 읽어오기

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); // useSearchParams API URL 쿼리값 읽어오기

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    let url = ` https://my-json-server.typicode.com/S-MunSoo/ToyProject-H-M-App/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data???", data);
    setProductList(data);
  };

  // 상품 API 호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
