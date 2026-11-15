import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import OrderCard from '../../components/OrderCard';
import { orders } from '../../data/orders';
import type { Order } from '../../data/orders';
import './styles.css';

type Tab = 'todos' | 'andamento' | 'entregues';

const tabs: { id: Tab; label: string; match: (o: Order) => boolean }[] = [
  { id: 'todos', label: 'Todos', match: () => true },
  { id: 'andamento', label: 'Em andamento', match: (o) => o.status === 'Processando' || o.status === 'Em transporte' },
  { id: 'entregues', label: 'Entregues', match: (o) => o.status === 'Entregue' },
];

export default function OrdersPage() {
  const [tab, setTab] = useState<Tab>('todos');
  const active = tabs.find((t) => t.id === tab) ?? tabs[0];
  const list = orders.filter(active.match);

  return (
    <Layout>
      <div className="container">
        <Section title="Meus Pedidos" titleAlign="left">
          <div className="orders__tabs" role="tablist">
            {tabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? 'is-active' : ''} onClick={() => setTab(t.id)}>
                {t.label} ({orders.filter(t.match).length})
              </button>
            ))}
          </div>

          {list.length ? (
            <div className="orders__list">{list.map((o) => <OrderCard key={o.id} order={o} />)}</div>
          ) : (
            <div className="orders__empty">
              <p>Você ainda não tem pedidos aqui.</p>
              <Link to="/produtos">Ver produtos</Link>
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
}
