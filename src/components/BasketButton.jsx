import styled from "styled-components";

const BasketButton = ({use}) => {
  return (
    <BottumFixed>
      <ButtonStyled>{use}</ButtonStyled>;
    </BottumFixed>
  );
};

const BottumFixed = styled.div`
  position: fixed;
  bottom: 0;
`;

const ButtonStyled = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-weight: 700;
  height: 70px;
  width: 390px;
  left: 0px;
  top: 0px;
  background: #24dbaf;
`;

export default BasketButton;
