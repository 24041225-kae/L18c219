import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const cls = ({ isActive }) => (isActive ? 'nav-active' : null);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src='/republic-polytechnic.png' alt="RP logo" title="SOI | Home" />
      </Link>

      <nav>
        <NavLink to="/" className={cls}>Home</NavLink>
        <NavLink to="/about" className={cls}>About</NavLink>
        <NavLink to="/diplomas" className={cls}>Diplomas</NavLink>
        <NavLink to="/register" className={cls}>Register</NavLink>
      </nav>
    </header>
  );
}