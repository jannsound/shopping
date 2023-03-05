import styled from "styled-components";

const Navigation = ({backStat}) => {
  return (
    <div>
      <Back display={backStat} />
      <NameStyled>janns-shop</NameStyled>
      <NavGrayLine />
    </div>
  );
};

const Back = styled.div`
  position: absolute;
  margin: 25px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  transform: rotate(-45deg);

  display: ${(a) => a.display || "block"};
`;

const NameStyled = styled.div`
  text-align: center;
  padding: 20px 100px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

const NavGrayLine = styled.div`
  background: #eeeeee;
  /* width: 100%; */
  height: 1px;
`;

export default Navigation;
