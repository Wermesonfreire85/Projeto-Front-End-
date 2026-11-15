import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import { products, type Product } from '../../data/products';

import './styles.css';

export default function ProductListingPage() {
  const [params] = useSearchParams();
  const filter = (params.get('filter') || '').toLowerCase();
  const [order, setOrder] = useState('');

  const list = useMemo(() => {
    const result = products.filter((p) => `${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(filter));
    const final = (p: Product) => p.priceDiscount ?? p.price;
    if (order === 'asc') result.sort((a, b) => final(a) - final(b));
    if (order === 'desc') result.sort((a, b) => final(b) - final(a));
    return result;
  }, [filter, order]);

  return (
    <Layout>
      <div className="container listing-page">
        <aside>
          <label className="listing-page__sort">
            Ordenar por
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </label>
          <div className="listing-page__filters">
            <h3>Filtrar por</h3>
            <hr />
            <FilterGroup title="Marca" inputType="checkbox" options={[{ text: 'Adidas' }, { text: 'K-Swiss' }, { text: 'Nike' }, { text: 'Puma' }]} />
            <FilterGroup title="Categoria" inputType="checkbox" options={[{ text: 'Camisetas' }, { text: 'Calças' }, { text: 'Tênis' }]} />
            <FilterGroup title="Gênero" inputType="checkbox" options={[{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' }]} />
            <FilterGroup title="Estado" inputType="radio" options={[{ text: 'Novo' }, { text: 'Usado' }]} />
          </div>
        </aside>
        <Section title={`${list.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={list} />
        </Section>
      </div>
    </Layout>
  );
}
