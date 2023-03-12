const ProductCard = (props) => {
  const saludar = () => {
    console.log("hola");
  };

  let { title, price } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};

export default ProductCard;
