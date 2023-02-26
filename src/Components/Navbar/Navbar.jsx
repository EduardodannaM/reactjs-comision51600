import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <img
        src="https://res.cloudinary.com/dmczguof4/image/upload/v1677375257/LogoLitta_jtvbvy.png"
        alt=""
      />
      <ul className="containerMenuList">
        <li>
          <a href="Navbar">
            <h2>Lentes de Sol</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes RayBan</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes Oakley</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes Costa</h2>
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
