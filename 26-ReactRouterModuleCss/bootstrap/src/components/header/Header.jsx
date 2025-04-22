
import navbarStyle from "./Header.module.css";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className={navbarStyle.header}>
      <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
        <div className={navbarStyle.logo}>Start Bootstrap</div>
        <nav className={navbarStyle.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
