import type { Product } from '../../data/products';
import ProductCard from '../ProductCard';
import './styles.css';

export default function ProductListing({ products = [] }: { products?: Product[] }) {
  if (!products.length) return <p>Nenhum produto encontrado.</p>;
  return (
    <div className="listing">
      {products.map((p) => <ProductCard key={p.id ?? p.name} {...p} />)}
    </div>
  );
}
