import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import miniCart from '../../assets/mini-cart.svg';
import './styles.css';

const links = [
  { to: '/', text: 'Home', end: true },
  { to: '/produtos', text: 'Produtos' },
  { to: '/categorias', text: 'Categorias' },
  { to: '/pedidos', text: 'Meus Pedidos' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const search = () => navigate(`/products?filter=${encodeURIComponent(query.trim())}`);

  return (
    <header className="header">
      <div className="container header__top">
        <Link to="/"><Logo /></Link>

        <div className="header__search">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && search()}
          />
          <button type="button" aria-label="Pesquisar" onClick={search}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
        </div>

        <div className="header__actions">
          <Link to="/cadastro" className="header__signup">Cadastre-se</Link>
          <Link to="/login" className="header__login">Entrar</Link>
          <span className="header__cart"><img src={miniCart} alt="Carrinho" /><b>2</b></span>
        </div>
      </div>

      <nav className="container header__nav">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            {l.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
