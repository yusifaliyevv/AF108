import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand fw-bold" to="/">Logo</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
