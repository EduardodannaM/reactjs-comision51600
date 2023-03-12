import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/Cart">
      <div className="container-cart">
        <FiShoppingCart size={25} />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
