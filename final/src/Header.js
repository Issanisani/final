import Logo from "./assets/Logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;