import Logo from "./assets/Logo.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />

      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
        </ul>
      </div>

      <p>© 2026 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;