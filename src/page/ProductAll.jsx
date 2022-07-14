import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom"; // useSearchParams API URL 쿼리값 읽어오기
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // useSelector 로 데이터를 가져와 state 대신 사용한다.
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams(); // useSearchParams API URL 쿼리값 읽어오기
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
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
