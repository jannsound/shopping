import DetailPic from "../components/DetailPic";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import BasketButton from "../components/BasketButton";
import {useState} from "react";
import {Link} from "react-router-dom";

const ProductDetail = () => {
  return (
    <div>
      <Navigation />
      <ProductCard
        width={390}
        thumbnail={
          "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product1.jpg"
        }
        name={"비숑 블랙 머그잔"}
        discription={"21,800원"}
      />

      <div>
        <GrayLine />
        <LeftSection>상품 설명</LeftSection>
        <RightSection>상품 후기</RightSection>
        <GrayLine />
      </div>
      <DetailPic
        picture={
          "https://github.com/congchu/comento-shop-server/blob/master/assets/images/product1_detail.jpeg?raw=true"
        }
        name={"비숑블랙머그잔 상세"}
      />

      <BasketButton use={"장바구니"} />
    </div>
  );
};

const GrayLine = styled.div`
  width: 400px;
  height: 1px;
  top: 63px;

  background: #eeeeee;
`;

const LeftSection = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 195px;
  height: 48px;
  left: 0%;
  right: 50%;
  top: 0%;
  background: #eeeeee;
`;

const RightSection = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 195px;
  height: 48px;
  left: 50%;
  right: 0%;
  top: 0%;
`;

export default ProductDetail;
