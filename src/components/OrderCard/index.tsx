import { Link } from 'react-router-dom';
import type { Order } from '../../data/orders';
import { onImageError } from '../../utils/images';
import './styles.css';

const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

export default function OrderCard({ order }: { order: Order }) {
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <article className="order">
      <header className="order__head">
        <div>
          <h2>Pedido #{order.id}</h2>
          <p>Realizado em {order.date}</p>
        </div>
        <span className={`order__status order__status--${slug(order.status)}`}>{order.status}</span>
      </header>

      <ul className="order__items">
        {order.items.map((item) => (
          <li key={`${item.productId}-${item.size}`}>
            <img
              src={item.image}
              alt={item.name}
              width={72}
              height={72}
              onError={(e) => onImageError(e, '/product-thumb-1.jpeg')}
            />
            <div>
              <Link to={`/product/${item.productId}`}>{item.name}</Link>
              <p>Tamanho {item.size} · Qtd {item.quantity}</p>
            </div>
            <strong>{brl(item.price * item.quantity)}</strong>
          </li>
        ))}
      </ul>

      <footer className="order__foot">
        <span>Total do pedido</span>
        <strong>{brl(total)}</strong>
      </footer>
    </article>
  );
}
