import styled from "styled-components";

const ProductCard = ({width = 341, thumbnail, name, discription}) => {
  return (
    <div>
      <img width={width} src={thumbnail} alt={name} />
      <NameStyled>{name}</NameStyled>
      <Detail>{discription}</Detail>
    </div>
  );
};

const NameStyled = styled.div`
  margin-top: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
`;

const Detail = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
  width: 310px;
  height: 40px;
`;

export default ProductCard;
