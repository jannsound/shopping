// import DetailPic from "../components/DetailPic";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Navigation from "../components/Navigation";
// import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import Review from "../components/Review";
import {getProductDetail, mockReviews} from "../data/mockData";
// import BasketButton from "../components/BasketButton";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let {productId} = useParams();
  const [product, setProduct] = useState();
  const [activeMenuTab, setActiveMenuTab] = useState("description");

  useEffect(() => {
    const response = getProductDetail(productId);
    setProduct(response);
  }, []);

  const onClickMenuTab = (menuTabName) => {
    setActiveMenuTab(menuTabName);
  };
  return (
    <Container>
      <Navigation />
      {product && (
        <main>
          <MainImage
            style={{
              backgroundImage: `url(${product.thumbnail})`,
            }}
          />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.price}원</ProductDescription>

          <MenuTabs>
            <MenuTab
              active={activeMenuTab === "description"}
              onClick={() => onClickMenuTab("description")}
            >
              상품 설명
            </MenuTab>
            <MenuTab
              active={activeMenuTab === "review"}
              onClick={() => onClickMenuTab("review")}
            >
              상품 후기
            </MenuTab>
          </MenuTabs>
          {activeMenuTab === "description" && (
            <ProductDetailImage src={product.mainImage} alt="사진 설명" />
          )}

          {activeMenuTab === "review" && (
            <div>
              {mockReviews.map((review) => (
                <Review
                  key={review.id}
                  profileImage={review.profileImage}
                  username={review.username}
                  score={review.score}
                  createdDate={review.createdDate}
                  reviewText={review.reviewText}
                />
              ))}
            </div>
          )}
        </main>
      )}
      <BasketButton>장바구니</BasketButton>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div``;
const MainImage = styled.div`
  width: 100%;
  height: 420px;
  background-size: cover;
  background-position: center;
  margin-bottom: 24px;
`;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 8px;
`;

const ProductDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.86);
  padding-bottom: 24px;
`;

const MenuTabs = styled.div`
  display: flex;
`;
const MenuTab = styled.div`
  flex: 1;
  padding: 14px;
  border: solid 1px #eeeeee;
  text-align: center;
  background-color: ${(props) => props.active && "#eeeeee"};
`;

const ProductDetailImage = styled.img`
  width: 100%;
  margin: 20px 0 80px;
`;

const BasketButton = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0px;
  background-color: #24dbaf;

  display: flex;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
{
  /* <div>
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
 */
}
