import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import './styles.css';

export default function CategoryList() {
  return (
    <ul className="categories">
      {categories.map((c, i) => (
        <li key={c.label}>
          <Link to={`/produtos?filter=${encodeURIComponent(c.filter)}`} className={i === 0 ? 'is-active' : ''}>
            <span className="categories__icon">{c.icon}</span>
            <span className="categories__label">{c.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
