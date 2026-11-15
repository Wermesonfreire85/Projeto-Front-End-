import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import { categories } from '../../data/categories';
import './styles.css';

export default function CategoriesPage() {
  return (
    <Layout>
      <div className="container">
        <Section title="Categorias" titleAlign="left">
          <ul className="categories-page">
            {categories.map((c) => (
              <li key={c.label}>
                <Link to={`/produtos?filter=${encodeURIComponent(c.filter)}`}>
                  <span className="categories-page__icon">{c.icon}</span>
                  <h3>{c.label}</h3>
                  <span className="categories-page__link">Ver produtos →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
