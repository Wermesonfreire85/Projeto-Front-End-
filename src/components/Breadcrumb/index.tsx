import { Link } from 'react-router-dom';
import './styles.css';

export interface Crumb { label: string; to?: string }

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Caminho da página">
      {items.map((c, i) => (
        <span key={c.label}>
          {c.to ? <Link to={c.to}>{c.label}</Link> : <strong>{c.label}</strong>}
          {i < items.length - 1 && <i> / </i>}
        </span>
      ))}
    </nav>
  );
}
