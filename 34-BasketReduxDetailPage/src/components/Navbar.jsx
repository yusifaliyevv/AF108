import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { basketItems } = useSelector(state => state.basket);
  const count = basketItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Logo</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/basket">Basket ({count})</Link>
      </div>
    </nav>
  );
}
