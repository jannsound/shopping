const ProductCard = ({name, discription, thumbnail}) => {
  return (
    <div>
      <img width={341} src={thumbnail} alt={name} />
      <div>{name}</div>
      <div>{discription}</div>
    </div>
  );
};

export default ProductCard;
