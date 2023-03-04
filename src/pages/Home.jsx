import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButtom";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import {mockTheme1Produdcts, mockTheme2Produdcts} from "../data/mockData";
import {useEffect, useState} from "react";

const Home = () => {
  //다시 렌더링(UI를 그린다)되는 조건 값(state)
  const [products, setProducts] = useState();

  //조건에 의해서 실행되는 함수
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Produdcts);
    }, 1000);
  }, []);

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (mockTheme2Produdcts === 2) {
      setProducts(mockTheme2Produdcts);
    }
  };

  return (
    <div>
      <div>
        <Navigation backStat={"none"} />
        <ThemeSection>
          <ThemeButton
            themeName={"#겨울방한템"}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            themeName={"#여름더워요"}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>
        <GrayLine />
      </div>

      <ProductSection>
        {/* mockData list를 화면에 노출하자 */}
        {/* {age<10? <div>당신은 "어린이"</div>: <div>당신은 "어른" </div>} */}

        {/* 삼항연산자 */}
        {products ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))
        ) : (
          <div>테마를 선택해주세요</div>
        )}
        {/* <ProductCard
          name={"비숑 블랙 머그잔"}
          discription={
            "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
          }
          thumbnail={
            "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product1.jpg"
          }
        />
        <ProductCard
          name={"가열 보온 티코스터 온열 원터치 컵 받침대"}
          discription={
            "언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."
          }
          thumbnail={
            "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product3.jpg"
          }
        />
        <ProductCard
          name={"벨루즈까사 솜사탕 파스텔 머그 4종 세트"}
          discription={
            "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그"
          }
          thumbnail={
            "https://raw.githubusercontent.com/congchu/comento-shop-server/master/assets/images/product2.jpg"
          }
        /> */}
      </ProductSection>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px;
  align-content: center;
`;

const GrayLine = styled.div`
  height: 8px;
  /* width: 100%; */
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;
