import Nav from "./Nav";
import logo from "../img/logo.png";

function Logo() {
  return (
    <div className="text-2xl flex items-center ">
      <img src={logo} alt="Logo" />
      <p>FromBoard Delivery</p>
    </div>
  );
}

export default Logo;
