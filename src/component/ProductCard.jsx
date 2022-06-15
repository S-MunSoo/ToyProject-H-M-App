import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  // 새로운 페이지 이동 Navigate
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/Product/${item.id}`);
  };

  return (
    <div className="ProductList" onClick={showDetail}>
      <img src={item && item.img} />
      <div>{item && item.choice === true ? "MD Pick" : ""}</div>
      <div>{item && item.title}</div>
      <div>{item && item.price}</div>
      <div>{item && item.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
