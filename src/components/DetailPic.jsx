import styled from "styled-components";

const DetailPic = ({picture, name}) => {
  return (
    <div>
      <PicStyled>
        <img width={342} src={picture} alt={name} />
      </PicStyled>
    </div>
  );
};

const PicStyled = styled.div`
  padding: 25px 24px;
  margin-bottom: 9 0px;
`;

export default DetailPic;
